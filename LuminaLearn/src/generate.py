import nltk
import PyPDF2
from transformers import pipeline
from nltk.tokenize import sent_tokenize

# Download the 'punkt' tokenizer models
nltk.download('punkt')
nltk.download('punkt_tab')

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text()
    return text

pdf_text = extract_text_from_pdf('urban.pdf')

# Load the question generation pipeline with a publicly available model
question_generator = pipeline("text2text-generation", model="t5-small")

# Tokenize the text into sentences
def extract_key_sentences(text):
    sentences = sent_tokenize(text)
    key_sentences = sentences[:10]  # Take first 10 sentences for simplicity
    return key_sentences

# Generate questions from key sentences
def generate_questions_from_sentences(sentences):
    questions = []
    for sentence in sentences:
        generated_questions = question_generator(sentence)
        for question in generated_questions:
            questions.append(question['generated_text'])  # Adjust based on output format
    return questions

key_sentences = extract_key_sentences(pdf_text)
questions = generate_questions_from_sentences(key_sentences)

def save_questions_to_js(questions, js_file):
    with open(js_file, 'w') as f:
        f.write("const questions = [\n")
        for question in questions:
            f.write(f"  '{question}',\n")
        f.write("];\n\n")
        f.write("export default questions;\n")

save_questions_to_js(questions, 'quiz.js')

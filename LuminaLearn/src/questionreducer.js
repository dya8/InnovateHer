// reducers/questions.js
const initialState = {
    queue: [], // Array of questions
    trace: 0 // Current question index
};

export default function questionsReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVE_NEXT_QUESTION':
            return {
                ...state,
                trace: state.trace + 1
            };
        case 'MOVE_PREV_QUESTION':
            return {
                ...state,
                trace: state.trace - 1
            };
        default:
            return state;
    }
}



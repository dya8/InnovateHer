import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import '../src/Login.css'; // Ensure this path is correct

export default function QuizIntro() {
  const navigate = useNavigate();

  const getclick = () => {
    //window.open("public/urban pol.pdf", "_blank", "noopener noreferrer");
  };

  const getclick1 = () => {
   // window.open("/files/urban_pol.pdf", "_blank", "noopener noreferrer");
  };

  const getclick2 = () => {
   // window.open("/files/urban_pol.pdf", "_blank", "noopener noreferrer");
  };

  return (
    <>
      <div className="Quiz">
        <div className="one" id="General Knowledge">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/src/assets/n1.jpg"
              title="Is Your Town on the Rise? Kerala's New Plan Could Be the Game Changer!"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                General Knowledge
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "Is Your Town on the Rise? Kerala's New Plan Could Be the Game Changer!"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={getclick}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="two" id="CyberAwareness">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/src/assets/n2.jpg"
              title="The Future of Farming: Kerala's High-Tech Agricultural Revolution"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cyber Awareness
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "The Future of Farming: Kerala's High-Tech Agricultural Revolution"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={getclick1}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="three" id="Agriculture">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/src/assets/n3.jpg"
              title="Farmers Rejoice: Major Loan Relief and Incentives!"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Agriculture
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "Farmers Rejoice: Major Loan Relief and Incentives!"
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={getclick2}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

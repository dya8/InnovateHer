import {Link ,useLocation,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';
import '../src/Login.css';


export  default function QuizIntro() 
{
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  const getclick = () => {
    // You can pass state or parameters here if needed
    navigate("/quiz"); // Navigate to the profile page
  };
  const getclick1 = () => {
    // You can pass state or parameters here if needed
    navigate("/quiz"); // Navigate to the profile page
  };
  const getclick2= () => {
    // You can pass state or parameters here if needed
    navigate("/quiz"); // Navigate to the profile page
  };
   
     return(
        <>
        <div className ="Quiz">
        <div className="one" id="General Knowledge">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Agriculture Quiz
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={getclick}>Play</Button>
      </CardActions>
    </Card>
    </div>
    <div className="two" id="CyberAwarness">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      
        </Typography>
        <Typography variant="body2" color="text.secondary">
         CyberQuiz
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small"onClick={getclick1}>Play</Button>
      </CardActions>
    </Card>
    </div>
    <div className="three" id="Agriculture">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Urban Policy Quiz
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small"onClick={getclick2}>Play</Button>
      </CardActions>
    </Card>
</div>
     </div>
     </>
    )
}
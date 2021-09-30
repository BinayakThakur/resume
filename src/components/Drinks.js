import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ minHeight: 200,width:325 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"white"}}>
          Drinks Maker
        </Typography>
        <Typography variant="body2">
        A fun little project based upon Spring
Core, Spring MVC,this project is based upon
calling public api and
is deployed live on Herokuapp.
        </Typography>
      </CardContent>
      <CardActions>
       <a href="http://koktail.herokuapp.com/" target="_blank" className="ms-4"><Button variant="contained" className="ms-5">Check it out</Button></a>
      </CardActions>
    </Card>
  );
}
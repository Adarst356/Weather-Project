
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
  
  let INIT_URL="https://media.istockphoto.com/id/589538028/photo/manali-town.jpg?s=2048x2048&w=is&k=20&c=16NUhEO0f1m0danaOsxRIU4x9iCHshjT2keQtxJ6zJ0=";
return (
  <div style={{display:"flex", justifyContent:"center"}}>
    <Card sx={{ maxWidth: 345 }} style={{marginTop:"30px", textAlign:"center"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       <h3>Weather-{info.weather}</h3>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
       Temprature= {info.temp}&deg;C
       <br></br>
       Min Temp= {info.tempMin}&deg;C
       <br></br>
       Max Temp= {info.tempMax}&deg;C
       <br></br>
       Humidity ={info.humidity}
       <h2>Weather -{info.weather}</h2>
       <br></br>
       The weather feelsLike is very happy= {info.feelsLike}&deg;C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  </div>
)
}
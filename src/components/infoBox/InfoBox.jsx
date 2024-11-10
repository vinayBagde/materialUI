import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox() {
  const INL_URL =
    "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let info = {
    city: "Delhi",
    feels_like: 24.42,
    humidity: 73,
    temp: 24.05,
    tempMax: 24.05,
    tempMin: 24.05,
    weather: "haze",
  };
  return (
    <div className="className">
      <h1>Weather Info - {info.weather}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INL_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temptrature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min temp = {info.tempMin}&deg;C</p>
            <p>Max temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> & feels like{" "}
              {info.feels_like}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

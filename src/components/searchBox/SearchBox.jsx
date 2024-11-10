import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox() {
  let [city, setCity] = useState("");
  const API_url = "https://api.openweathermap.org/data/2.5/weather";

  const API_Key = "df83a9107b7946fc310020cc6f9f6e84";

  let getWeatherInfo = async (city) => {
    let response = await fetch(
      `${API_url}?q=${city}&appid=${API_Key}&units=metric`
    );
    let jsonResponse = await response.json();
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feels_like: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    console.log(city);
    setCity("");
    getWeatherInfo(city);
  };
  return (
    <div className="searchBox">
      <h3>search for the weather</h3>
      <form action="./action" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

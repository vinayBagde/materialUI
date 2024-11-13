import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_url = "https://api.openweathermap.org/data/2.5/weather";

  const API_Key = "df83a9107b7946fc310020cc6f9f6e84";

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${API_url}?q=${city}&appid=${API_Key}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      console.log(city);
      console.log(newInfo);
      setError(false);
    } catch (err) {
        setError(true);
    }
  };
  return (
    <div className="searchBox">
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
        {error && <p style={{color: "red", fontWeight: "900"}}>No such place exists!</p>}
      </form>
    </div>
  );
}

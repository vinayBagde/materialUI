import "./SearchBox.css";
import {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox() {

    let [city, setCity] = useState("");
    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
    }
  return (
    <div className="searchBox" onSubmit={handleSubmit}>
      <h3>search for the weather</h3>
      <form action="./action">
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

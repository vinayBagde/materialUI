// import "./App.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from "@mui/material/Alert";

export default function App() {

  let handleClick = () => {
    console.log("button was clicked");
  }
  return (
    <>
      <h1>Material UI demo</h1>
      <Button variant="contained" onClick={handleClick}>
        click me
      </Button>
      <Alert severity="error">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </>
  );
}

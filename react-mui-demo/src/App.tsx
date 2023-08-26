import "./App.css";
import { MuiButton } from "./components/MuiButton";
import { MuiTypography } from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      {/* This how we create buttons in MUI*/}
      <p>
        <h1>Button</h1>
      </p>
      <MuiButton />
      <hr></hr>

      {/* This how we do Typography in MUI*/}
      <p>
        <h1>Typography</h1>
      </p>
      <MuiTypography />
    </div>
  );
}

export default App;

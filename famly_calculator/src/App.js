import React, { useState } from "react";
import "./App.css"; // Hier fügst du deinen CSS-Stil hinzu
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FamlyNavbar from "./components/FamlyNavbar";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";

const NavigationBar = () => (
  <nav className="nav">
    <img src="famly_logo.png" alt="Logo" className="logo" height="60" />
  </nav>
);

// Hauptkomponente
const App = () => {
  const [slider1, setSlider1] = useState(50);
  const [slider2, setSlider2] = useState(50);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      // Nur Zahlen zulassen
      setInputValue(value);
    }
  };

  const sum = slider1 + slider2 + (parseInt(inputValue) || 0);
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div>
      <FamlyNavbar />
      <div>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Big steps"
            defaultValue={1}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={1}
            max={100}
            valueLabelDisplay="on"
          />
        </Box>
        {/* <Slider label="Slider 1" value={slider1} onChange={setSlider1} />
      <Slider label="Slider 2" value={slider2} onChange={setSlider2} /> */}
        <label>
          Input (nur Zahlen):
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
      </div>
      <div className="result">Summe: {sum}</div>
    </div>
  );
};
// Slider Komponente
// const Slider = ({ label, value, onChange }) => (
//   <label>
//     {label}:
//     <input
//       type="range"
//       min="1"
//       max="100"
//       value={value}
//       onChange={(e) => onChange(Number(e.target.value))}
//     />
//   </label>
// );

export default App;

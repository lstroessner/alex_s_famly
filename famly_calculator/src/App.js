import React, { useState } from 'react';
import './App.css'; // Hier fügst du deinen CSS-Stil hinzu
const NavigationBar = () => (
  <nav className='nav'>
    <img src="/path/to/logo.png" alt="Logo" className='logo' />
  </nav>
);




// Hauptkomponente
const App = () => {
  const [slider1, setSlider1] = useState(50);
  const [slider2, setSlider2] = useState(50);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) { // Nur Zahlen zulassen
      setInputValue(value);
    }
  };

  const sum = slider1 + slider2 + (parseInt(inputValue) || 0);

  return (
    <div className='container'>
      <NavigationBar />
      <div className='slider-container'>
      <Slider label="Slider 1" value={slider1} onChange={setSlider1} />
      <Slider label="Slider 2" value={slider2} onChange={setSlider2} />
        <label>
          Input (nur Zahlen):
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className='result'>
        Summe: {sum}
      </div>
    </div>
  );
};
// Slider Komponente
const Slider = ({ label, value, onChange }) => (
  <label>
    {label}:
    <input
      type="range"
      min="1"
      max="100"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </label>
);

export default App;


import React, { useState } from "react";
import './styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <h1>Toggle Button</h1>
        <p>Click the button to switch between light and dark mode</p>
        <button onClick={toggleMode}>Toggle</button>
      </div>
    </div>
  );
}

export default App;

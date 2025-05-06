import React from "react";
import "./DarkMode.css";
import Sun from '/src/assets/Sun.svg?react'; // Added ?react
import Moon from '/src/assets/Moon.svg?react'; // Added ?react

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("selectedTheme") || "dark"
  );

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun className="theme-icon" />
        <Moon className="theme-icon" />
      </label>
    </div>
  );
};

export default DarkMode;
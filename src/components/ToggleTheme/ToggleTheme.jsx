import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext/ThemeContext";

export default function ToggleTheme() {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      <button onClick={themeContext.toggleTheme}>ToggleTheme</button>
    </div>
  );
}

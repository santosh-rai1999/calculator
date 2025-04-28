import React from "react";
import { useState } from "react";
import "./Style.css";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, settextColor] = useState("#1b1b1b");
  const [buttonStyle, setbuttonStyle] = useState("white");
  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    settextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setbuttonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1 className="flex text-center justify-around">"The future belongs to those who believe in the beauty of their dreams."</h1>
      </section>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Display(props) {
  return <div className="display">{props.value}</div>;
}

function CalcButton(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
    >
      {props.value}
    </button>
  );
}

function Calculator() {
  const [bieuthuc, setBieuthuc] = useState("");

  function bamNut(value) {
    if (value === "C") {
      setBieuthuc("");
    } else if (value === "=") {
      try {
        setBieuthuc(String(eval(bieuthuc)));
      } catch {
        setBieuthuc("Lỗi");
      }
    } else {
      if (bieuthuc === "Lỗi") {
        setBieuthuc(value);
      } else {
        setBieuthuc(bieuthuc + value);
      }
    }
  }

  const nuts = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <div className="calculator">
      <h2>Máy tính đơn giản</h2>

      <Display value={bieuthuc || "0"} />

      <div className="buttons">
        {nuts.map((nut, index) => (
          <CalcButton
            key={index}
            value={nut}
            color={nut === "=" ? "lightblue" : "lightgreen"}
            onClick={() => bamNut(nut)}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return <Calculator />;
}

const style = document.createElement("style");
style.innerHTML = `
  body {
    font-family: Arial;
    background-color: #f2f2f2;
  }

  .calculator {
    width: 230px;
    margin: 50px auto;
    background-color: white;
    padding: 15px;
  }

  .display {
    height: 40px;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 8px;
    text-align: right;
    font-size: 20px;
    box-sizing: border-box;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  button {
    height: 40px;
    border: 1px solid gray;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);

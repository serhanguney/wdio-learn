import React from "react";
import "./App.css";
const App = () => {
  const clinics = [
    "New York",
    "Berlin",
    "Koln",
    "Prague",
    "Amsterdam",
    "London",
  ];
  return (
    <div>
      <h1 className="title">Hello world</h1>
      <ul>
        {clinics.map((clinic, index) => (
          <li key={index}>{clinic}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

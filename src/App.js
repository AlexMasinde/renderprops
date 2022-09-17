import React, { useState } from "react";

function Input({ render }) {
  const [value, setValue] = useState("");
  const valueToUse = value.trim() === "" ? 0 : parseFloat(value);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {render(valueToUse)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Input
        render={(valueToUse) => (
          <>
            <Kelvin value={valueToUse} />
            <Fahrenheit value={valueToUse} />
          </>
        )}
      />
    </div>
  );
}

function Kelvin({ value = 0 }) {
  return <div>{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div>{(value * 9) / 5 + 32}°F</div>;
}

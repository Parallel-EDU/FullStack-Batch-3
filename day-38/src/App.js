import "./App.css";
import CelsiusInput from "./celsius";
import FarhenheitInput from "./farhenheit";
import { useState } from "react";
import ProfileCard from "./props";

function App() {
  const [temperature, setTemperature] = useState("");

  const handleCelsiusChange = (value) => {
    setTemperature(value);
  };
  const handleFarhenheitChange = (value) => {
    setTemperature(value);
  };
  
  return (
    <div>
      <CelsiusInput
        temperature={temperature}
        onTemperatureChange={handleCelsiusChange}
      />
      <FarhenheitInput
        temperature={temperature}
        onTemperatureChange={handleFarhenheitChange}
      />
      <ProfileCard name ='John' age={25} isActive/>
      <ProfileCard name ='Smith' age={30}/>
    </div>
  );
}

export default App;

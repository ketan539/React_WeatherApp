import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import WeatherDetails from './components/WeatherDetails';
function App(props) {


  const [mode, setmode] = useState('light')
 

  const togglemode = () => {
    if (mode === "light") {
      setmode('dark');
      document.body.style.backgroundColor = 'black'
     
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }


  }

  return (
    <div className="App">
      <Navbar togglemode={togglemode} mode={mode} />
    
      <WeatherDetails />
    </div>
  );
}

export default App;

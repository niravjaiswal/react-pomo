import './App.css';
import Timer from "./Timer";
import {useState} from "react";
import SettingsContext from "./SettingsContext";

function App() {

  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main className='pomo-timer'>
      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        <Timer />
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
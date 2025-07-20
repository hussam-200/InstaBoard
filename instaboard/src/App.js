import { useState } from 'react';

import UserList from './components/UserList/UserList';

import './App.css';

function App() {
  const [Mode, setMode] = useState("white");

  function changeMode() {
    if(Mode==="white"){
      setMode("black")
    }
    else{
      setMode("white")
    }
  }

  return (
    <div style={{ backgroundColor: Mode, minHeight: "100vh" }}>
      <header>
        <p className="title">Insta Board</p>
        <div>
          <button onClick={changeMode} id="modeButton">
            🌓 Mode
          </button>
        </div>
      </header>

      <div id="root">
        <UserList mode={Mode} />
      </div>

      <footer>
        Hussam Ibrahim
      </footer>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from "react";

function App() {
  const handleClick = () => setCislo(cislo + 1);

  const [cislo, setCislo] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <h1 className="text-primary">Počítadlo</h1>
            <button className="btn-primary" onClick={handleClick}>
              Klikni na mě
            </button>
            <p className="text-secondary">{cislo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

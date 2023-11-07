import './App.css';
import { useState } from 'react';

import { convertToRoman } from './utility/romanNumber';

function App() {
  const [roman, setRoman] = useState('');

  const cc = (e) => {
    setRoman(convertToRoman(e.target.value));
  }

  return (
    <div className="App">
      <div className='Container'>
        <input type="text" onChange={cc} placeholder="Entrez un nombre" />
        <p>{roman}</p>
      </div>
    </div>
  );
}

export default App;

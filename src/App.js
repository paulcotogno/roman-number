import './App.css';
import { useState } from 'react';

import { convertToRoman } from './utility/romanNumber';
import { convertToNumber } from './utility/arabNumber';

function App() {
  const [romanConvert, setRomanConvert] = useState(true);

  const [roman, setRoman] = useState('');

  const [number, setNumber] = useState('');

  const romanConvertFn = (e) => {
    setRoman(convertToRoman(e.target.value));
  }

  const arabConvertFn = (e) => {
    setNumber(convertToNumber(e.target.value));
  } 

  return (
    <div className="App">
      <div className='Header'>
        <button className={`Header_btn ${!romanConvert && 'active'}`} onClick={_ => setRomanConvert(false)}>Roman to Arab</button>
        <button className={`Header_btn ${romanConvert && 'active'}`} onClick={_ => setRomanConvert(true)}>Arab to Roman</button>
      </div>
      <div className='Container'>
        {
          romanConvert ? 
          <>
            <input type="text" onChange={romanConvertFn} name='' placeholder="Entrez un nombre" />
            <p>{roman}</p>
          </>
          :
          <>
            <input type="text" onChange={arabConvertFn} placeholder="Entrez un nombre romain" />
            <p>{number}</p>
          </>
        }
      </div>
    </div>
  );
}

export default App;

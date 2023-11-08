import './App.css';
import { useState } from 'react';

import { convertToRoman } from './utility/romanNumber';

function App() {
  const [roman, setRoman] = useState('');

  const [number, setNumber] = useState('');

  const romanConvertFn = (e) => {
    setRoman(convertToRoman(e.target.value));
    setNumber('')
  }

  const arabConvertFn = (e) => {
    setNumber(convertToNumber(e.target.value));
    setRoman('')
  }

  const Background = () => {
    let value = romanConvert ? roman.data || '' : number.data || ''

    return (
      <div className='App_background'>
        <p>{value}</p>
      </div>
    )
  }

  const Result = ({data}) => {
    return (
      <>
      {
        data.error ?
        <p className='error'>ㅤ{data.message}ㅤ</p>
        : <p className='result'>ㅤ{data.data}ㅤ</p>
      }
      </>
    )
  }

  return (
    <div className="App">
      <Background />
      <div className='Header'>
        <button className={`Header_btn ${!romanConvert && 'active'}`} onClick={_ => setRomanConvert(false)}>Roman to Arab</button>
        <button className={`Header_btn ${romanConvert && 'active'}`} onClick={_ => setRomanConvert(true)}>Arab to Roman</button>
      </div>
      <div className='Container'>
        {
          romanConvert ? 
          <>
            <input type="text" onChange={romanConvertFn} name='roman' placeholder="Entrez un nombre" />
            <Result data={roman} />
          </>
          :
          <>
            <input type="text" onChange={arabConvertFn} name='number' placeholder="Entrez un nombre romain" />
            <Result data={number} />
          </>
        }
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 2023.10.4 주석처리 수정 후 코드 추가 7
  const [buttonColor, setButtonColor] = useState('red');
  const newColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
{/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/}

      

      {/* 2023.10.4 주석처리 수정 후 코드 추가 2 */}
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(newColor)}>change to {newColor}!</button>
    </div>
  );
}

export default App;

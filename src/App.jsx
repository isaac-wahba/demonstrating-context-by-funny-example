import logo from './logo.svg';
import './App.scss';
import LembiContextProvider from './context/LembiContextProvider';
import IncreaseHere from './components/IncreaseHere';
import DecreaseHere from './components/DecreaseHere';
import ShowHere from './components/ShowHere';
import WanaMaliYaLembi from './components/WanaMaliYaLembi';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => prev - 1);
  const counterObj = {
    count,
    increaseCount,
    decreaseCount,
  };
  return (
    <div className='App'>
      <LembiContextProvider value={counterObj}>
        <div className='controls-components'>
          <IncreaseHere />
          <DecreaseHere />
        </div>
        <div className='results-components'>
          <ShowHere />
          <WanaMaliYaLembi />
        </div>
      </LembiContextProvider>
    </div>
  );
}

export default App;

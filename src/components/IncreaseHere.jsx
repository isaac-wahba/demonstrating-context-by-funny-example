import { useContext, useRef } from 'react';
import { LembiContext } from '../context/LembiContextProvider';
function IncreaseHere() {
  const renderCounts = useRef(0);
  renderCounts.current = renderCounts.current + 1;

  const { increaseCount } = useContext(LembiContext);

  return (
    <div>
      <h1 className='increase-title-color'>Increase Component</h1>

      <h3>Render Times: {renderCounts.current} </h3>
      <button className='increase-button' onClick={increaseCount}>
        {' '}
        Increase Count (+){' '}
      </button>
    </div>
  );
}

export default IncreaseHere;

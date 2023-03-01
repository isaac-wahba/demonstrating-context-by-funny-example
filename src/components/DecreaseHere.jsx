import { useContext, useRef } from 'react';
import { LembiContext } from '../context/LembiContextProvider';

function DecreaseHere() {
  const renderCounts = useRef(0);
  renderCounts.current = renderCounts.current + 1;

  const { decreaseCount } = useContext(LembiContext);

  return (
    <div>
      <h1 className='decrease-title-color'>Decrease Component</h1>

      <h3>Render Times: {renderCounts.current} </h3>
      <button className='decrease-button' onClick={decreaseCount}>
        {' '}
        Decrease Count (-){' '}
      </button>
    </div>
  );
}

export default DecreaseHere;

import { useContext } from 'react';
import { LembiContext } from '../context/LembiContextProvider';
import AloIcon from '../assets/alo.jpg';

function ShowHere() {
  const { count } = useContext(LembiContext);

  return (
    <div className='listening-container'>
      <div className='listening'>
        <img alt='listening' className='listening-img' src={AloIcon} />
        <h3 className='counts-title-color'>Counts: {count}</h3>
      </div>
    </div>
  );
}

export default ShowHere;

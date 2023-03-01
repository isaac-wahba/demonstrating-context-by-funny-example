import { useContext, useRef } from 'react';
import AloIcon from '../assets/wanaMali.jpeg';

function WanaMaliYaLembi() {
  const renderCounts = useRef(0);
  renderCounts.current = renderCounts.current + 1;

  return (
    <div className='irrelevant-container'>
      <div className='irrelevant'>
        <img alt='irrelevant' className='irrelevant-img' src={AloIcon} />
        <h3 className='irrelevant-title-color'>
          Render Times: {renderCounts.current}
        </h3>
      </div>
    </div>
  );
}

export default WanaMaliYaLembi;

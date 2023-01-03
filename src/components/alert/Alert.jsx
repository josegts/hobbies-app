import { useEffect } from 'react';
import './styles.css';

export const Alert = ({ error='', onClearError }) => {
  if(!error) return null;

  useEffect(() => {
    if(error){
      setTimeout(() => {
        onClearError('')
      }, 2000)
    }
    return () => clearTimeout()
  }, [ error ])

  return (
    <div className='alert-error'>
      {error}
      <button onClick={() => onClearError('')}>X</button>
    </div>
  );
};

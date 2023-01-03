import './styles.css';

export const Alert = ({ error, onClearError }) => {
  if(!error) return null;
  return (
    <div className='alert-error'>
      {error}
      <button onClick={() => onClearError('')}>X</button>
    </div>
  );
};

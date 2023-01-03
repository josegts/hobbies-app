import { useState } from 'react';
import './styles.css';

export const Card = ({ title, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(title);
  return (
    <div className='card'>
      {isEditing ? (
        <input type='text' value={newValue} />
      ) : (
        <span>{title}</span>
      )}
      <div>
        <button onClick={() => onDelete(title)}>X</button>
        <button onClick={() => setIsEditing(!isEditing)}>Editar</button>
      </div>
    </div>
  );
};

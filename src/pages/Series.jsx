import { useEffect, useState } from 'react';
import { Added } from '../components/added/Added';
import { Alert } from '../components/alert/Alert';
import { Card } from '../components/card/Card';

export const Series = () => {
  //estado local
  const [error, setError] = useState('');
  const [serie, setSerie] = useState('');
  const [series, setSeries] = useState([
    'game of trones',
    'mr robot',
    'westworld'
  ]);

  const handleDelete = (serie) => {
    const nuevasSeries = series.filter((item) => item !== serie);
    setSeries([...nuevasSeries]);
  };

  const handleChangeAdded = (event) => {
    setError('');
    setSerie(event.target.value);
  };

  const handleAdded = () => {
    const existeSerie = series.find((item) => serie === item);
    if (existeSerie) {
      setError(`La serie ${serie} ya se encuentra registrado`);
      return;
    }
    setSeries([...series, serie]);
    setSerie('');
  };

  //APIs, controlar
  useEffect(()=>{
    console.log('se monto el componente')
    return () => {
      console.log("se desmonto el componente")
    }
  },[])

  useEffect(()=>{
    console.log("las series cambiaron")
  },[series])

  return (
    <div className='app-container'>
      <Alert error={error} onClearError={setError} />
      <Added
        serie={serie}
        onAdded={handleAdded}
        onChangeAdded={handleChangeAdded}
      />
      {series.map((item) => (
        <Card key={item} title={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

//Estados globales: Redux, Context API, MobX (nivel intermedio)
//Design patterns: Compound components + function children (nivel avanzado)

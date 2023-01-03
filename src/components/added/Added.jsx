import './styles.css'

export const Added = ({ serie, onChangeAdded, onAdded }) => {
  return (
    <div className='added'>
      <input placeholder="Agregar serie" value={serie} onChange={onChangeAdded}/>
      <button onClick={onAdded} disabled={!serie}>Agregar</button>
    </div>
  )
}

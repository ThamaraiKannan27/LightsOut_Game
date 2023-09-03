import './Cell.css';

const Cell = ({rowIndex,colIndex,toggleLights,isOn})=>
{
    const handleClick = ()=>toggleLights(rowIndex,colIndex)
return <button 
    onClick={handleClick}
    className={isOn?'on':'off'}
   >
</button>
}
export default Cell;
import { useState } from "react"
import './Board.css';
import Cell from "../../cell/Cell";
const Board = ({size}) =>{
    const createGrid = ()=>
        new Array(size)
            .fill()
            .map(r=>
                new Array(size)
                    .fill()
                    .map(c=>Math.random()<0.4)
                )
    const[board,setBoard] = useState(createGrid());
    const toggleLights = (row,col)=> {
        const copy = [...board.map(r=>[...r])]
        copy[row][col] = !copy[row][col]
        if(row < size-1)
            copy[row+1][col] = !copy[row+1][col]
        if(row> 0 )
            copy[row-1][col] = !copy[row-1][col]
        if(col<size-1)
            copy[row][col+1] = !copy[row][col+1]
        if(col>0)
        copy[row][col-1] = !copy[row][col-1]
        setBoard(copy)
    }
    const gameEnds = ()=> board.every(row=>row.every(cell =>!cell))
    return ( 
    <div className="Board">
        {gameEnds() ?<div className="won">You Won </div>:
        board.map((row,rowIndex) =>
        <div className="row" key= {rowIndex}>
            {row.map((cell,colIndex)=>(
            <Cell 
            key={`${rowIndex}-${colIndex}`} 
            isOn = {board[rowIndex][colIndex]} 
            rowIndex={rowIndex} colIndex={colIndex} 
            toggleLights={toggleLights}/>
            ))
            }
        </div>
)}
</div>
    )
}
export default Board
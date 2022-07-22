
import {useState} from 'react'


function Square(props) {
 

  
      return(
          <button disabled={props.gameOver} onClick={props.setMove} > {props.value ? props.value : "-"} </button>
      )
}
  



function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)


    function handleClick(index){
      const closedSquares = squares.slice()

      if (closedSquares[index]) {
        return
      }

      closedSquares[index] = xIsNext ? "x" : "o"

      const winner = checkWinner(closedSquares)
      if (winner){
        console.log(winner)

      }

      setXIsNext(!xIsNext) 
      
      setSquares (closedSquares)

    }
 

    function renderSquare(index){
      return(
        <Square gameOver={checkWinner(squares)} value = {squares[index]} setMove={() => handleClick(index)} />

      )
    }

    console.log(renderSquare(0))
    console.log(() => renderSquare(0))


    function resetBoard ( ){
      setSquares(Array(9).fill(null))
    }

    function checkWinner(squares) {
      const winningCombinations = [
        [0, 4, 8],
        [0, 2 ,1],
        [2, 4, 6],
        [0, 3, 6],
        [2, 5, 8],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
      ]

      for (let i = 0; i < winningCombinations.length; i++){
        const[a, b, c] = winningCombinations[i]
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
          console.log("Winner")
          return squares[a]
        }
       
      }
    }
    

    return(
        <div>
        <div className='bard-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button onClick = {resetBoard}> Reset </button>
        </div>
        
    )
}









function Game() {
    return(
   <Board />
    ) 
      
}

export default Game
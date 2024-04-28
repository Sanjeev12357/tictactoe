import React, { useState } from 'react'
import Icon from './Icon';

const App = () => {
  const [board,setBoard]=useState( new  Array(9).fill('empty',0,9))
  const [isCross,setIsCross]=useState(true);
  const [winner,setWinner]=useState("");

  const checkIsWinner=()=>{
    if(board[0]===board[1] && board[0]===board[2] && board[0]!=='empty'){
      setWinner(`${board[0]} wins`)
    } else if(board[3]===board[4] && board[3]===board[5] && board[3]!=='empty'){
      setWinner(`${board[3]} wins`)
    } else if(board[6]===board[7] && board[6]===board[8] && board[6]!=='empty'){
      setWinner(`${board[6]} wins`)
    } else if(board[0]===board[3] && board[0]===board[6] && board[0]!=='empty'){
      setWinner(`${board[0]} wins`)
    } else if(board[1]===board[4] && board[1]===board[7] && board[1]!=='empty'){
      setWinner(`${board[1]} wins`)
    } else if(board[2]===board[5] && board[2]===board[8] && board[2]!=='empty'){
      setWinner(`${board[2]} wins`)
    } else if(board[0]===board[4] && board[0]===board[8] && board[0]!=='empty'){
      setWinner(`${board[0]} wins`)
    } else if(board[2]===board[4] && board[2]===board[6] && board[2]!=='empty'){
      setWinner(`${board[2]} wins`)
    } else if(!board.includes('empty')){
      setWinner("Game Draw")
    }
    
  }
  const onChangeItem=(index)=>{
    if(winner){
      return window.alert("Game has already got over")
    }
    if(board[index]==='empty'){
      board[index]=isCross ? 'cross' : 'circle';
      setBoard(board);
      setIsCross(!isCross);
    } else{
      return window.alert("Already filled")
    }
    checkIsWinner() 
  }
  const reloadGame=()=>{
    setIsCross(true);
    setWinner("");
    setBoard(Array(9).fill(null));
  }
  return (
    <div className='items-center justify-center flex flex-col '>
    {winner ? (<>{winner}</>):(<>Player {isCross ? 'X' : 'O'}</>)}
    <div className="grid  grid-cols-3">
      {board.map((item,index)=>(
        <div onClick={()=>{onChangeItem(index)}} className ="p-4 border-2 border-black">
        <Icon name={item}/>
        </div>
      ))}
    </div>
    <div onClick={reloadGame}>Reload game</div>
    </div>
  )
}

export default App
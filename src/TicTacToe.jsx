import React from 'react'
import { useState } from 'react'

const TicTacToe = () => {
    const [board,setBoard] =useState(Array(9).fill(null))
    const [isXNext,setIsXNext] =useState(true)
    const [winner,setWinner] =useState(null)
    const handleClick =(index)=>{
        if(board[index] || winner){
            return
        }
        setBoard(board.map((value,pos)=>pos===index? (isXNext?'X':'O'):value))

    }
    return {board,handleClick};
}

export default TicTacToe
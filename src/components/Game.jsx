import React, { useContext, useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { AppContext } from '../App.provider'

const Game = () => {
    const {setActive, setTheme, icons, setIcons, players, setPlayers, size, setSize, board, time, setTime, turn, setTurn, moves, setMoves} = useContext(AppContext)

    const [activeCell, setActiveCell] = useState()
    const [activeIndex, setActiveIndex] = useState()
    const [completedBoard, setCompletedBoard] = useState(new Array(board.length))
    const [gameStart, setGameStart] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [finalScore, setFinalScore] = useState([])

    const incrementTurn = () => {
        if (turn !== players - 1) {
            setTurn(turn + 1)
        }
        if (turn === players - 1) {
            setTurn(0)
        }
    }

    const reset = () => {
        setActiveCell(undefined)
        setActiveIndex(undefined)
        setCompletedBoard(new Array(board.length))
        setTurn(0)
        setMoves(new Array(players).fill(0))
        setTime(0)
        setGameStart(false)
        setGameOver(false)
    }
    const newGame = () => {
        reset()
        setSize(undefined)
        setTheme(undefined)
        setPlayers(undefined)
        setActive(false)
    }



    const handleCellClick = (e, i) => {
        if (players === 1 && activeCell === undefined && activeIndex === undefined) {
            setGameStart(true)
        }
        if (!activeCell && !activeIndex && (activeCell !== 0 && activeIndex !== 0)) {
            setActiveCell(e)
            setActiveIndex(i)
            return
        }
        if (players === 1) {
            let newMoves = [...moves]
            newMoves[0] = newMoves[0] + 1
            setMoves(newMoves)
        }
        if (((activeCell && (activeIndex || activeIndex === 0)) !== null)) {
            let m = [...moves]
            let t = turn
            if (activeCell === e && activeIndex !== i) {
                let arr = [...completedBoard]
                arr.splice(i, 1, e)
                arr.splice(activeIndex, 1, activeCell)
                setCompletedBoard(arr)
                setActiveCell(null)
                setActiveIndex(null)
                if (players > 1) {
                    let score = m[turn] + 1
                    m.splice(turn, 1, score)
                    setMoves(m)
                }
                if (JSON.stringify(arr) === JSON.stringify(board)) {
                    setGameOver(true)
                    setGameStart(false)
                    if (players > 1) {
                        let scores = m.map((m, i) => {
                            return {player: i + 1, score: m}
                        })
                        scores.sort((a, b) => b.score - a.score)
                        setFinalScore(scores)
                        return
                    }
                }
                if (players > 1) {
                    incrementTurn()
                    return
                }
            }
        }
        if (activeIndex === i || activeCell !== e) {
            setActiveCell(null)
            setActiveIndex(null)
            if (players > 1) {
                incrementTurn()
            }
        }
    }

  return (
    <section>
        <div className="baord">
            {board.map((b, i) => (
                <div key={i} onClick={completedBoard[i] === b ? null : () => handleCellClick(b, i)} style={{width: '30px', height: '30px', backgroundColor: `${completedBoard[i] === b ? 'blue' : activeIndex === i ? 'green' : 'red'}`, cursor: 'pointer'}}>{b}</div>
            ))}
        </div>
        <div>
            {moves.map((m, i) => (
                <span key={i}>{m}</span>
            ))}
            <span>{time}</span>
        </div>
        {gameOver ? 
        <div className='gameover'>
            { players > 1 ? <h2>{finalScore[0].score > finalScore[1].score ? `Player ${finalScore[0].player} Wins!` : "It's a tie!"}</h2> : <h2>You did it!</h2>}
            <p>Game over! {players > 1 ? "Here are the results" : "Here's how you got on"}...</p>
            <ul>
                {players > 1 ? finalScore.map((s, i) => (
                    <li key={i}><span>Player {s.player} {s.score === finalScore[0].score ? '(Winner!)' : ''}</span><span>{s.score} Pairs</span></li>
                )) :
                <> 
                <li><span>Time Elapsed</span><span>{time}</span></li>
                <li><span>Moves Taken</span><span>{moves[0]} Moves</span></li>
                </>
                }
            </ul>
            <div className="btns">
                <button onClick={reset}>Restart</button>
                <button onClick={newGame}>Setup New Game</button>
            </div>
        </div>
        :
        ''
    }
    </section>
  )
}

export default Game
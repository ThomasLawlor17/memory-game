import React, { useContext, useState } from 'react'
import { AppContext } from '../App.provider'

const Start = () => {
    const {setActive, theme, setTheme, themeList, players, setPlayers, size, setSize, setTurn, setTime, setMoves, makeBoard} = useContext(AppContext)
    const numPlayers = [1,2,3,4]
    const handleGameStart = () => {
        let err = []
        if (!theme) {
            setTheme(5)
        }
        if (!players) {
            err.push('number of players')
        }
        if (size === undefined) {
            err.push('board size')
        }
        if (err.length !== 0) {
            alert(`Please choose the ${err.map(e => e).join(' and ')}`)
            err = []
            return
        }
        else {
            makeBoard(size)
            let scores = new Array(players).fill(0)
            setMoves(scores)
            setTurn(0)
            setActive(true)
            if (players === 1) {
                setTime(0)
            }
        }
    }

  return (
    <section>
        <div>
            <div className="theme">
                <span>Select Theme</span>
                <div className="buttons">
                    <button onClick={() => setTheme(5)} className={theme === 5 ? 'active' : ''}>Numbers</button>
                    <ul><span>{theme === 0 ? 'Space' : theme === 1 ? 'Star Wars' : theme === 2 ? 'Sports' : theme === 3 ? 'Vehicles' : 'Icons'}</span>
                        {themeList.map((t, i) => (
                            <li key={i} onClick={() => setTheme(i)} className={theme === i ? 'active' : ''}>{t}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="players">
                <span>Number of Players</span>
                <ul>
                    {numPlayers.map(p => (
                        <li key={p} onClick={() => setPlayers(p)} className={players === p ? 'active' : ''}>{p}</li>
                    ))}
                </ul>
            </div>
            <div className="size">
                <span>Grid Size</span>
                <ul>
                    <li onClick={() => setSize(0)} className={size === 0 ? 'active' : ''}>4x4</li>
                    <li onClick={() => setSize(1)} className={size === 1 ? 'active' : ''}>6x6</li>
                </ul>
            </div>
            <div className="start">
                <button onClick={handleGameStart}>Start Game</button>
            </div>
        </div>
    </section>
  )
}

export default Start
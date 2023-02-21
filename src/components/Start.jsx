import React, { useContext, useState } from 'react'
import { AppContext } from '../App.provider'
import styled from 'styled-components'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: var(--white);
border-radius: 10px;
font-weight: 700;

.buttons button.active,.buttons span.active, ul li.active {
    background-color: var(--navy);
}

span {
    color: var(--slate);
}

li, .buttons span, button {
    // font-size: 16px;
    // line-height: 19.84px;
}

.theme, .players, .size {
    height: fit-content;
    width: 100%;
}

.buttons, .players ul, .size ul {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.buttons button, .buttons span {
    background-color: var(--light-slate);
    border: none;
    padding: 0;
    color: var(--white);
    font-weight: 700;
}

.buttons ul {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    visibility: hidden;
    z-index: -1;
}

.buttons ul.open {
    visibility: visible;
    z-index: 2;
}

.buttons span {
    display: flex;
    align-items: center;
    justify-content: center;
}

ul li {
    background-color: var(--light-slate);
}

.start {
    width: 100%;
    padding: 0;
    background-color: var(--orange);
    color: var(--white);
    border: none;
    border-radius: 36px;
}

@media (max-width: 769px) {
    padding: 56px;
    width: 70.6%;
    gap: 32px;

    span {
        font-size: 20px;
        line-height: 24.8px;
    }
    li, .buttons span, button {
        font-size: 26px;
        line-height: 32.24px;
    }
    div ul:not(.open), .buttons {
        margin-top: 16px;
    }

    .buttons ul {
        width: 256px;
        background-color: var(--light-slate);
        border-radius: 20px;
        gap: 10px;
        padding: 15px 0 15px 0;
        top: 57px;
    }

    ul li, .buttons span, .buttons button {
        border-radius: 26px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .players li {
        width: 119px;
    }
    .size li, .buttons span, .buttons button {
        width: 256px;
    }

    .start {
        height: 70px;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0px;
    }
}

@media (max-width: 414px) {
    padding: 24px;
    width: 279px;
    gap: 24px;

    span {
        font-size: 15px;
        line-height: 18.6px;
    }
    li, .buttons span, button {
        font-size: 16px;
        line-height: 19.84px;
    }
    div ul:not(.open), .buttons {
        margin-top: 11px;
    }

    .buttons ul {
        width: 134px;
        background-color: var(--light-slate);
        border-radius: 20px;
        gap: 10px;
        padding: 15px 0 15px 0;
        top: 45px;
    }

    ul li, .buttons span, .buttons button {
        border-radius: 26px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .players li {
        width: 62px;
    }
    .size li, .buttons span, .buttons button {
        width: 134px;
    }

    .start {
        height: 48px;
        margin-top: 12px;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0px;
    }
}

`



const Start = () => {
    const {setActive, theme, setTheme, themeList, players, setPlayers, size, setSize, setTurn, setTime, setMoves, makeBoard} = useContext(AppContext)
    const numPlayers = [1,2,3,4]
    const [open, setOpen] = useState(false)

    const handleChooseTheme = (i) => {
        setTheme(i)
        setOpen(false)
    }


    const handleGameStart = () => {
        let err = []
        if (!theme && theme !== 0) {
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
    <StyledSection>
            <div className="theme">
                <span>Select Theme</span>
                <div className="buttons">
                    <button onClick={() => setTheme(5)} className={theme === 5 ? 'active' : ''}>Numbers</button>
                    <span className={theme < 5 ? 'active' : ''} onClick={() => setOpen(open => !open)}>{theme === 0 ? 'Space' : theme === 1 ? 'Star Wars' : theme === 2 ? 'Sports' : theme === 3 ? 'Marvel' : 'Icons'}</span>
                    <ul className={open ? 'open' : ''}>
                        {themeList.map((t, i) => (
                            <li key={i} onClick={() => handleChooseTheme(i)} className={theme === i ? 'active' : ''}>{t}</li>
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
            <button className='start' onClick={handleGameStart}>Start Game</button>
    </StyledSection>
  )
}

export default Start
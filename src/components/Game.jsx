import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { AppContext } from '../App.provider'
import Icon from './icons/Icon'

const StyledDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 67px 165px 0 165px;

h1 {
    margin: 0;
    font-size: 40px;
    line-height: 49.6px;
}

div, ul {
    display: flex;
    align-items: center;
    font-weight: 700;
}

div {
    background-color: var(--orange);
    color: var(--white);
    border-radius: 26px;
    justify-content: center;
}

ul {
    gap: 16px;
    li {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 26px;
        font-size: 20px;
        line-height: 24.8px;
        height: 52px;
        &:first-of-type {
            background-color: var(--orange);
            color: var(--white);
            width: 127px;
        }
        &:last-of-type {
            background-color: var(--gray);
            width: 149px;
        }
    }
}

@media (max-width: 769px) {
    padding: 37px 39px 0 39px;
}

@media (max-width: 414px) {
    padding: 29px 24px 0 24px;

    h1 {
        font-size: 24px;
        line-height: 29.76px;
    }
    div {
        width: 78px;
        height: 40px;
    }
}

`
const StyledList = styled.div`
display: none;

&:has(.open) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;

    div {
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: brightness(0.5);
    }
    
    ul {
        filter: brightness(1);
        background-color: var(--light-gray);
        border-radius: 10px;
        margin: 0 auto;
        width: calc(87.2% - 48px);
        padding: 24px;
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 16px;

        li {
            width: 100%;
            background-color: var(--gray);
            height: 48px;
            border-radius: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            line-height; 22.32px;
            font-weight: 700;

            &:first-of-type {
                background-color: var(--orange);
                color: var(--white);
            }
        }
    }
}`


const StyledSection = styled.section`
display: flex;
flex-direction: column;
margin-top: 105px;
gap: 12.3vh;

.board {
    display: grid;
    align-self: center;
    align-items: center;
    justify-content: center;
    
    div {
        background-color: var(--navy);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: var(--white);

        svg {
            fill: var(--white);
        }
    }
    .correct {
        background-color: var(--light-slate);
    }
    .active-cell:not(.incorrect) {
        background-color: var(--orange);
    }
    .incorrect {
        background-color: red;
    }
}
.grid-4 {
    grid-template-columns: repeat(4, 118px);
    grid-gap: 20px;

    div {
        width: 118px;
        height: 118px;
        border-radius: 59px;
        font-size: 56px;
        line-height: 69.44px;

        svg {
            width: 58px;
            height: 58px;
        }
    }
}
.grid-6 {
    grid-template-columns: repeat(6, 82px);
    grid-gap: 16px;

    div {
        width: 82px;
        height: 82px;
        border-radius: 41px;
        font-size: 44px;
        line-height: 54.56px;

        svg {
            width: 40px;
            height: 40px;
        }
    }
}

.solo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--light-slate);
        border-radius: 10px;
        padding: 17px 24px 15px 21px;
        width: 215px;

        span {
            font-weight: 700;

            &:first-of-type {
                color: var(--slate);
            }
            &:last-of-type {
                color: var(--navy);
            }
        }
    }
}
.multi {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (min-width: 770px) {
        width: 77.1%;
        max-width: 1110px;
        margin: auto;
    }

    div {
        display: flex;
        background-color: var(--gray);
        border-radius: 5px;
        align-items: center;
        justify-content: space-between;
        padding: 17px 24px 15px 21px;
        width: 215px;

        span:first-of-type {
            color: var(--slate);
        }
    }
    .active {
        position: relative;
        background-color: var(--orange);
        span {
            &:first-of-type, &:last-of-type {
                color: var(--white);
            }
            &::before {
                content: '';
                position: absolute;
                bottom: 99%;
                left: 0;
                right: 0;
                margin: auto;
                width: 0;
                height: 0;
                background-color: transparent;
                border-bottom: 13px solid var(--orange);
                border-right: 13px inset transparent;
                border-left: 13px inset transparent;
            }
        }

        @media (min-width: 770px) {
            &::after {
                content: 'CURRENT TURN';
                position: absolute;
                bottom: -33px;
                margin: auto;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 13px;
                line-height: 16.12px;
                letter-spacing: 5px;
            }
        }
    }
}


.gameover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    displaY: flex;

    .content {
        backdrop-filter: brightness(1);
        background-color: var(--light-gray);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        padding: 51px 56px 69px 56px;
        width: 542px;
        margin: auto;

        .title, ul, ul li {
            display: flex;
            align-items: center;

            span:first-of-type, p {
                color: var(--slate);
            }
        }
        .title, ul {
            flex-direction: column;
        }
        .title {
            gap: 16px;
            h2 {
                font-size: 48px;
                line-height: 59.52px;
            }
            p {
                font-size: 18px;
                line-height: 22.32px;
            }
        }
        ul {
            width: 100%;
            gap: 16px;

            li {
                background-color: var(--gray);
                border-radius: 5px;
                justify-content: space-between;
                padding: 17px 32px 15px 32px;
                width: calc(100% - 64px);
                border-radius: 10px;

                span {
                    &:first-of-type {
                        font-size: 18px;
                        line-height: 22.32px
                    }
                    &:last-of-type {
                        font-size: 32px;
                        line-height: 39.68px
                    }
                }
            }
            .winner {
                background-color: var(--navy);
                color: var(--white);

                span:first-of-type {
                    color: var(--white);
                }
            }
        }
        .btns {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 14px;
            @media (min-width: 415px) {
                margin-top: 16px;
            }

            button {
                border: none;
                border-radius: 26px;
                width: 100%;
                height: 48px;
                font-size: 20px;
                line-height: 24.8px;

                &:first-of-type {
                    background-color: var(--orange);
                    color: var(--white);
                }
                &:last-of-type {
                    background-color: var(--gray);
                }
            }
        }
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        backdrop-filter: brightness(0.5);
    }
}

@media (max-width: 769px) {
    margin-top: 11.816vh;
    gap: 10.937vh;
    width: 100%;

    .board {
        width: 76.679%;
        max-width: 572px;
    }
    .solo {
        div {
            padding: 17px 15px 15px 21px;
            width: calc(35% - 36px);
            max-width: 219px;

            span {
                &:first-of-type {
                    font-size: 18px;
                    line-height: 22.32px; 
                }
                &:last-of-type {
                    font-size: 32px;
                    line-height: 39.68px;
                }
            }
        }
    }
    .multi {
        div {
            flex-direction: column;
            align-items: start;
            justify-content: center;
            width: calc(21.35% - 16px);
            max-width: 148px;
            height: 80px;
            padding: 0;
            @media (min-width: 415px) {
                padding-left: 16px;
            }
            gap: 5px;

            span {
                &:first-of-type {
                    font-size: 15px;
                    line-height: 18.6px;
                }
                &:last-of-type {
                    font-size: 24px;
                    line-height: 29.76px;
                }
            }
        }
        .active {
            &::before {
                margin: auto;
                left: 0;
                right: 0;
            }
        }
    }
    .gameover {
        .content {
            width: calc(100% - 226px);
        }
    }
}

@media (max-width: 414px) {
    margin-top: 11.994vh;
    gap: 15.292vh;

    .board {
        width: 87.2%;
        max-width: 327px;
    }
    .grid-4 {
        grid-template-columns: repeat(4, 73px);
        grid-gap: 12.29px;

        div {
            width: 72.53px;
            height: 72.53px;
            border-radius: 59px;
            font-size: 40px;
            line-height: 49.6px;

            svg {
                width: 35.4px;
                height: 35.4px
            }
        }
    }
    .grid-6 {
        grid-template-columns: repeat(6, 47px);
        grid-gap: 9.12px;

        div {
            width: 46.88px;
            height: 46.88px;
            border-radius: 41px;
            font-size: 24px;
            line-height: 29.76px;

            svg {
                width: 23px;
                height: 23px;
            }
        }
    }

    .solo {
        gap: 25px;
        div {
            flex-direction: column;
            justify-content: center;
            gap: 2px;
            width: 151px;
            height: 70px;
            border-radius: 5px;
            padding: 0;

            span {
                &:first-of-type {
                    font-size: 15px;
                    line-height: 18.6px; 
                }
                &:last-of-type {
                    font-size: 24px;
                    line-height: 29.76px;
                }
            }
        }
    }
    .multi {
        div {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 70px;
            gap: 2px;

            span {
                &:first-of-type {
                    font-size: 15px;
                    line-height: 18.6px;
                }
                &:last-of-type {
                    font-size: 24px;
                    line-height: 29.76px;
                }
            }
        }
        .active {
            span {
                &::before {
                    border-bottom: 10px solid var(--orange);
                    border-right: 10px inset transparent;
                    border-left: 10px inset transparent;
                }
            }
        }
    }

    .gameover {
        .content {
            gap: 24px;
            padding: 24px;
            width: calc(100% - 96px);

            margin: auto;
            

            .title {
                margin-top: 8px;
                gap: 9px;

                h2 {
                    font-size: 24px;
                    line-height: 29.76px;
                }
                p {
                    font-size: 14px;
                    line-height: 17.36px;
                }
            }
            ul {
                gap: 9px;

                li {
                    padding: 11px 16px 12px 16px;
                    width: calc(100% - 32px);
                    border-radius: 5px;

                    span {
                        &:first-of-type {
                            font-size: 13px;
                            line-height: 16.12px
                        }
                        &:last-of-type {
                            font-size: 20px;
                            line-height: 24.8px
                        }
                    }
                }
            }
            .btns {
                flex-direction: column;
                gap: 16px;

                button {
                    width: 100%;
                    height: 48px;
                    font-size: 18px;
                    line-height: 22.32px;
                }
            }
        }
    }
}


`

// style={{width: '30px', height: '30px', backgroundColor: `${completedBoard[i] === b ? 'blue' : activeIndex === i ? 'green' : 'red'}`, cursor: 'pointer'}}

const Game = () => {
    const {setActive, theme, setTheme, players, setPlayers, size, setSize, board, time, setTime, turn, setTurn, moves, setMoves} = useContext(AppContext)

    const [activeCell, setActiveCell] = useState()
    const [activeIndex, setActiveIndex] = useState()
    const [secondCellIndex, setSecondCellIndex] = useState()
    const [completedBoard, setCompletedBoard] = useState(new Array(board.length))
    const [gameStart, setGameStart] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [finalScore, setFinalScore] = useState([])
    const [start, setStart] = useState()
    const [now, setNow] = useState(start)
    const [menu, setMenu] = useState(false)
    const counter = now - start
    const formatTime = (counter) => {
        if (counter.length < 4 || !counter) {
            return '0:00'
        }
        let min = Math.floor(counter / 60000)
        let sec = ((counter % 60000) / 1000).toFixed(0)
        return `${min}:${sec < 10 ? '0' : ''}${sec}`
    } 

    const timer = formatTime(counter)

    const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);
		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

    const spaceIcons = ['Astronaut', 'Iss', 'Meteor', 'Planet', 'Rocket', 'Satellite', 'SolarSystem', 'Telescope', 'Rover', 'BlackHole', 'Eagle', 'Atom', "Ufo", 'Radar', 'Sputnik', 'Station', 'Invader', 'Galaxy']
    const starwarsIcons = ['Atat', 'BobaFett', 'Deathstar', 'Saber', 'Tie', 'Vader', 'R2', 'MFalcon', 'Xwing', 'Trooper', 'Empire', 'Rebels', 'Pilot', 'Leah', 'Chewey', 'C3po', 'Yoda', 'Logo']
    const sportsIcons = ['Badminton', 'Baseball', 'Basketball', 'Puck', 'TableTennis', 'Volleyball', 'Golf', 'Football', 'Bike', 'Bowling', 'Boxing', 'Cricket', 'Formula', 'Kyak', 'Pool', 'Soccer', 'Tennis', 'Trophy']
    const marvelIcons = ['Ironman', 'Spiderman', 'Stormbreaker', 'CptAmerica', 'Widow', 'Avengers', 'Loki', 'Gauntlet', 'Antman', 'ArcReactor', 'BlackPanther', 'CptMarvel', 'Groot', 'Hawkeye', 'Hulk', 'Scepter', 'Shield', 'Xmen', 'Xmen']

    useEffect(() => {
        if (gameStart) {
            const intervalID = setInterval(() => setNow(Date.now()), 1)
            return () => clearInterval(intervalID)
        }
    }, [gameStart])


    const incrementTurn = () => {
        if (turn !== players - 1) {
            setTurn(turn + 1)
        }
        if (turn === players - 1) {
            setTurn(0)
        }
    }

    const handleReset = () => {
        setActiveCell(undefined)
        setActiveIndex(undefined)
        setMenu(false)
        setCompletedBoard(new Array(board.length))
        setTurn(0)
        setMoves(new Array(players).fill(0))
        setTime(0)
        setGameStart(false)
        setGameOver(false)
        setNow(undefined)
        setStart(undefined)
    }
    const handleNewGame = () => {
        handleReset()
        setSize(undefined)
        setTheme(undefined)
        setPlayers(undefined)
        setActive(false)
    }
    const handleOpenMenu = () => {
        setGameStart(false)
        setMenu(true)
    }
    const handleResume = () => {
        if (counter) {
            setGameStart(true)
        }
        setMenu(false)
    }



    const handleCellClick = (e, i) => {
        if (players === 1 && activeCell === undefined && activeIndex === undefined) {
            setGameStart(true)
            setStart(Date.now())
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
                    setTime(timer)
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
            setSecondCellIndex(i)
            setTimeout(() => {
                setActiveCell(null)
                setActiveIndex(null)
                setSecondCellIndex(null)
            }, 2000)
            if (players > 1) {
                incrementTurn()
            }
        }
    }

    const cellIcon = (b) => {
        if (theme < 5 || theme === 0) {
            return <Icon name={theme === 0 ? spaceIcons[b] : theme === 1 ? starwarsIcons[b] : theme === 2 ? sportsIcons[b] : theme === 3 ? marvelIcons[b] : ''}/>
        }
        else {
            return b
        }
    }

  return (
    <>
    <StyledDiv className="nav">
        <h1>memory</h1>
        {width > 414 ? 
        <ul className="inline-menu">
            <li onClick={handleReset}>Restart</li>
            <li onClick={handleNewGame}>New Game</li>
        </ul>
        :
        <div onClick={handleOpenMenu}>Menu</div>
        }
    </StyledDiv>
    {width > 414 ? '' :
    <StyledList>
        <div></div>
        <ul className={`menu ${menu ? 'open' : ''}`}>
        <li onClick={handleReset}>Restart</li>
        <li onClick={handleNewGame}>New Game</li>
        <li onClick={handleResume}>Resume Game</li>
        </ul>
    </StyledList>
    }
    <StyledSection className='Game'>
        <div className={`board grid-${size === 0 ? '4' : size === 1 ? '6' : ''}`}>
            {board.map((b, i) => (
                <div key={i} onClick={completedBoard[i] === b || secondCellIndex ? null : () => handleCellClick(b, i)} className={activeIndex === i && !secondCellIndex ? 'active-cell' : secondCellIndex === i || (secondCellIndex && activeIndex === i) ? 'incorrect' : completedBoard[i] === b ? 'correct' : ''}>{activeIndex === i || completedBoard[i] === b || secondCellIndex === i ? cellIcon(b) : ''}</div>
            ))}
        </div>
        {players > 1 ? 
        <div className='multi'>
            {moves.map((m, i) => (
                <div key={i} className={turn === i ? 'active' : ''}>
                    <span>{width > 414 ? 'Player ' : "P"}{i + 1}</span>
                    <span>{m}</span>
                </div>
            ))}
        </div>
        : players === 1 ? 
        <div className='solo'>
            <div className="time">
                <span>Time</span>
                <span>{timer}</span>
            </div>
            <div className="moves">
                <span>Moves</span>
                <span>{moves[0]}</span>
            </div>
        </div>
        : ''
    }
        {gameOver ? 
        <div className='gameover'>
            <div className="background"></div>
            <div className="content">
                <div className="title">
                    { players > 1 ? <h2>{finalScore[0].score > finalScore[1].score ? `Player ${finalScore[0].player} Wins!` : "It's a tie!"}</h2> : <h2>You did it!</h2>}
                    <p>Game over! {players > 1 ? "Here are the results" : "Here's how you got on"}...</p>
                </div>
            <ul>
                {players > 1 ? finalScore.map((s, i) => (
                    <li key={i} className={s.score === finalScore[0].score ? 'winner' : ''}><span>Player {s.player} {s.score === finalScore[0].score ? '(Winner!)' : ''}</span><span>{s.score} Pairs</span></li>
                )) :
                <> 
                <li><span>Time Elapsed</span><span>{time}</span></li>
                <li><span>Moves Taken</span><span>{moves[0]} Moves</span></li>
                </>
                }
            </ul>
            <div className="btns">
                <button onClick={handleReset}>Restart</button>
                <button onClick={handleNewGame}>Setup New Game</button>
            </div>
            </div>
        </div>
        :
        ''
    }
    </StyledSection>
    </>
  )
}

export default Game
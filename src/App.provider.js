import React, {useState, createContext} from "react";
import { shuffle } from "./utils/functions";


export const AppContext = createContext({
    active: false,
    setActive: () => {},
    theme: '',
    setTheme: () => {},
    themeList: [],
    icons: [],
    setIcons: () => {},
    players: '',
    setPlayers: () => {},
    size: '',
    setSize: () => {},
    board: [],
    setBoard: () => {},
    time: '',
    setTime: () => {},
    turn: '',
    setTurn: () => {},
    moves: [],
    setMoves: () => {},
    makeBoard: () => {},
})

const AppProvider = ({children}) => {
    const [active, setActive] = useState(false)
    const [theme, setTheme] = useState()
    const [icons, setIcons] = useState([])
    const [players, setPlayers] = useState()
    const [size, setSize] = useState()
    const [board, setBoard] = useState([])
    const [time, setTime] = useState()
    const [turn, setTurn] = useState()
    const [moves, setMoves] = useState(0)
    const [nums1] = useState([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8])
    const [nums2] = useState([0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16])
    const [themeList] = useState([
        'Space',
        'Star Wars',
        'Sports',
        'Marvel',
    ])

    const makeBoard = (size) => {
        if (size === 0) {
            let data = shuffle(nums1)
            console.log(data)
            setBoard(data)
        }
        if (size === 1) {
            let data = shuffle(nums2)
            console.log(data)
            setBoard(data)
        }
    }

    return (
        <AppContext.Provider
            value={{
                active,
                setActive,
                theme,
                setTheme,
                themeList,
                icons,
                setIcons,
                players,
                setPlayers,
                size,
                setSize,
                board,
                setBoard,
                time,
                setTime,
                turn,
                setTurn,
                moves,
                setMoves,
                nums1,
                nums2,
                makeBoard,
            }}>
                {children}
            </AppContext.Provider>
    )
}

export default AppProvider
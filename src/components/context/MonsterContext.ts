import { createContext } from "react"

type Monster = {
    name: string
    eyes: number
    mouths: number
    color: string
}

type MonsterState = {
    monsters: Monster[]
}

export const initialMonsterState: MonsterState = {
    monsters: [
        {
            name: 'Arekion',
            eyes: 2,
            mouths: 1,
            color: 'Green'
        },
        {
            name: 'Zilliuz',
            eyes: 1,
            mouths: 2,
            color: 'Brown'
        },
        {
            name: 'Spudz',
            eyes: 6,
            mouths: 1,
            color: 'Red'
        },
        {
            name: 'Snimo',
            eyes: 4,
            mouths: 5,
            color: 'Yellow'
        },
    ]
}

export const MonsterContext = createContext(initialMonsterState)
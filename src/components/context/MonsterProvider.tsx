import { useReducer } from "react";
import { Monster, MonsterContext, MonsterState, initialMonsterState } from "./MonsterContext";

export type Action = 
  | { type: 'ADD'; payload: Monster }
  | { type: 'DELETE'; payload: string}

const monsterReducer = (state: MonsterState, action: Action): MonsterState => {
    switch (action.type) {
        case 'ADD':
            return {...state, monsters: [...state.monsters, action.payload]}
        case 'DELETE':
            return {
                monsters: state.monsters.filter((monster) => monster.id != action.payload)
            }
        default:
            throw new Error('Wrong action type')
    }
}



type MonsterProviderProps = {
    children: React.ReactNode
}

function MonsterProvider( {children}: MonsterProviderProps ) {
    const [state, dispatch] = useReducer(monsterReducer, initialMonsterState)

    return ( 
        <MonsterContext.Provider value={{state, dispatch}}>
            {children}
        </MonsterContext.Provider>
     );
}

export default MonsterProvider;
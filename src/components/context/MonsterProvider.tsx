import { useReducer } from "react";
import { Monster, MonsterContext, MonsterState, initialMonsterState } from "./MonsterContext";

export type Action = 
  | { type: 'ADD'; payload: Monster }
  | { type: 'DELETE'; payload: string}
  | { type: 'TOGGLE_EDIT'; }
  | { type: 'EDIT'; payload: Monster}

const monsterReducer = (state: MonsterState, action: Action): MonsterState => {
    switch (action.type) {
        case 'ADD':
            return {...state, monsters: [...state.monsters, action.payload]}
        case 'DELETE':
            return {
                ...state,
                monsters: state.monsters.filter((monster) => monster.id !== action.payload), 
            }
        case 'TOGGLE_EDIT':
            return {
                ...state, editMode: !state.editMode
            }
        case 'EDIT': {
            return {
                ...state,
                monsters: state.monsters.map((monster) => {
                    if(monster.id === action.payload.id) {
                        return action.payload
                    }
                    return monster
                })
            }
        }
           
        default:
            throw new Error('Wrong action type')
    }
}



type MonsterProviderProps = {
    children: React.ReactNode
}

function MonsterProvider( {children}: MonsterProviderProps ) {
    const [state, dispatch ] = useReducer(monsterReducer, initialMonsterState)
    

    return ( 
        <MonsterContext.Provider value={{state, dispatch}}>
            {children}
        </MonsterContext.Provider>
     );
}

export default MonsterProvider;
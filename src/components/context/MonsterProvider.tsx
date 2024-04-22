import { MonsterContext, initialMonsterState } from "./MonsterContext";

type MonsterProviderProps = {
    children: React.ReactNode
}

function MonsterProvider( {children}: MonsterProviderProps ) {
    return ( 
        <MonsterContext.Provider value={initialMonsterState}>
            {children}
        </MonsterContext.Provider>
     );
}

export default MonsterProvider;
import { MonsterContext } from "@/components/context/MonsterContext";
import MonsterCard from "@/components/ui/MonsterCard";
import { useContext } from "react";

function MonsterList() {
    const monsterData = useContext(MonsterContext)
    return ( 
        <div className="flex flex-col items-center w-96 mt-2 h-[calc(100vh-1rem)] bg-indigo-300 m-2 rounded p-1 flex justify-start gap-10 font-serif">
            <h3 className="text-4xl">Monster List</h3>
            <div className="overflow-auto w-80 pr-2">
                <div>
                {monsterData.monsters.map((monster) => (
                    <MonsterCard 
                    name={`${monster.first_name} ${monster.last_name}`} 
                    num_eyes={monster.num_eyes} 
                    num_mouths={monster.num_mouths} 
                    num_arms={monster.num_arms}
                    num_wings={monster.num_wings}
                    num_tentacles={monster.num_tentacles}
                    num_tails={monster.num_tails}
                    />
                ))}
                </div>
            </div>
        </div>
     );
}

export default MonsterList;
import { MonsterContext } from "@/components/context/MonsterContext";
import MonsterCard from "@/components/ui/MonsterCard";
import { useContext } from "react";
import { useParams } from "react-router-dom";

function MonsterEdit() {
    const { state } = useContext(MonsterContext)
    const { id }= useParams<{ id: string }>();
    
    const monster = state.monsters.find(monster => monster.id === id);

    return ( 
        <div className="flex flex-col items-center w-96 mt-2 bg-indigo-300 m-2 rounded p-6 flex justify-start gap-10 font-serif">
            {monster && (
                <MonsterCard 
                    id={monster.id}
                    name={`${monster.first_name} ${monster.last_name}`}
                    num_eyes={monster.num_eyes}
                    num_mouths={monster.num_mouths}
                    num_arms={monster.num_arms}
                    num_wings={monster.num_wings}
                    num_tentacles={monster.num_tentacles}
                    num_tails={monster.num_tails}
                    origin={monster.origin}
                    magicAbility={monster.abilities.magic}
                    scienceAbility={monster.abilities.science} 
                    description={monster.description}                    
                    />
            )}
            <div>
                <input type="text" />
                <input type="text" />
                
            </div>
        </div>
     );
}

export default MonsterEdit;
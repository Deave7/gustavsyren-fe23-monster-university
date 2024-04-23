import { Button } from "./button";
import { useContext } from "react";
import { MonsterContext } from "../context/MonsterContext";


interface MonsterCardProps {
    id: string
    name: string;
    num_eyes: number;
    num_mouths?: number;
    num_arms?: number;
    num_wings?: number;
    num_tentacles?: number;
    num_tails?: number;
  }

  

  const MonsterCard: React.FC<MonsterCardProps> = ({id, name, num_eyes, num_mouths, num_arms, num_wings, num_tentacles, num_tails}) => {
    const { dispatch } = useContext(MonsterContext)
    
    const handleDelete = (id: string) => {
      dispatch({ type: 'DELETE', payload: id})
    }
    
    return ( 
        <div id={id} className="bg-primary text-white rounded-lg shadow-md p-4 mb-2">
        <ul>
          <li className="list-disc ml-4 mb-2"><span className="font-bold">Name:</span> {name}</li> 
          <ul className="ml-6 list-none">
            <li className="mb-1"><span className="font-bold">Number of eyes:</span> {num_eyes}</li>
            {num_mouths && <li className="mb-1"><span className="font-bold">Number of mouths:</span> {num_mouths}</li>}
            {num_arms && <li className="mb-1"><span className="font-bold">Number of arms:</span> {num_arms}</li>}
            {num_wings && <li className="mb-1"><span className="font-bold">Number of wings:</span> {num_wings}</li>}
            {num_tentacles && <li className="mb-1"><span className="font-bold">Number of tentacles:</span> {num_tentacles}</li>}
            {num_tails && <li className="mb-1"><span className="font-bold">Number of tails:</span> {num_tails}</li>}
          </ul>
        </ul>
        <div className="flex gap-24 justify-center p-1">
            <Button variant={"secondary"}>Edit</Button>
            <Button variant={"destructive"} onClick={() => handleDelete(id)}>Delete</Button>
        </div>
      </div>
    );
  }
export default MonsterCard;
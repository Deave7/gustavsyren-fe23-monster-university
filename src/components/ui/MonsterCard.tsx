import { Button } from "./button";
import { useContext } from "react";
import { MonsterContext } from "../context/MonsterContext";
import { useNavigate } from "react-router-dom";
import useToggle from "@/hooks/useToggle";




interface MonsterCardProps {
    id: string
    name: string
    origin: string
    num_eyes: number
    num_mouths?: number
    num_arms?: number
    num_wings?: number
    num_tentacles?: number
    num_tails?: number
    magicAbility: string[]
    scienceAbility: string[]
    description: string;
  }

  

  const MonsterCard: React.FC<MonsterCardProps> = ({
    id, 
    name,
    num_eyes,
    num_mouths,
    num_arms,
    num_wings,
    num_tentacles,
    num_tails,
    origin,
    magicAbility,
    scienceAbility,
    description,
  }) => {
    const { dispatch, state } = useContext(MonsterContext)
    const navigate = useNavigate()
    const [showDetails, toggleShowDetails] = useToggle(false)

    const handleDelete = (id: string) => {
      dispatch({ type: 'DELETE', payload: id})
    }

    const handleEdit = (id: string) => {
      navigate(`/menu/edit/${id}`)
      dispatch({ type: 'TOGGLE_EDIT'})
    }
    return ( 
        <div id={id} className="bg-primary text-white rounded-lg shadow-md p-4 mb-2">
        <ul>
          <li className="list-disc ml-4 mb-2"><span className="font-bold">Name:</span> {name}</li> 
          <li className="ml-6"><span className="font-bold">Origin:</span> <p className="ml-4">{origin}</p></li>
          {showDetails && ( <ul className="ml-6 list-none">
            <li className="mb-1"><span className="font-bold">Description:</span> <p className="ml-4">{description}</p></li>
            <li className="mb-1"><span className="font-bold">Magic:</span> {magicAbility.map((ability, index) => (
              <p key={index} className="mb-1 ml-4">{ability}</p>
            ))}</li>
            <li className="mb-1"><span className="font-bold">Science:</span> {scienceAbility.map((ability, index) => [
              <p key={index} className="mb-1 ml-4">{ability}</p>
            ])}</li>
            <li className="mb-1"><span className="font-bold">Number of eyes:</span> <p className="ml-4">{num_eyes}</p></li>
            {num_mouths && <li className="mb-1"><span className="font-bold">Number of mouths:</span> <p className="ml-4">{num_mouths}</p></li>}
            {num_arms && <p className="mb-1"><span className="font-bold">Number of arms:</span> <li className="ml-4">{num_arms}</li></p>}
            {num_wings && <p className="mb-1"><span className="font-bold">Number of wings:</span> <li className="ml-4">{num_wings}</li></p>}
            {num_tentacles && <li className="mb-1"><span className="font-bold">Number of tentacles:</span> <p className="ml-4">{num_tentacles}</p></li>}
            {num_tails && <p className="mb-1"><span className="font-bold">Number of tails:</span> <li className="ml-4">{num_tails}</li></p>}
          </ul>)}
        </ul>
        <div className="flex gap-8 justify-center p-3">
            {!state.editMode && <Button variant={"secondary"} onClick={toggleShowDetails}>{!showDetails ? 'Details' : 'Hide' }</Button>}
            {!state.editMode &&<Button variant={"secondary"} onClick={() => handleEdit(id)}>Edit</Button>}
            {!state.editMode &&<Button variant={"destructive"} onClick={() => handleDelete(id)}>Delete</Button>}
        </div>
      </div>
    );
  }
export default MonsterCard;
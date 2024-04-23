import { MonsterContext } from "@/components/context/MonsterContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

function MonsterEdit() {
  const { state, dispatch } = useContext(MonsterContext);
  const { id } = useParams<{ id: string }>();

  const monster = state.monsters.find((monster) => monster.id === id);

  const handleClick = () => {
    dispatch({type: 'EDIT', payload: monster!})
    dispatch({type: 'TOGGLE_EDIT'})
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const {name, value} = e.currentTarget

   if (monster && (name in monster)) {
    monster[name] = value;
    console.log(monster)
  }

};

  return (
    <div className="flex flex-col items-center w-96 mt-2 bg-indigo-300 m-2 rounded p-6 flex justify-start gap-10 font-serif">
      <ul className="list-none">
        <li className="mb-2">
          First Name:
          <br />
          <input
            name="first_name"
            className="border rounded px-2 py-1"
            type="text"
            defaultValue={monster!.first_name}
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li className="mb-2">
          Last Name:
          <br />
          <input
            name="last_name"
            className="border rounded px-2 py-1"
            type="text"
            defaultValue={monster!.last_name}
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li className="mb-2">
          Description:
          <br />
          <textarea
            name="description"
            rows={5}
            className="rounded px-2 py-1 h-auto min-h-[3rem]"
            defaultValue={monster!.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </li>
        <li className="mb-2">
          Origin:
          <br />
          <input
            name="origin"
            className="h-auto border rounded px-2 py-1"
            type="text"
            defaultValue={monster!.origin}
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li className="mb-2">
          Number of Eyes:
          <br />
          <input
            name="num_eyes"
            className="border rounded px-2 py-1"
            type="number"
            defaultValue={monster!.num_eyes}
            onChange={(e) => handleChange(e)}
          />
        </li>
        {monster?.num_horns && (
          <li className="mb-2">
            Number of Horns: <br />
            <input
              name="num_horns"
              className="border rounded px-2 py-1"
              type="number"
              defaultValue={monster.num_horns}
              onChange={(e) => handleChange(e)}
            />
          </li>
        )}
        {monster?.num_arms && (
          <li className="mb-2">
            Number of Arms: <br />
            <input
              name="num_arms"
              className="border rounded px-2 py-1"
              type="number"
              defaultValue={monster.num_arms}
              onChange={(e) => handleChange(e)}
            />
          </li>
        )}
        {monster?.num_wings && (
          <li className="mb-2">
            Number of Wings: <br />
            <input
              name="num_wings"
              className="border rounded px-2 py-1"
              type="number"
              defaultValue={monster.num_wings}
              onChange={(e) => handleChange(e)}
            />
          </li>
        )}
        {monster?.num_tentacles && (
          <li className="mb-2">
            Number of Tentacles: <br />
            <input
              name="num_tentacles"
              className="border rounded px-2 py-1"
              type="number"
              defaultValue={monster.num_tentacles}
              onChange={(e) => handleChange(e)}
            />
          </li>
        )}
        {monster?.num_tails && (
          <li className="mb-2">
            Number of Tails: <br />
            <input
              name="num_tails"
              className="border rounded px-2 py-1"
              type="number"
              defaultValue={monster.num_tails}
              onChange={(e) => handleChange(e)}
            />
          </li>
        )}
      </ul>
      <Link to={'/menu/list'}><Button onClick={handleClick}>Save</Button></Link>
    </div>
  );
}

export default MonsterEdit;

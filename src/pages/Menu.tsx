import { MonsterContext } from "@/components/context/MonsterContext";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

function Menu() {
    const { dispatch } = useContext(MonsterContext)
    return ( 
    <div className="flex gap-2">
        <div className="flex flex-col items-center w-64 mt-2 h-[calc(100vh-1rem)] bg-indigo-300 m-2 rounded p-3 flex justify-start gap-10 font-serif text-4xl">
           <h2>Menu</h2>
            <Link to={'/menu/list'}><Button className="min-w-56" onClick={() => dispatch({ type: 'TOGGLE_EDIT'})}>Monster List</Button></Link>
            <Link to={'/menu/add'}><Button className="min-w-56" >Add Monster</Button></Link>
            <Link to={'/menu/statistics'}><Button className="min-w-56" >Monster Statistics</Button></Link>
        </div> 
        <div>
         <Outlet/>
        </div>
    </div>
    );
}

export default Menu;
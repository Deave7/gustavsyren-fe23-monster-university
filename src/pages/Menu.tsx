import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate()

    const handleClick = (path: string) => {
        navigate(path)
    }

    return ( 
    <div className="flex gap-2">
        <div className="flex flex-col items-center w-64 mt-2 h-[calc(100vh-1rem)] bg-indigo-300 m-2 rounded p-3 flex justify-start gap-10 font-serif text-4xl">
           <h2>Menu</h2>
           <Button className="min-w-56" onClick={() => handleClick('/menu/list')}>Monster List</Button>
            <Button className="min-w-56" onClick={() => handleClick('/menu/add')}>Add Monster</Button>
            <Button className="min-w-56" onClick={() => handleClick('/menu/statistics')}>Monster Statistics</Button>
        </div> 
        <div>
         <Outlet/>
        </div>
    </div>
    );
}

export default Menu;
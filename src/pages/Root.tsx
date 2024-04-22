import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";




function Root() {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate('/menu')
    }

    return (
        <div className="flex justify-center items-center bg-indigo-300 w-screen h-screen font-serif">
            <div className="flex flex-col items-center border-2 rounded border-black p-5 gap-5">
                <h1 className="text-7xl">Welcome to Monsters University!</h1>
                <p className="text-lg">This is a app that lets you see a list of Monsters!</p>
                <Button onClick={handleClick}>Start</Button>
            </div>
        </div>
    );
}

export default Root;
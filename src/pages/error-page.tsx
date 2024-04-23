import { Button } from "@/components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/menu')
  }

  return (
    <div className="flex justify-center items-center bg-indigo-300 w-screen h-screen font-serif ">
      <div className="flex flex-col justify-center text-center gap-2 border-2 rounded border-black p-5 gap-5">
        <h1 className="text-7xl">Oops!</h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <Button onClick={handleClick}>Back</Button>
      </div>
    </div>
  );
}
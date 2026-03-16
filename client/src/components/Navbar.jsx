import { useNavigate } from "react-router-dom";

export default function Navbar(){

  const navigate = useNavigate();

  const logout = ()=>{

    localStorage.removeItem("token");

    navigate("/");

  }

  return(

    <div className="bg-gray-800 p-4 flex justify-between items-center">

      <h1 className="text-xl font-bold text-green-400">
        CodeJudge
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>

    </div>

  )

}
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function RegisterPage(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const register = async()=>{

    try{

      await api.post("/auth/register",{
        name,
        email,
        password
      });

      navigate("/");

    }
    catch(err){

      setError("User already exists");

    }

  }

  return(

    <div className="flex items-center justify-center h-screen bg-gray-900">

      <div className="bg-gray-800 p-8 rounded w-96">

        <h1 className="text-white text-2xl mb-6 text-center">
          Register
        </h1>

        {error && (
          <p className="text-red-500 mb-3">{error}</p>
        )}

        <input
          className="block mb-3 p-2 w-full rounded"
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="block mb-3 p-2 w-full rounded"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="block mb-3 p-2 w-full rounded"
          placeholder="Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="bg-green-500 px-4 py-2 w-full rounded hover:bg-green-600"
        >
          Register
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link to="/" className="text-green-400">
            Login
          </Link>
        </p>

      </div>

    </div>

  )

}
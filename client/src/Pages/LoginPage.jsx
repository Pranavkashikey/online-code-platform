import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

export default function LoginPage(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const login = async()=>{

    try{

      const res = await api.post("/auth/login",{
        email,
        password
      });

      localStorage.setItem("token",res.data.token);

      navigate("/dashboard");

    }
    catch(err){

      setError("Invalid email or password");

    }

  }

  return(

    <div className="flex items-center justify-center h-screen bg-gray-900">

      <div className="bg-gray-800 p-8 rounded w-96">

        <h1 className="text-white text-2xl mb-6 text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-500 mb-3">{error}</p>
        )}

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
          onClick={login}
          className="bg-green-500 px-4 py-2 w-full rounded hover:bg-green-600"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-400">
            Register
          </Link>
        </p>

      </div>

    </div>

  )

}
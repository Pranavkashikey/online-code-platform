import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){

  const [problems,setProblems] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    const fetchProblems = async()=>{

      try{

        const res = await api.get("/problems");

        setProblems(res.data);

      }
      catch(err){

        console.log(err);

      }

    }

    fetchProblems();

  },[])

  const openProblem = (id)=>{

    navigate(`/editor/${id}`)

  }

  return(

    <div className="bg-gray-900 min-h-screen text-white">

      <Navbar/>

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Coding Problems
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {problems.map((problem)=>(
            
            <div
              key={problem._id}
              className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition"
            >

              <h2 className="text-xl font-semibold mb-2">
                {problem.title}
              </h2>

              <p className="text-gray-400 mb-4">
                {problem.description.slice(0,80)}...
              </p>

              <span
                className={`px-3 py-1 text-sm rounded
                ${
                  problem.difficulty==="Easy"
                  ? "bg-green-600"
                  : problem.difficulty==="Medium"
                  ? "bg-yellow-600"
                  : "bg-red-600"
                }`}
              >
                {problem.difficulty}
              </span>

              <button
                onClick={()=>openProblem(problem._id)}
                className="block mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Solve
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  )

}
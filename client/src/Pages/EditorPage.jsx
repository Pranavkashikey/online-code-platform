import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import OutputConsole from "../components/OutputConsole";
import api from "../services/api";

export default function EditorPage(){

  const [code,setCode] = useState("// write code here");
  const [language,setLanguage] = useState("javascript");
  const [input,setInput] = useState("");
  const [output,setOutput] = useState("");

  const runCode = async()=>{

    const res = await api.post("/code/execute",{
      language,
      code,
      input
    });

    setOutput(res.data.output);

  }

  return(

    <div className="bg-gray-900 min-h-screen text-white flex flex-col">

      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-gray-800">

        <h1 className="text-lg font-bold">
          Problem Editor
        </h1>

        <div className="flex gap-3">

          {/* Language Selector */}
          <select
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
            className="bg-gray-700 p-2 rounded"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>

          <button
            onClick={runCode}
            className="bg-green-500 px-4 py-2 rounded"
          >
            Run
          </button>

          <button
            className="bg-blue-500 px-4 py-2 rounded"
          >
            Submit
          </button>

        </div>

      </div>


      {/* Middle Section */}
      <div className="flex flex-1">

        {/* Problem Description */}
        <div className="w-1/2 p-6 overflow-auto bg-gray-850 border-r border-gray-700">

          <h2 className="text-2xl font-bold mb-4">
            Two Sum
          </h2>

          <p className="text-gray-300 mb-4">
            Given an array of integers nums and an integer target,
            return indices of the two numbers such that they add up to target.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Example
          </h3>

          <pre className="bg-gray-800 p-4 rounded">
Input: nums = [2,7,11,15], target = 9  
Output: [0,1]
          </pre>

        </div>


        {/* Code Editor */}
        <div className="w-1/2">

          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
          />

        </div>

      </div>


      {/* Bottom Section */}
      <div className="grid grid-cols-2 bg-gray-800">

        {/* Testcases */}
        <div className="p-4 border-r border-gray-700">

          <h3 className="font-semibold mb-2">
            Testcases
          </h3>

          <textarea
            className="w-full h-32 bg-gray-900 p-3 rounded"
            placeholder="Custom Input"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />

        </div>


        {/* Output */}
        <div className="p-4">

          <h3 className="font-semibold mb-2">
            Output
          </h3>

          <OutputConsole output={output}/>

        </div>

      </div>

    </div>

  )

}
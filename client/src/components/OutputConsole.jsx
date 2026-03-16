export default function OutputConsole({output}){

  return(

    <div className="bg-black text-green-400 p-4 h-32 overflow-auto rounded">
      <pre>{output}</pre>
    </div>

  )

}
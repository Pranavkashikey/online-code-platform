import Editor from "@monaco-editor/react";

export default function CodeEditor({code,setCode,language}){

  return(

    <Editor
      height="100%"
      theme="vs-dark"
      language={language}
      value={code}
      onChange={(value)=>setCode(value)}
    />

  )

}
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";
import EditorPage from "../Pages/EditorPage";
import Dashboard from "../Pages/Dashboard";
import RegisterPage from "../Pages/RegisterPage";
export default function AppRoutes(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage/>}/>
         <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/editor/:problemId" element={<EditorPage/>}/>

      </Routes>

    </BrowserRouter>

  )

}
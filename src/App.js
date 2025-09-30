import React from "react";

import { Routes, Route} from "react-router-dom";
import LoginForm from "./components/login";
import Home from "./components/homepage";
import SignupForm from "./components/signup";


function App(){

  return (

    <>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
         {/* ✅ Protected Route */}

        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
    </>
  )
}

export default App;
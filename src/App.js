import React from "react";

import { Routes, Route} from "react-router-dom";

import Home from "./components/homepage";
import { Contact } from "lucide-react";



function App(){

  return (

    <>
      <Routes>


        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />


      </Routes>
    </>
  )
}

export default App;
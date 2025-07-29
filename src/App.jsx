import { useEffect, useState } from 'react'
import './App.css'
import Landing from './Pages/Landing';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import { Toaster } from 'react-hot-toast';


function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     <Toaster position="top-center" reverseOrder={false} />
     </Router>
    
    </>
  )
}

export default App

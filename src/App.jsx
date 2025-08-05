import { useEffect, useState } from 'react'
import './App.css'
import Landing from './Pages/Landing';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import { Toaster } from 'react-hot-toast';
import Course1 from './Pages/Course1';
import OTP from './Pages/OTP';
import CourseDetail from "./Pages/CourseDetail";

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/otp" element={<OTP />} />
         <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
     <Toaster position="top-center" reverseOrder={false} />
     </Router>
    
    </>
  )
}

export default App

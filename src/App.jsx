import { useEffect, useState } from 'react'
import './App.css'
import Landing from './Pages/Landing';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import AddService from './Pages/AddService';
import Services from './Pages/Services';
import BookService from './Pages/BookService';
import { Toaster } from 'react-hot-toast';
import SubServices from "./Pages/SubServices";
import Bookings from './Pages/Bookings';


function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/addservice" element={<AddService />} />
          <Route path="/services" element={<Services />} />
           <Route path="/bookservice" element={<BookService />} />
           <Route path="/services/:id" element={<SubServices />} />
             <Route path="/bookings" element={<Bookings />} />
      </Routes>
     <Toaster position="top-center" reverseOrder={false} />
     </Router>
    
    </>
  )
}

export default App

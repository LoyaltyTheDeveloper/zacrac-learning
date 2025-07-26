import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Icon from "../Images/logo.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const navigate = useNavigate();
   const { isAuthenticated, setIsAuthenticated, setToken, setUser } = useAuth();

   const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
     navigate('/signin'); 
   }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);


    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   const navLinks = (
    <>
      <li onClick={()=> navigate("/")} className="cursor-pointer text-[#DA9F87]">Home</li>
      <li className="cursor-pointer text-[#DA9F87]">Contact</li>
       <li onClick={()=> navigate("/services")} className="cursor-pointer text-[#DA9F87]">Services</li>
     {isAuthenticated === true && (<>  <li className="cursor-pointer text-[#DA9F87]" onClick={()=> navigate("/bookings")}>My Bookings</li> </>)}

        {!isAuthenticated === true && (<>
        <div className='flex gap-x-2'>
          <div className="cursor-pointer underline text-[#DA9F87]" onClick={()=> navigate("/signup")}>
           Signup
         </div>
         Or
          <div className="cursor-pointer underline text-[#DA9F87]" onClick={()=> navigate("/signin")}>
           Signin
         </div>
         </div>
       </> ) }
    </>
  );
  

  return (
      <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w- 7xl mx-auto px-4 py-4 flex justify-between items-center">
        
         <img src={Icon} onClick={()=> navigate("/")} alt="Logo" className="h-[60px] md:h-[80px] lg:h-[80px] cursor-pointer"/>
        
          <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
            {navLinks}
          </ul>

        
          <div className="md:hidden lg:hidden">
             <button onClick={() => setSidebarOpen(true)}>
                <GiHamburgerMenu className={`size-[30px] ${
          scrolled ? 'text-[black]' : 'text-[#DA9F87]'
        }`}/>
            </button>
          </div>


<div className='flex gap-2 items-center hidden md:flex lg:flex'>
          <div onClick={()=> navigate("/services")} className="hidden md:flex lg:flex bg-[#DA9F87] text-white px-6 py-2 shadow cursor-pointer transition">
           Book now
         </div>

        {isAuthenticated === true && (<div className="hidden text-[#DA9F87] md:flex lg:flex bg-transparent border border-[#DA9F87] px-6 py-2 shadow cursor-pointer transition" onClick={logout}>
           Log out
         </div>) }
</div>


        </div>
      </nav>

    
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src={Icon} alt="Logo" className="h-[60px] md:h-[80px] lg:h-[80px] cursor-pointer"/>
          <button onClick={() => setSidebarOpen(false)}>
          <IoMdClose className='size-[30px]'/>
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-gray-800 font-medium p-6">
        {navLinks}
     <div onClick={()=> navigate("/services")} className="bg-[#DA9F87] mt-2 text-white px-2 py-2 text-center shadow cursor-pointer transition">
           Book now
         </div> 

       {isAuthenticated === true && (<div className="text-[#DA9F87] border border-[#DA9F87] px-2 py-2 text-center cursor-pointer" onClick={logout}>Logout</div>) }

        </ul>  
         
      </div>
      

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;

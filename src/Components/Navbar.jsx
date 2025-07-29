import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../Images/zacrac logo.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";
import logo2 from "../Images/navimage.svg";



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
   const [sidebarOpen, setSidebarOpen] = useState(false);



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
    
      <li onClick={()=> navigate("/")} className="cursor-pointer">Courses</li>
       <li onClick={()=> navigate("/services")} className="cursor-pointer">Reviews</li>
         <li onClick={()=> navigate("/services")} className="cursor-pointer">Contact Us</li>
       
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
        
         <img src={logo} onClick={()=> navigate("/")} alt="Logo" className="w-56 h-[60px] md:h-[80px] lg:h-[80px] cursor-pointer"/>
        
          <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
            {navLinks}
          </ul>

            <div className='flex gap-x-2 hidden lg:flex'>

        <div className='relative'> 
          <div className='absolute text-[11px] text-[white] bg-[red] rounded-[20px] px-1.5 left-6'>4</div>
           <CiBookmark className='size-9 p-2 bg-gray-300 rounded-[20px]'/> 
           </div>

          <img src={logo2}/>

         </div>

        
          <div className="md:hidden lg:hidden">
             <button onClick={() => setSidebarOpen(true)}>
                <GiHamburgerMenu className={`size-[30px] ${
          scrolled ? 'text-[black]' : 'text-[gray]'
        }`}/>
            </button>
          </div>

        </div>
      </nav>

    
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src={logo} alt="Logo" className="w-44 h-[60px] md:h-[80px] lg:h-[80px] cursor-pointer"/>
          <button onClick={() => setSidebarOpen(false)}>
          <IoMdClose className='size-[30px]'/>
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-gray-800 font-medium p-6">
        {navLinks}

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

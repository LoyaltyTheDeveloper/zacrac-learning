import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import authImage from "../Images/auth-image.svg";
import Google from "../Components/Google"
import Facebook from "../Components/FacebookIcon";
import logo from "../Images/zacrac logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';
import { waveform } from 'ldrs'
import { ring2 } from 'ldrs'

waveform.register()


function OTP() {

   
     const [showPassword, setShowPassword] = useState(false);
       const [otp, setOtp] = useState("");
      const [message, setMessage] = useState("");
      const navigate = useNavigate();
      const [isLoading, setIsLoading] = useState(false);
      
     
       const location = useLocation();
       const { email } = location?.state || {};
      
    
      const handleChange = (e) => {
        setOtp(e.target.value);
      }

      const handleSubmit = async (e) => {
         e.preventDefault();
   setIsLoading(true);
 

   if(!otp){
    toast.error("Input OTP!");
     setIsLoading(false);
    return;
   }

    try {
      const res = await fetch("https://zacraclearningwebsite.onrender.com/api/v1/user/verifyotp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email, otp
       } ),
      });
      const data = await res.json();
      if (res.ok) {
        setIsLoading(false);
        toast.success(data.message);
        navigate("/signin"); 
      } else {
        setIsLoading(false);
       toast.error(data.message);
        return;
      }
     
    } catch (err) {
       setIsLoading(false);
      toast.error("Error connecting to server");
      return;
    }
  };


  return (<>

   {isLoading && (
        <div className="fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen bg-black bg-opacity-20 z-50">
          <l-waveform size="50" stroke="4" speed="1" color="black"></l-waveform>
        </div>
      )}

   <div className="flex min-h-screen items-center justify-center">
    
  

      <div className="flex-1 flex flex-col gap-y-20 max-w-md lg:max-w-lg lg:ml-[200px]">


          <div className="flex-row lg:flex items-center justify-between">
      <img src={logo} className="cursor-pointer"/>

      {/* <div className="flex gap-x-1">
      <div>Don't have an account?</div>
      <div className="text-[#484ED1]">Sign Up</div>
      </div> */}

    </div>



    <div>
        
        <h2 className="text-3xl font-semibold mb-6">Confirm Email</h2>
        <form className="space-y-12">
       
         

    
          <div className="flex items-center border-b border-gray-400 pb-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="otp"
              className="w-full outline-none bg-transparent"
              value={otp}
              onChange={handleChange}
              name="otp"
            />
          </div>

       
         
{/* 
    <div className="flex gap-x-1">
       <div>Forgotten Password?</div>
   <div className="text-[#8C1823] underline">Reset</div>
    </div> */}
  
    

          <div className="flex items-center flex-col lg:flex-row gap-y-4 justify-between">

         <div>
          <button onClick={handleSubmit} className="px-20 bg-[#4D148C] text-white py-3 rounded-[40px] mt-6 py-4">
            Proceed
          </button>
          </div>

 {/* <div className="relative flex items-center items-center">
    <div className="flex-grow border-t w-8 border-gray-400"></div>
    <span className="flex-shrink mx-1 text-gray-400">Or</span>
    <div className="flex-grow border-t w-8 border-gray-400"></div>
</div>

<div className="flex gap-x-1">
  <Facebook/>
  <Google/>
</div> */}

          </div>


        </form>
      </div>
</div>

      <div className="hidden lg:flex flex-1 justify-end">
        <img
          src={authImage}
          alt="Signup Illustration"
          className="w-[550px] h-[780px] object-cover"
        />
      </div>
    </div>
  </>)
}

export default OTP

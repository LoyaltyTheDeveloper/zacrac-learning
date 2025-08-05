import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import authImage from "../Images/auth-image.svg";
import Google from "../Components/Google"
import Facebook from "../Components/FacebookIcon";
import logo from "../Images/zacrac logo.svg";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { waveform } from 'ldrs'
import { ring2 } from 'ldrs'

waveform.register()


function Signup() {
   const [showPassword, setShowPassword] = useState(false);
   const [form, setForm] = useState({ name: "", email: "", password: ""});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [password2, setPassword2] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleChange2 = (e) => {
    setPassword2(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   setIsLoading(true);

    if(!form.name || !form.email || !form.password || !password2){
      toast.error("Fill in all fields");
      setIsLoading(false);
      return
    }

   if(form.password !== password2){
    toast.error("Passwords do not match");
    setIsLoading(false);
    return;
   }

    try {
      const res = await fetch("https://zacraclearningwebsite.onrender.com/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setIsLoading(false);
        toast.success(data.message);
        navigate("/otp", {state: {email: form.email}}); 
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
      <div className="flex gap-x-1">
      <div>Already have an account?</div>
      <div onClick={()=>navigate("/signin")} className="text-[#484ED1] cursor-pointer">Sign In</div>
      </div>
    </div>



    <div>
        <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
        <form className="space-y-12">
       
          <div className="flex items-center border-b border-gray-400 pb-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none bg-transparent"
              value={form.name}
              onChange={handleChange}
              name="name"
            />
          </div>

    
          <div className="flex items-center border-b border-gray-400 pb-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none bg-transparent"
              value={form.email}
               onChange={handleChange}
               name="email"
            />
          </div>

       
         <div className="flex items-center border-b border-gray-400 pb-2">
      <FaLock className="text-gray-500 mr-3" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full outline-none bg-transparent"
         value={form.password}
         onChange={handleChange}
         name="password"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-gray-500 ml-3 focus:outline-none"
       
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>

      
          <div className="flex items-center border-b border-gray-400 pb-2">
      <FaLock className="text-gray-500 mr-3" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Re-enter Password"
        className="w-full outline-none bg-transparent"
        value={password2}
        onChange={handleChange2}
        name="password"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-gray-500 ml-3 focus:outline-none"
        
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>


          <div className="flex items-center flex-col lg:flex-row gap-y-4 justify-between">

         <div>
          <button onClick={handleSubmit} className="px-20 bg-[#4D148C] text-white py-3 rounded-[40px] mt-6 py-4">
            Sign Up
          </button>
          </div>

 <div className="relative flex items-center items-center">
    <div className="flex-grow border-t w-8 border-gray-400"></div>
    <span className="flex-shrink mx-1 text-gray-400">Or</span>
    <div className="flex-grow border-t w-8 border-gray-400"></div>
</div>

<div className="flex gap-x-1">
  <Facebook/>
  <Google/>
</div>

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
 

  

 </> )
}

export default Signup

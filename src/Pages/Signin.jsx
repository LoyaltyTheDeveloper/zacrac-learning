import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import authImage from "../Images/auth-image.svg";
import Google from "../Components/Google"
import Facebook from "../Components/FacebookIcon";
import logo from "../Images/zacrac logo.svg";


function Signin() {
   const [showPassword, setShowPassword] = useState(false);

  return (<>
   <div className="flex min-h-screen items-center justify-center">
    
  

      <div className="flex-1 flex flex-col gap-y-20 max-w-md lg:max-w-lg lg:ml-[200px]">


          <div className="flex-row lg:flex items-center justify-between">
      <img src={logo} className="cursor-pointer"/>
      <div className="flex gap-x-1">
      <div>Don't have an account?</div>
      <div className="text-[#484ED1]">Sign Up</div>
      </div>
    </div>



    <div>
        <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
        <form className="space-y-12">
       
         

    
          <div className="flex items-center border-b border-gray-400 pb-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none bg-transparent"
            />
          </div>

       
         <div className="flex items-center border-b border-gray-400 pb-2">
      <FaLock className="text-gray-500 mr-3" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full outline-none bg-transparent"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="text-gray-500 ml-3 focus:outline-none"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
      
    </div>

    <div className="flex gap-x-1">
       <div>Forgotten Password?</div>
   <div className="text-[#8C1823] underline">Reset</div>
    </div>
  
    

          <div className="flex items-center flex-col lg:flex-row gap-y-4 justify-between">

         <div>
          <button className="px-20 bg-[#4D148C] text-white py-3 rounded-[40px] mt-6 py-4">
            Sign In
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

export default Signin

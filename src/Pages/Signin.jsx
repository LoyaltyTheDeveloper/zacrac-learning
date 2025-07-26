import { useEffect, useState } from "react";
import logo from "../Images/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { waveform } from 'ldrs'
waveform.register()
import { FaLocationArrow, FaTimes, FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';

export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { signin, user, setUser, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

  // useEffect(()=> {
  //   if(isAuthenticated){
  //     navigate("/");
  //   }
  // }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
      setIsLoading(true);
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
          setIsLoading(false);
        signin(data.token, form.email); 
        // setUser(form.email);
        toast.success(data.message);
        navigate("/");
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

    {/* {isLoading &&(
   
   <div className="fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen bg-[black] bg-opacity-20 z-50">
    <l-waveform
  size="50"
  stroke="4"
  speed="1" 
  color="black" 
></l-waveform>
</div>

  )}
 
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-[350px] md:w-[450px] lg:w-[450px] p-6 border rounded-xl shadow-lg bg-white">
        <img src={logo} alt="Logo" className="h-[80px] mx-auto mb-4 cursor-pointer" onClick={()=> navigate("/")}/>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">Welcome Back!</h2>
        <h1 className="text-center mb-4">We are glad to have you back with us</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Sign In
      </button>
       <div className="mt-3">Don't have an account? <span><Link to="/signup">Create an account</Link></span></div>
    </form>
  </div>
</div> */}

  {isLoading && (
        <div className="fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen bg-black bg-opacity-20 z-50">
          <l-waveform size="50" stroke="4" speed="1" color="black"></l-waveform>
        </div>
      )}

     
      <div className="min-h-screen flex items-center justify-center py-12 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#FFE3D7" }}>
        <div className="w-full max-w-md">
          <div 
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #FFE3D7 100%)'
            }}
          >
          
            <div className="text-center py-8 px-8" style={{ backgroundColor: "#DA9F87" }}>
              <img 
                src={logo || "/placeholder.svg"} 
                alt="Logo" 
                className="h-20 mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform duration-300 filter brightness-0 invert" 
                onClick={() => navigate("/")}
              />
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back!</h2>
              <p className="text-white/90">We are glad to have you back with us.</p>
            </div>

        
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
            
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2" style={{ color: "#DA9F87" }} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300 pl-12"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23DA9F87' strokeWidth='0' strokeDasharray='0' strokeDashoffset='0' strokeLinecap='square'/%3e%3c/svg%3e")`,
                    }}
                  />
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" style={{ marginTop: '12px' }} />
                </div>

           
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaLock className="inline mr-2" style={{ color: "#DA9F87" }} />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300 pl-12 pr-12"
                    />
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

            
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-white"
                  style={{ backgroundColor: "#DA9F87" }}
                >
                  <FaUserPlus className="group-hover:animate-bounce" />
                  Sign In
                </button>

             
                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link 
                      to="/signup" 
                      className="font-semibold hover:underline transition-all duration-300"
                      style={{ color: "#DA9F87" }}
                    >
                      Signup here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

        
          <div className="text-center mt-8">

            {/* <p className="text-gray-600 text-sm">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p> */}

          </div>
        </div>
      </div>




 </> );
}

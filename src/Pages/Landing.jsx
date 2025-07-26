import React from 'react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../Images/ashe1.jpg';
import img2 from '../Images/ashe2.jpg';
import img3 from '../Images/ashe3.jpg';
import img4 from '../Images/ashe4.jpg';
import img5 from '../Images/ashe5.jpg';
import img6 from '../Images/ashe6.jpg';
import img7 from '../Images/ashe7.png';
import img8 from '../Images/ashe8.jpg';

import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { FiUsers } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Footer from '../Components/Footer';


const images = [
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
];

function Landing() {

      const [index, setIndex] = useState(0);
      const navigate = useNavigate();
    
      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((i) => (i + 1) % images.length);
        }, 8000); 
    
        return () => clearInterval(interval);
      }, []);

  useEffect(() => {
        AOS.init({ duration: 2000, once: true }); 
      }, []);
     

  return (<>
  <Navbar />
      <div>
     <div className="relative w-full h-[400px] md:h-[900px] lg:h-[900px] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={images[index]}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

         <div className="absolute left-4 top-1/2 lg:top-1/3 -translate-y-1/2 flex items-center justify-centr lg:px-4">

         <div>
    <h2 className="text-white text-2xl md:text-4xl font-bold text-centr px- 4" data-aos="fade-right">
      Welcome to 
    </h2>
    <h1 className="text-white text-5xl md:text-7xl font-bold text-centr px- 4" data-aos="fade-left">
      Ashe Beauty
    </h1>

   <button onClick={()=> navigate("/services")} className="bg-[#DA9F87] text-md py-2 md:text-lg lg:text-xl mt-4 text-white px-2 md:px-6 lg:px-6 lg:py-3 text-center shadow cursor-pointer transition" data-aos="fade-down">
           Book an appointment
    </button>

    </div>
  </div>
      </div>

       <div className="min-h-screen bg-white">
      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#FFE3D7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <div className="mb-6 text-sm mx-[80px] lg:mx-[500px] cursor-pointer py-2 text-xl" onClick={()=> navigate("/services")} style={{ backgroundColor: "#DA9F87", color: "white" }}>
             Explore Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Transform Your Beauty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience professional beauty services that enhance your natural elegance and boost your confidence
            </p>
          </div>

        
          
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="mb-4 text-sm px-4 w-[200px] text-center py-2 text-lg justify-start" style={{ backgroundColor: "#FFE3D7", color: "#DA9F87" }}>
                About Ashe Beauty
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Where Beauty Meets Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Ashe Beauty, we believe every woman deserves to feel confident and beautiful. With years of
                experience in the beauty industry, we specialize in traditional African beauty techniques combined with
                modern styling approaches.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: "#DA9F87" }}>
                    500+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: "#DA9F87" }}>
                    5+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <button size="lg" style={{ backgroundColor: "#DA9F87" }} className="hover:opacity-90 text-white p-2">
                Learn More About Us
              </button>
            </div>
            <div data-aos="fade-up">
              <div className="relative">
                <img
                  src={img2}
                  alt="About Ashe Beauty"
                  width={500}
                  height={600}
                  className="w-full w-[20px h-[600px] object-cover rounded-3xl shadow-2xl"
                />


                <div
                  className="absolute -bottom-6 -left-4 w-28 h-28 rounded-full"
                  style={{ backgroundColor: "#FFE3D7" }}
                ></div>
                <div
                  className="absolute -top-6 -right-4 w-28 h-28 rounded-full"
                  style={{ backgroundColor: "#DA9F87" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#FFE3D7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Ashe Beauty?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional beauty services that exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              
              <div className=''>
              <FiUsers
                className="size-[80px] p-3 mx-auto mb-6 text-[white] rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#DA9F87" }}
              />
               
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Artists</h3>
              <p className="text-gray-600">
                Trained professionals with years of experience in beauty and traditional styling
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div>
              <FaAward
                className="size-[80px] p-3 mx-auto mb-6 text-[white] rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#DA9F87" }}
              />
              
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Products</h3>
              <p className="text-gray-600">We use only premium, skin-friendly products for all our services</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div>
              <FaRegClock
                className="size-[80px] p-3 mx-auto mb-6 text-[white] rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#DA9F87" }}
              />
              
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Timing</h3>
              <p className="text-gray-600">Convenient appointment scheduling to fit your busy lifestyle</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div>
              <FaRegStar
                className="size-[80px] p-3 mx-auto mb-6 text-[white] rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#DA9F87" }}
              />
                <div className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">5-div Service</h3>
              <p className="text-gray-600">Consistently rated excellent by our satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#DA9F87" }}>
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Look?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Ashe Beauty difference. Let us help you look and feel your
            absolute best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick ={()=> navigate("/bookservice")} size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
              Book Appointment
            </button>
            <button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              Call Us Now
            </button>
          </div>
        </div>
      </section>

    
 <Footer/>
  
    </div>


        </div>
  </>)
}

export default Landing

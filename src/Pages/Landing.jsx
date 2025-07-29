import React from 'react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { FiUsers } from "react-icons/fi";
import { FaAward } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import Footer from '../Components/Footer';
import hero1 from "../Images/hero1.svg";
import { IoIosArrowForward } from "react-icons/io";
import hero2 from "../Images/hero2.svg";
import { FaCheck } from "react-icons/fa6";
import rust from "../Images/rust.svg";
import powerbi from "../Images/powerbi.svg";
import figma from "../Images/figma.svg";
import spark from "../Images/spark.svg";
import tablea from "../Images/tablea.svg";
import powerapps from "../Images/powerapps.svg";
import kali from "../Images/kali.svg";
import aws from "../Images/aws.svg";
import { FiGift } from "react-icons/fi"
import { RiPresentationLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai"
import { HiArrowRight } from "react-icons/hi"
import { LuArrowUpRight } from "react-icons/lu";
import testimonial from "../Images/testimonial.svg"
import techcabal from "../Images/techcabal.svg"
import techpoint from "../Images/techpoint.svg"
import techcrunch from "../Images/techcrunch.svg"

function Landing() {
  const courses = Array(9).fill(null)

  const curriculumItems = [
    "Introduction to Data Analysis",
    "Data Types and Structures",
    "Excel for Data Analysis",
    "SQL Fundamentals",
    "Python for Data Science",
    "Data Cleaning Techniques",
    "Data Visualization",
    "Statistical Analysis Basics",
    "Dashboard Creation",
    "Communicating Data Insights",
    "Capstone Project",
  ]

  const tools = [
    { name: "R Programming", placeholder: "R logo", image: rust },
    { name: "Power BI", placeholder: "Power BI logo", image: powerbi },
    { name: "Figma", placeholder: "Figma logo", image: figma },
    { name: "Apache Spark", placeholder: "Spark logo", image: spark },
    { name: "Tableau", placeholder: "Tableau logo", image: tablea },
    { name: "PowerApps", placeholder: "PowerApps logo", image: powerapps },
    { name: "Kali Linux", placeholder: "Kali logo", image: kali },
    { name: "AWS", placeholder: "AWS logo", image: aws },
  ]
  
  const inclusions = [
    { text: "5 hours lecture", column: "left" },
    { text: "Presentation", column: "right" },
    { text: "1 hour break", column: "left" },
    { text: "2 branded-shirt", column: "right" },
    { text: "2 months intership", column: "left" },
    { text: "Opportunity to work on life-project", column: "left" },
  ]

  const relatedCourses = ["Data Cyber", "Product", "Cybersecurity", "Cybersecurity", "Cybersecurity", "Cybersecurity"]

  const leftColumnItems = inclusions.filter((item) => item.column === "left")
  const rightColumnItems = inclusions.filter((item) => item.column === "right")

  const testimonials = [
    {
      name: "Chioma Sharwarma",
      role: "Cohort 3 Product Design Graduands",
      rating: 4.59,
      reviews: 28,
      text: "All membership packages come with a 30-day satisfaction guarantee. If you didn't mean to set your password, just ignore this email and we'll forget this ever happened.",
      image: testimonial,
    },
    {
      name: "John Doe",
      role: "Cohort 2 Data Science Graduands",
      rating: 4.8,
      reviews: 45,
      text: "This course transformed my career! The mentorship program was invaluable, and the projects were incredibly practical. Highly recommend for anyone serious about data analysis.",
      image: testimonial,
    },
    {
      name: "Jane Smith",
      role: "Cohort 1 Cybersecurity Graduands",
      rating: 4.7,
      reviews: 32,
      text: "The instructors are top-notch, and the curriculum is very comprehensive. I gained hands-on experience that directly applied to my new role. A fantastic learning experience!",
      image: testimonial,
    },
  ]

  const newsItems = [
    {
      id: 1,
      logo: techcabal,
      alt: "Techcabal Logo",
      headline:
        "Zacrac Learning Launches Incubator Program to Train Employable Data Talents Across Africa at $0 Upfront Payment",
      body: "At the back of the launch of its learning platform last year, Nigeria's EdTech startup for data science and analytics- Zacrac Learning has taken another step to bridge the data gap in the data profession. The company is the foremost data school in Africa with experience spanning both physical and online training.",
      linkText: "Click to read more",
    },
    {
      id: 2,
      logo: techpoint,
      alt: "Techpoint.africa Logo",
      headline:
        "Zacrac Learning launches an EdTech platform to help learners acquire data science & analytics skills and connect them with internship",
      body: "At the back of the launch of its learning platform last year, Nigeria's EdTech startup for data science and analytics- Zacrac Learning has taken another step to bridge the data gap in the data profession. The company is the foremost data school in Africa with experience spanning both physical and online training.",
      linkText: "Click to read more",
    },
    {
      id: 3,
      logo: techcrunch,
      alt: "News Logo 3",
      headline: "New Partnership to Boost AI Education in West Africa",
      body: "Zacrac Learning has announced a strategic partnership with a leading tech firm to expand its AI and machine learning curriculum, aiming to equip more students with cutting-edge skills for the evolving job market.",
      linkText: "Click to read more",
    },
  ]

  return (<>
  <Navbar />
   <div className="relative w-full h-[1750px] md:h-[900px] lg:h-[1000px] overflow-hidden">

      <div>
        <img src= {hero1}  className="absolute inset- 0 w-ful h-full object-cover right-0"/>

        

      </div>

      <section className="absolute left-1/2 transform -translate-x-1/2 top-28 w-[90%] max-w-6xl bg-[#1E1E26] lg:h-[450px] text-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:mr-[380px]">
          {/* Breadcrumb */}
          <nav className="text-sm mb-4 flex items-center text-[#FFDBC1] font-bold">
            <a href="/" className="hover:underline">Course Catalog</a> <IoIosArrowForward />
            <a href="/services" className="hover:underline ml-1">Data Analysis</a>
          </nav>

          {/* Big Text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Course Title: Foundations of Data Analysis
          </h1>

          {/* Small Text */}
          <p className="text-gray-300 text-sm md:text-sm max-w-lg">
           Target Audience: Beginners and intermediate learners interested in data-driven decision making. No prior programming experience required.
          </p>

           <div className="flex items-center gap-1 mt-2">
              <div className="flex">
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-[#FFDBC1] text-xs font-medium">4.59 rating (28 Reviews)</span>
               <span className="text-gray text-md font-medium">Duration: 6 Weeks</span>
            </div>
            <div className="text-gray text-md font-medium">Payment Type: Full / Installment</div>
          
        </div>

        {/* Right Image */}
        <div className="flex- 1 flex justify-center md:justify-end lg:absolute lg:right-4 lg:top-10 w-[330px] lg:w-[370px]">

          <div className="flex-1 max-w-sm bg-[white] text-black rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <img
            src={hero2}
            alt="Hero"
            className="w-full h-56 object-cover"
          />
          {/* Content under image */}
          <div className="mt-4">
            {/* <h3 className="text-xl font-semibold px-4">Course Details</h3>
            <p className="text-gray-600 px-4 text-sm">
              Course objectives
            </p>
            <p className="text-gray-600 px-4 text-sm">
              By the end of this course, you will:
            </p> */}

             <div className="max-w-2xl mx-auto p-6 bg-white">
      {/* Decorative circles */}
      <div className="relative mb-">
        <div className="absolute top-0 right-0 flex gap-2">
          <div className="w-4 h-4 absolute right-6 bg-blue-900 rounded-full"></div>
          <div className="w-6 h-6 absolute right-0 bottom-0 bg-orange-400 rounded-full"></div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-">Course Details</h1>

        <div className="space-y-">
          <h2 className="text-md text-gray-700">Course Objectives</h2>
          <p className="text-gray-700">By the end of this course, you will:</p>

          <ul className="space-y2 text-gray-700 text-xs">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Understand the basics of data and its types.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Use tools like Excel, SQL, and Python for data analysis.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Clean, organize, and visualize datasets.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Perform basic statistical analysis and derive insights.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Communicate findings using dashboards{" "}
                <Link href="#" className="text-blue-600 underline hover:text-blue-800">
                  Learn More
                </Link>
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-2">
          <p className="text-gray-900 font-medium text-sm">
            <span className="font-semibold">Mode of Delivery:</span> On-sight / Remote / Hybrid
          </p>

          <div className="text-xl font-bold text-gray-900">₦500,000</div>
        </div>
      </div>
    </div>
            

           
            <div className="px-1 mb-4 flex justify-center">
              <button className="bg-[#4D148C] text-white px-[110px] lg:px-[130px] py-2 rounded-md transition">
                Enroll now
              </button>
            </div>
          </div>
        </div>

        </div>

      </div>
    </section>

       <div className="absolute max-w-4xl mx-auto p-6 bg-transparent lg:top-[590px] lg:left-20 top-[1120px]">
      <div className="border border-gray-300 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Curriculum</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {curriculumItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800 text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

        </div>

      
 <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="text-center">
        <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#000066] to-[#F26100] bg-clip-text text-transparent">Trust by 5000+ learners in 15 countries</p>
      </div>
    </div>

     <div className="max-w- 6xl mx-auto py-6 bg-white">
      <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex overflow-x-auto">
        {tools.map((tool, index) => (
          <div key={index} className="flex items-center justify-center w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-16">
           <img src={tool.image}/>
          </div>
        ))}
      </div>
    </div>

     <div className="bg-[#EEF5FF] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Course Includes Section */}
        <div className="mb-16">
          <div className="relative mb-8">
            {/* Decorative curved lines */}
        
            <h2 className="text-3xl font-bold text-gray-900">This Course includes:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumnItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <RiPresentationLine className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumnItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <RiPresentationLine className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Related Courses Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Related Courses</h2>

          <div className="flex flex-wrap gap-4">
            {relatedCourses.map((course, index) => (
              <button
                key={index}
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                {course}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>


    <div>

       <div className='p- bg-[#F5F5F9] mt-2 p-2 p-8'>
          <h2 className="text-3xl font-bold text-gray-900 px-8">Course Catalog</h2>
          <p className='px-8 my-3'>
            Explore expert-led courses designed to equip you with practical, in-demand skills that help you grow, succeed, and stay ahead in your career.
          </p>

          <div className="flex flex-wrap mb-4 gap-4 px-8">
           
              <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                All
              </button>
              
              <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Data
              </button>
              
              <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Product
              </button>
              
              <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Cybersecurity
              </button>
              
              <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Content writing
              </button>
              
              <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Tech Marketing
              </button>
               <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Tech Marketing
              </button>
               <button
                className="text-sm bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium transition-colors duration-200 hover:shadow-sm"
              >
                Tech Marketing
              </button>
       
          </div>


           {/* <div className="bg-gray-100 rounded-lg overflow-hidden mx-auto w-[340px]">
    
      <div className="w-full h-60 bg-gray-200 relative">
        <img
          src={hero2}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="p-6 space-y- bg-[white]">
      
        <h1 className="text-md font-bold text-gray-900">Data Analysis</h1>

      
        <div className="flex items-center gap-x-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-amber-600 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-gray-600 text-sm">80 People Enrolled</span>
        </div>

       
        <div className="space-y- text-sm mt-2">
          <p className="text-gray-900 text-">
            <span className="font-semibold">Mode:</span> On-sight / Remote
          </p>
          <p className="text-gray-900 text-">
            <span className="font-semibold">Duration:</span> 6 Weeks
          </p>
          <p className="text-gray-900 text- mt-1">
            <span className="font-semibold">Payment Type:</span> Full / Installment
          </p>
        </div>

        <div className="flex items-center gap-1 mt-">
          <div className="flex">
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-gray-700 text-xs font-medium">4.59 rating (28 Reviews)</span>
        </div>

        <div className="text-md font-bold text-gray-900 py-2">₦500,000</div>


        <div className="flex gap-x-4 pt-4 justify-between">
          <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors text-sm">
            View Curriculum
          </button>
          <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-colors text-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </div> */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p">
      {courses.map((_, index) => (
        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden mx-auto w-[340px]">
          <div className="w-full h-60 bg-gray-200 relative">
            <img src={hero2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="p-6 space-y- bg-[white]">
            <h1 className="text-md font-bold text-gray-900">Data Analysis</h1>
            <div className="flex items-center gap-x-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-amber-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-gray-600 text-sm">80 People Enrolled</span>
            </div>
            <div className="space-y- text-sm mt-2">
              <p className="text-gray-900 text-">
                <span className="font-semibold">Mode:</span> On-sight / Remote
              </p>
              <p className="text-gray-900 text-">
                <span className="font-semibold">Duration:</span> 6 Weeks
              </p>
              <p className="text-gray-900 text- mt-1">
                <span className="font-semibold">Payment Type:</span> Full / Installment
              </p>
            </div>
            <div className="flex items-center gap-1 mt-">
              <div className="flex">
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
                <AiFillStar className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700 text-xs font-medium">4.59 rating (28 Reviews)</span>
            </div>
            <div className="text-md font-bold text-gray-900 py-2">₦500,000</div>
            <div className="flex gap-x-4 pt-4 justify-between">
              <button className="px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors text-sm">
                View Curriculum
              </button>
              <button className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition-colors text-sm">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>


        </div>


    </div>

     <div className="bg-[#000066] py-1 mt-2 px-6 py-16">
   

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* School Badge */}
        <div className="inline-block bg-white rounded-xl px-6 py-2 mb-4">
          <span className="text-blue-900 font-semibold text-sm">ZACRAC LEARNING SCHOOL</span>
        </div>

        {/* Main Text */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 max-w-3xl mx-auto">
          Have you already learned a Tech Skill and want to hone your skills by working on Projects with a Mentor?
        </h2>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300">
          Explore Project Build & Mentorship Program
          <LuArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>


    <div className='bg-[#FBFBFF] my-4'>
      <div className='flex px-6 font-bold'>Testimonials</div>
      <div className='flex justify- center p-6 font-bold text-xl lg:text-2xl text-[#000066]'>Hear from people like you who achieved their Tech Dreams with Zacrac Learning</div>
   <div className="flex overflow-x-auto hide-scrollbar py-8 px-6 gap-x-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex-shrink-0 bg-[white] rounded-[20px] shadow-sm p-8 w-[420px] text-center border border-gray-200 mx-auto"
        >
          <div className="mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{testimonial.role}</p>
          <div className="flex items-center justify-center gap-1 mb-6">
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <AiFillStar className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 text-sm font-medium">{testimonial.rating} rating</span>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed">{testimonial.text}</p>
        </div>
      ))}
    </div>
    </div>


    <div className='mb-20'>
      <div className='flex justify-center p-6 font-bold text-xl lg:text-2xl text-[#000066]'>As Seen In The Press</div>
        <div className="flex overflow-x-auto pb-4 px-6 gap-4 hide-scrollbar">
      {newsItems.map((item) => (
        <div key={item.id} className="flex-shrink-0 bg-white rounded-xl shadow-sm p-6 border border-gray-200 w-[490px] mx-auto">
          <div className="mb-4">
            <img src={item.logo} alt={item.alt} className="h-8 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.headline}</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4 h-[130px]">{item.body}</p>
          <Link href="#" className="text-orange-600 text-sm font-semibold hover:underline">
            {item.linkText}
          </Link>
        </div>
      ))}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
    </div>
<Footer/>
  </>)
}

export default Landing

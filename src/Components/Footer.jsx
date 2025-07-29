import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"
import { IoPlaySharp } from "react-icons/io5"
import logo from "../Images/footerlogo.svg"

function Footer() {
  return (<>
    <footer className="bg-[#000066] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
     
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-center gap-2">
         
            <img src={logo} className='filter'/>
          </div>
          <p className="text-3xl font-bold leading-tight">Africa's No. 1 Data School</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="p-2 bg-white text-blue-950 rounded-md hover:bg-gray-200">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-white text-blue-950 rounded-md hover:bg-gray-200">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="p-2 bg-white text-blue-950 rounded-md hover:bg-gray-200">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 bg-white text-blue-950 rounded-md hover:bg-gray-200">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400">© Copyright 2022 All Rights Reserved</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3 lg:col-span-1">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Instructors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Ways to Learn */}
        <div className="space-y-3 lg:col-span-1">
          <h4 className="text-lg font-semibold mb-2">Ways to Learn</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:underline">
                Self-paced Courses
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Incubator Programs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Cohort-based Courses
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Enterprise Learning
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Career-building Paths
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links (Tools) */}
        <div className="space-y-3 lg:col-span-1">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:underline">
                MS Excel
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                R
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Power BI
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Python
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                SQL
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Visit Us & Newsletter */}
        <div className="space-y-6 lg:col-span-1">
          <h4 className="text-lg font-semibold mb-2">Visit US</h4>
          <p className="text-gray-300 text-sm">
            2nd Floor, Sovereign Trust Insurance Building, Alagbaka, Akure, Ondo State, Nigeria.
          </p>
          <p className="text-white font-semibold text-base">
            Be the first to know about our exciting offers on Data Science, AI, and ML courses
          </p>
          <div className="flex items-center border-b-2 border-white pb-1">
            <input
              type="email"
              placeholder="Type email here..."
              className="flex-grow bg-transparent outline-none text-white placeholder-gray-400 text-sm"
              aria-label="Email for newsletter"
            />
            <button
              className="bg-orange-600 p-2 rounded-md hover:bg-orange-700 transition-colors"
              aria-label="Subscribe"
            >
              <IoPlaySharp className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  </>)
}

export default Footer

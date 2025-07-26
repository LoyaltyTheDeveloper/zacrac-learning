import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-16 px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="gri d md:grid- cols-4 gap-8 mb-8 flex flex-col lg:flex-row justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#FFE3D7" }}>
                      Ashe Beauty
                    </h3>
                    <p className="text-gray-400 mb-4 w-[400px]">
                      Transforming beauty with traditional African techniques and modern styling approaches.
                    </p>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <div className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <div className="w-5 h-5" />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        <div className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
      
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Gele Tying
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Professional Makeup
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Beauty Training
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Bridal Packages
                        </Link>
                      </li>
                    </ul>
                  </div>
      
                  {/* <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
       */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex items-center">
                        <FaPhoneAlt className="w-4 h-4 mr-3" />
                        <span>+234 123 456 7890</span>
                      </div>
                      <div className="flex items-center">
                        <IoMail className="w-4 h-4 mr-3" />
                        <span>info@ashebeauty.com</span>
                      </div>
                      <div className="flex items-center">
                        <IoLocation className="w-4 h-4 mr-3" />
                        <span>Lagos, Nigeria</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Ashe Beauty. All rights reserved.</p>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer

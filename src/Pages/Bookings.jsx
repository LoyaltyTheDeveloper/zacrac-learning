import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";
import { ring2 } from 'ldrs'
import Navbar from "../Components/Navbar";

ring2.register()

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);
   const { token, setToken } = useAuth();
     const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
         setIsLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/appointments/user",
            { headers: { Authorization: `Bearer ${token}` } }
        );
         const data = await res.json();
        setAppointments(data);
         setIsLoading(false);
      } catch (error) {
        toast.error(error);
         setIsLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (<>
  <Navbar/>
    { isLoading && (<div className="min-h-screen fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
       <l-ring-2
            size="60"
            stroke="3"
            stroke-length="0.4"
            bg-opacity="0.1"
            speed="0.8" 
            color="black" 
         ></l-ring-2>
  </div> )}
    <div className="p-6 max-w-6xl mx-auto mt-[100px]">

       <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Appointments</h1>
          <p className="text-xl text-gray-600">Track and manage your beauty appointments</p>
        </div>

      {appointments.length === 0 ? (<>
      {!isLoading && <p className="flex justify-center text-[gray] mt-20 items-center">No appointments booked yet</p>}
     </> ) : (<>


        {/* <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Date Booked</th>
                <th className="px-4 py-3 text-left">Service</th>
                <th className="px-4 py-3 text-left">Address</th>
                <th className="px-4 py-3 text-left">Date of Appointment</th>
                <th className="px-4 py-3 text-left">Time</th>
                <th className="px-4 py-3 text-left">Amount Paid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
            
               {Array.isArray(appointments) && appointments.length > 0 ? (
            appointments.map((appt) => (
              <tr key={appt._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2">{new Date(appt.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-2">{appt.service}</td>
              {appt.address && <td className="px-4 py-2">{appt.address}</td> }
                {!appt.address && <td className="px-4 py-2 text-[red]">No address for this service</td>}
                <td className="px-4 py-2">{new Date(appt.date).toLocaleDateString()}</td>
                <td className="px-4 py-2">
                    {new Date(`1970-01-01T${appt.time}:00Z`).toLocaleTimeString([], {
                         hour: 'numeric',
                         minute: '2-digit',
                         hour12: true,
                     })}
                </td>
                <td className="px-4 py-2">₦{appt.price.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              
            </tr>
          )}
              
            </tbody>
          </table>
        </div> */}

         <div className="min-h-screen py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#FFE3D7" }}>
      <div className="max-w-7xl mx-auto">
     
       

      
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
            
              <thead style={{ backgroundColor: "#DA9F87" }}>
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Date Booked
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Date of Appointment
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                    Amount Paid
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-100">
                {Array.isArray(appointments) && appointments.length > 0 ? (
                  appointments.map((appt, index) => (
                    <tr 
                      key={appt._id} 
                      className={`transition-all duration-300 hover:shadow-lg ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-[#FFE3D7]`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(appt.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-gray-900">
                          {appt.service}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        {appt.address ? (
                          <div className="text-sm text-gray-700 max-w-xs truncate" title={appt.address}>
                            {appt.address}
                          </div>
                        ) : (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-red-800">
                            No address for this service
                          </div>
                        )}
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(appt.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: "#DA9F87" }}
                        >
                          {/* {new Date(`1970-01-01T${appt.time}:00Z`).toLocaleTimeString([], {
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true,
                          })} */} {appt.time}
                        </div>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-lg font-bold" style={{ color: "#DA9F87" }}>
                          ₦{appt.price.toLocaleString()}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-6xl mb-4" style={{ color: "#DA9F87" }}>
                          📅
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          No Appointments Yet
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-md">
                          You haven't booked any appointments yet. Start your beauty journey by booking your first service.
                        </p>
                        <button 
                          className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                          style={{ backgroundColor: "#DA9F87" }}
                        >
                          Book Your First Appointment
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Card */}
        {Array.isArray(appointments) && appointments.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold" style={{ color: "#DA9F87" }}>
                {appointments.length}
              </div>
              <div className="text-gray-600 font-medium">Total Appointments</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold" style={{ color: "#DA9F87" }}>
                ₦{appointments.reduce((total, appt) => total + appt.price, 0).toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Total Spent</div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl font-bold" style={{ color: "#DA9F87" }}>
                {new Set(appointments.map(appt => appt.service)).size}
              </div>
              <div className="text-gray-600 font-medium">Different Services</div>
            </div>
          </div>
        )}
      </div>
    </div>


    </>  )}
    </div>
 </> );
};

export default Bookings;

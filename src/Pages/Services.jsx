import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import { ring2 } from 'ldrs'

ring2.register()

function Services() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState("");

useEffect(() => {
  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/services/getservices');
      const data = await res.json();
      setServices(data);
    } catch (err) {
      setIsLoading(false);
      setError("There was an error getting the services.")
    } finally {
      setIsLoading(false);
    }
  };

  fetchServices();
}, []);

  return (<>
  <Navbar />
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

    { error && (<div className="h-screen text-[red] fixed inset-0 flex items-center justify-center text-lg">
       {error}
  </div> )}


   { !isLoading && ( <div className="mt-[100px]">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            onClick={() => navigate(`/services/${service._id}`, { state: { service } })}
            className="bg-[white] mx-10 lg:mx-8 cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col items-center text-center p-4"
          >
            <img
              src={`http://localhost:5000${service.image}`}
              alt={service.name}
              className="w-[60%] h-48 object-cover rounded-[10px] mb-4"
            />
            <h2 className="text-xl font-semibold">{service.name}</h2>
          <div className='underline'>View details</div>
          </div>




        ))}
      </div> */}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6 lg:px-8">
      {services.map((service) => (
        <div
          key={service._id}
          onClick={() => navigate(`/services/${service._id}`, { state: { service } })}
          className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col items-center text-center p-6 transform hover:scale-105 transition-all duration-300 border border-gray-100"
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #FFE3D7 100%)'
          }}
        >
          <div className="relative w-full mb-6 overflow-hidden rounded-xl">
            <img
              src={`http://localhost:5000${service.image}`}
              alt={service.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
              {service.name}
            </h2>
            
            <div className="mt-auto">
              <span 
                className="inline-block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 group-hover:shadow-md"
                style={{ 
                  backgroundColor: '#DA9F87',
                  color: 'white'
                }}
              >
                View Details
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>




    </div> )}
  </>)
}

export default Services

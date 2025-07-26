import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ring2 } from 'ldrs'
import Navbar from "../Components/Navbar";

ring2.register()

const SubServices = () => {
  const { id } = useParams();
  const location = useLocation();
  const [service, setService] = useState(location.state?.service || null);
  const navigate = useNavigate();


//   useEffect(() => {
//     if (!service) {
     
//       const fetchService = async () => {
//         const res = await axios.get(`/api/services/${id}`);
//         setService(res.data);
//       };
//       fetchService();
//     }
//   }, [id, service]);



 

  return (<>
  <Navbar/>

   { !service && (<div className="min-h-screen fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
       <l-ring-2
            size="60"
            stroke="3"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8" 
            color="black" 
         ></l-ring-2>
  </div> )}

  { service && (<>


    {/* <div className="p-6 mt-[90px] mb-[50px]">
        <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{service.name}</h1>
      <div className="w-[350px] md:w-[400px] lg:w-[400px] h-[300px] mb-10">
        <img
            src={`http://localhost:5000${service.image}`}
            alt={service.name}
            className="w-[100%] h-full object-cover rounded-lg"></img></div>
</div>
      <ul className="space-y-3 lg:mx-[30%]">
        {service.subServices.map((sub, index) => (
          <li 
          key={index} 
          onClick={() =>
          navigate('/bookservice', {
          state: {
            serviceName: sub.name,
            homeService: sub.homeService,
            price: sub.price,
          },
        })
      }
        className="border cursor-pointer p-4 rounded shadow-sm flex items-center justify-between hover:text-[white] hover:bg-[black]">
            <p className="font-medium text-lg">{sub.name}:</p>
            <p> ₦{Number(sub.price).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>  */}

     <div className="min-h-screen py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#FFE3D7" }}>
      <div className="max-w-4xl mx-auto">
    
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {service.name}
          </h1>
          
    
          <div className="relative inline-block mb-12">
            <div className="w-80 md:w-96 lg:w-[450px] h-80 md:h-96 mx-auto overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={`http://localhost:5000${service.image}`}
                alt={service.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
         
            <div 
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-60"
              style={{ backgroundColor: "#DA9F87" }}
            ></div>
            <div 
              className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full opacity-40"
              style={{ backgroundColor: "#DA9F87" }}
            ></div>
          </div>
        </div>

      
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Choose Your Service
          </h2>
          
          <div className="space-y-4">
            {service.subServices.map((sub, index) => (
              <div
                key={index}
                onClick={() =>
                  navigate('/bookservice', {
                    state: {
                      serviceName: sub.name,
                      homeService: sub.homeService,
                      price: sub.price,
                    },
                  })
                }
                className="group bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-gray-900 group-hover:text-white transition-colors duration-300">
                      {sub.name}
                    </h3>
                    {sub.homeService && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 group-hover:bg-green-200 transition-colors duration-300">
                        Home Service Available
                      </span>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl text-[#DA9F87] font-bold group-hover:text-white hover:text-[white] transition-colors duration-300">
                      ₦{Number(sub.price).toLocaleString()}
                    </div>
                    {/* <div className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors duration-300">
                      Starting from
                    </div> */}
                  </div>
                </div>
                
            
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ backgroundColor: "#DA9F87" }}
                ></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Ready to book your appointment? Select a service above to get started.
            </p>
            
            {/* <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#DA9F87" }}></div>
              <span>Professional service guaranteed</span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#DA9F87" }}></div>
              <span>Flexible scheduling available</span>
            </div> */}


          </div>
        </div>
      </div>
    </div>


 </> )}
 </> );
};

export default SubServices;

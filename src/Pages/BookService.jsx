import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../Images/logo.svg";
import Navbar from "../Components/Navbar";
import { address, text } from "framer-motion/client";
import { useAuth } from "../Context/AuthContext";
import { PaystackButton, usePaystackPayment } from 'react-paystack';
import { ring2 } from 'ldrs'
import toast from 'react-hot-toast';
import { waveform } from 'ldrs'
import Swal from 'sweetalert2';
waveform.register()
ring2.register()






export default function BookService() {
    
     const paystackRef = useRef();
     const [reference, setReference] = useState("");
        const [isLoadingSlots, setIsLoadingSlots] = useState(false);
        const [error, setError] = useState("");
        const [isCheckingSlot, setIsCheckingSlot] = useState(false);
         const  location  = useLocation(); 
        const { serviceName, homeService, price } = location?.state || {};

 const { isAuthenticated, setIsAuthenticated, setToken, user, setUser } = useAuth();


 const publicKey = "pk_test_f6b1c5f4257421283039556b5713c2d753be9785";
  const amount = price * 100; 

 const email = localStorage.getItem('userEmail');

 
  const [form, setForm] = useState({
    service: serviceName,
    firstname: "",
    lastname: "",
    phone1: "",
    phone2: "",
    address: "",
    date: "",
    time: "",
  });

  // const timeSlots = ["7am", "9am", "11am", "1pm", "3pm", "5pm", "7pm"];

  const timeSlots = [
  { label: "7AM", value: "07:00" },
  { label: "9AM", value: "09:00" },
  { label: "11AM", value: "11:00" },
  { label: "1PM", value: "13:00" },
  { label: "3PM", value: "15:00" },
  { label: "5PM", value: "17:00" },
  { label: "7PM", value: "19:00" },
  { label: "9PM", value: "21:00" },
];


    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    // useEffect(() => {
    // if (!serviceName || !price) {
    // navigate("/services");
    // }
    // }, []);



  const [availableSlots, setAvailableSlots] = useState("No date selected");

   const [availableSlotTimes, setAvailableSlotTimes] = useState(null);
   const [isSlotAvailable, setIsSlotAvailable] = useState(false);

  const handleDateChange = async (e) => {
    setIsLoadingSlots(true);
    setError("");
    setIsSlotAvailable(false);
    const selectedDate = e.target.value;
    setForm((prev) => ({ ...prev, date: selectedDate }));
    try {
      const res = await fetch(`http://localhost:5000/api/slot/slots?date=${selectedDate}`);
      const data = await res.json();
      setAvailableSlots(data.availableSlots); 
      setAvailableSlotTimes(data.availableSlotTimes);
      setIsLoadingSlots(false);
    } catch (error) {
      setIsLoadingSlots(false);
      setError("There was an error fetching the slots.");
    }
  };

  const handleTimeSelect = (label) => {
    setForm((prev) => ({ ...prev, time: label }));
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


   const checkSlotAvailability = async () => {
    setIsCheckingSlot(true);
    try {
      const res = await fetch("http://localhost:5000/api/appointments/check-slot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date: form.date, time: form.time }),
      });

      const data = await res.json();

      if(res.status === 401) {
        toast.error("Session expired. Please log in again.");
         setIsCheckingSlot(false);
        navigate("/signin");
        return false;
      }
      if (res.ok) {
           toast.success(data.message);
            setIsCheckingSlot(false);
        return true;
      } else {
        // toast.error(data.message);
         setIsCheckingSlot(false);
        return false;
      }
    } catch (err) {
      toast.error("Error checking slot availability.");
       setIsCheckingSlot(false);
      return false;
    }
  };
  


const handleSuccess = (reference) => {
  console.log("Payment successful. Reference:", reference?.reference);
  handleSubmit(reference?.reference);
  setIsSlotAvailable(false);
};

const handleClose = () => {
   toast.error("Payment cancelled.");
    setIsSlotAvailable(false);
}

const handleSubmit = async (reference) => {

  try {
    const res = await fetch("http://localhost:5000/api/appointments/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reference, 
        appointmentData: { ...form, price }
      }),
    });

    const data = await res.json();

    if (res.ok) {
       Swal.fire({
  title: 'Payment Complete!',
  text: 'Your appointment has been successfully booked.',
  icon: 'success',
  confirmButtonText: 'OK',
});
    } else if (res.status === 401) {
      toast.error("Session expired. Please log in again.");
      navigate("/signin");
      localStorage.removeItem("token");
      setToken(null);
      setIsAuthenticated(false);
    } 
    else if (res.status === 409) {
      toast.error(data.message);
      return; 
    } else {
      toast.error(data.message);
      return;
    }
  } catch (err) {
    console.error(err);
    return;
  }
};

const handleFormSubmit = async (e) => {
       e.preventDefault();

  const selectedDate = new Date(form.date);
  const isSunday = selectedDate.getDay() === 0;

  if (isSunday) {
    toast.error("Bookings are not allowed on Sundays.");
    return; 
  }

    if (!form.date || !form.time || !form.firstname || !form.lastname || !form.phone1 || !price) {
      toast.error("Please fill in all details");
        return;
    }
 
    const available = await checkSlotAvailability();
    if (available === false) {
        setIsSlotAvailable(false);
      return;
    }

    if (available === true) {
    setIsSlotAvailable(true);
      async () => {
        await handleSubmit(reference);
    }
}

}
  const componentProps = {
    email: email,
    amount: amount,
    publicKey: publicKey,
    reference: reference,
    onSuccess: handleSuccess,
    text: "Pay ₦" + Number(price).toLocaleString() + " and Book",
    onClose: handleClose,
    metadata: {
      custom_fields: [
        {
          display_name: `${form.firstname} ${form.lastname}`,
          variable_name: "phone",
          value: form.phone1,
        },
      ],
    },
  };

  return (<>
  <Navbar />
  {isCheckingSlot &&(
   
   <div className="fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen bg-[black] bg-opacity-20 z-50">
    <l-waveform
  size="50"
  stroke="4"
  speed="1" 
  color="black" 
></l-waveform>
</div>

  )}

    {/* <div className="max-w-lg mt-[120px] mb-[120px] mx-auto p-6 bg-gray-100 rounded-xl shadow">
         <img src={logo} alt="Logo" className="h-[80px] mx-auto mb-4 cursor-pointer" onClick={()=> navigate("/")}/>
      <h2 className="text-2xl font-semibold mb-4 text-center">Book Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <input disabled name="service" value={form.service} className="w-full mb-3 px-4 py-2 border rounded bg-gray-200" />

        <input name="firstname" placeholder="First name" value={form.firstname} onChange={handleChange} required className="w-full mb-3 px-4 py-2 border rounded" />
        <input name="lastname" placeholder="Last name" value={form.lastname} onChange={handleChange} required className="w-full mb-3 px-4 py-2 border rounded" />
        <input name="phone1" placeholder="Phone 1" type="number" value={form.phone1} onChange={handleChange} required className="w-full mb-3 px-4 py-2 border rounded" />
        <input name="phone2" placeholder="Phone 2" type="number" value={form.phone2} onChange={handleChange} required className="w-full mb-3 px-4 py-2 border rounded" />

       {homeService === true && (<input name="address" placeholder="Address (Please type in your full address)" value={form.address} onChange={handleChange} required className="w-full mb-3 px-4 py-2 border rounded" />)}

        <label className="block font-medium mb-1">Select Date:</label>
          
          <input
  type="date"
  name="date"
  value={form.date}
  onChange={handleDateChange}
  min={new Date().toISOString().split("T")[0]} 
  required
  className="w-full mb-3 px-4 py-2 border rounded"
  onInput={(e) => {
    const selectedDay = new Date(e.target.value).getDay();
    if (selectedDay === 0) {
      e.target.setCustomValidity("Bookings are not allowed on Sundays.");
    } else {
      e.target.setCustomValidity(""); 
    }
  }}
  onInvalid={(e) => {
    e.preventDefault(); 
    e.target.reportValidity(); 
  }}
/>


         {isLoadingSlots === true && (<>
            <l-ring-2
            size="30"
            stroke="3"
            stroke-length="0.25"
            bg-opacity="0.1"
            speed="0.8" 
            color="black" 
         ></l-ring-2>
         <div>Fetching slots...</div>
         </>) 
         
         }
       

 {isLoadingSlots === false && (<>
         {availableSlots > 0 && (<p className="mb-3 text-green-500 font-bold">{availableSlots} slot(s) left</p>) }
          {availableSlots < 1 && (<p className="mb-3 text-red-500 font-bold">{availableSlots} slot(s) left</p>) }
</>) } 

{error && (<div className="text-[red]">{error}</div>) }


    <div className="mb-4">
          <p className="font-medium mb-1">Select Time:</p>
          <div className="flex gap-2 flex-wrap">
            {timeSlots.map((slot) => (
              <div
                key={slot.value}
                onClick={() => {handleTimeSelect(slot.value), setIsSlotAvailable(false)}}
                className={`px-4 py-2 border rounded cursor-pointer ${
                  form.time === slot.value ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {slot.label}
              </div>
            ))}
          </div>
        </div>
       

       {isSlotAvailable === false &&  (<button
        onClick={handleFormSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center"
      >
        Check for available slot
      </button>) }

      {isSlotAvailable === true &&  (<div className="">
        <PaystackButton className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" {...componentProps} id="real-pay-btn"/> 
     </div>) }

      </form>
    </div> */}






    <div className="min-h-screen py-20 px-4 md:px-6 lg:px-8" style={{ backgroundColor: "#FFE3D7" }}>
      <div className="max-w-2xl mx-auto mt-10">
        <div 
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #FFE3D7 100%)'
          }}
        >
         
          <div className="text-center py-8 px-8" style={{ backgroundColor: "#DA9F87" }}>
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 mx-auto mb-4 cursor-pointer hover:scale-105 transition-transform duration-300 filter brightness-0 invert" 
              onClick={() => navigate("/")}
            />
            <h2 className="text-3xl font-bold text-white">Book Your Appointment</h2>
            <p className="text-white/90 mt-2">Fill in your details to secure your beauty session</p>
          </div>

      
          <div className="p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
          
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Selected Service</label>
                <input 
                  disabled 
                  name="service" 
                  value={form.service} 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600 font-medium focus:outline-none"
                />
              </div>

            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    name="firstname" 
                    placeholder="Enter your first name" 
                    value={form.firstname} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    name="lastname" 
                    placeholder="Enter your last name" 
                    value={form.lastname} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Phone</label>
                  <input 
                    name="phone1" 
                    placeholder="Primary phone number" 
                    type="number" 
                    value={form.phone1} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary Phone</label>
                  <input 
                    name="phone2" 
                    placeholder="Alternative phone number" 
                    type="number" 
                    value={form.phone2} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              {homeService === true && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Address</label>
                  <input 
                    name="address" 
                    placeholder="Please provide your complete address for home service" 
                    value={form.address} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300"
                  />
                  <p className="text-sm text-gray-500 mt-1">Include landmarks for easy location</p>
                </div>
              )}

         
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                <input  
                  type="date"  
                  name="date"  
                  value={form.date}  
                  onChange={handleDateChange}  
                  min={new Date().toISOString().split("T")[0]}   
                  required  
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#DA9F87] focus:outline-none transition-colors duration-300"
                  onInput={(e) => {    
                    const selectedDay = new Date(e.target.value).getDay();    
                    if (selectedDay === 0) {      
                      e.target.setCustomValidity("Bookings are not allowed on Sundays.");    
                    } else {      
                      e.target.setCustomValidity("");     
                    }  
                  }}  
                  onInvalid={(e) => {    
                    e.preventDefault();     
                    e.target.reportValidity();   
                  }}
                />
                <p className="text-sm text-gray-500 mt-1">Note: Sunday bookings are not available</p>
              </div>

           
              {isLoadingSlots === true && (
                <div className="text-center py-6">
                  <l-ring-2
                    size="30"
                    stroke="3"
                    stroke-length="0.25"
                    bg-opacity="0.1"
                    speed="0.8"
                    color="black"
                  ></l-ring-2>
                  <div className="mt-3 text-gray-600 font-medium">Fetching available slots...</div>
                </div>
              )}

            
              {isLoadingSlots === false && (
                <div className="text-center">
                  {availableSlots > 0 && (
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {availableSlots} slot(s) available
                    </div>
                  )}
                  {availableSlots < 1 && (
                    <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full font-semibold">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      No slots available
                    </div>
                  )}
                </div>
              )}

          
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                  <div className="text-red-700 font-medium">{error}</div>
                </div>
              )}

          
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Your Preferred Time</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.label}
                      onClick={() => {handleTimeSelect(slot.label), setIsSlotAvailable(false)}}
                      className={`px-4 py-3 border-2 rounded-xl cursor-pointer text-center font-medium transition-all duration-300 ${
                        form.time === slot.label
                          ? "border-[#DA9F87] text-white shadow-lg transform scale-105" 
                          : "border-gray-200 text-gray-700 hover:border-[#DA9F87] hover:bg-[#FFE3D7]"
                      }`}
                      style={form.time === slot.label ? { backgroundColor: "#DA9F87" } : {}}
                    >
                      {slot.label}
                    </div>
                  ))}
                </div>
              </div>

        
             
                {isSlotAvailable === false && (
                  <button
                    onClick={handleFormSubmit}
                    className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    style={{ 
                      backgroundColor: "#DA9F87",
                      color: "white"
                    }}
                  >
                    Check Slot Availability
                  </button>
                )}


                {isSlotAvailable === true && (
                  <div className="space-y-4">
                    <PaystackButton 
                      className="w-full text-[white] bg-[#DA9F87] py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      style={{ 
                      backgroundColor: "#DA9F87",
                      // color: "white"
                    }}
                      {...componentProps} 
                      id="real-pay-btn"
                    />
                  </div>
                )}
           
            </form>
          </div>
        </div>
      </div>
    </div>

   


 </> );
}


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { waveform } from 'ldrs'
import { FaRegUser, FaRegClock, FaChartBar, FaPlay } from "react-icons/fa"


waveform.register()

const CourseDetail = () => {
    const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [course, setCourse] = useState(null);
   const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const fetchCourseDetails = async () => {
      try {
        const res = await fetch(`https://zacraclearningwebsite.onrender.com/courses/${id}`);
        const data = await res.json();
        setCourse(data.course);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching course:", error);
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  return (<>
  {isLoading && (
        <div className="fixed inset-0 top-1/2 -translate-y-1/2 flex items-center justify-center min-h-screen bg-opacity-20 z-50">
          <l-waveform size="50" stroke="4" speed="1" color="black"></l-waveform>
        </div>
      )}

      {course &&(<>


    {/* <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-700">{course?.title}</h1>
      <p className="mt-2 text-gray-700">{course?.fullDescription}</p>
      <h3 className="mt-6 font-semibold text-lg">Curriculum:</h3>
      <ul className="list-disc ml-5">
        {course?.curriculum.map((topic, index) => (
          <li key={index} className="mt-1">{topic}</li>
        ))}
      </ul>
      <div className="mt-6 text-sm text-gray-600">Duration: {course?.duration}</div>
      <div className="text-lg font-semibold mt-2 text-green-700">₦{course?.price.toLocaleString()}</div>
      <button onClick={()=> navigate("/")} className="mt-4 text-purple-600 underline">← Back</button>

    </div> */}


    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight">{course.title}</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">{course.fullDescription}</p>

          <div className="mt-6 flex items-center text-gray-600 text-sm">
            <span className="font-semibold mr-1">Am</span>
            <span className="font-semibold mr-1">Ma</span>
            <span className="font-semibold mr-4">St</span>
            <span>3 Course instructors</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-800 text-sm font-medium">
              <FaRegUser className="w-4 h-4" />
              <span>Instructor led course</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-800 text-sm font-medium">
              <FaRegClock className="w-4 h-4" />
              <span>8 month duration</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-800 text-sm font-medium">
              <FaRegClock className="w-4 h-4" />
              <span>2 Month Internship</span>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-orange-50 border border-orange-100">
            <div className="flex items-center gap-4 text-orange-800 text-sm font-medium">
              <FaChartBar className="w-4 h-4" />
              <span>Beginner & Intermediate</span>
              <span className="mx-2">&</span>
              <FaChartBar className="w-4 h-4" />
              <span>Experienced</span>
              <span className="mx-2">&bull;</span>
              <FaPlay className="w-4 h-4" />
              <span>14 Modules</span>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-orange-50 border border-orange-100">
            <h3 className="font-semibold text-gray-800">Course Duration</h3>
            <p className="mt-1 text-gray-700 font-medium">{course.duration}</p>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-orange-50 border border-orange-100">
            <h3 className="font-semibold text-gray-800">Projects</h3>
            <p className="mt-1 text-gray-700 font-medium">8 Projects</p>
          </div>
        </div>

        {/* Right Section (Sidebar) */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-orange-600 rounded-lg overflow-hidden relative aspect-video flex items-center justify-center">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/placeholder.svg?height=40&width=120" alt="10Alytics Logo" className="h-10 w-auto" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlay className="w-16 h-16 text-white fill-current opacity-80" />
            </div>
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Data Analytics</h2>
            <p className="mt-1 text-gray-600 text-sm">
              Mastery of Excel, Power BI, SQL, Tableau, and Microsoft Fabric.
            </p>
          </div>

          <div className="mt-6 p-6 rounded-lg border border-orange-300 bg-orange-50 text-center">
            <p className="text-sm text-orange-800 font-medium">(20% Discount ongoing - Limited slots)</p>
            <p className="mt-2 text-sm text-gray-700">Program fee payment can be in instalments</p>
            <button className="mt-4 w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors">
              Enroll Now
            </button>
            <button className="mt-3 w-full py-3 border border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-orange-100 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>



    
   </>) }
 </> );
};

export default CourseDetail;

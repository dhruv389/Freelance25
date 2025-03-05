import React from "react";
import DevReview from "../components/DevReview";

import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const DevProfile2 = () => {
  const gigs = [
    {
      title: "Website Development",
      description:
        "I will build website, website development, full stack developer, front end developer",
      rating: 5.0,
      reviews: 259,
      price: "₹7,273",
      img: "/gig1.jpg",
    },
    {
      title: "Shopify Development",
      description:
        "I will design, redesign Shopify store, Shopify website dropshipping store",
      rating: 5.0,
      reviews: 14,
      price: "₹7,273",
      img: "/gig2.jpg",
    },
    {
      title: "Mobile App Development",
      description:
        "I will develop mobile and web app using React Native, Flutter full stack development",
      rating: 5.0,
      reviews: 1,
      price: "₹10,909",
      img: "/gig3.jpg",
    },
    {
      title: "Travel & Tourism Website",
      description:
        "I will make travel agency website development, tour, tourism, hotel booking...",
      price: "₹7,727",
      img: "/gig4.jpg",
    },
  ];

  const { isSignedIn, user } = useUser();

  const [user2, setUser] = useState(null);

  const {objectid}= useParams();



  const [loading, setLoading] = useState(false);
 
  const [devproject , setdevproject]=useState([]);
  const [error, setError] = useState("");
   
  useEffect(() => {
    if (user) {
      fetchProject(user.id);
    }
  }, []);
  
  const fetchProject = async (clerkId) => {
    console.log(clerkId);
    try {
      const response = await axios.get(`http://localhost:8080/projects/getProjectbyclerkid/${clerkId}`);
      setdevproject(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching proposals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/freelancer/getfreelancerbyobjectId/${user?.id}`);
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        setError("User not found or server error.");
      }
    };

    if (user?.id) {
      fetchUser();
    }
  }, [user?.id]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;




  return (
    <div className="min-h-screen w-screen p-6 flex justify-start items-start flex-col">
      {/* Profile Section */}
      {user2 && (<div>
        <div className="w-screen h-full flex justify-around items-start">
      <div className="w-[60%] flex items-start   flex-col    justify-start  ">
    
        <div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 mx-auto  shadow-lg rounded-xl  flex flex-col md:flex-row items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-green-500"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-semibold">{user2.user.firstName}h {user2.user.lastName}</h2>
          <p className="text-gray-600">@web_wafels</p>
          <p className="text-green-500 flex items-center mt-1">
            ★ {user2.user.rating} <span className="ml-2 text-gray-400">Level 2</span>
          </p>
          <p className="text-gray-500 mt-2">
           {user2.user.title}
          </p>
          <div className="flex text-black gap-2 mt-2">
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
            
             <p>📍 {user2.user.location.country}</p>
           
            </span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
            
           
            <p>📍 {user2.user.location.city}</p>
           </span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
              English, Bengali, Hindi, Tamil
            </span>
          </div>
        </div>
        <div className="ml-auto">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Contact me
          </button>
        </div>
      </div>
    

      {/* About Section */}
      <div className="w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6  rounded-xl  mt-6">
        <h3 className="text-xl font-semibold">About me</h3>
        <p className="text-gray-300 mt-2">
         { user2.user.bio}
        </p>
      </div>

      {/* Skills */}
      <div className="w-full mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6  shadow-md rounded-xl p-6 mt-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="flex flex-wrap  gap-2 mt-2">
          {user2.user.skills.map(
            (skill) => (
              <span key={skill} className="px-3 py-1 text-sm rounded-full">
                {skill}
              </span>
            )
          )}
          <span className=" px-3 py-1 text-sm rounded-full">
            +25 More
          </span>
        </div>
      </div>



      <div className="flex flex-col items-center justify-center  bg-black p-4">
      <h1 className="text-3xl text-white font-bold mb-6">🎓 Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {user2.user.education.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg text-white w-80"
          >
            <h2 className="text-xl font-semibold">🏫 {edu.institution}</h2>
            <p className="mt-2">🎓 {edu.degree}</p>
            <p className="mt-1">📚 {edu.fieldOfStudy}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-center  bg-black p-4"> 

    <h1 className="text-3xl text-white font-bold mb-6">🎓 Experience</h1>
    <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg text-white w-80">
      
      {user2.user.experience.map((item, index) => (
        <div key={index} className="mt-2">
          <p className="font-semibold">{item.company}</p>
          <p>{item.position}</p>
          <p>{item.description}</p>
          {item.startDate && <p className="text-sm text-gray-300">📅 {item.endDate}</p>}
        </div>
      ))}
    </div></div>

      </div>



      <div className="w-[30%]  h-[25rem]">
      <div className="max-w-[88%]  h-[85%] bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" // Replace with your image path
          alt="User Avatar"
        />
        <div>
          <h2 className="text-lg font-semibold">Ismail</h2>
          <p className="text-sm text-gray-500">Online • 12:01 AM local time</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-gray-700">Offers hourly rates</p>
      </div>
      <button className="w-full bg-gray-900 text-white py-2 rounded-md mb-2 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        Contact me
      </button>
      <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        Book a consultation
      </button>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Average response time: 1 hour
      </p>
    </div>
      </div>
  </div>
      {/* Gigs Section */}
      <div className="w-[85vw] mx-auto mt-6">
        <h3 className="text-xl font-semibold mb-4">My Gigs</h3>
       
        <div className="grid w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
          {devproject.map((gig, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-4">
              <img
                src={gig.thumbnail[0]}
                alt={gig.title}
                className="rounded-xl w-full h-[15rem]"
              />
              <h4 className="text-lg text-black font-semibold mt-3">{gig.title}</h4>
             
              <p className="text-yellow-500 mt-2">★ {gig.rating} ({gig.reviews})</p>
              <p className="font-semibold text-lg mt-2">{gig.price}</p>
              <button className="bg-black text-white w-full mt-3 py-2 rounded-md">
                View Details
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="border border-black px-4 py-2 rounded-md">
            View all (5)
          </button>
        </div>
      </div>
         
   <div className="w-screen text-center"><h1>Reviews</h1></div>
     <DevReview/>
     </div>)} 
    </div>
  );
};

export default DevProfile2;

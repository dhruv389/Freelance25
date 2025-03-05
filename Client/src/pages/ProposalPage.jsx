import { useState,useEffect,useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import DevReviw from "../components/DevReview" 
import Propsalrequest from "../components/Propsalrequest";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "../components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Optional for styling
import { useUser } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import axios from "axios";  
import { useUserContext } from "../context/UserContext.js";
import { Link } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
const statuses = ["Pending", "Assigned", "Closed"];


const plans = [
  { name: "Basic", price: "₹7,500", features: ["5 pages", "Basic setup", "3 plugins"], delivery: "5-day delivery" },
  { name: "Standard", price: "₹9,000", features: ["8 pages", "Advanced setup", "5 plugins"], delivery: "4-day delivery" },
  { name: "Premium", price: "₹10,919", features: ["10 pages", "Pro setup", "7 plugins"], delivery: "3-day delivery" },
];

export default function ProposalPage() {
  const { userData3 } = useUserContext();
  const { id } = useParams();
  const { isSignedIn, user } = useUser();

  const [proposals, setProposals] = useState(null);
  const [loading, setLoading] = useState(true);
  const [interested, setInterested] = useState(false);
  const [user2, setUser] = useState(null);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState();
  const [timeRequired, setTimeRequired] = useState();
  const [comment, setComment] = useState("");
  const [assignUsers, setAssignedUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("Pending");
  const [showModal, setShowModal] = useState(false);

  const [ai, setai] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);



  const genAI = new GoogleGenerativeAI("AIzaSyC9Uzc1ZyQ3ve_AHqYtN6H8sk-n0wgpqmM");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const validateFreelancer = useCallback(async (id) => {
    setLoading(true);
    setError("");
    setAiResponse(null); // Reset previous response
    setai(null); //reset ai state

    try {
      // Fetch freelancer data
      const { data } = await axios.get(`http://localhost:8080/freelancer/getfreelancer/${id}`);
      setai(data);

      // Ensure we have valid freelancer data
      if (!data?.user) throw new Error("Invalid freelancer data received.");
    } catch (err) {
      console.error("Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }

    // Generate AI response in a separate try-catch block
    if (ai) {
      try {
        const prompt = `
          Given the following freelancer details:
          - Role: ${ai?.user?.role || "N/A"}
          - Title: ${ai?.user?.title || "N/A"}
          - Bio: ${ai?.user?.bio || "N/A"}
          - Skills: ${ai?.user?.skills?.join(", ") || "N/A"}
          - Experience: ${ai?.user?.experience?.[0]?.experience || "N/A"} 
          - Rating: ${ai?.user?.rating || "N/A"} stars
          - Total Reviews: ${ai?.user?.totalReviews || "N/A"}

          And the project details:
          - Title: ${proposals?.title || "N/A"}
          - Description: ${proposals?.description || "N/A"}
          - Required Skills: ${proposals?.skill?.join(", ") || "N/A"}
          - Budget: $${proposals?.amount || "N/A"}

          📌 Answer these:
          1️⃣ Why is this freelancer the best fit for this project?
          2️⃣ What percentage does the freelancer’s skills match the project’s requirements? (0-100%)
        `;

        // Send request to Gemini API
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        // Save AI response
        setAiResponse(text);
        console.log("AI Response:", text);
      } catch (error) {
        console.error("AI Error:", error);
        setError("Error generating AI response.");
      }
    }
  }, [model, proposals, ai]);




  // ✅ Fetch Proposal Data
  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/proposals/proposalbyid/${id}`);
        setProposals(response.data[0]);
        console.log("Proposal Data:", response.data[0]);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching proposals");
      } finally {
        setLoading(false);
      }
    };

    if (id && user) {
      fetchProposals();
    }
  }, [id, user]); // ✅ Dependency fixed

  // ✅ Fetch User Data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user?.id) return;
        const response = await axios.get(`http://localhost:8080/freelancer/getfreelancer/${user?.id}`);
        setUser(response.data);
        console.log("User Data:", response.data);
      } catch (err) {
        setError("User not found or server error.");
      }
    };

    fetchUser();
  }, [user?.id]); // ✅ Dependency fixed

  // ✅ Fetch Assigned Users
  useEffect(() => {
    const fetchAssignedUsers = async () => {
      try {
        if (!proposals?._id) return;
        const response = await axios.get(`http://localhost:8080/proposals/assignedProposalRequests/${proposals._id}`);
        setAssignedUsers(response.data);
        console.log("Assigned Users:", response.data);
      } catch (err) {
        setError("User not found or server error.");
      }
    };

    if (proposals?._id) {
      fetchAssignedUsers();
    }
  }, [proposals]); // ✅ Dependency fixed

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;






  const formatGeminiResponse = (rawResponse) => {
    const responseArray = rawResponse.split("\n").filter((line) => line.trim() !== "");
  
    let formattedData = [];
    let currentQuestion = "";
  
    responseArray.forEach((line) => {
      if (line.startsWith("1️⃣") || line.startsWith("2️⃣")) {
        currentQuestion = line;
        formattedData.push({ question: currentQuestion, answer: "" });
      } else {
        if (formattedData.length > 0) {
          formattedData[formattedData.length - 1].answer += line + " ";
        }
      }
    });
  
    return formattedData;
  };











  // ✅ Handle Interested Click
  const handleInterestedClick = async () => {
    try {
      if (!user2) {
        console.error("User data is not available.");
        return;
      }

      console.log("Submitting Interest:", user2);

      const response = await axios.post(
        `http://localhost:8080/proposals/${proposals._id}/interested`,
        {
          objectId:user.id,
          profileImage: user2?.user?.profilePicture,
          devname: `${user2?.user?.firstName} ${user2?.user?.lastName}`,
          rating: user2?.user?.rating,
          title: user2?.user?.title,
          comment,
          timeRequired,
          amount,
        }
      );

      if (response.data) {
        setInterested(true);
        console.log("Interest added successfully");
      }
    } catch (error) {
      console.error("Error adding interest:", error.response?.data || error.message);
    }
  };


  const updateStatus = async (proposalId, requestId) => {
    try {
      const response = await axios.put("http://localhost:8080/proposals/update-status", {
        proposalId,
        requestId,
      });
  
      console.log(response.data);
      alert("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error.response?.data?.message);
      alert("Failed to update status");
    }
  };





  
  

  return (
    <div className="min-h-screen  text-white p-6 md:p-12 flex flex-col lg:flex-row gap-8">
      {/* Left Content */}
     {  proposals &&  ( <div className="lg:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold">{proposals.title}</h1>



        <div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 mx-auto  shadow-lg rounded-xl  flex flex-col md:flex-row items-center">
        <img
          src={proposals.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-green-500"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-semibold">{proposals.clientname }</h2>
          <p className="text-gray-600">@web_wafels</p>
          <p className="text-green-500 flex items-center mt-1">
            ★ 5.0 (276) <span className="ml-2 text-gray-400">Level 2</span>
          </p>
          <p className="text-gray-500 mt-2">
            A professional full stack website development master
          </p>
          <div className="flex text-black gap-2 mt-2">
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
              Bangladesh
            </span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
              English, Bengali, Hindi, Tamil
            </span>
          </div>
        </div>
        <div className="ml-auto">
          <button  className="bg-green-500 text-white px-4 py-2 rounded-md">
           Intrested
          </button>
        </div>
      </div>





<div className="w-full flex justify-center items-center">

      <Carousel className="w-[34rem] ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="h-[25rem] w-[29rem]">
                <CardContent className="flex  aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>


<div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
    <p>
   {proposals.description}
    </p>
</div>

<div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
    <h3>Time Required</h3>
    <p>
    {proposals.timeRequired}
    </p>
</div>
<div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
    <h3>Budget</h3>
    <p>
    {proposals. amount}
    </p>
</div>


  <div className="">
<Input
            className="w-full"
            type="number"
            placeholder="Add days to complete the project"
            value={timeRequired}
           onChange={(e) => setTimeRequired(e.target.value)}
          />
           <Input
            className="w-full"
            type="number"
            placeholder="Amount According to your budget"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
           
          />
   <Input
            className="w-full"
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
           
          />
</div>




<button onClick={handleInterestedClick} className="bg-white  text-sm  font-semibold py-2 rounded-2xl text-black px-3">Submit Your Proposal</button>
<div className="flex w-screen  justify-around items-end">
  <div className="w-[40%] flex flex-col gap-4">
  {
  proposals
  .proposalRequests.map((user, index) => (
    <Card key={index} className="bg-white/10 text-white rounded-lg border border-gray-100 p-6 w-full max-w-md shadow-lg">
  <CardContent className="flex items-start space-x-4 p-0">
    {/* Profile Avatar */}
    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-600">
      <img src={user.profileImage} alt="Profile" className="h-full w-full object-cover" />
    </div>

    {/* User Info */}
    <div className="flex-1">
      <Link to={`/devprofile/${user.objectId}`} className="text-lg font-semibold flex items-center">
        {user.devname} <span className="text-gray-400 text-sm ml-2">🌍 Canada</span>
      </Link>

      <p className="text-sm text-gray-300">Title: <span className="text-white font-medium">{user.title}</span></p>
      <p className="text-sm text-gray-300">Amount: <span className="text-green-400 font-medium">${user.amount}</span></p>

      {/* Rating & Time */}
      <div className="flex items-center space-x-2 text-yellow-500 mt-2">
        {Array.from({ length: Math.round(user.rating) }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
        <span className="text-gray-400 text-sm">• 1 month ago</span>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-3" />

      {/* Comment */}
      <p className="text-gray-300 text-sm">Comment:</p>
      <p className="text-white text-sm bg-gray-800 p-2 rounded-lg">{user.comment}</p>
    </div>
  </CardContent>



  <button
        onClick={()=>validateFreelancer(user.objectId)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
        disabled={loading}
      >
        {loading ? "Validating..." : "Check Match 🔥"}
      </button>



  {/* Assign Button */} 
  {
    user.status === "Pending" ? (
      <Button onClick={()=>updateStatus(proposals._id,user.objectId)} className="bg-green-700 hover:bg-green-600 text-white font-semibold w-full py-2 mt-4 rounded-lg transition-all">
        ✅ Assign It
      </Button>
    ) :(
      <div  className="bg-yellow-400 hover:bg-yellow-600 text-white flex justify-center items-center font-semibold w-full py-2 mt-4 rounded-lg transition-all">
    ✅ Assigned
  </div>
    )
  }
  
</Card>
  ))
}
  </div>
  <div className="w-[40%]">
        <div className="bg-white/10 p-6 w-full rounded-lg border border-white/20 shadow-lg"> 
    { aiResponse}



    
    </div>
    
  </div>
</div>









      </div>)}


      {showModal && aiResponse && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 max-w-3xl p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              AI Freelancer Analysis
            </h2>
            <div className="max-h-80 overflow-y-auto p-3 border border-gray-200 rounded-md bg-gray-100">
              <h3 className="text-lg font-semibold text-blue-700">Why is this freelancer the best fit for this project?</h3>
              <p className="text-gray-700 leading-relaxed mt-2">{aiResponse.split("2️⃣")[0]}</p>

              <h3 className="text-lg font-semibold text-blue-700 mt-4">What percentage does the freelancer’s skills match the project’s requirements?</h3>
              <p className="text-gray-700 leading-relaxed mt-2">{aiResponse.split("2️⃣")[1]}</p>
            </div>
          </div>
        </div>
      )}




      {/* Right Side Pricing Plans */}
      <div className="lg:w-1/3 space-y-4">
       
          <div
         
            className="p-6 rounded-xl flex flex-col justify-center items-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
          >
          


            <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600">
          {selectedStatus}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-black/80 text-white p-2 rounded-lg shadow-lg border border-gray-700 w-40">
        {statuses.map((status) => (
          <div
            key={status}
            className={cn(
              "px-4 py-2 cursor-pointer rounded-md hover:bg-gray-700 transition",
              selectedStatus === status && "bg-blue-600"
            )}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </div>
        ))}
      </PopoverContent>
    </Popover>

           
             assigned to:


             <div className="w-full flex flex-col gap-4 items-center">
  <h2 className="text-2xl font-semibold text-white mb-4">👥 Assigned Users</h2>

  {assignUsers.map((user, index) => (
    <div
      key={index}
      className="w-[90%] max-w-md flex items-center gap-4 p-4 rounded-2xl 
                 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white"
    >
      {/* Profile Image */}
      <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
        <img src={user.profileImage} alt={user.devname} className="w-full h-full object-cover" />
      </div>

      {/* User Details */}
      <div className="flex flex-col">
        <p className="text-lg font-semibold">✨ {user.devname}</p>
        <p className="text-sm">💰 <span className="font-medium">${user.amount}</span></p>
        <p className="text-sm">📌 <span className="italic">{user.title}</span></p>
      </div>
    </div>
  ))}
</div>
              
            
            
          </div>
       
      </div>
    </div>
  );
}

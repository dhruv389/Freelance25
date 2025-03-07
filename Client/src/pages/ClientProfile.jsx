/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import ProposalForm from "./ClientProfileCreation/ProposalForm";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import ProposalCard from "./ClientProfileCreation/ProposalCard";
import { useParams , Link} from "react-router-dom";


export default function ClientProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
    setIsOpen(!isOpen);
  };



  const {id}=useParams();


  const { isSignedIn, user } = useUser();

const [user2, setUser] = useState(null);
const [error, setError] = useState("");


const [proposals, setProposals] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  if (id) {
    fetchProposals(id);
  }
}, [id]);

const fetchProposals = async (clerkId) => {
  try {
    const response = await axios.get(`http://localhost:8080/proposals/proposals2/${clerkId}`);
    setProposals(response.data);
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
      const response = await axios.get(`http://localhost:8080/clients/getclient/${id}`);
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      setError("User not found or server error.");
    }
  };

  if (id) {
    fetchUser();
  }
}, [id]);

if (error) return <p>{error}</p>;
if (!user) return <p>Loading...</p>;







  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 flex justify-center items-center p-6">
      {
        user2 && (

     
      <div className="max-w-[90%] w-full flex justify-around items-start gap-[3rem]">
        {/* Left Profile Section */}
        <div className="bg-white/10 w-[35%] backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-center">
          <div className="w-24 h-24 bg-orange-500 text-white text-4xl font-bold rounded-full flex items-center justify-center mx-auto">
            E
          </div>
          <h2 className="text-white text-xl font-semibold mt-4">{user2.user.firstName} {user2.user.lastName}</h2>
          <p className="text-gray-400">@epicshirley3</p>
          <div className="mt-4 text-gray-300 space-y-2">
            <p>📍 {user2.user.location.country}</p>
            <p>📍 {user2.user.location.city}</p>
            <p>📅 Joined in February 2025</p>
            <p>🌎 Preferred languages</p>
            <p>⏳ Preferred working hours</p>
          </div>
          <Link to="/videocall" className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-700 transition">
            VideoCall
          </Link>
          {user.id === user2.user.clerkId && (<ProposalForm isOpen={isOpen} toggleModal={toggleModal} />)}
          
        </div>

        {/* Right Profile Checklist Section */}
        <div className="md:col-span-2 w-[60%]">
          <h2 className="text-white text-2xl font-semibold flex items-center gap-2">
            Hi 👋 Let’s help freelancers get to know you
          </h2>
          <p className="text-gray-400">Get the most out of Fiverr by sharing more about yourself.</p>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-white/10 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full w-[29%]"></div>
          </div>

          {/* Checklist Cards */}
          <div className="mt-6 space-y-4">
            <ChecklistCard title="Share how you plan to use Fiverr" description="Tell us if you’re here to find services or offer them." done />
            <ChecklistCard title="Add details for your profile" description="Upload a photo and info for a more tailored experience." />
            <ChecklistCard title="Set your communication preferences" description="Let freelancers know your collaboration preferences." />
          </div>


          <div className="grid w-full  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
      {proposals.map((proposal) => (
        <ProposalCard key={proposal._id} proposal={proposal} />
      ))}
    </div>
        </div>
      </div> )}
    </div>
  );
}

function ChecklistCard({ title, description, done }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl flex items-center justify-between shadow-lg">
      <div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      {done ? (
        <span className="text-green-400 text-lg font-semibold">✔</span>
      ) : (
        <button className="text-blue-400 font-medium hover:underline">Add</button>
      )}
    </div>
  );
}

import React,{useState,useEffect} from 'react'
import ProposalCard from './ClientProfileCreation/ProposalCard'
import axios from 'axios'
const MainPropsalPage = () => {



    const [proposals, setProposals] = useState([]);
const [loading, setLoading] = useState(true);
 const [error, setError] = useState("");

useEffect(() => {
 
    fetchProposals();
  
}, []);

const fetchProposals = async (clerkId) => {
  try {
    const response = await axios.get(`http://localhost:8080/proposals/proposals`);
    setProposals(response.data);
    console.log(response.data);
  } catch (err) {
    setError(err.response?.data?.message || "Error fetching proposals");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className='min-h-screen w-screen flex flex-col justify-start items-center'>
     <h1 className='font-bold'>All Posted Projects by Clients</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
       {proposals.map((proposal) => (
              <ProposalCard key={proposal._id} proposal={proposal} />
            ))}</div>
    
    </div>
  )
}

export default MainPropsalPage
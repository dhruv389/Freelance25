import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProposalCard({ proposal }) {
  return (
    <Card className="w-[18rem]  max-w-md bg-white/10 flex justify-start items-center max-h-[25rem] backdrop-blur-md border border-white/20 p-2 rounded-2xl shadow-lg text-white">
      <CardContent className="flex flex-col items-center space-y-4">
        {/* Profile Image */}
        <img
          src={proposal.profileImage}
          alt={proposal.clientname}
          className="w-16 h-16 rounded-full border-2 border-white"
        />

        {/* Client Name */}

        <Link to={`/clientprofile/${proposal.clerkId}`}className="text-sm font-semibold">{proposal.clientname}</Link>

        {/* Title */}
        <p className="text-sm font-medium text-blue-300">{proposal.title}</p>

        {/* Description */}
       

        {/* Proposal Details */}
        <div className="w-full flex justify-between text-sm text-gray-400">
          <span>💰 ${proposal.amount}</span>
          <span>⏳ {proposal.timeRequired} Days</span>
        </div>

        {/* Status */}
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            proposal.status === "Pending" ? "bg-yellow-500/20 text-yellow-400" :
            proposal.status === "Assigned" ? "bg-blue-500/20 text-blue-400" :
            "bg-green-500/20 text-green-400"
          }`}
        >
          {proposal.status}
        </span>

        {/* View Proposal Button */}
        <Link to={`/proposalpage/${proposal?._id}`} className="bg-blue-600 hover:bg-blue-700 rounded-xl py-3 px-5 text-white text-center w-[90%]">
          View Proposal
        </Link>
      </CardContent>
    </Card>
  );
}

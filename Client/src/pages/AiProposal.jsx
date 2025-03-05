import React, { useState } from "react";
import { getGroqCompletion } from "../groq";
import { freelanceData, projectData } from "../data";
import { FaRobot } from "react-icons/fa";

const AiProposal = () => {
  const [x, sx] = useState("");

  const test = async () => {
    const result = await getGroqCompletion(freelanceData, projectData);
    sx(result);
    console.log(result);
  };

  return (
    <div className="flex min-h-screen w-screen text-white flex-col justify-center items-center bg-black relative overflow-hidden">
      {/* Blurred Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-40"></div>

      <div className="glass-effect p-6 rounded-xl w-[50vw] h-auto z-10">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
          <FaRobot className="text-blue-400" /> AI Proposal
        </h2>

        {/* Textarea */}
        <textarea
          className="w-full p-3 mt-4 bg-transparent border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows="4"
          placeholder="Enter your request..."
        ></textarea>

        {/* Button */}
        <button
          onClick={test}
          className="mt-4 px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Generate Proposal
        </button>

        {/* Output Container */}
        <div className="mt-4 p-4 bg-black bg-opacity-30 rounded-lg border border-gray-500 min-h-[10vh]">
          <p className="text-white">{x || "Your AI-generated proposal will appear here..."}</p>
        </div>
      </div>
    </div>
  );
};

export default AiProposal;

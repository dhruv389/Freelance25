import { AiOutlineCheckCircle } from "react-icons/ai";

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg text-center border border-gray-800">
        <AiOutlineCheckCircle className="text-green-400 text-6xl mx-auto animate-bounce" />
        <h2 className="text-2xl text-white font-semibold mt-4">Payment Successful!</h2>
        <p className="text-gray-300 mt-2">Thank you for your purchase. Your transaction has been completed.</p>
        <button 
          className="mt-6 px-5 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
          onClick={() => window.location.href = "/"}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

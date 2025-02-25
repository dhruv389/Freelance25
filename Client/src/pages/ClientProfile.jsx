/* eslint-disable react/prop-types */
export default function ClientProfile() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 flex justify-center items-center p-6">
      <div className="max-w-[90%] w-full flex justify-around items-start gap-[3rem]">
        {/* Left Profile Section */}
        <div className="bg-white/10 w-[35%] backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-center">
          <div className="w-24 h-24 bg-orange-500 text-white text-4xl font-bold rounded-full flex items-center justify-center mx-auto">
            E
          </div>
          <h2 className="text-white text-xl font-semibold mt-4">Your Fiverr Name</h2>
          <p className="text-gray-400">@epicshirley3</p>
          <div className="mt-4 text-gray-300 space-y-2">
            <p>📍 Located in India</p>
            <p>📅 Joined in February 2025</p>
            <p>🌎 Preferred languages</p>
            <p>⏳ Preferred working hours</p>
          </div>
          <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition">
            Preview Public Profile
          </button>
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
            Explore Fiverr →
          </button>
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
        </div>
      </div>
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

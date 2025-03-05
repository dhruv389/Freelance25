import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, X } from "lucide-react";
import { useUserContext } from "../context/UserContext.js";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData3 } = useUserContext();
  const notifications = [
    "🚀 New project assigned!",
    "🔥 You got a message from a client!",
    "✅ Your proposal was accepted!",
    "⚡ Server maintenance scheduled for tomorrow.",
    "📅 Reminder: Meeting at 3 PM today.",
    "🎉 Congratulations! You achieved a new milestone!",
  ];
  

  return (
    <div className="relative z-50">
      {/* 🔔 Notification Icon */}
      <button
        className="fixed top-[15rem] right-5 p-3 bg-white/20 backdrop-blur-lg rounded-full shadow-md hover:bg-white/30 transition"
        onClick={() => setIsOpen(true)}
      >
        <Bell size={24} className="text-white" />
      </button>

      {/* 🟢 Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-80 h-screen bg-white/10 backdrop-blur-xl shadow-lg border-l border-white/20 p-5 flex flex-col"
        >
          {/* ❌ Close Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">🔔 Notifications</h2>
            <button onClick={() => setIsOpen(false)} className="p-1">
              <X size={24} className="text-white" />
            </button>
          </div>

          {/* 📜 Scrollable Notifications */}
          <div className="mt-4 space-y-3 overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
            {userData3 && notifications.map((note, index) => (
              <div
                key={index}
                className="p-3 bg-white/20 backdrop-blur-lg rounded-lg shadow-md text-white"
              >
                {note}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

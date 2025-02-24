import React, { useState, forwardRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"


import { Link } from "react-router-dom";



const freelancingOptions = {
  "Web Development": [
    { title: "Frontend Development", href: "/freelance/web-dev/frontend" },
    { title: "Backend Development", href: "/freelance/web-dev/backend" },
    { title: "Full Stack Development", href: "/freelance/web-dev/fullstack" },
    { title: "WordPress Development", href: "/freelance/web-dev/wordpress" },
    { title: "E-commerce Development", href: "/freelance/web-dev/ecommerce" },
    { title: "Web Design", href: "/freelance/web-dev/design" },
    { title: "API Development", href: "/freelance/web-dev/api" },
    { title: "Web Application Security", href: "/freelance/web-dev/security" },
    { title: "Progressive Web Apps (PWA)", href: "/freelance/web-dev/pwa" },
    { title: "CMS Development", href: "/freelance/web-dev/cms" },
  ],
  "Mobile Development": [
    { title: "iOS Development", href: "/freelance/mobile-dev/ios" },
    { title: "Android Development", href: "/freelance/mobile-dev/android" },
    { title: "React Native Development", href: "/freelance/mobile-dev/react-native" },
    { title: "Flutter Development", href: "/freelance/mobile-dev/flutter" },
    { title: "Cross-Platform Development", href: "/freelance/mobile-dev/cross-platform" },
    { title: "Mobile Game Development", href: "/freelance/mobile-dev/game" },
    { title: "Mobile App Testing", href: "/freelance/mobile-dev/testing" },
    { title: "Mobile App UI/UX Design", href: "/freelance/mobile-dev/ui-ux" },
    { title: "Mobile App Maintenance", href: "/freelance/mobile-dev/maintenance" },
    { title: "AR/VR Mobile Apps", href: "/freelance/mobile-dev/ar-vr" },
  ],
  "Design & Creative": [
    { title: "Graphic Design", href: "/freelance/design/graphic" },
    { title: "UI/UX Design", href: "/freelance/design/ui-ux" },
    { title: "Logo Design", href: "/freelance/design/logo" },
    { title: "Illustration", href: "/freelance/design/illustration" },
    { title: "Branding & Identity", href: "/freelance/design/branding" },
    { title: "Print Design", href: "/freelance/design/print" },
    { title: "Packaging Design", href: "/freelance/design/packaging" },
    { title: "Motion Graphics", href: "/freelance/design/motion-graphics" },
    { title: "3D Modeling & Rendering", href: "/freelance/design/3d" },
    { title: "Storyboarding", href: "/freelance/design/storyboarding" },
  ],
  "Writing & Translation": [
    { title: "Content Writing", href: "/freelance/writing/content" },
    { title: "Copywriting", href: "/freelance/writing/copy" },
    { title: "Technical Writing", href: "/freelance/writing/technical" },
    { title: "Creative Writing", href: "/freelance/writing/creative" },
    { title: "Blog Writing", href: "/freelance/writing/blog" },
    { title: "Scriptwriting", href: "/freelance/writing/script" },
    { title: "Translation", href: "/freelance/writing/translation" },
    { title: "Proofreading & Editing", href: "/freelance/writing/proofreading" },
    { title: "Resume Writing", href: "/freelance/writing/resume" },
    { title: "Grant Writing", href: "/freelance/writing/grant" },
  ],
  "Marketing & Sales": [
    { title: "Digital Marketing", href: "/freelance/marketing/digital" },
    { title: "Social Media Marketing", href: "/freelance/marketing/social" },
    { title: "SEO (Search Engine Optimization)", href: "/freelance/marketing/seo" },
    { title: "Email Marketing", href: "/freelance/marketing/email" },
    { title: "Content Marketing", href: "/freelance/marketing/content" },
    { title: "Influencer Marketing", href: "/freelance/marketing/influencer" },
    { title: "PPC Advertising", href: "/freelance/marketing/ppc" },
    { title: "Affiliate Marketing", href: "/freelance/marketing/affiliate" },
    { title: "Market Research", href: "/freelance/marketing/research" },
    { title: "Sales Funnel Development", href: "/freelance/marketing/sales-funnel" },
  ],
  "Business & Consulting": [
    { title: "Business Consulting", href: "/freelance/business/consulting" },
    { title: "Financial Consulting", href: "/freelance/business/financial" },
    { title: "Project Management", href: "/freelance/business/project" },
    { title: "Data Analysis", href: "/freelance/business/data" },
    { title: "Virtual Assistance", href: "/freelance/business/va" },
    { title: "Customer Support", href: "/freelance/business/support" },
    { title: "HR Consulting", href: "/freelance/business/hr" },
    { title: "Legal Consulting", href: "/freelance/business/legal" },
    { title: "Startup Consulting", href: "/freelance/business/startup" },
    { title: "Risk Management", href: "/freelance/business/risk" },
  ],
  "AI & Machine Learning": [
    { title: "AI Chatbots", href: "/freelance/ai/chatbots" },
    { title: "Machine Learning Models", href: "/freelance/ai/ml-models" },
    { title: "Natural Language Processing (NLP)", href: "/freelance/ai/nlp" },
    { title: "Computer Vision", href: "/freelance/ai/computer-vision" },
    { title: "AI Consulting", href: "/freelance/ai/consulting" },
    { title: "Data Science", href: "/freelance/ai/data-science" },
    { title: "AI Integration", href: "/freelance/ai/integration" },
    { title: "AI Ethics & Compliance", href: "/freelance/ai/ethics" },
    { title: "AI Training & Development", href: "/freelance/ai/training" },
    { title: "AI-Powered Automation", href: "/freelance/ai/automation" },
  ],
  "Video & Animation": [
    { title: "Video Editing", href: "/freelance/video/editing" },
    { title: "2D Animation", href: "/freelance/video/2d-animation" },
    { title: "3D Animation", href: "/freelance/video/3d-animation" },
    { title: "Motion Graphics", href: "/freelance/video/motion-graphics" },
    { title: "Explainer Videos", href: "/freelance/video/explainer" },
    { title: "Video Production", href: "/freelance/video/production" },
    { title: "Video Marketing", href: "/freelance/video/marketing" },
    { title: "Whiteboard Animation", href: "/freelance/video/whiteboard" },
    { title: "Character Animation", href: "/freelance/video/character" },
    { title: "Video Scriptwriting", href: "/freelance/video/scriptwriting" },
  ],
  "Music & Audio": [
    { title: "Music Composition", href: "/freelance/music/composition" },
    { title: "Audio Editing", href: "/freelance/music/editing" },
    { title: "Sound Design", href: "/freelance/music/sound-design" },
    { title: "Voiceover Recording", href: "/freelance/music/voiceover" },
    { title: "Podcast Production", href: "/freelance/music/podcast" },
    { title: "Audio Mixing & Mastering", href: "/freelance/music/mixing" },
    { title: "Jingle Creation", href: "/freelance/music/jingle" },
    { title: "Audio Restoration", href: "/freelance/music/restoration" },
    { title: "Background Music", href: "/freelance/music/background" },
    { title: "Audio Effects", href: "/freelance/music/effects" },
  ],
  "Gaming": [
    { title: "Game Development", href: "/freelance/gaming/development" },
    { title: "Game Design", href: "/freelance/gaming/design" },
    { title: "Game Art", href: "/freelance/gaming/art" },
    { title: "Game Testing", href: "/freelance/gaming/testing" },
    { title: "VR/AR Game Development", href: "/freelance/gaming/vr-ar" },
    { title: "Game Scriptwriting", href: "/freelance/gaming/scriptwriting" },
    { title: "Game Sound Design", href: "/freelance/gaming/sound-design" },
    { title: "Game Monetization", href: "/freelance/gaming/monetization" },
    { title: "Game Marketing", href: "/freelance/gaming/marketing" },
    { title: "Game Localization", href: "/freelance/gaming/localization" },
  ],
};


export default function MegaMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar2 border border-gray-500 flex overflow-x-auto overflow-y-hidden">
      









      {Object.keys(freelancingOptions).map((category) => (
        <div className="dropdown text-white " key={category}>
          <button className="dropbtn w-[12rem] text-sm overflow-hidden" key={category}>
            {" "}
            {category}
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content z-50 bg-black border border-gray-400 shadow-lg">
            <div className="header ">
             
             
              <Link to={`/optionmenu`} className=" w-full flex justify-start ">
                 <p className="w-[30%] flex justify-start bg-slate-700 pl-5 py-4 rounded-md h-full "> {category}</p>
             </Link>

            </div>
            <div className="row" >
              {freelancingOptions[category].map((option) => (
                <div className="column"  key={option.title}>
                <Link
                to="/suboption"
                  key={option.title}
                  href={option.href}
                  className="block px-4 py-2 hover:bg-gray-200 text-white rounded-md"
                >
                  {option.title}
                </Link>
                </div>
            
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

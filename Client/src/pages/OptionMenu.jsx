import React from 'react';
import { Link } from 'react-router-dom';
const programmingTechData = [
  {
    title: "Imports",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["Python", "Javascript", "React", "Node.js"],
  },
  {
    title: "Application Development",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["Web Apps", "Mobile Apps", "Desktop Apps", "Game Development"],
  },
  {
    title: "Software Development",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["Agile", "DevOps", "Testing", "CI/CD"],
  },
  {
    title: "Mobile Apps",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["iOS Development", "Android Development", "React Native", "Flutter"],
  },
  {
    title: "Website Platforms",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["WordPress", "Shopify", "Wix", "Squarespace"],
  },
  {
    title: "Support & Cybersecurity",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["IT Support", "Network Security", "Data Recovery", "Penetration Testing"],
  },
  {
    title: "Databases & Development",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["SQL", "NoSQL", "Database Design", "Data Warehousing"],
  },
  {
    title: "Microservices",
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3baf91d2ca0c49f0973f2f9e3e210f86-1682409420385/Website%20Development.png", // Replace with your image URL
    items: ["Docker", "Kubernetes", "API Development", "Service Mesh"],
  },
];

function OptionMenu() {
  return (
    <div className="w-[84vw] mx-auto px-4 py-8">
      {/* Programming & Tech Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Programming & Tech</h1>
        <p className="text-lg">
          Most Popular in Programming & Tech
        </p>
      </section>

      {/* Booking a full suite of services Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mb-8 flex items-center">
        <div className="flex-1">
          <h2 className="text-2xl text-black font-semibold mb-4">Booking a full suite of services?</h2>
          <p className="text-gray-600 mb-4">
            Get your entire project done with a team of experts.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Teams
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          {/* Placeholder for Images - Replace with actual images */}
         <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/80d7d995ba5d3bfdd0e2fa18ccae04a1-1707286167565/agencies_programming_and_tech_hq.png" alt="" />
        </div>
      </section>

      {/* Explore Programming & Tech Section */}
      
      <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Explore Programming & Tech</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {programmingTechData.map((category, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.title}
                className="w-[95%] h-[80%] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">{category.title}</h3>
              <div className=" flex flex-col w-full justify-start items-start text-sm text-gray-300">
                {category.items.map((item, idx) => (
                  <Link to="/suboption" key={idx} className="w-full hover:bg-white/30 rounded-md px-2 text-start py-2">{item}</Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
      {/* Guides related to Programming & Tech Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guides related to Programming & Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Placeholder for Guides - Replace with actual content */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <h3 className="text-lg font-semibold mb-2">7 Best Update Library for 2023</h3>
            <p className="text-sm text-gray-600">How to keep your software up-to-date.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <h3 className="text-lg font-semibold mb-2">Coding</h3>
            <p className="text-sm text-gray-600">How to learn to code and what tech jobs will make you money in 2023.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <h3 className="text-lg font-semibold mb-2">How to become a...</h3>
            <p className="text-sm text-gray-600">How to land a job in tech and what you need to know.</p>
          </div>
        </div>
      </section>

      {/* Programming & Tech FAQs Section - (Optional - Add if needed) */}
      {/* ... */}
    </div>
  );
}

export default OptionMenu;
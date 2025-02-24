import React from 'react'

import { useEffect, useState } from "react";
import { Particles } from "../components/magicui/particles";
import { Marquee } from "../components/magicui/marquee";
 import {cn } from "../lib/utils";
 import { FaCode, FaPaintBrush, FaBullhorn, FaLanguage, FaVideo, FaRobot, FaMusic, FaBriefcase, FaUserTie } from "react-icons/fa";
 import { ShineBorder } from "../components/magicui/shine-border";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
 
 import { NeonGradientCard } from "../components/magicui/neon-gradient-card";
 
 import { MagicCard } from "../components/magicui/magic-card";


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const categories = [
  { name: "Programming & Tech", icon: <FaCode /> },
  { name: "Graphics & Design", icon: <FaPaintBrush /> },
  { name: "Digital Marketing", icon: <FaBullhorn /> },
  { name: "Writing & Translation", icon: <FaLanguage /> },
  { name: "Video & Animation", icon: <FaVideo /> },
  { name: "AI Services", icon: <FaRobot /> },
  { name: "Music & Audio", icon: <FaMusic /> },
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Consulting", icon: <FaUserTie /> },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className="
        relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4
        border-2 border-white/40
        bg-white/10 dark:bg-white/10 
        backdrop-blur-lg shadow-md shadow-black/20
      "
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full h-[2rem] w-[2rem]" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};









const Home = () => {


  const [selectedRole, setSelectedRole] = useState("freelancer");

  return (
    <div className='min-h-screen w-screen flex items-center gap-[2rem] justify-start flex-col'>
      




    <div className="relative mt-[6rem] flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
        Particles
      </span> */}



      <div className="w-[80vw] bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-10 h-[80vh] border border-gray-400 rounded-3xl flex justify-between items-center">
   <div className="w-[20%] flex justify-start items-start  h-full">
    <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/uma-hero/image-left.png" alt=""  className='h-full  object-contain w-full'/>
   </div>
   <div className="w-[50%] h-full flex flex-col justify-start items-center gap-5">
        <h1 className='text-[3rem]'>We connect people to bring projects to life</h1>
        
        <p className='text-gray-400'>Find high-quality talent or open jobs with the help of AI tools that keep you in control.</p>

        <div className="w-full flex h-[3rem] ">
          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/uma-hero/logo-airbnb-grey.svg" alt=""  className='h-10px w-10px object-contain'/>
          
          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/uma-hero/logo-bissell-grey.svg" alt="" className='h-10px w-10px object-contain' />

          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/uma-hero/logo-microsoft-grey.svg" alt="" className='h-10px w-10px object-contain' />
        </div>
   </div>
   <div className="w-[20%] h-full">
    <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/uma-hero/image-right.png" alt=""  className='h-full  object-contain w-full'/>
   </div>
</div>

      <div className="absolute -top-20 left-[15rem] h-[15rem] w-[18rem] bg-green-400 opacity-20 blur-2xl rounded-full"></div>
      <div className="absolute bottom-30 h-[15rem] w-[18rem] bg-green-800 opacity-20 blur-2xl rounded-full"></div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={10}
        color={"#ffff"}
        size={0.5}
        refresh
      />




    </div>









   



<div className=""><p className=''>Services</p></div>

    <Carousel className="w-[80vw] h-[12rem]  mb-[7rem]">
  <CarouselContent className="-ml-1">
    {categories.map((category, index) => ( // Fixed `.slice(0, 6)`
      <CarouselItem key={index} className="pl-1  ml-4 md:basis-1/2 lg:basis-[15%]">
        <div className="p-1">
          <MagicCard
            className="cursor-pointer flex items-center justify-center flex-col border border-gray-400 whitespace-nowrap text-lg p-6 w-40 h-40 rounded-xl shadow-lg"
            gradientColor="#262626"
          >
            <div className="text-3xl text-green-500">{category.icon}</div>
            <p className="mt-2 text-gray-200 text-center text-sm font-semibold">
              {category.name}
            </p>
          </MagicCard>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  




    <section className="relative w-[85vw] bg-gray-900 border-gray-100 border text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300">For clients</p>
          <h1 className="text-4xl md:text-5xl font-bold">Find talent your way</h1>
          <p className="text-lg text-gray-300">
            Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/businesswoman-business-teammeeting-conference-videocall-online-greeting-remotely-collegues_482257-10095.jpg?t=st=1740292137~exp=1740295737~hmac=84de113d04f04b58de4196dd056061cafd8d3ab3892e6c6762c0250b833c2c32&w=1800"
            alt="Professional working"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition">
          <h2 className="text-xl font-semibold">Post a job and hire a pro</h2>
          <p className="text-sm mt-2">Talent Marketplace™ →</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition">
          <h2 className="text-xl font-semibold">Browse and buy projects</h2>
          <p className="text-sm mt-2">Project Catalog™ →</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition">
          <h2 className="text-xl font-semibold">Get advice from an industry expert</h2>
          <p className="text-sm mt-2">Consultations →</p>
        </div>
      </div>
    </section>







    <div className="flex w-[90vw] border justify-around flex-col md:flex-row items-center border-gray-700  p-8 rounded-lg">
      {/* Left Side - Signup Box */}
      <MagicCard
        className="cursor- h-[15rem] flex-col w-[40%] items-center border border-gray-800 justify-center whitespace-nowrap text-4xl"
        gradientColor="#D9D9D955" // Dark mode subtle glow
      >
        Magic
      </MagicCard>

      {/* Right Side - Features */}
      <div className="md:ml-8 w-[50%] md:w-1/2 mt-6 md:mt-0 ">
        <h1 className="text-2xl font-semibold mb-4">Up your work game, it's easy</h1>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span>✏️</span>
            <div>
              <h3 className="font-semibold">No cost to join</h3>
              <p className="text-gray-600">Register and browse talent profiles, explore projects, or even book a consultation.</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span>📌</span>
            <div>
              <h3 className="font-semibold">Post a job and hire top talent</h3>
              <p className="text-gray-600">Finding talent doesn’t have to be a chore. Post a job or we can search for you!</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span>💼</span>
            <div>
              <h3 className="font-semibold">Work with the best—without breaking the bank</h3>
              <p className="text-gray-600">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
            </div>
          </li>
        </ul>
        <div className="mt-4 flex gap-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Sign up for free</button>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg">Learn how to hire</button>
        </div>
      </div>
    </div>


     

    


<div className="flex flex-col gap-2 w-full justify-center items-center py-10">
<p>Testimonials</p>
<p className='text-semibold text-3xl'>Testimonials
What our customers are saying</p>
</div>
   



    <div className="relative  flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
     
    </div>


   
    </div>
  )
}

export default Home
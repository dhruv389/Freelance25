import React from 'react'

import { useEffect, useState } from "react";
import { Particles } from "../components/magicui/particles";
import { Marquee } from "../components/magicui/marquee";
 import {cn } from "../lib/utils";
 import { FaCode, FaPaintBrush, FaBullhorn, FaLanguage, FaVideo, FaRobot, FaMusic, FaBriefcase, FaUserTie } from "react-icons/fa";
 import { Button } from "../components/ui/button";
import { BoxReveal } from "../components/magicui/box-reveal";
import { AvatarCircles } from "../components/magicui/avatar-circles";
import { BorderBeam } from "../components/magicui/border-beam";
import Drawer from "../components/Drawer";
import { useUserContext } from "../context/UserContext.js";
import {GridPattern} from "../components/magicui/grid-pattern"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"
 

 
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




const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
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
      




    <div className="relative  flex h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      {/* <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
        Particles
      </span> */}



      <div className="w-[78vw]  backdrop-blur-lg border border-white/20 shadow-lg p-7 h-[80vh] border border-gray-400 rounded-3xl flex justify-between items-center">
   <div className="w-[20%] flex justify-start items-start  h-full">
    <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/uma-hero/image-left.png" alt=""  className='h-full  object-contain w-full'/>
   </div>
   <div className="w-[50%] h-full flex flex-col justify-center items-center gap-5">

   <BoxReveal boxColor={"#16A34A"} duration={0.5}>
       
        <h1 className='text-[3rem] text-center'>We connect people to bring projects to life <span className="text-green-400">.</span></h1>

      </BoxReveal>
       
      <BoxReveal boxColor={"#16A34A"} duration={0.5}>
       
     
       <p className='text-gray-300 text-center'>Find high-quality talent or open jobs with the help of AI tools that keep you in control. <span className="text-green-400">.</span></p>
     </BoxReveal>
        <p>Our Top Freelancers </p>
      <AvatarCircles numPeople={99} avatarUrls={avatars} />;

        <div className="w-full flex h-[3rem] ">
          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/uma-hero/logo-airbnb-grey.svg" alt=""  className='h-10px w-10px object-contain'/>
          
          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/uma-hero/logo-bissell-grey.svg" alt="" className='h-10px w-10px object-contain' />

          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/brontes/uma-hero/logo-microsoft-grey.svg" alt="" className='h-10px w-10px object-contain' />
        </div>
   </div>
   <div className="w-[20%] h-full">
    <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/f_auto,q_auto/brontes/uma-hero/image-right.png" alt=""  className='h-full  object-contain w-full'/>
   </div>
   <BorderBeam duration={10} size={500} />
</div>

      <div className="absolute -top-20 left-[15rem] h-[15rem] w-[18rem] bg-green-400 opacity-20 blur-2xl rounded-full"></div>
      <div className="absolute bottom-30 h-[15rem] w-[18rem] bg-green-800 opacity-20 blur-2xl rounded-full"></div>

      {/* <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={10}
        color={"#ffff"}
        size={0.5}
        refresh
      />


 */}


 <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />

    </div>









   



<div className=""><p className=''>Services</p>  <Drawer/></div>

    <Carousel className="w-[80vw] h-[12rem]  mb-[7rem]">
  <CarouselContent className="-ml-1">
    {categories.map((category, index) => ( // Fixed `.slice(0, 6)`
      <CarouselItem key={index} className="pl-1  ml-4  lg:basis-[15%]">
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
  




    <section className="relative w-[90vw]  border-gray-600 rounded-xl border text-white py-16 px-6 md:px-12 lg:px-20">
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
            src="https://www.kickidler.com/assets/images/articles/2317.jpg"
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
      <BorderBeam duration={15} size={400} />
    </section>







  







    <section className="bg- py-16 px-6 md:px-12 lg:px-20 text-white">
    
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className=" backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-red-500/20 flex items-center justify-center rounded-full">
              <span className="text-red-400 text-xl">🔍</span>
            </div>
            <h3 className="font-semibold text-lg mt-4">Struggling to find skilled freelancers?</h3>
            <p className="text-gray-300 mt-2">
              Get access to top professionals who deliver quality work on time.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center rounded-full">
              <span className="text-blue-400 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-lg mt-4">Tired of handling projects alone?</h3>
            <p className="text-gray-300 mt-2">
              Scale your business effortlessly by hiring expert freelancers.
            </p>
          </div>

          {/* Card 3 */}
          <div className=" backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center rounded-full">
              <span className="text-green-400 text-xl">💰</span>
            </div>
            <h3 className="font-semibold text-lg mt-4">No budget for a full-time team?</h3>
            <p className="text-gray-300 mt-2">
              Hire freelancers to work on-demand without long-term costs.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex w-[90%] justify-around items-end">
       
        <div className="absolute bottom-30 h-[15rem] w-[18rem] bg-green-800 opacity-20 blur-2xl rounded-full"></div>
        <div className="mt-16 flex flex-col justify-start items-start w-[50%]">
          <h2 className="text-3xl text-start md:text-4xl font-bold text-white">
            Grow Your Business with  Verified Freelancers
           
          </h2>
          <p className="text-gray-400 text-start mt-4 ">
            Find the best talents in design, development, marketing, and more. 
            Secure, fast, and hassle-free freelancing experience.
          </p>

          {/* Tech & Features */}
          <p className="font-medium text-gray-300 mt-6">
            🚀 Verified Experts | 🔒 Secure Transactions | ⚡ Quick Delivery
          </p>

          {/* Profile Section */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Freelancer Profile"
              className="w-12 h-12 rounded-full border border-white/30"
            />
            <div className="text-left">
              <h4 className="font-semibold text-white">Alex Johnson</h4>
              <p className="text-gray-400 text-sm">Freelance Web Developer</p>
            </div>
          </div>
          </div>

          <div className="w-[30%] h-full object-contain">
            <img src="https://cdn.prod.website-files.com/604761b6a7e539ea274cfd6b/6630f4ec425715657a558476_Image%20(3).webp" className='h-[15rem]  object-contain w-full shadow-xl  ' alt="" />
          </div>

        </div>
      </div>
  </section>











     

    


<div className="flex flex-col gap-2 w-full justify-center items-center py-10">
<p>Testimonials</p>
<p className='text-semibold text-3xl'>Testimonials
What our customers are saying</p>
</div>
   



    <div className="relative  flex w-full flex-col items-center mb-[5rem] justify-center overflow-hidden">
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
      <Marquee pauseOnHover className="[--duration:20s] ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
     
    </div>


   
    </div>
  )
}

export default Home
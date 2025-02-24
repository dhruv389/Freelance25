import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import DevReviw from "../components/DevReview" 


const plans = [
  { name: "Basic", price: "₹7,500", features: ["5 pages", "Basic setup", "3 plugins"], delivery: "5-day delivery" },
  { name: "Standard", price: "₹9,000", features: ["8 pages", "Advanced setup", "5 plugins"], delivery: "4-day delivery" },
  { name: "Premium", price: "₹10,919", features: ["10 pages", "Pro setup", "7 plugins"], delivery: "3-day delivery" },
];

export default function DevProject() {
  const [selectedPlan, setSelectedPlan] = useState(plans[2]);

  return (
    <div className="min-h-screen bg-[#14181C] text-white p-6 md:p-12 flex flex-col lg:flex-row gap-8">
      {/* Left Content */}
      <div className="lg:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold">I will develop, design and kickstart your eCommerce Shopify website</h1>



        <div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 mx-auto  shadow-lg rounded-xl  flex flex-col md:flex-row items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-green-500"
        />
        <div className="ml-6">
          <h2 className="text-2xl font-semibold">Ismail</h2>
          <p className="text-gray-600">@web_wafels</p>
          <p className="text-green-500 flex items-center mt-1">
            ★ 5.0 (276) <span className="ml-2 text-gray-400">Level 2</span>
          </p>
          <p className="text-gray-500 mt-2">
            A professional full stack website development master
          </p>
          <div className="flex text-black gap-2 mt-2">
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
              Bangladesh
            </span>
            <span className="bg-gray-200 px-3 py-1 text-sm rounded-full">
              English, Bengali, Hindi, Tamil
            </span>
          </div>
        </div>
        <div className="ml-auto">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Contact me
          </button>
        </div>
      </div>





<div className="w-full flex justify-center items-center">

      <Carousel className="w-[34rem] ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="h-[25rem] w-[29rem]">
                <CardContent className="flex  aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>


<div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
    <p>
    About this gig
Ready to build a Mobile App that Stands Out? Welcome to DevDuo360!

<br />


Hi there! I'm Zabid, a passionate mobile app developer and the driving force behind DevDuo360.

<br />


My talented team and I are on a mission to create mobile apps that don't just functionthey wow and inspire! Whether you're a startup dreaming big or an enterprise leveling up, we're here to make it happen.



<br />

Our Expertise Includes:b
<br />



Custom Mobile App Development (Flutter Framework)
Android and iOS App Development
Mobile App Dashboard Design with Prototype
Backend Development
Smooth API Integrations
Hassle-Free App Deployment
Website to App Conversion
Ongoing Support & Updates

<br />



Technologies that I use to build an App:

<br />


Frameworks: Flutter (Hybrid/Cross-Platform)
Languages: Dart
Backend: Laravel / Node.js
Databases: MySQL / MongoDB / PostgreSQL


<br />


Why Choose DevDuo360?

<br />


Bespoke designs that align with your vision
Cutting-edge technology for high performance
A partner who's with you every step of the way
    </p>
</div>


<DevReviw/>






      </div>

      {/* Right Side Pricing Plans */}
      <div className="lg:w-1/3 space-y-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-400">{plan.name}</h2>
            <p className="text-lg font-semibold">{plan.price}</p>
            <ul className="text-gray-300 space-y-1 mt-2">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-400 mt-2">{plan.delivery}</p>
            <button className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

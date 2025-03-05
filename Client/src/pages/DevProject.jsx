import { useState ,useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import DevReviw from "../components/DevReview" 
import axios from "axios";
import { useParams } from "react-router-dom";



const plans = [
  { name: "Basic", price: "₹7,500", features: ["5 pages", "Basic setup", "3 plugins"], delivery: "5-day delivery" },
  { name: "Standard", price: "₹9,000", features: ["8 pages", "Advanced setup", "5 plugins"], delivery: "4-day delivery" },
  { name: "Premium", price: "₹10,919", features: ["10 pages", "Pro setup", "7 plugins"], delivery: "3-day delivery" },
];

export default function DevProject() {
  const [selectedPlan, setSelectedPlan] = useState(plans[2]);



  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 const { id } = useParams();




 const handleSubmit = async (e) => {
  e.preventDefault();
  let res = await axios.post("http://localhost:8080/payment", {
    amount: 12,
    currency: "USD",
  });
  console.log(res);
  if (res && res.data) {
    window.location.href = res.data.links[1].href;
}
};
 console.log(id);


  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/projects/getProjectbyid/${id}`);
        setProject(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError("Failed to fetch project details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;


  return (
    <div className="min-h-screen  text-white p-6 md:p-12 flex flex-col lg:flex-row gap-8">
      {/* Left Content */}
      <div className="lg:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>



        <div className="w-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 mx-auto  shadow-lg rounded-xl  flex flex-col md:flex-row items-center">
        <img
          src={project.profileimage
          }
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-green-500"
        />
        <div className="ml-6">
          <h2 className="text-2xl w-full  flex justify-between items-center font-semibold">
          <p>{project.devname}</p>  </h2>
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
        <div className="ml-auto flex flex-col justify-between gap-4 h-full">
        <div className="text-3xl font-bold">💖{project.likes}</div>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Contact me
          </button>
        </div>
      </div>





<div className="w-full flex justify-center items-center">

      <Carousel className="w-[34rem] ">
      <CarouselContent>
        {project.thumbnail.map((img, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="h-[25rem] w-[29rem]">
                <CardContent className="flex h-full w-full   items-center justify-center p-1">
                  <img src={img} key={index} alt="" className="h-full w-full object-cover" />
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

<p className="text-2xl font-bold mt-[5rem]">Description:</p>
<div className="w-full bg-white/10 rounded-xl backdrop-blur-lg border border-white/20 shadow-lg p-6">
   <p>
      {project.description}
    </p>
</div>

  <p className="text-2xl font-bold">Skills:</p>
<div className="w-full flex justify-start rounded-2xl items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6">
  <br />
{project.skillsRequired
  .map((skill, index) => (
  <span key={index} className="bg-gray-200 text-black px-3 py-1 text-sm rounded-full">
  {skill}
</span>))}
  
</div>
  <hr />
<p className="text-2xl font-bold">Reviews:</p>

<DevReviw/>






      </div>

      {/* Right Side Pricing Plans */}
      <div className="lg:w-1/3 space-y-4">
       
          <div
            
            className="p-6 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
          >
            <h2 className="text-xl font-bold text-blue-400">{project.Price[0].packageType}</h2>
            <p className="text-lg font-semibold">{project.Price[0].chargePerPage}</p>
            <ul className="text-gray-300 space-y-1 mt-2">
             <p className="font-bold">Functionality ✔️ :</p>
             <br />
              {project.Price[0].functionality
              }
            </ul>
            <p className="text-sm text-gray-400 mt-2">{project.Price[0].deliveryDate}</p>
            <button  onClick={handleSubmit} className="mt-4 w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
              Select Plan
            </button>
          </div>
      
      </div>
    </div>
  );
}

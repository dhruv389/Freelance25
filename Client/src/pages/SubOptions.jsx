import React, { useEffect, useState } from 'react';
import { useParams ,Link} from 'react-router-dom';
import axios from 'axios';

const SubOptions = () => {
  const selectedSkill = useParams();
  console.log(selectedSkill.id);

  const [projects, setProjects] = useState([]);

  const fetchProjectsBySkill = async () => {
    if (!selectedSkill) {
      alert('Please select a skill!');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/projects/skill/${selectedSkill.id}`);
      setProjects(response.data.projects || []);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjectsBySkill();
  }, [selectedSkill]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Web Application</h1>
        <p className="text-gray-400 mb-4">
          Build your custom web application from scratch with help from skilled freelance coders{' '}
          <a href="#" className="text-blue-600">How Fiverr Works</a>
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white/20 rounded-md backdrop-blur-lg border border-white/20 shadow-lg p-6 overflow-hidden">
            <img src={project.thumbnail[0]} alt={project.title} className="w-full h-48 object-cover rounded-md" />
            <div className="p-4">
              <Link to={`/devproject/${project._id}`} className="text-sm font-semibold hover:text-blue-600 mb-2">{project.title}</Link>
              
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">{'⭐'.repeat(Math.floor(project.ratings))}</span>
                <span className="text-sm text-gray-400 ml-1">({project.ratings})</span>
              </div>
              <p className="text-gray-400 font-semibold">Price: ₹{project.Price[0]?.chargePerPage || 'N/A'}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <Link to={`/devprofile/${project.clerkId}`} className="text-sm font-semibold">{project.devname}</Link>
                </div>
                <img
                  src={project.profileimage}
                  alt={project.devname}
                  className="w-10 h-10 rounded-full border border-white"
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SubOptions;

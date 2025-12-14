import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import buildingImg from "@assets/generated_images/commercial_building_construction_service_image.png";
import bridgeImg from "@assets/generated_images/bridge_construction_service_image.png";
import irrigationImg from "@assets/generated_images/irrigation_canal_construction_project.png";
import heroBg from "@assets/generated_images/hero_background_for_construction_website.png";
import ruruimg from "@assets/generated_images/ruru.jpg";
import dumreimg from "@assets/generated_images/dumre.jpg";
import dareimg from "@assets/generated_images/dare.jpg";
import setiimg from "@assets/generated_images/seti.png";
import bedimg from "@assets/generated_images/15bed.jpg";
import barseimg from "@assets/generated_images/barse.jpg";


export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Buildings", "Roads", "Bridges", "Irrigation", "Ongoing", "Completed"];

  const projects = [
       { 
      id: 1, 
      title: "Dhare Khola Bridge ", 
      category: "Bridges", 
      location: "Gulmi, Nepal", 
      status: "Completed", 
      img: dareimg,
      desc: "Design and Build of Dhare Khola Bridge "
    },
    
    
    { 
      id: 2, 
      title: "Ruru rural Municipality Government Office", 
      category: "Buildings", 
      location: "Gulmi, Nepal", 
      status: "Completed", 
      img: ruruimg,
      desc: "Government office building construction with modern facilities."
    },
    
 
    { 
      id: 3, 
      title: "Setibeni bridge", 
      category: "Bridges", 
      location: "Palpa, Nepal", 
      status: "Ongoing", 
      img: setiimg,
      desc: "Concrete bridge construction connecting two major districts."
    },
    { 
      id: 4, 
      title: "15 Bed Hospital Building", 
      category: "Buildings", 
      location: "Ridi, Nepal", 
      status: "Completed", 
      img: bedimg,
      desc: "Healthcare infrastructure development."
    },
    { 
      id: 5, 
      title: "Dumre-Chakaldi-Kusumkhola Road", 
      category: "Roads", 
      location: "Palpa, Nepal", 
      status: "ongoing", 
      img: dumreimg,
      desc: "Completed construction Works under National Reconstruction Authority (District Project Implementation Unit Palpa). Executed by Rayamajhi-Rajeshwari-PTR Adhikari J.V."
    },
    { 
      id: 6, 
      title: "Bharse bridge ", 
      category: "Bridges", 
      location: " Lumbini, Nepal", 
      status: "Ongoing", 
      img: barseimg,
      desc: "bridge ."
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : filter === "Ongoing" || filter === "Completed"
      ? projects.filter(p => p.status === filter)
      : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
       {/* Page Header */}
       <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold font-heading text-white mb-4">Our Projects</h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm font-medium uppercase tracking-wide">
            <span>Home</span>
            <span className="text-secondary">/</span>
            <span className="text-secondary">Projects</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  filter === cat 
                    ? "bg-secondary text-white shadow-lg" 
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                layout
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                key={project.id}
                className="group relative overflow-hidden bg-white shadow-md cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.img} 
              
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                    <p className="text-secondary font-bold uppercase text-sm mb-2 tracking-widest">{project.category}</p>
                    <h3 className="text-2xl font-bold font-heading mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{project.location}</p>
                    {project.desc && (
                      <p className="text-gray-200 text-xs mb-4 line-clamp-3 px-4 max-w-xs mx-auto">
                        {project.desc}
                      </p>
                    )}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${project.status === 'Ongoing' ? 'bg-secondary text-white' : 'bg-green-600 text-white'}`}>
                      {project.status}
                    </span>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none">View Details</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

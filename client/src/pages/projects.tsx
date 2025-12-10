import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import buildingImg from "@assets/generated_images/commercial_building_construction_service_image.png";
import roadImg from "@assets/generated_images/road_construction_service_image.png";
import bridgeImg from "@assets/generated_images/bridge_construction_service_image.png";
import heroBg from "@assets/generated_images/hero_background_for_construction_website.png";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Buildings", "Roads", "Bridges", "Ongoing", "Completed"];

  const projects = [
    { id: 1, title: "Sunrise Commercial Complex", category: "Buildings", location: "Baneshwor, Kathmandu", status: "Completed", img: buildingImg },
    { id: 2, title: "East-West Highway Expansion", category: "Roads", location: "Chitwan, Nepal", status: "Ongoing", img: roadImg },
    { id: 3, title: "Trishuli River Bridge", category: "Bridges", location: "Dhading, Nepal", status: "Completed", img: bridgeImg },
    { id: 4, title: "City Hospital Block B", category: "Buildings", location: "Lalitpur, Nepal", status: "Completed", img: buildingImg },
    { id: 5, title: "Rural Access Road", category: "Roads", location: "Sindhupalchowk", status: "Ongoing", img: roadImg },
    { id: 6, title: "Luxury Apartment Complex", category: "Buildings", location: "Kathmandu", status: "Ongoing", img: heroBg },
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                    <h3 className="text-2xl font-bold font-heading mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{project.location}</p>
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

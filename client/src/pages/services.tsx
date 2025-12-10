import { motion } from "framer-motion";
import buildingImg from "@assets/generated_images/commercial_building_construction_service_image.png";
import roadImg from "@assets/generated_images/road_construction_service_image.png";
import bridgeImg from "@assets/generated_images/bridge_construction_service_image.png";
import { Building2, Truck, Ruler, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Building Construction",
      desc: "We specialize in constructing commercial complexes, residential apartments, schools, hospitals, and industrial buildings. Our team ensures structural integrity and aesthetic excellence.",
      features: ["High-rise Buildings", "Residential Housing", "Commercial Complexes", "Industrial Warehouses"],
      image: buildingImg,
      icon: <Building2 className="h-12 w-12 text-white" />
    },
    {
      title: "Roads & Highways",
      desc: "Our infrastructure division handles major road projects, including earthworks, asphalt paving, drainage systems, and highway maintenance with modern heavy equipment.",
      features: ["Asphalt Paving", "Rural & Urban Roads", "Highway Maintenance", "Drainage Systems"],
      image: roadImg,
      icon: <Truck className="h-12 w-12 text-white" />
    },
    {
      title: "Bridge Construction",
      desc: "We have the technical expertise to design and build durable bridges. From culverts to major span bridges, we ensure connectivity across challenging terrains.",
      features: ["Concrete Bridges", "Steel Structures", "Suspension Bridges", "Culverts"],
      image: bridgeImg,
      icon: <Ruler className="h-12 w-12 text-white" />
    },
    {
      title: "Structural Engineering",
      desc: "Our engineering team provides comprehensive structural analysis, design, and consultancy services to ensure safety and compliance with building codes.",
      features: ["Structural Design", "Retrofitting", "Soil Testing", "Project Management"],
      image: buildingImg, // reusing image for layout
      icon: <Hammer className="h-12 w-12 text-white" />
    },
    {
      title: "Architectural Design",
      desc: "Creating modern, functional, and aesthetic architectural designs for residential and commercial projects.",
      features: ["3D Modeling", "Interior Design", "Landscape Planning", "Blueprint Creation"],
      image: buildingImg,
      icon: <Ruler className="h-12 w-12 text-white" />
    },
    {
      title: "Heavy Equipment Supply",
      desc: "Reliable supply of heavy machinery for large-scale construction projects across the nation.",
      features: ["Excavators", "Cranes", "Bulldozers", "Dump Trucks"],
      image: roadImg,
      icon: <Truck className="h-12 w-12 text-white" />
    },
    {
      title: "Renovation & Maintenance",
      desc: "Restoring and upgrading existing structures to meet modern standards and extend their lifespan.",
      features: ["Building Retrofitting", "Road Maintenance", "Bridge Repair", "Heritage Preservation"],
      image: bridgeImg,
      icon: <Hammer className="h-12 w-12 text-white" />
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${roadImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold font-heading text-white mb-4">Our Services</h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm font-medium uppercase tracking-wide">
            <span>Home</span>
            <span className="text-secondary">/</span>
            <span className="text-secondary">Services</span>
          </div>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img src={service.image} alt={service.title} className="w-full rounded-sm shadow-lg h-[400px] object-cover" />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary flex items-center justify-center shadow-xl z-20">
                    {service.icon}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Service 0{index + 1}</h3>
                  <h2 className="text-3xl font-bold font-heading text-primary mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8">
                    Request Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Rental Strip */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold font-heading mb-4">Need Heavy Equipment?</h2>
            <p className="text-gray-300 max-w-xl">
              We also provide heavy construction equipment rental services including excavators, bulldozers, cranes, and dump trucks.
            </p>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wide">
            Rent Equipment
          </Button>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Truck, Ruler, Hammer, Filter, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import excavatorImg from "@assets/generated_images/yellow_excavator_on_construction_site.png";
import bulldozerImg from "@assets/generated_images/bulldozer_leveling_ground.png";
import craneImg from "@assets/generated_images/tower_crane_against_blue_sky.png";
import truckImg from "@assets/generated_images/dump_truck_carrying_soil.png";

export default function Equipment() {
  const equipment = [
    {
      id: 1,
      name: "Hydraulic Excavator 320D",
      category: "Excavation",
      specs: "20 Ton, 1.0m³ Bucket",
      image: excavatorImg,
      status: "Available"
    },
    {
      id: 2,
      name: "Heavy Duty Bulldozer D6",
      category: "Grading",
      specs: "170 HP, 3.5m Blade",
      image: bulldozerImg,
      status: "Available"
    },
    {
      id: 3,
      name: "Tower Crane 6015",
      category: "Lifting",
      specs: "6 Ton Capacity, 60m Jib",
      image: craneImg,
      status: "In Use"
    },
    {
      id: 4,
      name: "Dump Truck 10-Wheeler",
      category: "Transport",
      specs: "18m³ Capacity",
      image: truckImg,
      status: "Available"
    },
    {
      id: 5,
      name: "Vibratory Roller",
      category: "Compaction",
      specs: "10 Ton, Single Drum",
      image: bulldozerImg, // Reusing for mock
      status: "Maintenance"
    },
    {
      id: 6,
      name: "Backhoe Loader",
      category: "Excavation",
      specs: "90 HP, 4WD",
      image: excavatorImg, // Reusing for mock
      status: "Available"
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${excavatorImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold font-heading text-white mb-4">Equipment Fleet</h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm font-medium uppercase tracking-wide">
            <span>Home</span>
            <span className="text-secondary">/</span>
            <span className="text-secondary">Equipment</span>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold font-heading text-primary mb-2">Our Heavy Machinery</h2>
              <p className="text-gray-600">State-of-the-art equipment for efficient construction.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2 bg-white">
                <Filter className="h-4 w-4" /> Filter by Category
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-sm shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={item.status === 'Available' ? 'default' : 'secondary'} className={`${item.status === 'Available' ? 'bg-green-600 hover:bg-green-700' : 'bg-secondary'} text-white`}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                    <Info className="h-4 w-4" />
                    <span>{item.specs}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 group-hover:bg-secondary transition-colors">
                    Request Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Need Equipment for Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We provide flexible rental options for all our heavy machinery. Contact us for rates and availability.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8">
              Contact for Rental
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Clock, HardHat, ShieldCheck, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroBg from "@assets/generated_images/hero_background_for_construction_website.png";
import buildingImg from "@assets/generated_images/commercial_building_construction_service_image.png";
import roadImg from "@assets/generated_images/road_construction_service_image.png";
import bridgeImg from "@assets/generated_images/bridge_construction_service_image.png";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Building Construction",
      desc: "Commercial complexes, residential housings, and industrial facilities built with precision.",
      icon: <HardHat className="h-8 w-8 text-secondary" />,
      image: buildingImg
    },
    {
      title: "Roads & Highways",
      desc: "Developing national infrastructure with high-grade asphalt and concrete road networks.",
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      image: roadImg
    },
    {
      title: "Bridge Construction",
      desc: "Connecting communities with durable, engineering-marvel bridges across Nepal.",
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      image: bridgeImg
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-12 bg-secondary" />
              <span className="uppercase tracking-widest font-semibold text-sm">Est. 2010</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Building the <span className="text-secondary">Foundation</span> of Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
              Leading construction company delivering quality, innovation, and trust across Nepal. From skyscrapers to highways, we build with excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wide">
                  View Our Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-none font-bold uppercase tracking-wide">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 -z-10 rounded-full" />
                <img 
                  src={buildingImg} 
                  alt="About Us" 
                  className="rounded-sm shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 hidden md:block max-w-xs shadow-xl">
                  <p className="text-4xl font-bold font-heading text-secondary mb-2">15+</p>
                  <p className="font-medium">Years of Excellence in Construction Industry</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">Who We Are</h4>
              <h2 className="text-4xl font-bold font-heading text-primary mb-6">We construct your dream with precision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rajeshwori Construction has established itself as a premier construction firm in Nepal. 
                We combine technical expertise with a commitment to quality, ensuring every project stands the test of time.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "ISO 9001:2015 Certified Company",
                  "Expert Team of Civil Engineers & Architects",
                  "Timely Delivery with Safety First Approach",
                  "Government Registered Class 'A' Contractor"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8">Learn More About Us</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">Our Services</h4>
            <h2 className="text-4xl font-bold font-heading text-primary mb-4">Quality Construction Services</h2>
            <p className="text-gray-600">We provide comprehensive construction solutions tailored to meet the unique needs of each project.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={item} className="group">
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full border-b-4 border-transparent hover:border-secondary">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href="/services">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">View Details</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <div className="text-secondary">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.desc}</p>
                    <Link href="/services">
                      <a className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats/Why Choose Us */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Trophy className="h-10 w-10 text-secondary" />, count: "150+", label: "Completed Projects" },
              { icon: <HardHat className="h-10 w-10 text-secondary" />, count: "50+", label: "Expert Engineers" },
              { icon: <Clock className="h-10 w-10 text-secondary" />, count: "100%", label: "On Time Delivery" },
              { icon: <ShieldCheck className="h-10 w-10 text-secondary" />, count: "25+", label: "Awards Won" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold font-heading mb-2">{stat.count}</h3>
                <p className="text-gray-300 uppercase tracking-wide text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">Our Portfolio</h4>
              <h2 className="text-4xl font-bold font-heading text-primary">Featured Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="hidden md:flex gap-2">View All Projects <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="rounded-none border-none shadow-none group cursor-pointer overflow-hidden">
                      <CardContent className="p-0 relative aspect-[4/5] overflow-hidden">
                        <img 
                          src={index % 2 === 0 ? buildingImg : bridgeImg} 
                          alt="Project" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-secondary text-sm font-bold uppercase mb-1">Infrastructure</p>
                          <h3 className="text-2xl font-bold text-white mb-2">Kathmandu Highway Project</h3>
                          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                            A major 4-lane highway connecting key industrial zones.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's build something great together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-10 py-6 rounded-none font-bold uppercase tracking-wide">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

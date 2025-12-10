import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Clock, HardHat, ShieldCheck, Trophy, Quote, Star } from "lucide-react";
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const }
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Zoom Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroBg} 
            alt="Construction Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-white mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-secondary" />
              <span className="uppercase tracking-[0.2em] font-bold text-sm text-secondary">Est. 2010</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[0.9] mb-8">
              Building the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Foundation</span> <br />
              of Tomorrow
            </h1>
            
            <p className="text-xl md:text-3xl text-secondary font-bold mb-6 tracking-wide flex items-center gap-3">
              <span className="h-px w-8 bg-secondary/50"></span>
              Quality Is Our Identity
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              Leading construction company delivering quality, innovation, and trust across Nepal. From skyscrapers to highways, we build with excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 hover:scale-105 transition-all text-white text-lg px-10 py-7 rounded-none font-bold uppercase tracking-wide shadow-xl shadow-secondary/20">
                  View Our Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all text-lg px-10 py-7 rounded-none font-bold uppercase tracking-wide bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowRight className="rotate-90 h-4 w-4" />
        </motion.div>
      </section>

      {/* About Brief - Re-designed */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/4 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-secondary/20 rounded-sm -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full -z-10 blur-3xl" />
              
              <img 
                src={buildingImg} 
                alt="About Us" 
                className="rounded-sm shadow-2xl w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -right-10 bg-white p-8 hidden md:block max-w-xs shadow-2xl border-l-4 border-secondary"
              >
                <div className="flex items-baseline gap-2">
                  <p className="text-6xl font-bold font-heading text-primary">15</p>
                  <p className="text-4xl font-bold text-secondary">+</p>
                </div>
                <p className="font-medium text-gray-600 uppercase tracking-wider text-sm mt-2">Years of Excellence in Construction Industry</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] mb-4 text-sm">Who We Are</h4>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-8 leading-tight">We construct your <br/><span className="text-secondary">dream</span> with precision</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Rajeshwori Construction has established itself as a premier construction firm in Nepal. 
                We combine technical expertise with a commitment to quality, ensuring every project stands the test of time.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "ISO 9001:2015 Certified",
                  "Expert Engineering Team",
                  "Timely Delivery",
                  "Class 'A' Contractor"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-secondary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-secondary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <span className="text-primary font-bold">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-lg font-medium arrow-btn group">
                  Learn More About Us 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Modern Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-secondary font-bold uppercase tracking-[0.2em] mb-3 text-sm">Our Services</h4>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Quality Construction Services</h2>
            <p className="text-gray-600 text-lg">We provide comprehensive construction solutions tailored to meet the unique needs of each project.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={item} 
                whileHover={{ y: -10 }}
                className="group h-full"
              >
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full border-b-4 border-transparent hover:border-secondary flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <Link href="/services">
                        <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary uppercase font-bold tracking-wider">
                          View Details
                        </Button>
                      </Link>
                    </div>
                    {/* Icon Overlay */}
                    <div className="absolute -bottom-8 right-8 w-16 h-16 bg-secondary text-white flex items-center justify-center shadow-lg group-hover:scale-0 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-8 pt-12 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold font-heading text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.desc}</p>
                    <Link href="/services">
                      <a className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all group/link uppercase tracking-wider">
                        Read More <ArrowRight className="h-4 w-4 text-secondary group-hover/link:text-primary" />
                      </a>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Parallax */}
      <section className="py-24 bg-primary text-white relative overflow-hidden attachment-fixed">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img src={heroBg} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Trophy className="h-12 w-12 text-secondary" />, count: "150+", label: "Completed Projects" },
              { icon: <HardHat className="h-12 w-12 text-secondary" />, count: "50+", label: "Expert Engineers" },
              { icon: <Clock className="h-12 w-12 text-secondary" />, count: "100%", label: "On Time Delivery" },
              { icon: <ShieldCheck className="h-12 w-12 text-secondary" />, count: "25+", label: "Awards Won" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h3 className="text-5xl font-bold font-heading mb-3">{stat.count}</h3>
                <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold group-hover:text-secondary transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel - Full Width Feel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-secondary font-bold uppercase tracking-[0.2em] mb-3 text-sm">Our Portfolio</h4>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">Featured Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="hidden md:flex gap-2 border-primary text-primary hover:bg-primary hover:text-white px-8 h-12">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden h-[500px] cursor-pointer">
                    <img 
                      src={index % 2 === 0 ? buildingImg : bridgeImg} 
                      alt="Project" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-12 h-1 bg-secondary mb-4 w-0 group-hover:w-12 transition-all duration-500" />
                      <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Infrastructure</p>
                      <h3 className="text-2xl font-bold text-white mb-3">Kathmandu Highway Project</h3>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        A major 4-lane highway connecting key industrial zones with modern drainage and lighting systems.
                      </p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <span className="text-white text-xs font-bold uppercase border-b border-secondary pb-1">View Case Study</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 border-2 hover:bg-primary hover:text-white" />
              <CarouselNext className="static translate-y-0 w-12 h-12 border-2 hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials - Styled */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-secondary font-bold uppercase tracking-[0.2em] mb-3 text-sm">Testimonials</h4>
            <h2 className="text-4xl font-bold font-heading text-primary mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                text: "Rajeshwori Construction delivered our commercial complex project on time and with exceptional quality. Their attention to detail and safety standards is commendable.",
                name: "Ram Sharma",
                role: "CEO, Alpha Group",
                initials: "RS"
              },
              {
                text: "A highly professional team that understands the complexities of road infrastructure. We are extremely satisfied with their work on the highway expansion.",
                name: "Sita Adhikari",
                role: "Project Manager, Dept. of Roads",
                initials: "SA"
              }
            ].map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary" />
                  <Quote className="absolute top-6 right-6 text-gray-100 h-24 w-24 -rotate-12 group-hover:text-gray-200 transition-colors" />
                  <CardContent className="p-10 relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{testi.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl ring-4 ring-gray-100">
                        {testi.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-lg">{testi.name}</h4>
                        <p className="text-sm text-gray-500 font-medium">{testi.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold */}
      <section className="py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Contact us today for a free consultation and quote. Let's build something great together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-white hover:text-primary text-white text-xl px-12 py-8 rounded-none font-bold uppercase tracking-widest shadow-2xl transition-all duration-300">
                Contact Us Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

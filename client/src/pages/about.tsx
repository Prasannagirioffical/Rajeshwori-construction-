import { motion } from "framer-motion";
import teamImg from "@assets/generated_images/team_of_engineers_for_about_page.png";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${teamImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold font-heading text-white mb-4">About Us</h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm font-medium uppercase tracking-wide">
            <span>Home</span>
            <span className="text-secondary">/</span>
            <span className="text-secondary">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest mb-2">Our Story</h4>
              <h2 className="text-4xl font-bold font-heading text-primary mb-6">Building Trust Since 2010</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Rajeshwori Construction Pvt. Ltd. was founded with a singular vision: to contribute to Nepal's infrastructure development through quality construction and engineering excellence. Over the last decade, we have grown from a small contracting firm to one of the leading construction companies in the region.
                </p>
                <p>
                  Our journey has been defined by our commitment to integrity, safety, and innovation. We believe that every project, whether a small residential building or a major highway, deserves the same level of attention and precision.
                </p>
                <p>
                  Today, we are proud to have a team of over 50 expert engineers, architects, and managers, along with a skilled workforce dedicated to turning blueprints into reality.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-4 border-secondary rounded-sm z-0" />
              <img src={teamImg} alt="Our Team" className="w-full h-full object-cover rounded-sm shadow-xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-md border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver superior construction services by consistently improving the quality of our product; to add value for clients through innovation, foresight, integrity, and aggressive performance.
              </p>
            </div>
            <div className="bg-white p-8 shadow-md border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier construction company in Nepal, recognized for our quality work, safety standards, and commitment to sustainable infrastructure development.
              </p>
            </div>
            <div className="bg-white p-8 shadow-md border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Core Values</h3>
              <ul className="space-y-2">
                {["Safety First", "Integrity & Honesty", "Quality Excellence", "Timely Delivery", "Sustainability"].map((val) => (
                  <li key={val} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-secondary" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-primary mb-12">Accreditations & Memberships</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
             <div className="h-24 w-48 bg-gray-200 flex items-center justify-center font-bold text-gray-400">ISO 9001:2015</div>
             <div className="h-24 w-48 bg-gray-200 flex items-center justify-center font-bold text-gray-400">FCAN Member</div>
             <div className="h-24 w-48 bg-gray-200 flex items-center justify-center font-bold text-gray-400">Govt of Nepal</div>
             <div className="h-24 w-48 bg-gray-200 flex items-center justify-center font-bold text-gray-400">Safety Council</div>
          </div>
        </div>
      </section>
    </div>
  );
}

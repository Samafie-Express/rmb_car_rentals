
import React from "react";
import { ArrowRight, Calendar, Car, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-rentwheels-gray-dark z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight slide-up">
              Find Your Perfect <span className="text-rentwheels-blue">Car Rental</span> Experience
            </h1>
            <p className="text-lg text-gray-200 md:pr-10 slide-up" style={{animationDelay: '0.2s'}}>
              Discover the freedom of the open road with our premium selection of rental cars.
              From economical to luxurious, we have the perfect vehicle for your journey.
            </p>
            <div className="flex gap-4 slide-up" style={{animationDelay: '0.4s'}}>
              <Button className="btn-primary">
                Browse Cars <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                Learn More
              </Button>
            </div>
          </div>

          {/* Search Box */}
          <div className="lg:w-2/5 w-full bg-white rounded-lg p-6 shadow-lg slide-up" style={{animationDelay: '0.6s'}}>
            <h2 className="text-2xl font-bold text-rentwheels-gray-dark mb-6">
              Book Your Car Now
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <MapPin className="text-rentwheels-blue" />
                <div className="flex-1">
                  <label className="block text-sm text-gray-500">Pick-up location</label>
                  <Input 
                    placeholder="City, Airport, etc."
                    className="border-none shadow-none focus-visible:ring-0 p-0"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <Calendar className="text-rentwheels-blue" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500">Pick-up date</label>
                    <Input 
                      type="date"
                      className="border-none shadow-none focus-visible:ring-0 p-0"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-md">
                  <Calendar className="text-rentwheels-blue" />
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500">Return date</label>
                    <Input 
                      type="date"
                      className="border-none shadow-none focus-visible:ring-0 p-0"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <Car className="text-rentwheels-blue" />
                <div className="flex-1">
                  <label className="block text-sm text-gray-500">Car type</label>
                  <select className="w-full focus:outline-none text-rentwheels-gray-dark">
                    <option>All car types</option>
                    <option>Economy</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                    <option>Sports</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full py-6 bg-rentwheels-blue hover:bg-rentwheels-blue-dark text-white font-medium">
                Search Available Cars
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated shapes for visual interest */}
      <div className="hidden md:block absolute bottom-10 left-10 w-24 h-24 bg-rentwheels-blue/20 rounded-full animate-float blur-xl"></div>
      <div className="hidden md:block absolute top-20 right-20 w-32 h-32 bg-rentwheels-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;

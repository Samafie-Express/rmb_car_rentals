
import React from "react";
import { ArrowRight, Calendar, Car, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {Link} from "react-router-dom";

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
                  <Link to="/cars" className="flex items-center gap-2">
                      Browse Cars <ArrowRight size={18} />
                  </Link>
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

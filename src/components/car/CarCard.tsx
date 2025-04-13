
import React from "react";
import { useNavigate } from "react-router-dom";
import { Car as CarIcon, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import type { Car } from "@/data/cars.ts";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();

  const viewDetails = () => {
    navigate(`/cars/${car.id}`);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden card-hover card-shadow group">
      {/* Image Container */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={car.image[0]}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/*<div className="absolute top-4 left-4 bg-rentwheels-blue text-white py-1 px-3 rounded-full text-sm font-medium">*/}
        {/*  ${car.price}/day*/}
        {/*</div>*/}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-rentwheels-gray-dark">{car.name}</h3>
            <p className="text-gray-500 text-sm">{car.brand}</p>
          </div>
          <span className="bg-gray-100 text-gray-600 py-1 px-2 rounded-md text-xs">
            {car.category}
          </span>
        </div>

        {/* Car features */}
        <div className="flex flex-wrap gap-4 py-3 border-t border-b my-3">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-rentwheels-blue" />
            <span className="text-sm">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <CarIcon size={18} className="text-rentwheels-blue" />
            <span className="text-sm">{car.transmission}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between items-center mt-4">
          <Button 
            variant="outline" 
            className="border-rentwheels-blue text-rentwheels-blue hover:bg-rentwheels-blue hover:text-white"
            onClick={viewDetails}
          >
            View Details
          </Button>
          <Button className="bg-rentwheels-blue hover:bg-rentwheels-blue-dark" onClick={viewDetails}>
            Book Now <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

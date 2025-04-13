import React, {useState} from "react";
import CarCard from "./CarCard.tsx";
import {cars} from "@/data/cars.ts";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const FeaturedCars: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const categories = ["All", "Sedan", "SUV", "Electric", "Sports"];

    const filteredCars = activeCategory === "All"
        ? cars.slice(0, 6) // Show first 6 cars for "All" category
        : cars.filter(car => car.category === activeCategory);

    return (
        <section className="section-padding">
            <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-rentwheels-gray-dark mb-4">
                    Featured Vehicles
                </h2>
                <p className="text-gray-600">
                    Discover our selection of premium vehicles ready for your next adventure
                </p>
            </div>

            {/* Category filter */}
            {/*<div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">*/}
            {/*    {categories.map((category) => (*/}
            {/*        <button*/}
            {/*            key={category}*/}
            {/*            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${*/}
            {/*                activeCategory === category*/}
            {/*                    ? "bg-rentwheels-blue text-white"*/}
            {/*                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"*/}
            {/*            }`}*/}
            {/*            onClick={() => setActiveCategory(category)}*/}
            {/*        >*/}
            {/*            {category}*/}
            {/*        </button>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/* Car grid with animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredCars.map((car, index) => (
                    <div
                        key={car.id}
                        className="animate-fade-in"
                        style={{animationDelay: `${index * 0.1}s`}}
                    >
                        <CarCard car={car}/>
                    </div>
                ))}
            </div>

            {/* View all button */}
            {activeCategory === "All" && (
                <div className="text-center mt-12">
                    <Button className="bg-rentwheels-blue hover:bg-rentwheels-blue-dark text-white px-8">
                        <Link to="/cars">
                            View All Cars
                        </Link>
                    </Button>
                </div>
            )}
        </section>
    );
};

export default FeaturedCars;

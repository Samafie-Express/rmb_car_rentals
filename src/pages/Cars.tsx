import React, {useEffect} from 'react'
import CarCard from "@/components/car/CarCard.tsx";
import {cars} from "@/data/cars.ts";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

const Cars = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <section className="section-padding">

                {/* Car grid with animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cars.map((car, index) => (
                        <div
                            key={car.id}
                            className="animate-fade-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <CarCard car={car}/>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Cars

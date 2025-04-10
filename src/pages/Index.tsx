
import React from "react";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCars />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
};

export default Index;

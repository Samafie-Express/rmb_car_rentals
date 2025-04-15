import React, {useEffect, useState} from 'react'
import Header from "@/components/Header.tsx";
import {allCarImages} from "@/data/cars.ts";
import {ChevronLeft, ChevronRight, XIcon} from "lucide-react";
import Footer from "@/components/Footer.tsx";

const Gallery = () => {

    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [showAllImages, setShowAllImages] = useState(false);

    const openImage = (index: number) => {
        setSelectedImageIndex(index);
        setShowAllImages(true);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : (allCarImages?.length ?? 1) - 1));
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex !== null && prevIndex < (allCarImages?.length ?? 1) - 1 ? prevIndex + 1 : 0));
    };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <main className="pt-20">
                <section className="section-padding">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold text-rentwheels-gray-dark mb-4">
                            Vehicle Gallery
                        </h1>
                        <p className="text-gray-600">
                            Explore our full collection of premium vehicles through our high-quality image gallery
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {allCarImages.map((image, index) => (
                            <div
                                key={index}
                                className={`${index === 0 ? "row-span-2 col-span-2" : ""} relative group cursor-pointer`}
                            >
                                <img
                                    src={Array.isArray(image) ? image[0] : image}
                                    alt={`Car ${index + 1}`}
                                    onClick={() => openImage(index)}
                                    className={`w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Image Modal */}
                    {selectedImageIndex !== null && (
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur bg-opacity-70 flex justify-center items-center z-50"
                        >
                            <div className="relative  p-4 rounded-lg max-w-6xl z-[100]">
                                <button
                                    className="absolute -top-8 -right-0 bg-red-500 text-white p-1.5 rounded-full z-50"
                                    onClick={closeModal}
                                >
                                    <XIcon className="w-4 h-4"/>
                                </button>
                                <div className="relative">
                                    <button
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black bg-opacity-50 text-white p-2 rounded-full"
                                        onClick={prevImage}
                                    >
                                        <ChevronLeft className="w-6 h-6"/>
                                    </button>
                                    <img src={allCarImages?.[selectedImageIndex ?? 0]} alt="Full Size"
                                         className="max-h-[80vh] max-w-full object-cover rounded-lg"
                                    />
                                    <button
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black bg-opacity-50 text-white p-2 rounded-full"
                                        onClick={nextImage}
                                    >
                                        <ChevronRight className="w-6 h-6"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
            <Footer/>
        </>
    )
}
export default Gallery

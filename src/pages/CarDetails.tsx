import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getCarById} from "@/data/cars";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Car,
    Check,
    ChevronLeft,
    ChevronRight,
    Fuel,
    Phone,
    Users,
    XIcon
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CarDetails: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [car, setCar] = useState(id ? getCarById(parseInt(id)) : undefined);


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
        setSelectedImageIndex((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : (car.image?.length ?? 1) - 1));
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex !== null && prevIndex < (car.image?.length ?? 1) - 1 ? prevIndex + 1 : 0));
    };
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    if (!car) {
        return (
            <>
                <Header/>
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                    <h2 className="text-2xl font-bold mb-4">Car not found</h2>
                    <Button onClick={handleGoBack}>Go back</Button>
                </div>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Header/>
            <div className="pt-20">
                {/* Back button */}
                <div className="section-padding pt-8 pb-0">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 hover:bg-gray-100"
                        onClick={handleGoBack}
                    >
                        <ArrowLeft size={18}/> Back to Cars
                    </Button>
                </div>

                <div className="section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Car Image Gallery */}
                        <div className="animate-fade-in">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                {/*<img*/}
                                {/*  src={car.image[0]}*/}
                                {/*  alt={car.name}*/}
                                {/*  className=""*/}
                                {/*/>*/}
                                <div className="relative space-y-4">
                                    {car.image && car.image.length > 0 ? (
                                        <img
                                            src={car.image[0]}
                                            alt={`${car.name} image`}
                                            className="w-full h-[500px] object-cover"
                                        />
                                    ) : ("/placeholder.svg'")}
                                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm">
                                        {showAllImages ? `${car.image?.length}/${car.image?.length}` : `3/${car.image?.length}`}
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex space-x-2">
                                        {(showAllImages ? car.image : car.image?.slice(0, 3))?.map((url: string, index: number) => (
                                            <img
                                                key={index}
                                                src={url || "default.jpg"}
                                                alt={`Thumbnail ${index + 1}`}
                                                className="w-16 h-16 rounded-lg object-cover border-2 border-white cursor-pointer hover:opacity-80"
                                                onClick={() => openImage(index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow mt-6">
                                <h3 className="font-bold text-lg mb-3">Car Overview</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                        <Calendar className="text-rentwheels-blue mb-2"/>
                                        <span className="text-sm text-gray-500">Year</span>
                                        <span className="font-medium">{car.year}</span>
                                    </div>
                                    <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                        <Car className="text-rentwheels-blue mb-2"/>
                                        <span className="text-sm text-gray-500">Transmission</span>
                                        <span className="font-medium">{car.transmission}</span>
                                    </div>
                                    <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                        <Users className="text-rentwheels-blue mb-2"/>
                                        <span className="text-sm text-gray-500">Seats</span>
                                        <span className="font-medium">{car.seats}</span>
                                    </div>
                                    <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                                        <Fuel className="text-rentwheels-blue mb-2"/>
                                        <span className="text-sm text-gray-500">Fuel</span>
                                        <span className="font-medium">{car.fuelType}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Car Details and Booking */}
                        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h1 className="text-3xl font-bold text-rentwheels-gray-dark">{car.name}</h1>
                                        <p className="text-gray-500">{car.brand} · {car.category}</p>
                                    </div>
                                    {/*<div className="text-2xl font-bold text-rentwheels-blue">*/}
                                    {/*    ${car.price}*/}
                                    {/*    <span className="text-sm font-normal text-gray-500">/day</span>*/}
                                    {/*</div>*/}
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-bold text-lg mb-2">Description</h3>
                                    <p className="text-gray-600">{car.description}</p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="font-bold text-lg mb-2">Features</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {car.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <Check size={16} className="text-rentwheels-blue"/>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t">
                                    <h3 className="font-bold text-lg mb-4">Contact us</h3>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-rentwheels-blue p-3 rounded-lg">
                                            <Phone className="text-white"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg">Phone Number</h3>
                                            <p className="text-gray-600 mt-1">+233 24 264 8325,     +233 20 023 8921</p>
                                        </div>
                                    </div>
                                    {/*<h3 className="font-bold text-lg mb-4">Book this car</h3>*/}
                                    {/*<div className="grid grid-cols-2 gap-4 mb-4">*/}
                                    {/*    <div>*/}
                                    {/*        <label className="block text-sm mb-1">Pick-up Date</label>*/}
                                    {/*        <input*/}
                                    {/*            type="date"*/}
                                    {/*            className="w-full p-2 border rounded-md"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*    <div>*/}
                                    {/*        <label className="block text-sm mb-1">Return Date</label>*/}
                                    {/*        <input*/}
                                    {/*            type="date"*/}
                                    {/*            className="w-full p-2 border rounded-md"*/}
                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<Button*/}
                                    {/*    className="w-full bg-rentwheels-blue hover:bg-rentwheels-blue-dark text-white py-6">*/}
                                    {/*    Book Now <ArrowRight size={16}/>*/}
                                    {/*</Button>*/}
                                </div>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h3 className="font-medium mb-2">Additional Information</h3>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Color:</span>
                                        <span>{car.color}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500">Mileage:</span>
                                        <span>{car.mileage}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImageIndex !== null && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur bg-opacity-70 flex justify-center items-center z-50"
                    >
                        <div className="relative  p-4 rounded-lg max-w-7xl z-[100]">
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
                                <img src={car.image?.[selectedImageIndex ?? 0]} alt="Full Size"
                                     className="max-h-[80vh] max-w-full object-cover rounded-lg"
                                />
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black bg-opacity-50 text-white p-2 rounded-full"
                                    onClick={nextImage}
                                >
                                    <ChevronRight className="w-6 h-6"/>
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-y-1.5 justify-center items-center mt-4 space-x-2">
                                {car.image?.map((url: string, index: number) => (
                                    <img
                                        key={index}
                                        src={url}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-16 h-16 rounded-lg object-cover border-2 cursor-pointer ${
                                            selectedImageIndex === index ? "border-rentwheels-blue" : "border-gray-300"
                                        } hover:opacity-80`}
                                        onClick={() => setSelectedImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default CarDetails;

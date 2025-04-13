export interface Car {
    id: number;
    name: string;
    brand: string;
    category: string;
    image: string[];
    // price: number;
    seats: number;
    transmission: "Automatic" | "Manual";
    fuelType: string;
    year: number;
    mileage: string;
    features: string[];
    description: string;
    color: string;
}

export const cars: Car[] = [
    {
        id: 1,
        name: "Highlander",
        brand: "",
        category: "Toyota",
        image: [
            "/image1.jpeg",
            "/image2.jpeg",
            "/image3.jpeg",
            "/image4.jpeg",
            "/image5.jpeg",
            "/image6.jpeg",
            "/image7.jpeg",
            "/image8.jpeg",
            "/image9.jpeg",
            "/image10.jpeg",
            "/image11.jpeg",
        ],
        // price: 89,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2022,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats"],
        description: "Experience luxury and performance with the Highlander. This elegant handling with premium comfort for an unforgettable driving experience.",
        color: "Blueblack"
    },
    {
        id: 2,
        name: "Mercedes-Benz C-Class",
        brand: "Mercedes-Benz",
        category: "Sedan",
        image: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071",
        ],
        // price: 95,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Diesel",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats", "Sunroof"],
        description: "Enjoy the sophistication and comfort of the Mercedes-Benz C-Class. With its refined interior and smooth ride, this luxury sedan is perfect for both business and pleasure.",
        color: "Obsidian Black"
    },
    {
        id: 3,
        name: "Audi Q5",
        brand: "Audi",
        category: "SUV",
        image: [
            "https://images.unsplash.com/photo-1606664608405-2f487dea6566?q=80&w=1964",
        ],
        // price: 110,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats", "AWD", "Panoramic Roof"],
        description: "Discover versatility and elegance with the Audi Q5. This premium SUV offers superior comfort and cutting-edge technology for a truly elevated driving experience.",
        color: "Manhattan Gray"
    },
    {
        id: 4,
        name: "Tesla Model 3",
        brand: "Tesla",
        category: "Electric",
        image: [
            "https://images.unsplash.com/photo-1561580125-028ee3d62101?q=80&w=2070",
        ],
        // price: 120,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Electric",
        year: 2023,
        mileage: "Unlimited",
        features: ["Autopilot", "Touch Screen", "Premium Sound", "Supercharger Access", "OTA Updates"],
        description: "Embrace the future with the Tesla Model 3. This all-electric sedan combines impressive range with cutting-edge technology for a revolutionary driving experience.",
        color: "Pearl White"
    },
    {
        id: 5,
        name: "Range Rover Sport",
        brand: "Land Rover",
        category: "SUV",
        image: [
            "https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2070",
        ],
        // price: 150,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats", "AWD", "Terrain Management"],
        description: "Experience unparalleled luxury and capability with the Range Rover Sport. This premium SUV combines off-road prowess with sophisticated design for a truly versatile vehicle.",
        color: "Santorini Black"
    },
    {
        id: 6,
        name: "Toyota Camry",
        brand: "Toyota",
        category: "Sedan",
        image: [
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070",
        ],
        // price: 65,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Backup Camera", "Cruise Control", "Smartphone Integration", "Lane Assist"],
        description: "Rely on the trusted Toyota Camry for a smooth and efficient ride. This popular sedan offers excellent fuel economy and a comfortable interior for all your journeys.",
        color: "Celestial Silver"
    },
    {
        id: 7,
        name: "Porsche 911",
        brand: "Porsche",
        category: "Sports",
        image: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
        ],
        // price: 250,
        seats: 4,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2023,
        mileage: "Limited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Sport Mode", "Launch Control", "Bose Sound System"],
        description: "Fulfill your need for speed with the iconic Porsche 911. This legendary sports car delivers exhilarating performance and handling for the ultimate driving enthusiast.",
        color: "Guards Red"
    },
    {
        id: 8,
        name: "Honda CR-V",
        brand: "Honda",
        category: "SUV",
        image: [
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2071",
        ],
        // price: 75,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Backup Camera", "Apple CarPlay", "Android Auto", "Cruise Control"],
        description: "Explore with confidence in the Honda CR-V. This versatile crossover SUV offers ample space and reliability for all your adventure needs.",
        color: "Modern Steel"
    }
];

export const getCarById = (id: number): Car | undefined => {
    return cars.find(car => car.id === id);
};

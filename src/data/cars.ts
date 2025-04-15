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
        brand: "Toyota",
        category: "Toyota",
        image: [
            "/cars/highlander-2022-1.jpeg",
            "/cars/highlander-2022-2.jpeg",
            "/cars/highlander-2022-3.jpeg",
            "/cars/highlander-2022-4.jpeg",
            "/cars/highlander-2022-5.jpeg",
            "/cars/highlander-2022-6.jpeg",
            "/cars/highlander-2022-7.jpeg",
            "/cars/highlander-2022-8.jpeg",
            "/cars/highlander-2022-9.jpeg",
            "/cars/highlander-2022-10.jpeg",
            "/cars/highlander-2022-11.jpeg",
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
        name: "Land Cruiser GXR",
        brand: "Toyota",
        category: "SUV",
        image: [
            "/cars/land-cruiser-2023-1.jpeg",
            "/cars/land-cruiser-2023-2.jpeg",
            "/cars/land-cruiser-2023-3.jpeg",
            "/cars/land-cruiser-2023-4.jpeg",
            "/cars/land-cruiser-2023-5.jpeg",
            "/cars/land-cruiser-2023-6.jpeg",
        ],
        // price: 95,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Diesel",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats", "Sunroof"],
        description: "Enjoy the sophistication and comfort of the Land Cruiser GXR - V8. With its refined interior and smooth ride, this luxury Suv is perfect for both business and pleasure.",
        color: "Obsidian Black"
    },
    {
        id: 3,
        name: "RAV4",
        brand: "Toyota",
        category: "SUV",
        image: [
            "/cars/RAV4-2025-2.jpeg",
            "/cars/RAV4-2025-3.jpeg",
            "/cars/RAV4-2025-4.jpeg",
            "/cars/RAV4-2025-5.jpeg",
            "/cars/RAV4-2025-6.jpeg",
            "/cars/RAV4-2025-7.jpeg",
            "/cars/RAV4-2025-8.jpeg",
        ],
        // price: 110,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2023,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats", "AWD", "Panoramic Roof"],
        description: "The perfect combination of sport and utility lets you take on whatever tomorrow may bring.",
        color: "Magnetic Gray Metallic"
    },
    {
        id: 4,
        name: "Toyota",
        brand: "Toyota",
        category: "",
        image: [
            "/cars/toyota-2025-1.jpeg",
            "/cars/toyota-2025-2.jpeg",
        ],
        // price: 120,
        seats: 5,
        transmission: "Automatic",
        fuelType: "",
        year: 2025,
        mileage: "Unlimited",
        features: ["Touch Screen", "Premium Sound"],
        description: "Enjoy the sophistication and comfort of the Toyota. With its refined interior and smooth ride, this luxury....",
        color: "Pearl White"
    },
    {
        id: 5,
        name: "Honda",
        brand: "Honda",
        category: "SUV",
        image: [
            "/cars/honda.jpeg",
        ],
        // price: 150,
        seats: 5,
        transmission: "Automatic",
        fuelType: "Gasoline",
        year: 2024,
        mileage: "Unlimited",
        features: ["Bluetooth", "Navigation", "Leather Seats", "Backup Camera", "Heated Seats", "AWD", "Terrain Management"],
        description: "Experience unparalleled luxury and capability with the Honda. This SUV is designed to handle any terrain with style and comfort.",
        color: "Reservoir Blue"
    }
];

export const getCarById = (id: number): Car | undefined => {
    return cars.find(car => car.id === id);
};


export const allCarImages = [
    "/cars/WhatsApp Image 2025-04-15 at 12.51.04 PM.jpeg",
    "/cars/highlander-2022-1.jpeg",
    "/cars/highlander-2022-2.jpeg",
    "/cars/highlander-2022-3.jpeg",
    "/cars/highlander-2022-4.jpeg",
    "/cars/highlander-2022-5.jpeg",
    "/cars/highlander-2022-6.jpeg",
    "/cars/highlander-2022-7.jpeg",
    "/cars/highlander-2022-8.jpeg",
    "/cars/highlander-2022-9.jpeg",
    "/cars/highlander-2022-10.jpeg",
    "/cars/highlander-2022-11.jpeg",
    "/cars/honda.jpeg",
    "/cars/land-cruiser-2023-1.jpeg",
    "/cars/land-cruiser-2023-2.jpeg",
    "/cars/land-cruiser-2023-3.jpeg",
    "/cars/land-cruiser-2023-4.jpeg",
    "/cars/land-cruiser-2023-5.jpeg",
    "/cars/land-cruiser-2023-6.jpeg",
    "/cars/RAV4-2025-2.jpeg",
    "/cars/RAV4-2025-3.jpeg",
    "/cars/RAV4-2025-4.jpeg",
    "/cars/RAV4-2025-5.jpeg",
    "/cars/RAV4-2025-6.jpeg",
    "/cars/RAV4-2025-7.jpeg",
    "/cars/RAV4-2025-8.jpeg",
    "/cars/toyota-2025-1.jpeg",
    "/cars/toyota-2025-2.jpeg",
    "/cars/WhatsApp Image 2025-04-15 at 12.51.04 PM (1).jpeg",
];

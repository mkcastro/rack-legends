export type ServiceItem = {
    id: string;
    title: string;
    description: string;
    price?: string;
    image: string; // Placeholder path
    features: string[];
};

export const SERVICES: ServiceItem[] = [
    {
        id: "bilyaran",
        title: "Bilyaran (Billiards)",
        description: "Professional-grade tables for casual games or serious tournaments. The heart of Rack Legends.",
        price: "₱250 / hour",
        image: "/images/bilyaran.jpg",
        features: ["Tournament Standard Tables", "Premium Cues", "Lounge Seating"],
    },
    {
        id: "gaming",
        title: "Console & PC Gaming",
        description: "Next-gen consoles (PS5, Xbox) and high-spec PCs loaded with the latest competitive titles.",
        price: "₱150 / hour",
        image: "/images/gaming.jpg",
        features: ["PS5 & Xbox Series X", "High Refresh Rate Monitors", "Co-op Setup"],
    },
    {
        id: "board-games",
        title: "Board Games Cafe",
        description: "From classic Monopoly to modern strategy games. Grab a drink and challenge your friends.",
        price: "Free with Order",
        image: "/images/boardgames.jpg",
        features: ["50+ Game Titles", "Large Tables", "Game Masters available"],
    },
    {
        id: "streaming",
        title: "Chill & Stream",
        description: "Cozy nooks with 4K screens for Netflix, YouTube, or watching esports events.",
        price: "₱200 / hours (Group)",
        image: "/images/streaming.jpg",
        features: ["4K HDR TVs", "Netflix/Disney+ Premium", "Comfortable Sofas"],
    },
];

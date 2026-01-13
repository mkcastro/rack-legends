export type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "food" | "drinks" | "snacks";
    image?: string;
    isPopular?: boolean;
};

export const MENU_ITEMS: MenuItem[] = [
    // FOOD
    {
        id: "sisig",
        name: "Legendary Sisig",
        description: "Crispy pork face with chicken liver, onions, and chili. Served on a sizzling plate.",
        price: 250,
        category: "food",
        isPopular: true,
    },
    {
        id: "wings",
        name: "Buffalo Wings",
        description: "Deep-fried chicken wings tossed in spicy buffalo sauce.",
        price: 280,
        category: "food",
    },
    {
        id: "nachos",
        name: "Loaded Nachos",
        description: "Tortilla chips topped with cheese sauce, ground beef, salsa, and jalapenos.",
        price: 220,
        category: "snacks",
        isPopular: true,
    },
    {
        id: "fries",
        name: "Basket of Fries",
        description: "Crispy shoestring fries with choice of BBQ or Cheese powder.",
        price: 150,
        category: "snacks",
    },

    // DRINKS
    {
        id: "beer-bucket",
        name: "Beer Bucket (6pcs)",
        description: "Ice-cold bucket of local beers.",
        price: 450,
        category: "drinks",
        isPopular: true,
    },
    {
        id: "iced-tea",
        name: "House Iced Tea",
        description: "Refreshing lemon iced tea pitcher.",
        price: 120,
        category: "drinks",
    },
    {
        id: "milkshake",
        name: "Neon Milkshake",
        description: "Strawberry and Vanilla blend with sprinkles.",
        price: 180,
        category: "drinks",
    },
];

export const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "food", label: "Mains" },
    { id: "snacks", label: "Snacks" },
    { id: "drinks", label: "Drinks" },
];

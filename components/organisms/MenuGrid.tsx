"use client";

import { useState } from "react";
import { MenuItem } from "@/components/molecules/MenuItem";
import { MENU_ITEMS, CATEGORIES } from "@/data/menu";
import { Button } from "@/components/atoms/ui/button";
import { cn } from "@/lib/utils";

export function MenuGrid() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredItems = activeCategory === "all"
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div className="space-y-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {CATEGORIES.map((cat) => (
                    <Button
                        key={cat.id}
                        variant={activeCategory === cat.id ? "default" : "outline"}
                        onClick={() => setActiveCategory(cat.id)}
                        className={cn(
                            "rounded-full px-6 transition-all",
                            activeCategory === cat.id
                                ? "bg-secondary text-white shadow-[0_0_15px_var(--secondary)] hover:bg-secondary/80"
                                : "border-white/10 hover:bg-white/5 hover:text-white"
                        )}
                    >
                        {cat.label}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {filteredItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

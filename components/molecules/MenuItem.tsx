import { MenuItem as MenuItemType } from "@/data/menu";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface MenuItemProps {
    item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
    return (
        <div className="flex justify-between items-start p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-primary/20 group">
            <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                    </h3>
                    {item.isPopular && (
                        <span className="text-xs font-bold text-secondary flex items-center gap-1 animate-pulse">
                            <Star size={12} fill="currentColor" /> POPULAR
                        </span>
                    )}
                </div>
                <p className="text-sm text-muted-foreground w-11/12">
                    {item.description}
                </p>
            </div>
            <div className="text-right">
                <span className="font-mono text-xl text-primary font-bold">
                    ₱{item.price}
                </span>
            </div>
        </div>
    );
}

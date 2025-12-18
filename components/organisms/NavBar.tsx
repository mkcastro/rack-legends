"use client";

import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";
import { Button } from "@/components/atoms/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/atoms/ui/sheet";
import { useState } from "react";

const NAV_LINKS = [
    { label: "Bilyaran", href: "#bilyaran" },
    { label: "Gaming", href: "#gaming" },
    { label: "Board Games", href: "#board-games" },
    { label: "Menu", href: "#menu" },
    { label: "Location", href: "#location" },
];

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Logo />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors hover:shadow-[0_0_10px_var(--primary)]"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/80 shadow-[0_0_15px_var(--primary)] rounded-full px-6">
                        Visit Us
                    </Button>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10">
                            <div className="flex flex-col gap-8 mt-10">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold uppercase tracking-widest hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
}

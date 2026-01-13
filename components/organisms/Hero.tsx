import { Button } from "@/components/atoms/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px]" />

            <div className="container px-4 z-10 text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Rack <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_30px_var(--secondary)]">Legends</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light">
                        The Ultimate Social Hangout. <br />
                        <span className="text-primary font-bold">Games</span> • <span className="text-secondary font-bold">Food</span> • <span className="text-white font-bold">Vibes</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-primary text-black hover:bg-primary/80 shadow-[0_0_20px_var(--primary)] hover:shadow-[0_0_30px_var(--primary)] transition-all">
                        <Link href="#menu">View Menu</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm group">
                        <Link href="#location" className="flex items-center gap-2">
                            Visit Us <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 text-center animate-bounce text-muted-foreground/50 text-sm uppercase tracking-widest">
                Scroll to Explore
            </div>
        </section>
    );
}

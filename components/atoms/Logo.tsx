import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={className}>
            <div className="relative w-40 h-16 md:w-48 md:h-20 transition-transform hover:scale-105">
                <Image
                    src="/images/logo.jpg"
                    alt="Rack Legends Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(255,0,153,0.5)]"
                    priority
                />
            </div>
        </Link>
    );
}

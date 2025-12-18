export function RetroGrid() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#0f0518]" />
            <div className="absolute inset-0 retro-grid opacity-30" />
            {/* Horizon glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/20 to-transparent opacity-60" />
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black via-transparent to-transparent opacity-80" />
        </div>
    );
}

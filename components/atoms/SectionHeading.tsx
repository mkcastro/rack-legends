import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeading({
    title,
    subtitle,
    className,
    align = "center"
}: SectionHeadingProps) {
    return (
        <div className={cn(
            "flex flex-col gap-2 mb-8",
            align === "center" && "items-center text-center",
            align === "left" && "items-start text-left",
            align === "right" && "items-end text-right",
            className
        )}>
            <h2 className={cn(
                "text-3xl md:text-4xl font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse",
                "drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
            )}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl">
                    {subtitle}
                </p>
            )}
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 shadow-[0_0_15px_var(--primary)]" />
        </div>
    );
}

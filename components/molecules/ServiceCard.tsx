import { ServiceItem } from "@/data/services";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/atoms/ui/card";
import { Badge } from "@/components/atoms/ui/badge";
import { Button } from "@/components/atoms/ui/button";
import Image from "next/image";

interface ServiceCardProps {
    service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card className="bg-card/50 border-primary/20 backdrop-blur-sm overflow-hidden group hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_20px_var(--primary-foreground)]">
            <div className="relative h-48 w-full overflow-hidden">
                {/* Placeholder gradient if no image, or actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 group-hover:opacity-0 transition-opacity" />
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-white transition-colors">
                        {service.title}
                    </CardTitle>
                    {service.price && (
                        <Badge variant="outline" className="border-secondary text-secondary">
                            {service.price}
                        </Badge>
                    )}
                </div>
                <CardDescription className="text-muted-foreground">
                    {service.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="marker:text-secondary">{feature}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

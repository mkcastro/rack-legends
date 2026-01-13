import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { SectionHeading } from "@/components/atoms/SectionHeading";

export function ServicesSection() {
    return (
        <section className="container mx-auto px-4 py-20 space-y-12">
            <SectionHeading
                title="Our Playground"
                subtitle="Everything you need for the ultimate hangout."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service) => (
                    <div key={service.id} id={service.id} className="scroll-mt-24">
                        <ServiceCard service={service} />
                    </div>
                ))}
            </div>
        </section>
    );
}

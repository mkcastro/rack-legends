import { CONTACT_INFO, OPERATING_HOURS, SOCIAL_LINKS } from "@/data/general";
import { Facebook, Instagram, Music2, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";

export function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-muted-foreground text-sm">
                            The premier social entertainment lounge in Synth City. Eat, play, and chill.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon === "Facebook" ? Facebook : social.icon === "Instagram" ? Instagram : Music2;
                                return (
                                    <Link
                                        key={social.platform}
                                        href={social.url}
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all hover:scale-110"
                                    >
                                        <Icon size={20} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white">Contact</h3>
                        <div className="space-y-2 text-muted-foreground text-sm">
                            <p className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 text-primary" />
                                {CONTACT_INFO.address}
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone size={16} className="text-primary" />
                                {CONTACT_INFO.phone}
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                {CONTACT_INFO.email}
                            </p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white">Hours</h3>
                        <div className="space-y-2 text-muted-foreground text-sm">
                            {OPERATING_HOURS.map((oh) => (
                                <div key={oh.day} className="flex justify-between">
                                    <span>{oh.day}</span>
                                    <span className="text-white font-medium">{oh.hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map (Placeholder) */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white">Location</h3>
                        <div className="w-full h-32 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                            <span className="text-xs text-muted-foreground">Map Integration Here</span>
                        </div>
                        <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline block text-center">
                            Open in Maps
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Rack Legends. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

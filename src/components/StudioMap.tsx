import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const StudioMap = () => {
    return (
        <section className="container mx-auto px-4 py-16 bg-muted/30 rounded-2xl mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-3xl font-heading text-secondary">Visit Our Studio</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-secondary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Address</h3>
                                <p className="text-muted-foreground">
                                    Shop No. 1, Ground Floor, Precious Pixels Studio,<br />
                                    FC Road, Shivaji Nagar, Pune, Maharashtra 411005
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-secondary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-muted-foreground">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-secondary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-muted-foreground">hello@preciouspixels.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-secondary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Hours</h3>
                                <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 7:00 PM<br />Sun: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video bg-muted rounded-xl border border-border flex flex-col items-center justify-center text-center p-8 bg-white/50 backdrop-blur-sm">
                    <MapPin className="w-12 h-12 text-muted-foreground mb-4 opacity-20" />
                    <p className="text-muted-foreground font-medium">Interactive Map View</p>
                    <p className="text-sm text-muted-foreground/60">Coming soon in the next update</p>
                    <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 text-secondary hover:underline font-semibold"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StudioMap;

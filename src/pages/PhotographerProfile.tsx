import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import photographerMale from "@/assets/photographer-male.jpg";
import photographerFemale from "@/assets/photographer-female.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";
import { Instagram, Facebook, Mail } from "lucide-react";

const photographers = {
    sachin: {
        name: "Sachin Subhash Bhor",
        image: photographerMale,
        role: "Fine Artist, Maternity, Baby, Child Photographer & Mentor",
        bio: [
            "Sachin started Photography with his dad in 1996. As a photographer, he has experience of 23+ years especially in the field of wedding photography.",
            "Post his formal education in fine arts he started working as an Assistant Art Director in the film industry – Mumbai. After For almost 5 years of working as Art Director, he started a brand for wedding photography in 2011.",
            "His technical expertise in lighting and composition combined with his artistic background allows him to create stunning, fine-art quality portraits that capture the essence of every subject.",
        ],
        specialties: ["Maternity", "Baby", "Children", "Fine Art Portraits"]
    },
    priyadarshani: {
        name: "Priyadarshani Sachin Bhor",
        image: photographerFemale,
        role: "Fine Artist, Maternity, Newborn, Baby Photographer & Mom of teenage",
        bio: [
            "In 2016 Priyadarshani got fascinated with creative New-born & Maternity Photography.",
            "She started taking education on the creative, aesthetic, lights, props, and photographic aspects of new-born baby photo-shoot and during that period she completed various in-person & online workshops from leading mentors from all over the world.",
            "After studying more than 1.5 years, she started her journey as a Newborn & Maternity photographer in Nov 2018. Her gentle approach with newborns and creative vision for maternity sessions has made her a favorite among parents.",
        ],
        specialties: ["Newborn", "Maternity", "Baby", "Creative Concepts"]
    }
};

const PhotographerProfile = () => {
    const { id } = useParams<{ id: string }>();
    const photographer = id ? (photographers as any)[id] : null;

    if (!photographer) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <main className="container mx-auto px-4 py-32 text-center">
                    <h2 className="text-2xl font-heading text-secondary mb-4">Photographer Not Found</h2>
                    <Link to="/about" className="text-secondary hover:underline">Return to About Us</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <main>
                <PageHeader
                    title={photographer.name}
                    subtitle={photographer.role}
                    variant="minimal"
                />

                <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto">
                        {/* Image and Social */}
                        <div className="w-full md:w-1/3">
                            <div className="relative mb-6">
                                <img
                                    src={photographer.image}
                                    alt={photographer.name}
                                    className="w-full aspect-[3/4] object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                            <div className="flex justify-center gap-4">
                                <a href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/3 space-y-8">
                            <div>
                                <h2 className="text-3xl font-heading text-secondary mb-2">{photographer.name}</h2>
                                <p className="text-lg text-muted-foreground font-light">{photographer.role}</p>
                            </div>

                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                {photographer.bio.map((para: string, idx: number) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>

                            <div>
                                <h3 className="text-xl font-heading text-secondary mb-4">Specialties</h3>
                                <div className="flex flex-wrap gap-2">
                                    {photographer.specialties.map((spec: string, idx: number) => (
                                        <span key={idx} className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link
                                    to="/contact"
                                    className="inline-block px-8 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all font-heading"
                                >
                                    Book a Session with {id === 'sachin' ? 'Sachin' : 'Priyadarshani'}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PhotographerProfile;

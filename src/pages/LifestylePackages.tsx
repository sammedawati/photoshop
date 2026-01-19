import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroLifestyle from "@/assets/hero_family.png"; // Placeholder for lifestyle

const LifestylePackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />
            <main className="pt-20">


                <div className="container mx-auto px-4 pt-16">
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Lifestyle Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-12" />
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Real Moments in Real Spaces</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>
                    </header>

                    <section className="max-w-5xl mx-auto mb-20 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8">
                                    Essential Lifestyle
                                </h3>
                                <ul className="space-y-4 mb-10 text-black font-light">
                                    {[
                                        "90 Minute Session", "In-Home or Favorite Location", "25 Edited digital photos",
                                        "All raw images provided", "Story-driven Posing",
                                        "Personalized Gallery", "High-Resolution Downloads"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 border-b border-neutral-200/50 pb-3 text-sm tracking-wide">
                                            <span className="text-[#D4A574] text-xs">◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-3xl font-light text-black mb-8 tracking-tighter">
                                    ₹18,000
                                </div>

                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img src={heroLifestyle} alt="Lifestyle Session" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LifestylePackages;

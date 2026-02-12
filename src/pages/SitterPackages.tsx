import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroSitter from "@/assets/hero_sitter.png";
import heroBaby from "@/assets/hero_newborn.png";
import heroToddler from "@/assets/hero_toddler.png";

const SitterPackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />
            <main className="pt-20">


                <div className="container mx-auto px-4 pt-16">
                    {/* Category Toggle Buttons */}
                    <div className="flex justify-center gap-6 mb-16">
                        <Link
                            to="/portfolio/sitter/packages"
                            className="px-10 py-5 bg-[#7D8C62] text-white rounded-full text-lg font-medium hover:bg-[#687652] transition-all duration-300 shadow-lg"
                        >
                            Sitter Packages
                        </Link>
                        <Link
                            to="/portfolio/sitter/themes"
                            className="px-10 py-5 border-2 border-[#7D8C62] text-[#7D8C62] bg-transparent rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Sitter Themes
                        </Link>
                    </div>
                    <header className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Sitter Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-12" />
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Celebrating the "Sitting Up" Milestone</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-2xl mx-auto px-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[2/3] overflow-hidden rounded-xl shadow-lg group">
                                    <img src={heroSitter} alt={`Sitter ${i}`} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </header>

                    <section className="max-w-5xl mx-auto mb-20 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8">
                                    Sitter Basic
                                </h3>
                                <ul className="space-y-4 mb-10 text-black font-light">
                                    {[
                                        "1 Theme", "Studio Session", "10 Edited digital photos",
                                        "All raw images provided", "Total Time: 1 hour",
                                        "Outfit Provided", "Age: 6-9 Months",
                                        "Online Gallery Delivery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 border-b border-neutral-200/50 pb-3 text-sm tracking-wide">
                                            <span className="text-[#D4A574] text-xs">◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-3xl font-light text-black mb-8 tracking-tighter">
                                    ₹7,000
                                </div>

                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img src={heroSitter} alt="Sitter Standard" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SitterPackages;

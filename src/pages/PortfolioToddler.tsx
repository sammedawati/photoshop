import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroToddler from "@/assets/hero_toddler.png";

const PortfolioToddler = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">
                <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 z-0 scale-110 animate-[zoom-in_20s_ease-out]">
                        <img src={heroToddler} alt="Toddler Portfolio" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-7xl font-light text-white uppercase tracking-[0.3em] mb-6 drop-shadow-2xl">
                            Toddler
                        </h1>
                        <div className="h-px w-32 bg-[#D4A574] mx-auto" />
                    </div>
                </section>

                <section className="py-24 container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <p className="text-xl text-neutral-600 font-light leading-relaxed italic">
                            "Action, laughter, and the beautiful chaos of being a toddler."
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
                        <Link
                            to="/portfolio/toddler/packages"
                            className="group relative w-full md:w-1/2 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-500 hover:-translate-y-2"
                        >
                            <img src={heroToddler} alt="Toddler Packages" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#152615]/60 flex items-center justify-center">
                                <span className="text-white text-lg uppercase tracking-[0.3em] font-semibold border-b border-white/30 pb-2 group-hover:border-[#D4A574]">
                                    Toddler Packages
                                </span>
                            </div>
                        </Link>

                        <Link
                            to="/portfolio/toddler/themes"
                            className="group relative w-full md:w-1/2 aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-500 hover:-translate-y-2"
                        >
                            <img src={heroToddler} alt="Toddler Themes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 shadow-inner" />
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
                                <span className="text-[#152615] text-lg uppercase tracking-[0.3em] font-semibold border-b border-[#152615]/30 pb-2 group-hover:border-[#D4A574]">
                                    Props & Themes
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioToddler;

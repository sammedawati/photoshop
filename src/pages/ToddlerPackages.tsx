import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroToddler from "@/assets/hero_toddler.png";

const ToddlerPackages = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#D4A574]/30">
            <Navbar />
            <main className="pt-20">


                <div className="container mx-auto px-4 pt-16">
                    <header className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-light text-neutral-800 tracking-[0.1em] uppercase mb-4">
                            Toddler Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-12" />
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Pure Joy & Unfiltered Moments</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
                                    <img src={heroToddler} alt={`Toddler ${i}`} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </header>

                    <section className="max-w-5xl mx-auto mb-20 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8 uppercase tracking-[0.2em]">
                                    Toddler Play Session
                                </h3>
                                <ul className="space-y-4 mb-10 text-neutral-600 font-light">
                                    {[
                                        "1 Theme", "Indoor or Outdoor", "15 Edited digital photos",
                                        "All raw images provided", "Total Time: 1 hour",
                                        "Props Provided", "Action Shots Included",
                                        "Online Gallery Delivery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 border-b border-neutral-200/50 pb-3 text-sm tracking-wide">
                                            <span className="text-[#D4A574] text-xs">◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-3xl font-light text-neutral-800 mb-8 tracking-tighter">
                                    ₹6,000 <span className="text-sm font-light text-neutral-400 uppercase tracking-widest ml-2">Total</span>
                                </div>
                                <button className="px-12 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#b08453] transition-all transform hover:scale-105 uppercase text-xs tracking-[0.3em] font-semibold">
                                    Book Toddler Shoot
                                </button>
                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img src={heroToddler} alt="Toddler Session" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ToddlerPackages;

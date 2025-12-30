import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import heroBaby from "@/assets/hero_newborn.png"; // Using baby-ish assets
import heroMaternity from "@/assets/hero_maternity.png";
import heroFamily from "@/assets/hero_family.png";
import heroToddler from "@/assets/hero_toddler.png";
import heroSitter from "@/assets/hero_sitter.png";

const BabyPackages = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#D4A574]/30">
            <Navbar />
            <main className="pt-20">


                <div className="container mx-auto px-4 pt-16">
                    <header className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-light text-neutral-800 tracking-[0.1em] uppercase mb-4">
                            Baby Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-12" />
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Capturing Milestones & Smiles</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
                                    <img src={heroBaby} alt={`Baby ${i}`} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </header>

                    <section className="max-w-5xl mx-auto mb-20 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8 uppercase tracking-[0.2em]">
                                    Baby Silver Shoot
                                </h3>
                                <ul className="space-y-4 mb-10 text-neutral-600 font-light">
                                    {[
                                        "1 Theme", "Studio Session", "12 Edited digital photos",
                                        "All raw images provided", "Total Time: 1.5 hours",
                                        "Basic Props Access", "Parent Portraits",
                                        "Online Gallery Delivery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 border-b border-neutral-200/50 pb-3 text-sm tracking-wide">
                                            <span className="text-[#D4A574] text-xs">◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-3xl font-light text-neutral-800 mb-8 tracking-tighter">
                                    ₹8,000 <span className="text-sm font-light text-neutral-400 uppercase tracking-widest ml-2">Total</span>
                                </div>
                                <button className="px-12 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#b08453] transition-all transform hover:scale-105 uppercase text-xs tracking-[0.3em] font-semibold">
                                    Book Standard
                                </button>
                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                                <img src={heroBaby} alt="Baby Standard" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </section>

                    <div className="bg-[#152615] rounded-t-[3rem] mt-32 px-6 py-16 text-center">
                        <h2 className="text-xl md:text-3xl font-light text-white uppercase tracking-[0.4em] mb-2">
                            Explore Premium Baby <br className="hidden md:block" /> Shoot Packages
                        </h2>
                        <div className="h-[1px] w-40 bg-[#D4A574]/50 mx-auto mt-4" />
                    </div>

                    <section className="bg-[#152615] text-white rounded-b-[3rem] px-8 md:px-16 pb-20 pt-10 shadow-2xl border-t border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                            {[
                                {
                                    name: "BABY GOLD SHOOT",
                                    price: "₹15,000",
                                    items: [
                                        "2 Themes", "Studio / Indoor", "25 Edited digital photos",
                                        "All raw images gallery", "Total Time: 2.5 hours",
                                        "Custom Prop Setup", "Family Portraits",
                                        "Professional Retouching"
                                    ]
                                },
                                {
                                    name: "BABY PLATINUM SHOOT",
                                    price: "₹28,000",
                                    items: [
                                        "3 Themes", "Concept Driven Sets", "45 Edited digital photos",
                                        "All raw images gallery", "Total Time: 4 hours",
                                        "Luxury Props & Outfits", "Premium Album (10x10)",
                                        "Canvas Wall Frame", "Month-by-Month Video"
                                    ]
                                },
                                {
                                    name: "BABY DIAMOND SHOOT",
                                    price: "₹45,000",
                                    items: [
                                        "4+ Themes", "Bespoke Production", "75 Edited digital photos",
                                        "Master RAW Collection", "Full Production Video",
                                        "Exquisite Coffee Table Book", "WallArt Gallery Set",
                                        "Lifetime 20% Royalty Membership"
                                    ]
                                }
                            ].map((pkg, i) => (
                                <div key={i} className="flex flex-col h-full border-l border-white/10 pl-8 md:pl-10 group">
                                    <h4 className="text-lg md:text-xl font-light text-[#D4A574] mb-8 uppercase tracking-[0.25em] h-16 transition-colors group-hover:text-white">
                                        {pkg.name}
                                    </h4>
                                    <ul className="space-y-4 mb-10 flex-grow text-white/60 font-light text-sm tracking-wide">
                                        {pkg.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-[#D4A574] mt-1 shrink-0">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-2xl font-light mb-10 tracking-tight text-white/90">{pkg.price}</div>
                                    <button className="w-full py-4 border border-[#D4A574] text-[#D4A574] rounded-full hover:bg-[#D4A574] hover:text-white transition-all text-[10px] uppercase tracking-[0.3em] font-semibold">
                                        Inquire now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BabyPackages;

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioNewborn from "@/assets/hero_newborn.png";
import heroMaternity from "@/assets/hero_maternity.png";
import heroFamily from "@/assets/hero_family.png";
import heroToddler from "@/assets/hero_toddler.png";
import heroSitter from "@/assets/hero_sitter.png";

const NewbornPackages = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#D4A574]/30">
            <Navbar />

            <main className="pt-20">


                <div className="container mx-auto px-4 pt-16">
                    {/* Header Section */}
                    <header className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-light text-neutral-800 tracking-[0.1em] uppercase mb-4">
                            Newborn Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-12" />

                        {/* Elegant Icon Header */}
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Timeless Newborn Portraits</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>

                        {/* Top Gallery Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
                                    <img
                                        src={portfolioNewborn}
                                        alt={`Newborn ${i}`}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </header>

                    {/* Intro text */}
                    <div className="max-w-3xl mx-auto text-center mb-24 px-4">
                        <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
                            "Capturing the pure, fleeting moments of your baby's first days
                            in the most artistic way possible..."
                        </p>
                    </div>

                    {/* Silver Package Listing (Light Theme) */}
                    <section className="max-w-5xl mx-auto mb-20 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8 uppercase tracking-[0.2em]">
                                    Newborn Silver Shoot
                                </h3>
                                <ul className="space-y-4 mb-10 text-neutral-600 font-light">
                                    {[
                                        "1 Theme", "Studio shoot", "10 Edited digital photos",
                                        "5-8 Raw unedited photos", "Total Time: 2 hours",
                                        "Props Provided", "Family Portraits Included",
                                        "Online Gallery Access"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 border-b border-neutral-200/50 pb-3 text-sm tracking-wide">
                                            <span className="text-[#D4A574] text-xs">◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-3xl font-light text-neutral-800 mb-8 tracking-tighter">
                                    ₹12,000 <span className="text-sm font-light text-neutral-400 uppercase tracking-widest ml-2">Total</span>
                                </div>
                                <button className="px-12 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#b08453] transition-all transform hover:scale-105 active:scale-95 uppercase text-xs tracking-[0.3em] font-semibold shadow-lg shadow-[#D4A574]/20">
                                    Book Silver
                                </button>
                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                                <img src={portfolioNewborn} alt="Silver Package Sample" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                            </div>
                        </div>
                    </section>

                    {/* Premium Section Header (Dark Green) */}
                    <div className="bg-[#152615] rounded-t-[3rem] mt-32 px-6 py-10 md:py-16 text-center overflow-hidden relative">
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <span className="text-3xl">✨</span>
                            <h2 className="text-xl md:text-3xl font-light text-white uppercase tracking-[0.4em] mb-2 leading-tight">
                                Explore Premium Newborn <br className="hidden md:block" /> Shoot Packages
                            </h2>
                            <span className="text-3xl">✨</span>
                            <div className="h-[1px] w-40 bg-[#D4A574]/50 mt-4" />
                        </div>
                    </div>

                    {/* Premium Packages Grid (Dark Green) */}
                    <section className="bg-[#152615] text-white rounded-b-[3rem] px-8 md:px-16 pb-20 pt-10 shadow-2xl border-t border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                            {[
                                {
                                    name: "NEWBORN GOLD SHOOT",
                                    price: "₹22,000",
                                    items: [
                                        "2 Themes", "Studio / Home Session", "20 Edited digital photos",
                                        "All raw unedited photos", "Total Time: 3 hours",
                                        "Premium Props Access", "Grandparent Portraits",
                                        "Professional Retouching"
                                    ]
                                },
                                {
                                    name: "NEWBORN PLATINUM SHOOT",
                                    price: "₹35,000",
                                    items: [
                                        "3 Themes", "Luxury Studio Session", "40 Edited digital photos",
                                        "All raw unedited photos", "Total Time: 4 hours",
                                        "Unlimited Props Access", "Premium Album (12x12)",
                                        "Canvas Wall Art", "Birth Announcement Video"
                                    ]
                                },
                                {
                                    name: "NEWBORN DIAMOND SHOOT",
                                    price: "₹60,000",
                                    items: [
                                        "4-5 Themes", "Full Day Concept Session", "70 Edited digital photos",
                                        "Master Raw Gallery", "Behind the Scenes Video",
                                        "Luxury Coffee Table Book", "WallArt Set (5 Frames)",
                                        "Newborn to Sitter Progression Discount"
                                    ]
                                }
                            ].map((pkg, i) => (
                                <div key={i} className="flex flex-col h-full border-l border-white/10 pl-8 md:pl-10 group transition-all duration-500 hover:border-[#D4A574]/50">
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
                                    <div className="text-2xl font-light mb-10 tracking-tight text-white/90">
                                        {pkg.price}
                                    </div>
                                    <button className="w-full py-4 border border-[#D4A574] text-[#D4A574] rounded-full hover:bg-[#D4A574] hover:text-white transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-semibold active:scale-95">
                                        Inquire now
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Terms & Conditions Section */}
                        <div className="mt-32 pt-20 border-t border-white/10">
                            <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
                                <div className="md:w-1/3 flex items-start gap-4">
                                    <div className="p-3 bg-[#D4A574]/10 rounded-full">
                                        <Info className="w-6 h-6 text-[#D4A574]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-light uppercase tracking-widest text-[#D4A574] mb-2 leading-none">
                                            Terms & <br /> Condition
                                        </h3>
                                        <div className="h-0.5 w-12 bg-[#D4A574] mt-4" />
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-6 text-white/50 font-light text-sm leading-relaxed">
                                        {[
                                            "Sessions are best done within first 14 days of life.",
                                            "Comfort and safety of the baby is our top priority.",
                                            "Rescheduling is flexible for health reasons with 48h notice.",
                                            "Final edited gallery delivery takes 3-4 weeks."
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-[#D4A574] mt-1 shrink-0">◇</span>
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Circular Navigation Section */}
                    <section className="mt-40 mb-20 text-center">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto px-4">
                            {[
                                { name: "Maternity", img: heroMaternity, link: "/portfolio/maternity" },
                                { name: "Newborn", img: portfolioNewborn, link: "/portfolio/newborn" },
                                { name: "Infant", img: portfolioNewborn, link: "/portfolio/baby" },
                                { name: "Sitter", img: heroSitter, link: "/portfolio/sitter" },
                                { name: "Birthday", img: heroToddler, link: "/portfolio/birthday" },
                                { name: "Toddler", img: heroToddler, link: "/portfolio/toddler" },
                                { name: "Family", img: heroFamily, link: "/portfolio/family" },
                                { name: "Lifestyle", img: heroFamily, link: "/portfolio/lifestyle" }
                            ].map((item, i) => (
                                <Link key={i} to={item.link} className="group block">
                                    <div className="aspect-square rounded-full overflow-hidden mb-6 shadow-xl border-4 border-white ring-1 ring-neutral-100 transition-transform duration-500 group-hover:scale-105 active:scale-95">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                                    </div>
                                    <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-400 group-hover:text-[#D4A574] transition-colors font-semibold">
                                        {item.name} Shoot
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewbornPackages;

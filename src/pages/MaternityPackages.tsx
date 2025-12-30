import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import heroNewborn from "@/assets/hero_newborn.png";
import heroFamily from "@/assets/hero_family.png";
import heroToddler from "@/assets/hero_toddler.png";
import heroSitter from "@/assets/hero_sitter.png";

const MaternityPackages = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#D4A574]/30">
            <Navbar />

            {/* Main Content Start after Navbar */}
            <main className="pt-20">





                <div className="container mx-auto px-4 pt-16">
                    {/* Header Section */}
                    <header className="text-center mb-16">
                        <h1 className="text-3xl md:text-5xl font-light text-neutral-800 tracking-[0.1em] uppercase mb-4">
                            Maternity Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-12" />

                        {/* Elegant Icon Header */}
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Studio Shooting Elegant Photos</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>

                        {/* Top Gallery Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
                                    <img
                                        src={portfolioMaternity}
                                        alt={`Studio ${i}`}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </header>

                    {/* Intro text */}
                    <div className="max-w-3xl mx-auto text-center mb-24 px-4">
                        <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
                            "Capturing the divine glow and the miraculous connection
                            of motherhood in every frame..."
                        </p>
                    </div>

                    {/* Silver Package Listing (Light Theme) */}
                    <section className="max-w-5xl mx-auto mb-20 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8 uppercase tracking-[0.2em]">
                                    Maternity Silver Shoot
                                </h3>
                                <ul className="space-y-4 mb-10 text-neutral-600 font-light">
                                    {[
                                        "2 Theme", "Studio shoot", "15 Edited digital photos",
                                        "10-12 Raw unedited photos", "Total Time: 1 hour",
                                        "Makeup and Hair extra", "Dress: Self managed",
                                        "Online Gallery Access"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 border-b border-neutral-200/50 pb-3 text-sm tracking-wide">
                                            <span className="text-[#D4A574] text-xs">◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-3xl font-light text-neutral-800 mb-8 tracking-tighter">
                                    ₹10,000 <span className="text-sm font-light text-neutral-400 uppercase tracking-widest ml-2">Total</span>
                                </div>
                                <button className="px-12 py-4 bg-[#D4A574] text-white rounded-full hover:bg-[#b08453] transition-all transform hover:scale-105 active:scale-95 uppercase text-xs tracking-[0.3em] font-semibold shadow-lg shadow-[#D4A574]/20">
                                    Book Silver
                                </button>
                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                                <img src={portfolioMaternity} alt="Silver Package Sample" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                            </div>
                        </div>
                    </section>

                    {/* Premium Section Header (Dark Green) */}
                    <div className="bg-[#152615] rounded-t-[3rem] mt-32 px-6 py-10 md:py-16 text-center overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                            <div className="absolute inset-0 border-[20px] border-white/20 rounded-full scale-150 -translate-y-1/2" />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <span className="text-3xl">✨</span>
                            <h2 className="text-xl md:text-3xl font-light text-white uppercase tracking-[0.4em] mb-2 leading-tight">
                                Explore Premium Maternity <br className="hidden md:block" /> Shoot Packages
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
                                    name: "MATERNITY GOLD SHOOT",
                                    price: "₹18,000",
                                    items: [
                                        "3 Themes", "Outdoor / Indoor shoot", "25 Edited digital photos",
                                        "All raw unedited photos", "Total Time: 2 hours",
                                        "Client Closet: 1 Dress", "Makeup & Hair Included",
                                        "Professional Retouching"
                                    ]
                                },
                                {
                                    name: "MATERNITY PLATINUM SHOOT",
                                    price: "₹30,000",
                                    items: [
                                        "4 Themes", "Studio + Outdoor shoot", "45 Edited digital photos",
                                        "All raw unedited photos", "Total Time: 4 hours",
                                        "Client Closet: 2 Dress", "Hair & Makeup: 2 Looks",
                                        "Premium Album (12x18)", "Canvas Print Included"
                                    ]
                                },
                                {
                                    name: "MATERNITY DIAMOND SHOOT",
                                    price: "₹55,000",
                                    items: [
                                        "Unlimited Themes", "Any Location Access", "80 Edited digital photos",
                                        "Master Raw Gallery", "Full Day Coverage",
                                        "Candid Video Highlights", "Exclusive Closet Access",
                                        "Luxury Coffee Table Book", "Wall Art Set (3 Frames)"
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
                                            "Duration for photoshoot is limited as per package; extra charges for extended time.",
                                            "The Package session fee is non-refundable, and it can only be rescheduled once with 7 days notice.",
                                            "Raw photos will be delivered as per package specification; editing takes 3-4 weeks after final selection.",
                                            "Client is responsible for any specific location entry fees or travel outside 20km radius."
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

                    {/* Bottom Circular Navigation Section (Most common packages) */}
                    <section className="mt-40 mb-20 text-center">
                        <div className="flex items-center justify-center gap-6 mb-16">
                            <div className="h-px w-12 bg-neutral-200" />
                            <h2 className="text-xl md:text-3xl font-light text-neutral-800 uppercase tracking-[0.2em]">
                                All Portfolio / Sub category Photo
                            </h2>
                            <div className="h-px w-12 bg-neutral-200" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-5xl mx-auto px-4">
                            {[
                                { name: "Maternity", img: portfolioMaternity, link: "/portfolio/maternity" },
                                { name: "Newborn", img: heroNewborn, link: "/portfolio/newborn" },
                                { name: "Infant", img: heroNewborn, link: "/portfolio/baby" },
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
                                        {item.name} Shoot <br /> <span className="text-[8px] font-normal opacity-50 mt-1 inline-block">View</span>
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Social/Status Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-40 pb-16 border-t border-neutral-100 pt-16">
                        <div className="flex gap-10">
                            {["Instagram", "Facebook", "Pinterest", "YouTube"].map((social) => (
                                <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-[#D4A574] transition-colors font-medium">
                                    {social}
                                </a>
                            ))}
                        </div>
                        <div className="text-[9px] uppercase tracking-[0.4em] text-neutral-300 font-medium">
                            Status: <span className="text-green-500/50">Online</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
};

export default MaternityPackages;

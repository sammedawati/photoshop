import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioNewborn from "@/assets/hero_newborn.png";
import heroMaternity from "@/assets/hero_maternity.png";
import heroFamily from "@/assets/hero_family.png";
import heroToddler from "@/assets/hero_toddler.png";
import heroSitter from "@/assets/hero_sitter.png";

const NewbornPackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />

            <main className="pt-16">


                <div className="container mx-auto px-4 pt-8">
                    {/* Category Toggle Buttons */}
                    <div className="flex justify-center gap-6 mb-8">
                        <Link
                            to="/portfolio/newborn/packages"
                            className="px-10 py-5 bg-[#7D8C62] text-white rounded-full text-lg font-medium hover:bg-[#687652] transition-all duration-300 shadow-lg"
                        >
                            Newborn Packages
                        </Link>
                        <Link
                            to="/portfolio/newborn/props"
                            className="px-10 py-5 border-2 border-[#7D8C62] text-[#7D8C62] bg-transparent rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Newborn Props
                        </Link>
                    </div>
                    {/* Header Section */}
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Newborn Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-6" />

                        {/* Elegant Icon Header */}
                        <div className="flex items-center justify-center gap-6 mb-6">
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
                    <div className="max-w-3xl mx-auto text-center mb-12 px-4">
                        <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
                            "Capturing the pure, fleeting moments of your baby's first days
                            in the most artistic way possible..."
                        </p>
                    </div>

                    {/* Silver Package Listing (Light Theme) */}
                    <section className="max-w-5xl mx-auto mb-10 bg-neutral-50/50 rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <h3 className="text-2xl md:text-3xl font-light text-[#D4A574] mb-8">
                                    Newborn Silver Shoot
                                </h3>
                                <ul className="space-y-4 mb-10 text-black font-light">
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
                                <div className="text-3xl font-light text-black mb-8 tracking-tighter">
                                    ₹12,000
                                </div>

                            </div>
                            <div className="order-1 md:order-2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative group">
                                <img src={portfolioNewborn} alt="Silver Package Sample" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                            </div>
                        </div>
                    </section>

                    {/* Premium Section Header (Dark Green) */}
                    {/* Premium Section - Luxury Redesign */}
                    {/* Premium Section - Light Olive Luxury Redesign */}
                    <section className="relative mt-16 rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#EBEFE6] to-[#FBF6F2] text-[var(--foreground)] py-12 px-6 md:px-12 shadow-sm border-t border-white/50 mx-4 md:mx-0">
                        {/* Soft Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

                        {/* Header */}
                        <div className="relative z-10 text-center mb-10">
                            <div className="flex items-center justify-center gap-3 mb-4 text-[#C8A26A]">
                                <Sparkles className="w-5 h-5 animate-pulse text-[#C8A26A]/70" />
                                <span className="text-sm md:text-base tracking-[0.4em] uppercase font-light text-black">Exquisite Collections</span>
                                <Sparkles className="w-5 h-5 animate-pulse text-[#C8A26A]/70" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif text-black mb-6 tracking-wide">
                                Premium Newborn <span className="italic text-[#C8A26A]">Packages</span>
                            </h2>
                            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#C8A26A] to-transparent mx-auto opacity-50" />
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto relative z-10">
                            {[
                                {
                                    name: "Gold",
                                    price: "₹22,000",
                                    features: [
                                        "2 Themes", "Studio / Home Session", "20 Edited digital photos",
                                        "All raw unedited photos", "Total Time: 3 hours",
                                        "Premium Props Access", "Grandparent Portraits",
                                        "Professional Retouching"
                                    ]
                                },
                                {
                                    name: "Platinum",
                                    price: "₹35,000",
                                    popular: true,
                                    features: [
                                        "3 Themes", "Luxury Studio Session", "40 Edited digital photos",
                                        "All raw unedited photos", "Total Time: 4 hours",
                                        "Unlimited Props Access", "Premium Album (12x12)",
                                        "Canvas Wall Art", "Birth Announcement Video"
                                    ]
                                },
                                {
                                    name: "Diamond",
                                    price: "₹60,000",
                                    features: [
                                        "4-5 Themes", "Full Day Concept Session", "70 Edited digital photos",
                                        "Master Raw Gallery", "Behind the Scenes Video",
                                        "Luxury Coffee Table Book", "WallArt Set (5 Frames)",
                                        "Newborn to Sitter Progression Discount"
                                    ]
                                }
                            ].map((pkg, i) => (
                                <div key={i} className={`relative flex flex-col p-8 md:p-10 rounded-2xl border transition-all duration-300 group
                                    ${pkg.popular
                                        ? 'bg-white border-[#C8A26A]/30 shadow-[0_20px_40px_-10px_rgba(200,162,106,0.15)] md:-translate-y-4'
                                        : 'bg-white/60 border-white/50 hover:bg-white hover:border-[#C8A26A]/20 hover:shadow-lg hover:-translate-y-2'
                                    }`}>

                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#C8A26A] text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-md">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="text-center mb-10">
                                        <h3 className="text-2xl font-serif text-[#5B6342] mb-3">
                                            {pkg.name}
                                        </h3>
                                        <div className="h-[1px] w-12 bg-[#C8A26A]/30 mx-auto" />
                                    </div>

                                    <ul className="space-y-5 mb-12 flex-grow">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-sm text-black font-light leading-relaxed transition-colors">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A26A] shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="text-center mt-auto">
                                        <div className="text-3xl md:text-4xl font-light text-black font-serif tracking-tight group-hover:scale-105 transition-transform">
                                            {pkg.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Terms & Conditions Section - Simplified/Refined */}
                        <div className="mt-16 pt-8 border-t border-[#5B6342]/10 max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-white rounded-full border border-[#C8A26A]/20 shadow-sm">
                                        <Info className="w-6 h-6 text-[#C8A26A]" />
                                    </div>
                                    <h3 className="text-xl font-light tracking-[0.2em] text-[#5B6342]">
                                        TERMS & <br /> CONDITIONS
                                    </h3>
                                </div>
                                <ul className="grid gap-4 text-[#5B6342]/70 font-light text-xs leading-relaxed">
                                    {[
                                        "Sessions are best done within first 14 days of life.",
                                        "Comfort and safety of the baby is our top priority.",
                                        "Rescheduling is flexible for health reasons with 48h notice.",
                                        "Final edited gallery delivery takes 3-4 weeks."
                                    ].map((term, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-[#C8A26A] mt-0.5">◇</span>
                                            {term}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Circular Navigation Section */}
                    <section className="mt-20 mb-10 text-center">
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
                                    <h4 className="text-[10px] md:text-xs tracking-[0.3em] text-black transition-colors font-semibold">
                                        {item.name} Shoot <br /> <span className="text-[8px] font-normal text-black mt-1 inline-block">View</span>
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

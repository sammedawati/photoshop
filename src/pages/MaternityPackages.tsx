import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight, Info, Sparkles } from "lucide-react";
import portfolioMaternity from "@/assets/maternity-saree-solo.jpg";
import maternityPkg1 from "@/assets/maternity-package-1.jpg";
import maternityPkg2 from "@/assets/maternity-package-2.jpg";
import maternityPkg3 from "@/assets/maternity-package-3.jpg";
import maternityFlyer from "@/assets/maternity-flyer.jpg";
import maternityFlyer2 from "@/assets/maternity-flyer-2.jpg";

const MaternityPackages = () => {
    return (
        <div className="min-h-screen bg-[var(--background)] font-sans selection:bg-[#C8A26A]/30">
            <Navbar />

            {/* Main Content Start after Navbar */}
            <main className="pt-16">





                <div className="container mx-auto px-4 pt-8">

                    {/* Header Section */}
                    <header className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-black tracking-widest mb-6 italic">
                            Maternity Photography Packages
                        </h1>
                        <div className="h-[2px] w-24 bg-[#D4A574] mx-auto mb-6" />

                        {/* Elegant Icon Header */}
                        <div className="flex items-center justify-center gap-6 mb-6">
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                            <h2 className="text-lg md:text-2xl font-light text-[#D4A574] italic flex items-center gap-3">
                                📷 <span className="tracking-wide">Studio Shooting Elegant Photos</span> 📷
                            </h2>
                            <div className="h-px w-16 md:w-32 bg-neutral-200" />
                        </div>

                        {/* Top Gallery Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-2">
                            {[
                                { img: portfolioMaternity, alt: "Elegant Wings" },
                                { img: maternityPkg1, alt: "Maternity Traditional" },
                                { img: maternityPkg2, alt: "Maternity Red Dress" },
                                { img: maternityPkg3, alt: "Maternity Artist Style" }
                            ].map((item, i) => (
                                <div key={i} className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg group">
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </header>

                    {/* Intro text */}
                    <div className="max-w-3xl mx-auto text-center mb-12 px-4">
                        <p className="text-lg md:text-xl text-neutral-500 font-light italic leading-relaxed">
                            "Capturing the divine glow and the miraculous connection
                            of motherhood in every frame..."
                        </p>
                    </div>



                    {/* New Flyer Section */}
                    <div className="max-w-4xl mx-auto mb-16 px-4 flex flex-col gap-8">
                        <img
                            src={maternityFlyer}
                            alt="Maternity Silver Package"
                            className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
                        />
                        <img
                            src={maternityFlyer2}
                            alt="Maternity Gold Package"
                            className="w-full h-auto rounded-2xl shadow-lg border border-neutral-200"
                        />
                    </div>

                    {/* Bottom Circular Navigation Section Removed */}

                    {/* Social/Status Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-20 pb-8 border-t border-neutral-100 pt-8">
                        <div className="flex gap-10">
                            {["Instagram", "Facebook", "Pinterest", "YouTube"].map((social) => (
                                <a key={social} href="#" className="text-[10px] tracking-[0.3em] text-neutral-400 hover:text-[#D4A574] transition-colors font-medium">
                                    {social}
                                </a>
                            ))}
                        </div>
                        <div className="text-[9px] tracking-[0.4em] text-neutral-300 font-medium">
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

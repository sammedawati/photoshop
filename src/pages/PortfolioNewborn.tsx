import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroNewborn from "@/assets/hero-newborn-updated.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import newbornFeatured1 from "@/assets/hero-newborn-updated.jpg";
import newbornFeatured2 from "@/assets/newborn-featured-2.jpg";
import newbornFeatured3 from "@/assets/newborn-featured-3.jpg";
import newbornFeatured4 from "@/assets/newborn-featured-4.jpg";

const PortfolioNewborn = () => {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <main className="pt-20 pb-10">
                {/* Hero-like Landing Section */}
                <div className="relative h-[60vh] md:h-[70vh] mb-8 overflow-hidden">
                    <img
                        src={heroNewborn}
                        alt="Newborn Photography"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
                        <div className="max-w-4xl animate-in fade-in zoom-in duration-1000">
                            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                                Newborn Portfolio
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light italic mb-8">
                                Captured forever: Those first 14 days are pure magic
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-6 text-neutral-600 leading-relaxed">
                        <p className="text-lg mb-6">
                            The ideal time for a Newborn Shoot is between 5 to 14 days old.
                            During this period, babies tend to sleep deeply, allowing for those
                            gentle, curled-up poses that capture the essence of new life.
                            We freeze these fleeting moments in time, creating memories
                            your family will cherish for generations.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
                            <Link
                                to="/portfolio/newborn/packages"
                                className="px-10 py-5 bg-white border-2 border-[#7D8C62] text-[#7D8C62] rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Newborn Packages
                            </Link>
                            {/* Props & Themes button removed */}
                        </div>
                    </div>

                    {/* Featured Gallery Preview */}
                    <div className="mt-6">
                        <h2 className="text-3xl font-light text-center mb-8 text-neutral-900">Featured Moments</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[newbornFeatured1, newbornFeatured2, newbornFeatured3, newbornFeatured4].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-sm"
                                >
                                    <img
                                        src={img}
                                        alt={`Newborn featured ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioNewborn;

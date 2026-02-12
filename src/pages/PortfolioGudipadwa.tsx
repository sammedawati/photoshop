import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroGudipadwa from "@/assets/hero_gudipadwa.jpg";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import gudipadwaFeatured1 from "@/assets/gudipadwa-featured-1.jpg";
import gudipadwaFeatured2 from "@/assets/gudipadwa-featured-2.jpg";
import gudipadwaFeatured3 from "@/assets/gudipadwa-featured-3.jpg";
import gudipadwaFeatured4 from "@/assets/gudipadwa-featured-4.jpg";

const PortfolioGudipadwa = () => {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <main className="pt-24 pb-16">
                {/* Hero-like Landing Section */}
                <div className="relative h-[60vh] md:h-[70vh] mb-8 overflow-hidden">
                    <img
                        src={heroGudipadwa}
                        alt="Gudipadwa Photography"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
                        <div className="max-w-4xl animate-in fade-in zoom-in duration-1000">
                            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                                Gudipadwa Portfolio
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light italic mb-8">
                                Welcoming the New Year with tradition and joy
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-6 text-neutral-600 leading-relaxed">
                        <p className="text-lg mb-6">
                            Capture the vibrant traditions and auspicious beginnings of Gudipadwa.
                            Our sessions highlight the festive spirit, colorful decorations, and
                            traditional attire that make this festival so special.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
                            <Link
                                to="/portfolio/gudipadwa/packages"
                                className="px-10 py-5 bg-white border-2 border-[#7D8C62] text-[#7D8C62] rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Gudipadwa Packages
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-3xl font-light text-center mb-12 text-neutral-900">Featured Moments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[gudipadwaFeatured1, gudipadwaFeatured2, gudipadwaFeatured3, gudipadwaFeatured4].map((img, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden rounded-3xl aspect-[3/4] shadow-sm"
                            >
                                <img
                                    src={img}
                                    alt={`Gudipadwa featured ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioGudipadwa;

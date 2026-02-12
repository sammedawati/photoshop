import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroMaternity from "@/assets/maternity-painting.jpg";
import portfolioMaternity from "@/assets/maternity-saree-solo.jpg";
import maternityFeatured1 from "@/assets/maternity-saree-solo.jpg";
import maternityFeatured2 from "@/assets/maternity-featured-2.jpg";
import maternityFeatured3 from "@/assets/maternity-featured-3.jpg";
import maternityFeatured4 from "@/assets/maternity-featured-4.jpg";

const PortfolioMaternity = () => {
    return (
        <div className="min-h-screen bg-[var(--background)]">
            <Navbar />
            <main className="pt-24 pb-16">
                {/* Hero-like Landing Section */}
                <div className="relative h-[60vh] md:h-[70vh] mb-8 overflow-hidden">
                    <img
                        src={heroMaternity}
                        alt="Maternity Photography"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
                        <div className="max-w-4xl animate-in fade-in zoom-in duration-1000">
                            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                                Maternity Portfolio
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light italic mb-8">
                                Celebrate the beauty of motherhood
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-6 text-neutral-600 leading-relaxed">
                        <p className="text-lg mb-6">
                            The best time for a maternity photoshoot is typically between 7 and 9 months (30-36 weeks)
                            when your baby bump is beautifully rounded. This is a time of incredible anticipation
                            and wonder, and we aim to capture the radiant glow and the profound connection
                            between you and your growing baby.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
                            <Link
                                to="/portfolio/maternity/packages"
                                className="px-10 py-5 bg-white border-2 border-[#7D8C62] text-[#7D8C62] rounded-full text-lg font-medium hover:bg-[#7D8C62] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Maternity Packages
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-3xl font-light text-center mb-12 text-neutral-900">Featured Moments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[maternityFeatured1, maternityFeatured2, maternityFeatured3, maternityFeatured4].map((img, idx) => (
                            <div
                                key={idx}
                                className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-sm"
                            >
                                <img
                                    src={img}
                                    alt={`Maternity featured ${idx + 1}`}
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

export default PortfolioMaternity;

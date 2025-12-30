import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioSitter from "@/assets/portfolio-sitter.jpg";

const PortfolioKids = () => {
    const kidsPhotos = [
        portfolioSitter,
        portfolioSitter,
        portfolioSitter,
        portfolioSitter,
        portfolioSitter,
        portfolioSitter,
        portfolioSitter,
        portfolioSitter,
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#D4A574' }}>
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-heading text-center mb-4 text-brown-dark">
                        Kids Portfolio
                    </h1>
                    <p className="text-center text-brown-dark/80 mb-12">
                        8-15 months old Baby
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kidsPhotos.map((photo, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] group cursor-pointer"
                            >
                                <img
                                    src={photo}
                                    alt={`Kids photo ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PortfolioKids;

import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioToddler from "@/assets/portfolio-toddler.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioBirthday from "@/assets/portfolio-birthday.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";

const brandImages = [
  portfolioToddler,
  portfolioBaby,
  portfolioBirthday,
  portfolioFamily,
  portfolioToddler,
  portfolioBaby,
  portfolioBirthday,
  portfolioFamily,
  portfolioToddler,
  portfolioBaby,
  portfolioBirthday,
  portfolioFamily,
];

const Commercial = () => {
    return (
        <div className="min-h-screen bg-card">
            <Navbar />
            <main>
                <PageHeader
                    title="Commercial Photography"
                    subtitle="Transforming brand values into powerful visual stories"
                    variant="minimal"
                />
                <div className="container mx-auto px-4 py-16">
                    {/* Intro */}
                    <section className="max-w-4xl mx-auto text-center mb-12">
                        <p className="text-muted-foreground leading-relaxed">
                            "At SAi, we specialize in transforming your brand's values into powerful visual stories. Our unique selling point lies in our bold, narrative-driven photography that not only captures, but enhances the essence of products aimed at parents and children. With over five years of experience and collaborations with more than 500 families, we excel in creating comfortable and engaging environments for <span className="text-secondary">children</span>, ensuring that their natural charm and spontaneity shine through in every image. Our expertise allows us to deliver not just photos, but solutions that visually articulate the benefits of your products in the dynamic parent and child market."
                        </p>
                    </section>

                    {/* Brand Shoot Title */}
                    <section className="text-center mb-12">
                        <h2 className="text-2xl font-heading text-secondary mb-8">Brand Shoot</h2>

                        {/* Aretto Logo Placeholder */}
                        <div className="w-48 h-48 bg-[#2D2A6E] rounded-lg mx-auto flex flex-col items-center justify-center mb-4">
                            <div className="text-[#FFD700] text-4xl font-bold mb-2">⛰️</div>
                            <span className="text-card text-2xl font-bold">aretto</span>
                        </div>

                        <p className="text-secondary">
                            Multiple award winning Patent Product designed by Satyajeet Mittal
                        </p>
                    </section>

                    {/* Brand Gallery */}
                    <section>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {brandImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-lg shadow-md animate-fade-in"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <img
                                        src={image}
                                        alt={`Brand shoot ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
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

export default Commercial;

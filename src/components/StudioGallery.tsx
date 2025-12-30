import React from "react";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";

const studioImages = [
    portfolioMaternity,
    portfolioNewborn,
    portfolioBaby,
    portfolioFamily,
];

const StudioGallery = () => {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24">
            <h2 className="text-3xl md:text-4xl font-heading text-secondary text-center mb-12">
                Our Studio Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {studioImages.map((image, index) => (
                    <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                        <img
                            src={image}
                            alt={`Studio Gallery ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StudioGallery;

import React from "react";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";
import portfolioSitter from "@/assets/portfolio-sitter.jpg";
import portfolioBirthday from "@/assets/portfolio-birthday.jpg";
import shopInterior1 from "@/assets/shop-interior-1.jpg";
import shopInterior2 from "@/assets/shop-interior-2.jpg";
import shopInterior3 from "@/assets/shop-interior-3.jpg";

const studioImages = [
    portfolioMaternity,
    portfolioNewborn,
    portfolioBaby,
    shopInterior1,
    portfolioSitter,
    portfolioBirthday,
    shopInterior2,
    shopInterior3,
];

const StudioGallery = () => {
    return (
        <section className="container mx-auto px-4 pt-4 pb-12 md:pt-6 md:pb-24">
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

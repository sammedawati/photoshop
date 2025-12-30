import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero_newborn.png";
import heroImage2 from "@/assets/hero_maternity.png";
import heroImage3 from "@/assets/hero_family.png";
import heroImage4 from "@/assets/hero_toddler.png";
import heroImage5 from "@/assets/hero_sitter.png";

const slides = [
  {
    image: heroImage1,
    title: "Timeless Newborn Moments",
    description: "Capturing the purity and innocence of your little one's first days."
  },
  {
    image: heroImage2,
    title: "Elegant Maternity Portraits",
    description: "Celebrating the beautiful journey of motherhood with grace."
  },
  {
    image: heroImage3,
    title: "Joyful Family Memories",
    description: "Preserving the love and laughter of your family bond."
  },
  {
    image: heroImage4,
    title: "Playful Toddler Adventures",
    description: "Capturing the wonder and energy of your child's growing curiosity."
  },
  {
    image: heroImage5,
    title: "Sweet Sitter Milestones",
    description: "Documenting the precious stage when they start exploring the world."
  },
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden h-[80vh] md:h-screen w-full bg-neutral-900">
      <div className="embla h-full w-full" ref={emblaRef}>
        <div className="embla__container h-full w-full flex">
          {slides.map((slide, index) => (
            <div className="embla__slide relative flex-[0_0_100%] h-full w-full" key={index}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
                <div className="max-w-3xl animate-in fade-in zoom-in duration-1000">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? "bg-white w-6" : "bg-white/40"
              }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

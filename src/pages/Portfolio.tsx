import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioSitter from "@/assets/portfolio-sitter.jpg";
import portfolioBirthday from "@/assets/portfolio-birthday.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";
import portfolioToddler from "@/assets/portfolio-toddler.jpg";

import christmasImage from "@/assets/christmas-featured-1.jpg";
import gudipadwaImage from "@/assets/gudipadwa-featured-1.jpg";
import outdoorImage from "@/assets/outdoor-featured-1.jpg";
import shivjayantiImage from "@/assets/shivjayanti-featured-1.jpg";
import traditionalImage from "@/assets/traditional-featured-1.jpg";
import varkariImage from "@/assets/varkari-featured-1.jpg";

const portfolioCategories = [
  { title: "MATERNITY", image: portfolioMaternity, link: "/portfolio/maternity" },
  { title: "NEWBORN", image: portfolioNewborn, link: "/portfolio/newborn" },
  { title: "CHRISTMAS", image: christmasImage, link: "/portfolio/christmas" },
  { title: "GUDIPADWA", image: gudipadwaImage, link: "/portfolio/gudipadwa" },
  { title: "OUTDOOR", image: outdoorImage, link: "/portfolio/outdoor" },
  { title: "SHIVJAYANTI", image: shivjayantiImage, link: "/portfolio/shivjayanti" },
  { title: "TRADITIONAL", image: traditionalImage, link: "/portfolio/traditional" },
  { title: "VARKARI", image: varkariImage, link: "/portfolio/varkari" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main>
        <PageHeader
          title="Our Portfolio"
          subtitle="Capturing Moments, Creating Memories"
          variant="minimal"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {portfolioCategories.map((category, index) => (
              <Link
                key={category.title}
                to={category.link}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[3/4]">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm md:text-base font-heading text-foreground group-hover:text-secondary transition-colors">
                  {category.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

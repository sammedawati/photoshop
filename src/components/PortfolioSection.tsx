import { Link } from "react-router-dom";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioSitter from "@/assets/portfolio-sitter.jpg";
import portfolioBirthday from "@/assets/portfolio-birthday.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";
import christmasImage from "@/assets/christmas-featured-1.jpg";
import gudipadwaImage from "@/assets/gudipadwa-featured-1.jpg";
import outdoorImage from "@/assets/outdoor-featured-1.jpg";
import shivjayantiImage from "@/assets/shivjayanti-featured-1.jpg";
import traditionalImage from "@/assets/traditional-featured-1.jpg";
import varkariImage from "@/assets/varkari-featured-1.jpg";

const portfolioItems = [
  {
    title: "Christmas Portfolio",
    subtitle: "Festive Holiday Moments",
    image: christmasImage,
    link: "/portfolio/christmas",
  },
  {
    title: "Gudipadwa Portfolio",
    subtitle: "Traditional New Year Celebration",
    image: gudipadwaImage,
    link: "/portfolio/gudipadwa",
  },
  {
    title: "Maternity Portfolio",
    subtitle: "To avail at 5 months of Pregnancy",
    image: portfolioMaternity,
    link: "/portfolio/maternity",
  },
  {
    title: "Newborn Portfolio",
    subtitle: "5 days to 1 month old Baby",
    image: portfolioNewborn,
    link: "/portfolio/newborn",
  },
  {
    title: "Outdoor Portfolio",
    subtitle: "Natural Light & Scenic Backdrops",
    image: outdoorImage,
    link: "/portfolio/outdoor",
  },
  {
    title: "Shivjayanti Portfolio",
    subtitle: "Cultural Heritage Celebration",
    image: shivjayantiImage,
    link: "/portfolio/shivjayanti",
  },
  {
    title: "Traditional Portfolio",
    subtitle: "Classic Indian Attire",
    image: traditionalImage,
    link: "/portfolio/traditional",
  },
  {
    title: "Varkari Portfolio",
    subtitle: "Spiritual Journey",
    image: varkariImage,
    link: "/portfolio/varkari",
  },
];

const PortfolioSection = () => {
  return (
    <section className="pt-6 pb-10 bg-gradient-to-b from-[#EBEFE6] to-[#FBF6F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading text-[#5B6342] text-center mb-4">
          CLICK on the image to view portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.link}
              className="group text-center animate-scale-in flex flex-col items-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Circular Image */}
              <div className="portfolio-card w-32 h-32 xs:w-40 xs:h-40 md:w-56 md:h-56 mb-3 border-4 border-white group-hover:border-[#C8A26A] transition-all duration-300 shadow-md group-hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-heading text-[#5B6342] transition-colors line-clamp-1 group-hover:text-[#C8A26A]">
                {item.title}
              </h3>
              <p className="text-[10px] md:text-xs text-[#5B6342]/70 line-clamp-1">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

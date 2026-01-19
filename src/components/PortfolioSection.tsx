import { Link } from "react-router-dom";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioSitter from "@/assets/portfolio-sitter.jpg";
import portfolioBirthday from "@/assets/portfolio-birthday.jpg";
import portfolioToddler from "@/assets/portfolio-toddler.jpg";
import portfolioLifestyle from "@/assets/portfolio-lifestyle.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";

const portfolioItems = [
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
    title: "Baby - Infant Portfolio",
    subtitle: "2-7 months old Baby",
    image: portfolioBaby,
    link: "/portfolio/baby",
  },
  {
    title: "Sitter Portfolio",
    subtitle: "6-10 months old Baby",
    image: portfolioSitter,
    link: "/portfolio/sitter",
  },
  {
    title: "Pre Birthday Portfolio",
    subtitle: "10-14 months old Baby",
    image: portfolioBirthday,
    link: "/portfolio/birthday",
  },
  {
    title: "Toddler-Children Portfolio",
    subtitle: "18 months & Above",
    image: portfolioToddler,
    link: "/portfolio/toddler",
  },
  {
    title: "Lifestyle Portfolio",
    subtitle: "For All",
    image: portfolioLifestyle,
    link: "/portfolio/lifestyle",
  },
  {
    title: "Family Portfolio",
    subtitle: "For All",
    image: portfolioFamily,
    link: "/portfolio/family",
  },
];

const PortfolioSection = () => {
  return (
    <section className="pt-10 pb-16 bg-gradient-to-b from-[#EBEFE6] to-[#FBF6F2]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading text-[#5B6342] text-center mb-6">
          CLICK on the image to view portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
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

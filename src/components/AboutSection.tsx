import photographerMale from "@/assets/photographer-male.jpg";
import photographerFemale from "@/assets/photographer-female.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {

  const photographers = [
    {
      id: "sachin",
      name: "Sachin Subhash Bhor",
      title: "Fine Artist, Family Portrait Photographer & Mentor",
      image: photographerMale,
    },
    {
      id: "priyadarshani",
      name: "Priyadarshani Sachin Bhor",
      title: "Fine Artist, Maternity, Newborn, Baby Photographer & Mentor",
      image: photographerFemale,
    },
  ];

  return (
    <section className="bg-[var(--background)] m-0 pb-10 pt-2" style={{ minHeight: 'auto' }}>
      <div className="container mx-auto px-4">
        {/* Hero Text Content - Moved from Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading text-foreground font-bold leading-tight mb-6">
            Frames of Love – A Journey Through Our Lens!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
            The world is a place with endless possibilities for creativity and exploration. Let the call to create something new be a continuous source of inspiration.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 italic">
            – Ray Martin
          </p>
        </div>

        {/* About Us Section */}
        <h2 className="text-2xl md:text-3xl font-heading text-secondary text-center mb-4 uppercase tracking-wider">ABOUT US</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Hello, We are Priyadarshani & Sachin. An award-winning photographer duo based in Pune.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32">
          {photographers.map((photographer, index) => (
            <div
              key={photographer.name}
              className="flex flex-col items-center max-w-[320px] w-full group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Circular Image Container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-muted/30 group-hover:border-secondary transition-all duration-500 mb-4 shadow-xl">
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info Container */}
              <div className="text-center">
                <p className="text-[11px] text-neutral-500 uppercase tracking-[0.2em] mb-3 font-medium">
                  {photographer.title}
                </p>
                <h3 className="text-2xl md:text-3xl font-heading text-neutral-800 mb-4">
                  {photographer.name}
                </h3>
                <Link
                  to={`/about/profile/${photographer.id}`}
                  className="inline-block px-10 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  Know more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

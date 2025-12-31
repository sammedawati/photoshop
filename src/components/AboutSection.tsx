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
    <section className="bg-background m-0" style={{ padding: '80px 0', minHeight: 'auto' }}>
      <div className="container mx-auto px-4">
        {/* Hero Text Content - Moved from Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground font-bold leading-tight" style={{ marginBottom: '24px' }}>
            Frames of Love – A Journey Through Our Lens!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" style={{ marginBottom: '16px' }}>
            The world is a place with endless possibilities for creativity and exploration. Let the call to create something new be a continuous source of inspiration.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 italic">
            – Ray Martin
          </p>
        </div>

        {/* About Us Section */}
        <h2 className="section-title">ABOUT US</h2>
        <p className="section-subtitle mb-12">
          Hello, We are Priyadarshani & Sachin. An award-winning photographer duo based in Pune.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {photographers.map((photographer, index) => (
            <div
              key={photographer.name}
              className="bg-white rounded-[1.5rem] shadow-xl overflow-hidden max-w-[360px] w-full group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={photographer.image}
                  alt={photographer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info Container */}
              <div className="p-5 text-center">
                <p className="text-[10px] text-neutral-500 mb-2 px-2 leading-relaxed">
                  {photographer.title}
                </p>
                <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-tight px-2">
                  {photographer.name}
                </h3>
                <Link
                  to={`/about/profile/${photographer.id}`}
                  className="inline-block px-5 py-1.5 bg-neutral-900 text-white rounded-full text-[10px] font-medium hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
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

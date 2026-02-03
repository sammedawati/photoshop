import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import photographerMale from "@/assets/photographer-male.jpg";
import photographerFemale from "@/assets/photographer-female.jpg";
import portfolioMaternity from "@/assets/portfolio-maternity.jpg";
import portfolioNewborn from "@/assets/portfolio-newborn.jpg";
import portfolioBaby from "@/assets/portfolio-baby.jpg";
import portfolioFamily from "@/assets/portfolio-family.jpg";

const studioImages = [
  portfolioMaternity,
  portfolioNewborn,
  portfolioBaby,
  portfolioFamily,
  portfolioMaternity,
  portfolioNewborn,
  portfolioBaby,
  portfolioFamily,
];

const About = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main>
        <PageHeader
          title="About Us"
          subtitle="Award-winning photographer duo based in Pune"
          variant="minimal"
        />

        <div className="container mx-auto px-4 py-10">
          {/* Intro Text */}
          <section className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hello, We are Shivani & Kiran.
            </p>
          </section>

          {/* Photographers */}
          <section className="flex flex-col md:flex-row items-start justify-center gap-16 md:gap-32 mb-20 px-4">
            {/* Sachin */}
            <div className="flex flex-col items-center max-w-[350px] w-full group">
              <Link to="/about/profile/sachin" className="relative mb-6">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ring-1 ring-neutral-200">
                  <img
                    src={photographerMale}
                    alt="Sachin Subhash Bhor"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
              <div className="text-center space-y-3">
                <p className="text-[10px] md:text-[11px] text-neutral-500 tracking-[0.2em] uppercase max-w-[280px] mx-auto leading-relaxed">
                  Fine Artist, Family Portrait<br />Photographer & Mentor
                </p>
                <Link to="/about/profile/sachin">
                  <h3 className="text-2xl md:text-4xl font-heading text-neutral-800 tracking-tight hover:text-secondary transition-colors">
                    Kiran Pawar
                  </h3>
                </Link>
              </div>
            </div>

            {/* Priyadarshani */}
            <div className="flex flex-col items-center max-w-[350px] w-full group">
              <Link to="/about/profile/priyadarshani" className="relative mb-6">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 ring-1 ring-neutral-200">
                  <img
                    src={photographerFemale}
                    alt="Priyadarshani Sachin Bhor"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
              <div className="text-center space-y-3">
                <p className="text-[10px] md:text-[11px] text-neutral-500 tracking-[0.2em] uppercase max-w-[280px] mx-auto leading-relaxed">
                  Fine Artist, Maternity, Newborn, Baby<br />Photographer & Mentor
                </p>
                <Link to="/about/profile/priyadarshani">
                  <h3 className="text-2xl md:text-4xl font-heading text-neutral-800 tracking-tight hover:text-secondary transition-colors">
                    Shivani Pawar
                  </h3>
                </Link>
              </div>
            </div>
          </section>

          {/* How We Started */}
          <section className="max-w-4xl mx-auto mb-12 px-4">
            <h2 className="text-3xl font-heading text-secondary text-center mb-10">
              How we started
            </h2>
            <div className="text-muted-foreground space-y-6 text-center text-balance leading-relaxed">
              <p>
                Kiran started Photography with his dad in 1996. As a photographer, he has experience of 23+ years especially in the field of wedding photography. Post his formal education in fine arts he started working as an Assistant Art Director in the film industry – Mumbai. After For almost 5 years of working as Art Director, he started a brand for wedding photography in 2011 under the brand name <span className="text-secondary font-medium">VIVAH PHOTOS</span> in Pune.
              </p>
              <p>
                Till the next 3 years, he was mainly focused on wedding photography business and then in 2014, our old clients started approaching us to do photoshoot for their babies. On their request and to expand our business we started in a very small place, mostly we were doing shoots at client place.
              </p>
              <p>
                In 2017, we took Next step towards professional studio. Since from starting Kiran was the one who were doing photography. In 2016 Shivani got fascinated with creative New-born & Maternity Photography. Then she started taking education on the creative, aesthetic, lights, props, and photographic aspects of new-born baby photo-shoot and during that period she completed various in-person & online workshops from leading mentors from all over the world. After studying more than 1.5 years, she started her journey as a Newborn & Maternity photographer in Nov 2018.
              </p>
              <p>
                Now Duo Photographer <span className="text-secondary font-medium">Shivani</span> & <span className="text-secondary font-medium">Kiran</span> are making their dream come true as one of the best photographer in Maternity, Newborn, Baby, Children & Family Photography all over India.
              </p>
            </div>
          </section>

          {/* Our Studio */}
          <section className="mb-10">
            <h2 className="text-3xl font-heading text-secondary text-center mb-10">
              Our Studio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioImages.map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg group">
                  <img
                    src={image}
                    alt={`Studio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
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

export default About;

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
    <div className="min-h-screen bg-card">
      <Navbar />
      <main>
        <PageHeader
          title="About Us"
          subtitle="Award-winning photographer duo based in Pune"
          variant="minimal"
        />

        <div className="container mx-auto px-4 py-16">
          {/* Intro Text */}
          <section className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hello, We are Priyadarshani & Sachin.
            </p>
          </section>

          {/* Photographers */}
          <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mb-24">
            {/* Sachin */}
            <div className="text-center max-w-sm group">
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={photographerMale}
                  alt="Sachin Subhash Bhor"
                  className="w-full h-[400px] md:w-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 px-4">
                Fine Artist, Maternity, Baby, Child Photographer & Mentor
              </p>
              <h3 className="text-xl md:text-2xl font-heading text-secondary mb-3">
                Sachin Subhash Bhor
              </h3>
              <Link
                to="/about/profile/sachin"
                className="inline-block text-sm font-medium text-muted-foreground hover:text-secondary transition-colors underline underline-offset-4"
              >
                Know more
              </Link>
            </div>

            {/* Priyadarshani */}
            <div className="text-center max-w-sm group">
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={photographerFemale}
                  alt="Priyadarshani Sachin Bhor"
                  className="w-full h-[400px] md:w-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 px-4">
                Fine Artist, Maternity, Newborn, Baby Photographer & Mom
              </p>
              <h3 className="text-xl md:text-2xl font-heading text-secondary mb-3">
                Priyadarshani Sachin Bhor
              </h3>
              <Link
                to="/about/profile/priyadarshani"
                className="inline-block text-sm font-medium text-muted-foreground hover:text-secondary transition-colors underline underline-offset-4"
              >
                Know more
              </Link>
            </div>
          </section>

          {/* How We Started */}
          <section className="max-w-4xl mx-auto mb-24 px-4">
            <h2 className="text-3xl font-heading text-secondary text-center mb-10">
              How we started
            </h2>
            <div className="text-muted-foreground space-y-6 text-center text-balance leading-relaxed">
              <p>
                Sachin started Photography with his dad in 1996. As a photographer, he has experience of 23+ years especially in the field of wedding photography. Post his formal education in fine arts he started working as an Assistant Art Director in the film industry – Mumbai. After For almost 5 years of working as Art Director, he started a brand for wedding photography in 2011 under the brand name <span className="text-secondary font-medium">VIVAH PHOTOS</span> in Pune.
              </p>
              <p>
                Till the next 3 years, he was mainly focused on wedding photography business and then in 2014, our old clients started approaching us to do photoshoot for their babies. On their request and to expand our business we started THE KiDS PHOTOS in a very small place, mostly we were doing shoots at client place.
              </p>
              <p>
                In 2017, we took Next step towards professional studio for THE KiDS PHOTOS. Since from starting Sachin was the one who were doing photography at THE KiDS PHOTOS. In 2016 Priyadarshani got fascinated with creative New-born & Maternity Photography. Then she started taking education on the creative, aesthetic, lights, props, and photographic aspects of new-born baby photo-shoot and during that period she completed various in-person & online workshops from leading mentors from all over the world. After studying more than 1.5 years, she started her journey as a Newborn & Maternity photographer at THE KiDS PHOTOS in Nov 2018.
              </p>
              <p>
                Now Duo Photographer <span className="text-secondary font-medium">Priyadarshani</span> & <span className="text-secondary font-medium">Sachin</span> are making their dream come true as one of the best photographer in Maternity, Newborn, Baby, Children & Family Photography all over India.
              </p>
            </div>
          </section>

          {/* Our Studio */}
          <section className="mb-16">
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

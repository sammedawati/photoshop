import PageHeader from "@/components/PageHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import shopExterior from "@/assets/shop-exterior-1.jpg";
import StudioGallery from "@/components/StudioGallery";
import StudioMap from "@/components/StudioMap";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <main>
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with us effectively"
          backgroundImage={shopExterior}
        />
        <div>
          <ContactSection />
          <StudioGallery />
          <StudioMap />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

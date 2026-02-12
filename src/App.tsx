import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import PortfolioMaternity from "./pages/PortfolioMaternity";
import PortfolioNewborn from "./pages/PortfolioNewborn";
import PortfolioBaby from "./pages/PortfolioBaby";
import PortfolioKids from "./pages/PortfolioKids";
import PortfolioFamily from "./pages/PortfolioFamily";
import PortfolioEvents from "./pages/PortfolioEvents";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import PhotographerProfile from "./pages/PhotographerProfile";
import Commercial from "./pages/Commercial";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioSitter from "./pages/PortfolioSitter";
import PortfolioBirthday from "./pages/PortfolioBirthday";
import PreparationGuide from "./pages/PreparationGuide";

// Maternity Sub-pages
import MaternityPackages from "./pages/MaternityPackages";

// Newborn Sub-pages
import NewbornPackages from "./pages/NewbornPackages";
import NewbornProps from "./pages/NewbornProps";

// Baby Sub-pages
import BabyPackages from "./pages/BabyPackages";
import BabyProps from "./pages/BabyProps";

// Sitter Sub-pages
import SitterPackages from "./pages/SitterPackages";
import SitterThemes from "./pages/SitterThemes";

// Birthday Sub-pages
import BirthdayPackages from "./pages/BirthdayPackages";
import BirthdayThemes from "./pages/BirthdayThemes";


// Family Sub-pages

// Family Sub-pages
import FamilyPackages from "./pages/FamilyPackages";
import FamilyGallery from "./pages/FamilyGallery";

// New Categories
import PortfolioChristmas from "./pages/PortfolioChristmas";
import ChristmasPackages from "./pages/ChristmasPackages";

import PortfolioGudipadwa from "./pages/PortfolioGudipadwa";
import GudipadwaPackages from "./pages/GudipadwaPackages";

import PortfolioOutdoor from "./pages/PortfolioOutdoor";
import OutdoorPackages from "./pages/OutdoorPackages";

import PortfolioShivjayanti from "./pages/PortfolioShivjayanti";
import ShivjayantiPackages from "./pages/ShivjayantiPackages";

import PortfolioTraditional from "./pages/PortfolioTraditional";
import TraditionalPackages from "./pages/TraditionalPackages";

import PortfolioVarkari from "./pages/PortfolioVarkari";
import VarkariPackages from "./pages/VarkariPackages";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Maternity Routes */}
          <Route path="/portfolio/maternity" element={<PortfolioMaternity />} />
          <Route path="/portfolio/maternity/packages" element={<MaternityPackages />} />

          {/* Newborn Routes */}
          <Route path="/portfolio/newborn" element={<PortfolioNewborn />} />
          <Route path="/portfolio/newborn/packages" element={<NewbornPackages />} />
          <Route path="/portfolio/newborn/props" element={<NewbornProps />} />

          {/* Baby Routes */}
          <Route path="/portfolio/baby" element={<PortfolioBaby />} />
          <Route path="/portfolio/baby/packages" element={<BabyPackages />} />
          <Route path="/portfolio/baby/props" element={<BabyProps />} />

          {/* Sitter Routes */}
          <Route path="/portfolio/sitter" element={<PortfolioSitter />} />
          <Route path="/portfolio/sitter/packages" element={<SitterPackages />} />
          <Route path="/portfolio/sitter/themes" element={<SitterThemes />} />

          {/* Birthday Routes */}
          <Route path="/portfolio/birthday" element={<PortfolioBirthday />} />
          <Route path="/portfolio/birthday/packages" element={<BirthdayPackages />} />
          <Route path="/portfolio/birthday/themes" element={<BirthdayThemes />} />


          {/* Family Routes */}
          <Route path="/portfolio/family" element={<PortfolioFamily />} />
          <Route path="/portfolio/family/packages" element={<FamilyPackages />} />
          <Route path="/portfolio/family/gallery" element={<FamilyGallery />} />


          <Route path="/portfolio/kids" element={<PortfolioKids />} />

          <Route path="/portfolio/events" element={<PortfolioEvents />} />

          {/* New Category Routes */}
          <Route path="/portfolio/christmas" element={<PortfolioChristmas />} />
          <Route path="/portfolio/christmas/packages" element={<ChristmasPackages />} />

          <Route path="/portfolio/gudipadwa" element={<PortfolioGudipadwa />} />
          <Route path="/portfolio/gudipadwa/packages" element={<GudipadwaPackages />} />

          <Route path="/portfolio/outdoor" element={<PortfolioOutdoor />} />
          <Route path="/portfolio/outdoor/packages" element={<OutdoorPackages />} />

          <Route path="/portfolio/shivjayanti" element={<PortfolioShivjayanti />} />
          <Route path="/portfolio/shivjayanti/packages" element={<ShivjayantiPackages />} />

          <Route path="/portfolio/traditional" element={<PortfolioTraditional />} />
          <Route path="/portfolio/traditional/packages" element={<TraditionalPackages />} />

          <Route path="/portfolio/varkari" element={<PortfolioVarkari />} />
          <Route path="/portfolio/varkari/packages" element={<VarkariPackages />} />

          <Route path="/preparation-guide" element={<PreparationGuide />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about/profile/:id" element={<PhotographerProfile />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

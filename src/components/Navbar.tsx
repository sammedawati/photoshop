import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/portfolio", hasDropdown: true },
    { name: "ABOUT", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "BLOG", path: "/blog" },
    { name: "COMMERCIAL", path: "/commercial" },
  ];

  const portfolioItems = [
    { name: "Maternity", path: "/portfolio/maternity" },
    { name: "Newborn", path: "/portfolio/newborn" },
    { name: "Baby", path: "/portfolio/baby" },
    { name: "Sitter", path: "/portfolio/sitter" },
    { name: "Pre-Birthday", path: "/portfolio/birthday" },
    { name: "Toddler", path: "/portfolio/toddler" },
    { name: "Life-Style", path: "/portfolio/lifestyle" },
    { name: "Family", path: "/portfolio/family" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHome = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = isScrolled || !isHome;

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Top Left */}
          <Link to="/" className="flex items-center z-50">
            <Logo className="h-10 lg:h-12 w-auto transition-all duration-300 hover:scale-105" />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 flex items-center gap-1 group"
                >
                  <span className="relative">
                    {item.name}
                    {/* Elegant underline animation */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${isActive(item.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}></span>
                  </span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-lg shadow-xl border border-border/10 p-2 flex flex-col gap-1">
                      {portfolioItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="px-4 py-3 text-sm text-foreground hover:bg-secondary/10 hover:text-secondary rounded-md transition-all duration-200 font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Contact Button & Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button
                className="bg-white/90 hover:bg-white text-primary font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-primary shadow-2xl transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-white/10 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        className={`flex-grow py-4 text-lg font-medium text-white transition-all duration-200 ${isActive(item.path) ? "text-secondary" : "hover:text-secondary/80"
                          }`}
                        onClick={() => !item.hasDropdown && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          className="p-4 text-white"
                          onClick={() => {
                            // Logic for mobile dropdown if needed, currently just showing all
                          }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                    {item.hasDropdown && (
                      <div className="grid grid-cols-1 gap-1 pb-4 pl-4">
                        {portfolioItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-base text-white/70 hover:text-white transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
                  <Button className="w-full bg-white text-primary font-bold py-6 text-lg rounded-xl shadow-lg hover:bg-secondary hover:text-white transition-all duration-300">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Logo className="h-16 md:h-20 w-auto" />
          </div>

          <h3 className="text-xl font-heading mb-4">THE KIDS PHOTOS</h3>

          {/* Address */}
          <div className="flex items-center justify-center gap-2 mb-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Address: 101, Waman Ganesh Heights, MDA Pashan Rd, Pashan, Pune 411021</span>
          </div>

          <p className="text-sm mb-2">
            Working Hours: Monday - Saturday | 10am-7pm
          </p>
          <p className="text-sm mb-4">Meetings - By Appointments Only</p>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Call: +91 8484854290</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="#" className="hover:text-secondary transition-colors p-2">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors p-2">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors p-2">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors p-2">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-secondary">
              THE KIDS PHOTOS Copyright (C) 2021 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

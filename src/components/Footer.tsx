import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-3 flex justify-center">
            <Logo className="h-16 md:h-20 w-auto" />
          </div>


          {/* Address */}
          <div className="flex items-center justify-center gap-2 mb-1 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Address: Siddheshwar chowk, Tasgaon, Maharashtra 416312</span>
          </div>

          <p className="text-sm mb-1">
            Working Hours: Monday - Saturday | 10am-7pm
          </p>
          <p className="text-sm mb-2">Meetings - By Appointments Only</p>

          <div className="flex items-center justify-center gap-2 mb-3">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Call: +91 8766713494 / 8788529966</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-4">
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
      <div className="border-t border-primary-foreground/20 py-2">
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
              Copyright (C) 2021 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

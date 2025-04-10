
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-rentwheels-gray-dark text-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-rentwheels-blue p-2 rounded text-white font-bold">RMB</span>
              <span className="text-xl font-bold text-white">
                CAR RENTALS
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium car rental service that provides quality vehicles for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rentwheels-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rentwheels-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rentwheels-blue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Cars", "Services", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-rentwheels-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-rentwheels-blue mt-1" />
                <span className="text-gray-400">
                  Asokwa new Road Agenes York plaza
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-rentwheels-blue" />
                <span className="text-gray-400">+233 24 264 8325, +233 20 023 8921</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-rentwheels-blue" />
                <span className="text-gray-400">rmbcarrental86@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} RMB CAR RENTALS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

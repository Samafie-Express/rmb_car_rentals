
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="bg-rentwheels-blue p-2 rounded text-white font-bold">RMB</span>
          <span className={`text-xl font-bold ${
            isScrolled ? "text-rentwheels-gray-dark" : "text-white"
          } group-hover:text-rentwheels-blue transition-colors`}>
           CAR RENTALS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/"
            className={`font-medium transition-colors hover:text-rentwheels-blue ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/cars"
            className={`font-medium transition-colors hover:text-rentwheels-blue ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Cars
          </Link>
          <Link 
            to="/about"
            className={`font-medium transition-colors hover:text-rentwheels-blue ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact"
            className={`font-medium transition-colors hover:text-rentwheels-blue ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            Contact
          </Link>
          <Button className="bg-rentwheels-blue hover:bg-rentwheels-blue-dark text-white">
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-700" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-rentwheels-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/cars"
                className="text-gray-700 font-medium hover:text-rentwheels-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cars
              </Link>
              <Link
                to="/about"
                className="text-gray-700 font-medium hover:text-rentwheels-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 font-medium hover:text-rentwheels-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-rentwheels-blue hover:bg-rentwheels-blue-dark text-white self-start">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

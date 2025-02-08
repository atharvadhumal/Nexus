import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/nexusLogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e) => {
    scrollToTop();
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Nexus Logo" className="h-9 w-10 mr-2" />
              <span className="text-xl font-semibold">Nexus</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your Partner in Precision and Innovation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/service" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="tel:+918655126864" 
                  className="hover:text-white transition-colors"
                >
                  IND : +91 8655126864
                </a>
              </li>
              <li>
                <a 
                  href="tel:+966559545264" 
                  className="hover:text-white transition-colors"
                >
                  KSA : +966 559545264
                </a>
              </li>
              <li>
                <a 
                  href="tel:+8107091657255" 
                  className="hover:text-white transition-colors"
                >
                  JPN : +81 07091657255
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@nexus-eng.in"
                  className="hover:text-white transition-colors"
                >
                  Email: info@nexus-eng.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nexus Engineering. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                onClick={handleLinkClick}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
                onClick={handleLinkClick}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
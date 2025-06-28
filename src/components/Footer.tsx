import React from 'react';
import { Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-400 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-dark-400" />
              </div>
              <span className="text-2xl font-bold text-primary-500">The Ingenium Project</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Student-led engineering solutions tackling real-world challenges through 
              innovative design and sustainable technology.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <span>chadhavivaan007@gmail.com</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/sponsor"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Sponsor
                </Link>
              </li>
              <li>
                <Link 
                  to="/join"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Join
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white font-semibold mb-4">Focus Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Environmental Monitoring</li>
              <li>Sustainable Agriculture</li>
              <li>Clean Energy Systems</li>
              <li>Smart City Solutions</li>
              <li>IoT Applications</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} The Ingenium Project. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm mt-4 sm:mt-0">
            From Problem to Prototype
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
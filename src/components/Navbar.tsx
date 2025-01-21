import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const navItems = [
  { label: 'Services', path: '/services' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Resources', path: '/resources' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/"
              className="hover:opacity-90 transition-opacity"
              aria-label="Magnates Empire Home"
            >
              <Logo />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-[#0A2463] transition-colors relative py-2 ${
                  location.pathname === item.path ? 'text-[#0A2463] font-semibold' : ''
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0A2463] transform origin-left transition-transform" />
                )}
              </Link>
            ))}
            <Button 
              size="sm"
              onClick={handleGetStarted}
              aria-label="Get started with Magnates Empire"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#0A2463] transition-colors p-2"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-[#0A2463] bg-gray-50'
                  : 'text-gray-700 hover:text-[#0A2463] hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Button 
              className="w-full"
              onClick={handleGetStarted}
              aria-label="Get started with Magnates Empire"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
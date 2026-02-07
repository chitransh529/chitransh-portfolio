import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Folder, Award, Mail } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Active Section Observer
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero', icon: <Home size={24} /> },
    { name: 'About', href: '#about', id: 'about', icon: <User size={24} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <Code size={24} /> },
    { name: 'Projects', href: '#projects', id: 'projects', icon: <Folder size={24} /> },
    { name: 'Certifications', href: '#certifications', id: 'certifications', icon: <Award size={24} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={24} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-logo">
          CH<span className="highlight">.</span>
        </div>

        <div className="sidebar-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`sidebar-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setActiveSection(link.id)}
              title={link.name}
            >
              {link.icon}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeSide"
                  className="active-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="sidebar-tooltip text-white/50 relative z-20">{link.name}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Header (Hidden on Desktop) */}
      <div className="mobile-header">
        <a href="#" className="mobile-logo">
          CHITRANSH<span className="highlight">.</span>
        </a>
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween" }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.id);
                }}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

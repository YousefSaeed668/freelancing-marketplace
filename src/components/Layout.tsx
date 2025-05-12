import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      dir="rtl" 
      className={`min-h-screen ${
        theme === 'light' 
          ? 'bg-light-canvas text-deep-charcoal' 
          : 'bg-night-sky text-soft-ivory'
      }`}
    >
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
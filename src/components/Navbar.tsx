import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, PenTool } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`
      sticky top-0 z-50 w-full py-4 px-4 sm:px-6 lg:px-8 
      ${theme === 'light' 
        ? 'bg-light-canvas text-deep-charcoal shadow-sm' 
        : 'bg-night-sky text-soft-ivory border-b border-gray-800'}
      transition-colors duration-200
    `}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold font-cairo">
          <PenTool 
            className={`${theme === 'light' ? 'text-professional-blue' : 'text-muted-gold'}`} 
          />
          <span className="font-cairo">قلم</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 space-x-reverse">
          <NavItem label="الرئيسية" active />
          <NavItem label="استكشاف" />
          <NavItem label="كيف يعمل" />
          <NavItem label="المجتمع" />
          <NavItem label="من نحن" />
        </div>
        
        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors
              ${theme === 'light' 
                ? 'text-deep-charcoal hover:bg-gray-200' 
                : 'text-soft-ivory hover:bg-gray-800'}`}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className={`
            px-4 py-2 rounded-md text-light-canvas 
            ${theme === 'light' ? 'bg-professional-blue hover:bg-blue-700' : 'bg-deep-ocean-blue hover:bg-blue-900'}
            transition-colors duration-200
          `}>
            تسجيل الدخول
          </button>
          
          <button className={`
            px-4 py-2 rounded-md border 
            ${theme === 'light' 
              ? 'border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white' 
              : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
            transition-colors duration-200
          `}>
            إنشاء حساب
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full mr-2 transition-colors
              ${theme === 'light' 
                ? 'text-deep-charcoal hover:bg-gray-200' 
                : 'text-soft-ivory hover:bg-gray-800'}`}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-md transition-colors
              ${theme === 'light' 
                ? 'text-deep-charcoal hover:bg-gray-200' 
                : 'text-soft-ivory hover:bg-gray-800'}`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`
          md:hidden fixed inset-0 top-16 z-40 p-4
          ${theme === 'light' ? 'bg-light-canvas' : 'bg-night-sky'}
        `}>
          <div className="flex flex-col space-y-4 text-right">
            <MobileNavItem label="الرئيسية" active />
            <MobileNavItem label="استكشاف" />
            <MobileNavItem label="كيف يعمل" />
            <MobileNavItem label="المجتمع" />
            <MobileNavItem label="من نحن" />
            
            <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
              <button className={`
                w-full py-2 rounded-md text-light-canvas mb-3
                ${theme === 'light' ? 'bg-professional-blue' : 'bg-deep-ocean-blue'}
              `}>
                تسجيل الدخول
              </button>
              
              <button className={`
                w-full py-2 rounded-md border
                ${theme === 'light' 
                  ? 'border-warm-sand text-warm-sand' 
                  : 'border-muted-gold text-muted-gold'}
              `}>
                إنشاء حساب
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href="#" 
      className={`
        px-3 py-2 rounded-md font-medium transition-colors duration-200
        ${active 
          ? theme === 'light'
            ? 'text-professional-blue'
            : 'text-muted-gold'
          : theme === 'light'
            ? 'text-deep-charcoal hover:text-professional-blue' 
            : 'text-soft-ivory hover:text-muted-gold'
        }
      `}
    >
      {label}
    </a>
  );
};

const MobileNavItem: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href="#" 
      className={`
        block py-3 px-2 text-lg font-medium border-b
        ${active 
          ? theme === 'light'
            ? 'text-professional-blue border-professional-blue'
            : 'text-muted-gold border-muted-gold'
          : theme === 'light'
            ? 'text-deep-charcoal border-gray-200 hover:text-professional-blue' 
            : 'text-soft-ivory border-gray-800 hover:text-muted-gold'
        }
      `}
    >
      {label}
    </a>
  );
};

export default Navbar;
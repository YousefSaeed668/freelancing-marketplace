import React from 'react';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturedFreelancersSection from '../components/FeaturedFreelancersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 py-8">
      <HeroSection />
      <CategoriesSection />
      <HowItWorksSection />
      <FeaturedFreelancersSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
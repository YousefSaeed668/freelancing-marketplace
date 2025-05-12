import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CtaSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`
      py-16 rounded-2xl overflow-hidden relative
      ${theme === 'light' 
        ? 'bg-professional-blue text-white' 
        : 'bg-deep-ocean-blue text-white'}
    `}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-cairo mb-6">
            ابدأ رحلتك مع قلم اليوم
          </h2>
          
          <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">
            انضم إلى الآلاف من المستقلين وأصحاب المشاريع في أكبر منصة عربية للعمل الحر
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className={`
              px-8 py-4 rounded-md text-lg font-bold transition-colors
              ${theme === 'light' 
                ? 'bg-warm-sand hover:bg-amber-600 text-white' 
                : 'bg-muted-gold hover:bg-amber-600 text-night-sky'}
            `}>
              أنا أبحث عن مستقلين
            </button>
            
            <button className={`
              px-8 py-4 rounded-md text-lg font-bold border-2 transition-colors
              ${theme === 'light' 
                ? 'border-white hover:bg-white/10 text-white' 
                : 'border-white hover:bg-white/10 text-white'}
            `}>
              أنا مستقل أبحث عن عمل
            </button>
          </div>
          
          <p className="mt-8 text-sm text-blue-100 dark:text-blue-200">
            التسجيل مجاني وسهل ويستغرق دقائق معدودة
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
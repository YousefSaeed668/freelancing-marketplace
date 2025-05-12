import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const [searchType, setSearchType] = useState<'projects' | 'freelancers'>('projects');
  
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className={`absolute top-20 right-1/4 w-72 h-72 rounded-full ${
          theme === 'light' ? 'bg-professional-blue' : 'bg-deep-ocean-blue'
        }`}></div>
        <div className={`absolute bottom-20 left-1/4 w-64 h-64 rounded-full ${
          theme === 'light' ? 'bg-warm-sand' : 'bg-muted-gold'
        }`}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-cairo mb-6 leading-tight">
            {searchType === 'projects' 
              ? 'اعثر على أفضل المستقلين العرب لمشروعك' 
              : 'ابحث عن مشاريع تناسب مهاراتك وابدأ العمل'}
          </h1>
          
          <p className="text-xl mb-8 text-medium-grey dark:text-cool-grey">
            {searchType === 'projects'
              ? 'منصة قلم تربطك بخبراء ومحترفين في مختلف المجالات لتنفيذ أفكارك بجودة عالية'
              : 'آلاف المشاريع الجديدة يومياً في انتظارك، قدم عروضك وابدأ بتحقيق دخل من مهاراتك'}
          </p>
          
          {/* Search Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className={`
              inline-flex rounded-full p-1 text-sm font-medium
              ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}
            `}>
              <button
                onClick={() => setSearchType('projects')}
                className={`
                  py-2 px-6 rounded-full transition-colors
                  ${searchType === 'projects' 
                    ? theme === 'light'
                      ? 'bg-professional-blue text-white' 
                      : 'bg-deep-ocean-blue text-white'
                    : theme === 'light'
                      ? 'text-deep-charcoal hover:text-professional-blue'
                      : 'text-soft-ivory hover:text-muted-gold'
                  }
                `}
              >
                ابحث عن مستقلين
              </button>
              <button
                onClick={() => setSearchType('freelancers')}
                className={`
                  py-2 px-6 rounded-full transition-colors
                  ${searchType === 'freelancers' 
                    ? theme === 'light'
                      ? 'bg-professional-blue text-white' 
                      : 'bg-deep-ocean-blue text-white'
                    : theme === 'light'
                      ? 'text-deep-charcoal hover:text-professional-blue'
                      : 'text-soft-ivory hover:text-muted-gold'
                  }
                `}
              >
                ابحث عن مشاريع
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className={`
            flex rounded-full shadow-lg overflow-hidden max-w-2xl mx-auto
            ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}
          `}>
            <input
              type="text"
              placeholder={searchType === 'projects' 
                ? 'ما هو المشروع الذي تحتاج مساعدة به؟' 
                : 'ما هي المهارات أو المشاريع التي تبحث عنها؟'
              }
              className={`
                py-4 px-6 w-full outline-none text-right
                ${theme === 'light' 
                  ? 'bg-white text-deep-charcoal' 
                  : 'bg-gray-800 text-soft-ivory'
                }
              `}
            />
            <button className={`
              px-6 flex items-center justify-center
              ${theme === 'light' 
                ? 'bg-professional-blue hover:bg-blue-700 text-white' 
                : 'bg-deep-ocean-blue hover:bg-blue-900 text-white'
              }
              transition-colors duration-200
            `}>
              <Search size={20} />
              <span className="mr-2">ابحث</span>
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <p className={`
                text-3xl font-bold mb-1 font-cairo
                ${theme === 'light' ? 'text-professional-blue' : 'text-muted-gold'}
              `}>
                +15,000
              </p>
              <p className="text-medium-grey dark:text-cool-grey">مستقل محترف</p>
            </div>
            <div className="text-center">
              <p className={`
                text-3xl font-bold mb-1 font-cairo
                ${theme === 'light' ? 'text-professional-blue' : 'text-muted-gold'}
              `}>
                +8,500
              </p>
              <p className="text-medium-grey dark:text-cool-grey">مشروع منجز</p>
            </div>
            <div className="text-center">
              <p className={`
                text-3xl font-bold mb-1 font-cairo
                ${theme === 'light' ? 'text-professional-blue' : 'text-muted-gold'}
              `}>
                +5,200
              </p>
              <p className="text-medium-grey dark:text-cool-grey">عميل سعيد</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample data
const freelancers = [
  {
    id: 1,
    name: 'أحمد محمد',
    title: 'مصمم جرافيك',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    skills: ['تصميم شعارات', 'هوية بصرية', 'تصميم مطبوعات'],
  },
  {
    id: 2,
    name: 'سارة أحمد',
    title: 'مطورة ويب',
    rating: 4.8,
    reviews: 94,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    skills: ['React', 'Node.js', 'تصميم واجهات'],
  },
  {
    id: 3,
    name: 'محمد علي',
    title: 'مترجم محتوى',
    rating: 4.7,
    reviews: 72,
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    skills: ['ترجمة عربية-إنجليزية', 'تدقيق لغوي', 'كتابة محتوى'],
  },
  {
    id: 4,
    name: 'فاطمة خالد',
    title: 'مسوقة رقمية',
    rating: 4.9,
    reviews: 86,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    skills: ['إدارة السوشيال ميديا', 'إعلانات مدفوعة', 'تحليلات'],
  },
  {
    id: 5,
    name: 'عمر حسين',
    title: 'خبير SEO',
    rating: 4.8,
    reviews: 65,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    skills: ['تحسين محركات البحث', 'تحليل المنافسين', 'كتابة محتوى'],
  },
  {
    id: 6,
    name: 'ليلى يوسف',
    title: 'مصممة UI/UX',
    rating: 5.0,
    reviews: 104,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    skills: ['تصميم واجهات', 'تجربة المستخدم', 'واجهات موبايل'],
  },
];

const FeaturedFreelancersSection: React.FC = () => {
  const { theme } = useTheme();
  const [startIndex, setStartIndex] = useState(0);
  
  const showPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };
  
  const showNext = () => {
    setStartIndex((prev) => Math.min(freelancers.length - 3, prev + 1));
  };
  
  const visibleFreelancers = freelancers.slice(startIndex, startIndex + 3);
  
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-cairo mb-4">مستقلون مميزون</h2>
          <p className="text-medium-grey dark:text-cool-grey max-w-2xl mx-auto">
            تعرف على نخبة من أفضل المستقلين المتميزين في مختلف المجالات
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation arrows for desktop */}
          <div className="hidden md:block">
            <button 
              onClick={showPrevious}
              disabled={startIndex === 0}
              className={`
                absolute top-1/2 right-0 -translate-y-1/2 -translate-x-6 z-10
                w-10 h-10 rounded-full shadow-md flex items-center justify-center
                ${theme === 'light' 
                  ? 'bg-white text-deep-charcoal hover:bg-gray-100' 
                  : 'bg-gray-800 text-soft-ivory hover:bg-gray-700'}
                ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                transition-all duration-200
              `}
            >
              <ChevronRight size={20} />
            </button>
            
            <button 
              onClick={showNext}
              disabled={startIndex >= freelancers.length - 3}
              className={`
                absolute top-1/2 left-0 -translate-y-1/2 translate-x-6 z-10
                w-10 h-10 rounded-full shadow-md flex items-center justify-center
                ${theme === 'light' 
                  ? 'bg-white text-deep-charcoal hover:bg-gray-100' 
                  : 'bg-gray-800 text-soft-ivory hover:bg-gray-700'}
                ${startIndex >= freelancers.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}
                transition-all duration-200
              `}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          {/* Freelancer cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {visibleFreelancers.map((freelancer) => (
              <FreelancerCard key={freelancer.id} freelancer={freelancer} />
            ))}
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse md:hidden">
            <button 
              onClick={showPrevious}
              disabled={startIndex === 0}
              className={`
                p-2 rounded
                ${theme === 'light' 
                  ? 'bg-gray-200 text-deep-charcoal' 
                  : 'bg-gray-800 text-soft-ivory'}
                ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <ChevronRight size={20} />
            </button>
            
            <button 
              onClick={showNext}
              disabled={startIndex >= freelancers.length - 3}
              className={`
                p-2 rounded
                ${theme === 'light' 
                  ? 'bg-gray-200 text-deep-charcoal' 
                  : 'bg-gray-800 text-soft-ivory'}
                ${startIndex >= freelancers.length - 3 ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className={`
            px-6 py-3 rounded-md transition-colors
            ${theme === 'light' 
              ? 'bg-professional-blue hover:bg-blue-700 text-white' 
              : 'bg-deep-ocean-blue hover:bg-blue-900 text-white'}
          `}>
            عرض جميع المستقلين
          </button>
        </div>
      </div>
    </section>
  );
};

interface FreelancerCardProps {
  freelancer: {
    id: number;
    name: string;
    title: string;
    rating: number;
    reviews: number;
    image: string;
    skills: string[];
  };
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      rounded-lg overflow-hidden transition-transform hover:transform hover:translate-y-[-8px]
      ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
    `}>
      <div className="relative">
        <img 
          src={freelancer.image} 
          alt={freelancer.name}
          className="w-full h-44 object-cover object-center"
        />
        <div className={`
          absolute bottom-0 left-0 right-0 px-4 py-2
          bg-gradient-to-t ${theme === 'light' 
            ? 'from-black/70 to-transparent' 
            : 'from-black/80 to-transparent'}
        `}>
          <div className="flex items-center text-white">
            <Star size={16} fill="gold" stroke="none" />
            <span className="font-bold mx-1">{freelancer.rating}</span>
            <span className="text-sm opacity-90">({freelancer.reviews})</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-cairo font-bold text-xl mb-1">{freelancer.name}</h3>
        <p className="text-medium-grey dark:text-cool-grey mb-3">{freelancer.title}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {freelancer.skills.map((skill, index) => (
            <span 
              key={index}
              className={`
                text-xs px-2 py-1 rounded-full
                ${theme === 'light' 
                  ? 'bg-gray-100 text-deep-charcoal' 
                  : 'bg-gray-700 text-soft-ivory'}
              `}
            >
              {skill}
            </span>
          ))}
        </div>
        
        <button className={`
          w-full py-2 rounded-md border text-sm transition-colors
          ${theme === 'light' 
            ? 'border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white' 
            : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
        `}>
          عرض الملف الشخصي
        </button>
      </div>
    </div>
  );
};

export default FeaturedFreelancersSection;
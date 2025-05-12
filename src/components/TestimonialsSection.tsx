import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Sample data
const testimonials = [
  {
    id: 1,
    name: 'محمد إبراهيم',
    role: 'صاحب شركة ناشئة',
    content: 'منصة قلم ساعدتني في العثور على مصممين ومطورين محترفين لإطلاق موقع شركتي. كانت التجربة سلسة من البداية إلى النهاية، والنتائج تجاوزت توقعاتي.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 2,
    name: 'سارة العلي',
    role: 'كاتبة محتوى',
    content: 'بفضل قلم تمكنت من بناء قاعدة عملاء واسعة والعمل على مشاريع متنوعة ومثيرة للاهتمام. المنصة سهلة الاستخدام وتوفر حماية كاملة لحقوقي كمستقلة.',
    image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 3,
    name: 'أحمد خالد',
    role: 'مدير تسويق',
    content: 'كمدير تسويق، احتجت إلى فريق من المصممين والمطورين لحملاتنا التسويقية. قلم وفرت لي مجموعة متنوعة من المواهب وساعدتني في إدارة المشاريع بسهولة.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 4,
    name: 'نورا محمد',
    role: 'مصممة جرافيك',
    content: 'بدأت رحلتي في العمل الحر من خلال قلم، والآن لدي محفظة أعمال قوية وعملاء منتظمين. أقدر كثيراً النظام الآمن للمدفوعات والدعم المستمر من فريق المنصة.',
    image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };
  
  const showNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <section className={`
      py-16 relative overflow-hidden
      ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-900'}
    `}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Quote 
          className={`absolute top-10 right-10 w-32 h-32 ${
            theme === 'light' ? 'text-professional-blue' : 'text-deep-ocean-blue'
          }`} 
        />
        <Quote 
          className={`absolute bottom-10 left-10 w-32 h-32 ${
            theme === 'light' ? 'text-warm-sand' : 'text-muted-gold'
          }`} 
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-cairo mb-4">ماذا يقول مستخدمونا</h2>
          <p className="text-medium-grey dark:text-cool-grey max-w-2xl mx-auto">
            تجارب حقيقية من عملائنا ومستقلينا على منصة قلم
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className={`
              p-8 rounded-xl
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pr-6 text-center md:text-right">
                  <p className="text-lg mb-6 leading-relaxed">"{currentTestimonial.content}"</p>
                  
                  <h4 className="font-cairo font-bold text-xl">{currentTestimonial.name}</h4>
                  <p className="text-medium-grey dark:text-cool-grey">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={showPrevious}
              className={`
                absolute top-1/2 right-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10
                w-10 h-10 rounded-full shadow-md flex items-center justify-center
                ${theme === 'light' 
                  ? 'bg-white text-deep-charcoal hover:bg-gray-100' 
                  : 'bg-gray-800 text-soft-ivory hover:bg-gray-700'}
                transition-colors duration-200
              `}
            >
              <ChevronRight size={20} />
            </button>
            
            <button 
              onClick={showNext}
              className={`
                absolute top-1/2 left-0 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10
                w-10 h-10 rounded-full shadow-md flex items-center justify-center
                ${theme === 'light' 
                  ? 'bg-white text-deep-charcoal hover:bg-gray-100' 
                  : 'bg-gray-800 text-soft-ivory hover:bg-gray-700'}
                transition-colors duration-200
              `}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-colors duration-200
                  ${index === currentIndex 
                    ? theme === 'light'
                      ? 'bg-professional-blue' 
                      : 'bg-muted-gold'
                    : theme === 'light'
                      ? 'bg-gray-300' 
                      : 'bg-gray-600'}
                `}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
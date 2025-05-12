import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Facebook, Twitter, Instagram, Linkedin, PenTool } from 'lucide-react';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`
      mt-12 py-8 px-4 sm:px-6 lg:px-8
      ${theme === 'light' 
        ? 'bg-gray-100 text-deep-charcoal' 
        : 'bg-gray-900 text-soft-ivory'}
    `}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-xl font-bold font-cairo mb-4">
              <PenTool 
                className={`${theme === 'light' ? 'text-professional-blue' : 'text-muted-gold'}`} 
              />
              <span>قلم</span>
            </div>
            <p className="mb-4 text-medium-grey dark:text-cool-grey">
              منصة عربية تجمع أصحاب المشاريع مع أفضل المستقلين في العالم العربي، لتنفيذ أعمالهم بجودة عالية وتكلفة مناسبة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-cairo font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <FooterLink label="الرئيسية" />
              <FooterLink label="استكشاف المشاريع" />
              <FooterLink label="تصفح المستقلين" />
              <FooterLink label="كيف يعمل الموقع" />
              <FooterLink label="الأسئلة الشائعة" />
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-cairo font-bold text-lg mb-4">للمستقلين</h3>
            <ul className="space-y-2">
              <FooterLink label="إنشاء حساب مستقل" />
              <FooterLink label="البحث عن مشاريع" />
              <FooterLink label="كيفية تقديم عروض" />
              <FooterLink label="الدفع والعمولات" />
              <FooterLink label="نصائح للمستقلين" />
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-cairo font-bold text-lg mb-4">لأصحاب المشاريع</h3>
            <ul className="space-y-2">
              <FooterLink label="نشر مشروع جديد" />
              <FooterLink label="البحث عن مستقلين" />
              <FooterLink label="كيفية اختيار المستقل" />
              <FooterLink label="ضمان الجودة" />
              <FooterLink label="نصائح لأصحاب المشاريع" />
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-medium-grey dark:text-cool-grey">
            © {new Date().getFullYear()} قلم. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href="#" 
      className={`
        p-2 rounded-full inline-flex
        ${theme === 'light' 
          ? 'bg-gray-200 text-deep-charcoal hover:bg-professional-blue hover:text-white' 
          : 'bg-gray-800 text-soft-ivory hover:bg-muted-gold hover:text-night-sky'}
        transition-colors duration-200
      `}
    >
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ label: string }> = ({ label }) => {
  const { theme } = useTheme();
  
  return (
    <li>
      <a 
        href="#" 
        className={`
          hover:underline
          ${theme === 'light' 
            ? 'text-medium-grey hover:text-professional-blue' 
            : 'text-cool-grey hover:text-muted-gold'}
        `}
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
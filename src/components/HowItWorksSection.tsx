import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  ClipboardList, Search, UserCheck, CreditCard, Smile, 
  FilePlus2, Users, Briefcase 
} from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'client' | 'freelancer'>('client');
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-cairo mb-4">كيف تعمل منصة قلم</h2>
          <p className="text-medium-grey dark:text-cool-grey max-w-2xl mx-auto">
            خطوات بسيطة تفصلك عن بدء رحلتك في عالم العمل الحر
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`
            inline-flex rounded-full p-1 text-sm font-medium
            ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}
          `}>
            <button
              onClick={() => setActiveTab('client')}
              className={`
                py-2 px-6 rounded-full transition-colors
                ${activeTab === 'client' 
                  ? theme === 'light'
                    ? 'bg-professional-blue text-white' 
                    : 'bg-deep-ocean-blue text-white'
                  : theme === 'light'
                    ? 'text-deep-charcoal hover:text-professional-blue'
                    : 'text-soft-ivory hover:text-muted-gold'
                }
              `}
            >
              لأصحاب المشاريع
            </button>
            <button
              onClick={() => setActiveTab('freelancer')}
              className={`
                py-2 px-6 rounded-full transition-colors
                ${activeTab === 'freelancer' 
                  ? theme === 'light'
                    ? 'bg-professional-blue text-white' 
                    : 'bg-deep-ocean-blue text-white'
                  : theme === 'light'
                    ? 'text-deep-charcoal hover:text-professional-blue'
                    : 'text-soft-ivory hover:text-muted-gold'
                }
              `}
            >
              للمستقلين
            </button>
          </div>
        </div>
        
        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'client' ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard 
                number={1} 
                title="أنشئ مشروعك" 
                description="حدد تفاصيل مشروعك ومتطلباته وميزانيته"
                icon={<FilePlus2 size={28} />} 
              />
              <StepCard 
                number={2} 
                title="استلم العروض" 
                description="اختر من بين عروض المستقلين المناسبين لمشروعك"
                icon={<ClipboardList size={28} />} 
              />
              <StepCard 
                number={3} 
                title="اختر المستقل" 
                description="تواصل مع المستقلين واختر الأنسب لمشروعك"
                icon={<UserCheck size={28} />} 
              />
              <StepCard 
                number={4} 
                title="استلم وراجع" 
                description="راجع العمل واطلب التعديلات واستلم المشروع النهائي"
                icon={<Smile size={28} />} 
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard 
                number={1} 
                title="أنشئ حسابك" 
                description="أكمل ملفك الشخصي بمهاراتك وخبراتك وأعمالك السابقة"
                icon={<Users size={28} />} 
              />
              <StepCard 
                number={2} 
                title="ابحث عن مشاريع" 
                description="استعرض المشاريع المتاحة التي تناسب مهاراتك"
                icon={<Search size={28} />} 
              />
              <StepCard 
                number={3} 
                title="قدم عروضك" 
                description="أرسل عروض احترافية تظهر فهمك للمشروع وقيمتك المضافة"
                icon={<Briefcase size={28} />} 
              />
              <StepCard 
                number={4} 
                title="أكمل العمل واستلم" 
                description="سلم العمل على مراحل واستلم مستحقاتك بأمان"
                icon={<CreditCard size={28} />} 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      relative p-6 rounded-lg text-center transition-transform hover:transform hover:translate-y-[-8px]
      ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
    `}>
      <div className={`
        w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6
        ${theme === 'light' 
          ? 'bg-blue-50 text-professional-blue' 
          : 'bg-gray-700 text-muted-gold'}
      `}>
        {icon}
      </div>
      
      <div className={`
        absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
        ${theme === 'light' 
          ? 'bg-professional-blue text-white' 
          : 'bg-muted-gold text-night-sky'}
        font-bold text-sm
      `}>
        {number}
      </div>
      
      <h3 className="font-cairo font-bold text-xl mb-3">{title}</h3>
      <p className="text-medium-grey dark:text-cool-grey">{description}</p>
    </div>
  );
};

export default HowItWorksSection;
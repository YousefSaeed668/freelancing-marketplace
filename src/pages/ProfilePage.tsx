import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Star, MapPin, Calendar, MessageSquare, Briefcase, Languages, Award } from 'lucide-react';

type UserType = 'freelancer' | 'client';
type TabType = 'overview' | 'portfolio' | 'work-history' | 'skills' | 'posted-projects' | 'reviews';

const ProfilePage: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  
  // For demo purposes, hardcoded user type
  const userType: UserType = 'freelancer';
  
  const getTabs = (type: UserType) => {
    if (type === 'freelancer') {
      return [
        { id: 'overview', label: 'نظرة عامة' },
        { id: 'portfolio', label: 'معرض الأعمال' },
        { id: 'work-history', label: 'سجل العمل والتقييمات' },
        { id: 'skills', label: 'المهارات' },
      ];
    }
    return [
      { id: 'overview', label: 'نظرة عامة' },
      { id: 'posted-projects', label: 'المشاريع المنشورة' },
      { id: 'reviews', label: 'التقييمات' },
    ];
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        {/* Profile Header */}
        <div className={`
          rounded-lg p-6 mb-8
          ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
        `}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <div className="md:w-1/4 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="md:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h1 className="text-3xl font-bold font-cairo mb-2">أحمد محمد</h1>
                  <p className="text-xl text-medium-grey dark:text-cool-grey mb-2">
                    مصمم جرافيك محترف
                  </p>
                </div>
                
                <div className="flex gap-3 mt-4 md:mt-0">
                  <button className={`
                    px-6 py-2 rounded-md text-white
                    ${theme === 'light' 
                      ? 'bg-professional-blue hover:bg-blue-700' 
                      : 'bg-deep-ocean-blue hover:bg-blue-900'}
                  `}>
                    <MessageSquare className="inline-block ml-2" size={18} />
                    تواصل معي
                  </button>
                  
                  <button className={`
                    px-6 py-2 rounded-md border
                    ${theme === 'light' 
                      ? 'border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white' 
                      : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
                  `}>
                    <Briefcase className="inline-block ml-2" size={18} />
                    وظفني
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <MapPin size={18} className="ml-2 text-medium-grey dark:text-cool-grey" />
                  <span>القاهرة، مصر</span>
                </div>
                
                <div className="flex items-center">
                  <Calendar size={18} className="ml-2 text-medium-grey dark:text-cool-grey" />
                  <span>عضو منذ يناير 2024</span>
                </div>
                
                <div className="flex items-center">
                  <Star size={18} className="ml-2 text-yellow-400" />
                  <span className="font-bold">4.9</span>
                  <span className="text-medium-grey dark:text-cool-grey mr-1">(128 تقييم)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className={`
                  px-4 py-2 rounded-lg
                  ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
                `}>
                  <span className="text-medium-grey dark:text-cool-grey">السعر بالساعة</span>
                  <p className="font-bold text-lg">$35</p>
                </div>
                
                <div className={`
                  px-4 py-2 rounded-lg
                  ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
                `}>
                  <span className="text-medium-grey dark:text-cool-grey">المشاريع المكتملة</span>
                  <p className="font-bold text-lg">47</p>
                </div>
                
                <div className={`
                  px-4 py-2 rounded-lg
                  ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
                `}>
                  <span className="text-medium-grey dark:text-cool-grey">ساعات العمل</span>
                  <p className="font-bold text-lg">1,240</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex overflow-x-auto">
            {getTabs(userType).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`
                  px-6 py-3 font-medium whitespace-nowrap
                  ${activeTab === tab.id
                    ? theme === 'light'
                      ? 'border-b-2 border-professional-blue text-professional-blue'
                      : 'border-b-2 border-muted-gold text-muted-gold'
                    : 'text-medium-grey dark:text-cool-grey hover:text-professional-blue dark:hover:text-muted-gold'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className={`
          rounded-lg p-6
          ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
        `}>
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold font-cairo mb-4">نبذة عني</h2>
              <p className="text-medium-grey dark:text-cool-grey mb-8 leading-relaxed">
                مصمم جرافيك محترف مع خبرة 7 سنوات في تصميم الهويات البصرية والمواد التسويقية. 
                متخصص في تصميم الشعارات والعلامات التجارية، مع تركيز خاص على التصميم المستوحى 
                من الفن والثقافة العربية. حاصل على شهادة في التصميم الجرافيكي وعضو في جمعية 
                المصممين المحترفين.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold font-cairo mb-4 flex items-center">
                    <Award className="ml-2" />
                    المهارات الرئيسية
                  </h3>
                  <ul className="space-y-2">
                    <li>تصميم الهويات البصرية</li>
                    <li>تصميم الشعارات</li>
                    <li>التصميم المطبعي</li>
                    <li>تصميم وسائل التواصل الاجتماعي</li>
                    <li>تصميم المواقع الإلكترونية</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold font-cairo mb-4 flex items-center">
                    <Languages className="ml-2" />
                    اللغات
                  </h3>
                  <ul className="space-y-2">
                    <li>العربية (اللغة الأم)</li>
                    <li>الإنجليزية (متقدم)</li>
                    <li>الفرنسية (متوسط)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'portfolio' && (
            <div>
              <h2 className="text-2xl font-bold font-cairo mb-6">معرض الأعمال</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Portfolio items would go here */}
              </div>
            </div>
          )}
          
          {/* Additional tab content would go here */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
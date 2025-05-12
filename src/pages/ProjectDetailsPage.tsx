import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  MapPin, Calendar, DollarSign, Users, Eye, BookmarkPlus, 
  Flag, Star, Briefcase, CheckCircle, FileText, MessageSquare 
} from 'lucide-react';

const ProjectDetailsPage: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className={`
              rounded-lg p-6 mb-8
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h1 className="text-3xl font-bold font-cairo mb-4">
                    تصميم موقع إلكتروني لمتجر أزياء
                  </h1>
                  <span className={`
                    px-3 py-1 rounded-full text-sm
                    ${theme === 'light'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-green-900 text-green-100'}
                  `}>
                    مفتوح للعروض
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-6 text-medium-grey dark:text-cool-grey">
                  <div className="flex items-center">
                    <MapPin size={16} className="ml-1" />
                    <span>الرياض، السعودية</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="ml-1" />
                    <span>نُشر منذ 3 ساعات</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={16} className="ml-1" />
                    <span>2000-3000$</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="ml-1" />
                    <span>12 عرض</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={16} className="ml-1" />
                    <span>156 مشاهدة</span>
                  </div>
                </div>
              </div>
              
              {/* Project Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold font-cairo mb-4">وصف المشروع</h2>
                <p className="text-medium-grey dark:text-cool-grey leading-relaxed">
                  نحتاج إلى تصميم موقع احترافي لمتجر أزياء عصري. يجب أن يكون التصميم جذابًا وسهل 
                  الاستخدام مع التركيز على تجربة المستخدم. المطلوب تصميم الصفحات التالية:
                </p>
                <ul className="list-disc list-inside mt-4 text-medium-grey dark:text-cool-grey space-y-2">
                  <li>الصفحة الرئيسية مع عرض المنتجات المميزة</li>
                  <li>صفحة تصنيفات المنتجات</li>
                  <li>صفحة تفاصيل المنتج</li>
                  <li>صفحة السلة والدفع</li>
                  <li>صفحة الحساب الشخصي</li>
                </ul>
              </div>
              
              {/* Required Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-bold font-cairo mb-4">المهارات المطلوبة</h2>
                <div className="flex flex-wrap gap-2">
                  {['تصميم مواقع', 'UI/UX', 'Figma', 'Adobe XD'].map((skill) => (
                    <span 
                      key={skill}
                      className={`
                        px-3 py-1 rounded-full text-sm
                        ${theme === 'light' 
                          ? 'bg-gray-100 text-deep-charcoal' 
                          : 'bg-gray-700 text-soft-ivory'}
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Attachments */}
              <div>
                <h2 className="text-xl font-bold font-cairo mb-4">الملفات المرفقة</h2>
                <div className={`
                  p-4 rounded-lg border flex items-center justify-between
                  ${theme === 'light' 
                    ? 'border-gray-200' 
                    : 'border-gray-700'}
                `}>
                  <div className="flex items-center">
                    <FileText size={20} className="ml-3" />
                    <div>
                      <p className="font-medium">دليل التصميم.pdf</p>
                      <p className="text-sm text-medium-grey dark:text-cool-grey">2.4 MB</p>
                    </div>
                  </div>
                  <button className={`
                    px-4 py-2 rounded-md text-sm
                    ${theme === 'light'
                      ? 'bg-gray-100 hover:bg-gray-200 text-deep-charcoal'
                      : 'bg-gray-700 hover:bg-gray-600 text-soft-ivory'}
                  `}>
                    تحميل
                  </button>
                </div>
              </div>
            </div>
            
            {/* Proposals Section */}
            <div className={`
              rounded-lg p-6
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <h2 className="text-xl font-bold font-cairo mb-6">العروض المقدمة</h2>
              
              {/* Sample Proposal */}
              <div className={`
                p-4 rounded-lg border mb-4
                ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                      alt="Freelancer"
                      className="w-12 h-12 rounded-full ml-3"
                    />
                    <div>
                      <h3 className="font-bold">محمد أحمد</h3>
                      <p className="text-sm text-medium-grey dark:text-cool-grey">مصمم UI/UX</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">2,500$</p>
                    <p className="text-sm text-medium-grey dark:text-cool-grey">14 يوم</p>
                  </div>
                </div>
                
                <p className="text-medium-grey dark:text-cool-grey mb-4 line-clamp-3">
                  لدي خبرة كبيرة في تصميم مواقع المتاجر الإلكترونية وسأقدم تصميمًا عصريًا 
                  يناسب متطلباتكم...
                </p>
                
                <button className={`
                  w-full py-2 rounded-md text-center text-sm
                  ${theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200 text-deep-charcoal'
                    : 'bg-gray-700 hover:bg-gray-600 text-soft-ivory'}
                `}>
                  عرض التفاصيل
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Action Buttons */}
            <div className={`
              rounded-lg p-6 mb-8
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <button className={`
                w-full py-3 rounded-md text-white mb-4
                ${theme === 'light'
                  ? 'bg-professional-blue hover:bg-blue-700'
                  : 'bg-deep-ocean-blue hover:bg-blue-900'}
              `}>
                <MessageSquare className="inline-block ml-2" size={18} />
                تقديم عرض
              </button>
              
              <div className="flex gap-4">
                <button className={`
                  flex-1 py-3 rounded-md
                  ${theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-700 hover:bg-gray-600'}
                `}>
                  <BookmarkPlus className="inline-block ml-2" size={18} />
                  حفظ
                </button>
                
                <button className={`
                  flex-1 py-3 rounded-md
                  ${theme === 'light'
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-700 hover:bg-gray-600'}
                `}>
                  <Flag className="inline-block ml-2" size={18} />
                  إبلاغ
                </button>
              </div>
            </div>
            
            {/* Client Info */}
            <div className={`
              rounded-lg p-6
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <h2 className="text-xl font-bold font-cairo mb-6">عن العميل</h2>
              
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg"
                  alt="Client"
                  className="w-16 h-16 rounded-full ml-4"
                />
                <div>
                  <h3 className="font-bold text-lg">شركة الأناقة للأزياء</h3>
                  <div className="flex items-center text-medium-grey dark:text-cool-grey">
                    <MapPin size={16} className="ml-1" />
                    <span>الرياض، السعودية</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle size={18} className="ml-2 text-green-500" />
                  <span>حساب موثق</span>
                </div>
                <div className="flex items-center">
                  <Star size={18} className="ml-2 text-yellow-400" />
                  <span className="font-bold ml-1">4.8</span>
                  <span className="text-medium-grey dark:text-cool-grey">(23 تقييم)</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={18} className="ml-2" />
                  <span>15 مشروع مكتمل</span>
                </div>
              </div>
              
              <button className={`
                w-full py-2 rounded-md border text-center
                ${theme === 'light'
                  ? 'border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white'
                  : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
              `}>
                عرض الملف الشخصي
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
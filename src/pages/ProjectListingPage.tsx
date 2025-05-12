import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Search, Filter, ChevronDown, BookmarkPlus, Clock, DollarSign,
  Users, ChevronLeft, ChevronRight 
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  budget: string;
  skills: string[];
  proposals: number;
  postedDate: string;
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'تصميم موقع إلكتروني لمتجر أزياء',
    description: 'نحتاج إلى تصميم موقع احترافي لمتجر أزياء عصري. يجب أن يكون التصميم جذابًا وسهل الاستخدام مع التركيز على تجربة المستخدم.',
    client: 'شركة الأناقة للأزياء',
    budget: '2000-3000',
    skills: ['تصميم مواقع', 'UI/UX', 'Figma', 'Adobe XD'],
    proposals: 12,
    postedDate: 'منذ 3 ساعات'
  },
  {
    id: 2,
    title: 'تطوير تطبيق موبايل للتوصيل',
    description: 'مطلوب مطور تطبيقات موبايل لتطوير تطبيق توصيل طلبات باستخدام React Native. يجب أن يكون لديه خبرة في التعامل مع خرائط جوجل والدفع الإلكتروني.',
    client: 'تك سوليوشنز',
    budget: '4000-6000',
    skills: ['React Native', 'Node.js', 'MongoDB', 'API Integration'],
    proposals: 8,
    postedDate: 'منذ 5 ساعات'
  },
  {
    id: 3,
    title: 'كتابة محتوى لموقع تعليمي',
    description: 'نبحث عن كاتب محتوى متميز لكتابة مقالات تعليمية في مجال التكنولوجيا والبرمجة. يجب أن يكون لديه خبرة في تبسيط المفاهيم التقنية.',
    client: 'أكاديمية التعلم الذكي',
    budget: '1000-1500',
    skills: ['كتابة محتوى', 'SEO', 'التعليم التقني'],
    proposals: 15,
    postedDate: 'منذ يوم واحد'
  }
];

const ProjectListingPage: React.FC = () => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="py-8">
      <div className="container mx-auto">
        {/* Search Header */}
        <div className={`
          rounded-lg p-6 mb-8
          ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
        `}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className={`
                flex rounded-md overflow-hidden
                ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
              `}>
                <input
                  type="text"
                  placeholder="ابحث عن مشاريع..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`
                    py-3 px-4 w-full outline-none text-right
                    ${theme === 'light' 
                      ? 'bg-gray-100 text-deep-charcoal' 
                      : 'bg-gray-700 text-soft-ivory'}
                  `}
                />
                <button className={`
                  px-6 flex items-center justify-center
                  ${theme === 'light' 
                    ? 'bg-professional-blue hover:bg-blue-700 text-white' 
                    : 'bg-deep-ocean-blue hover:bg-blue-900 text-white'}
                `}>
                  <Search size={20} />
                </button>
              </div>
            </div>
            
            <button className={`
              px-6 py-3 rounded-md flex items-center justify-center
              ${theme === 'light' 
                ? 'bg-gray-100 text-deep-charcoal hover:bg-gray-200' 
                : 'bg-gray-700 text-soft-ivory hover:bg-gray-600'}
            `}>
              <Filter size={18} className="ml-2" />
              تصفية النتائج
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className={`
              rounded-lg p-6 sticky top-24
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <h2 className="text-xl font-bold font-cairo mb-6">خيارات التصفية</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block font-medium mb-2">الفئة</label>
                <div className={`
                  relative rounded-md
                  ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
                `}>
                  <select className={`
                    w-full py-2 px-3 appearance-none rounded-md
                    ${theme === 'light' 
                      ? 'bg-gray-100 text-deep-charcoal' 
                      : 'bg-gray-700 text-soft-ivory'}
                  `}>
                    <option value="">جميع الفئات</option>
                    <option value="design">تصميم</option>
                    <option value="development">برمجة وتطوير</option>
                    <option value="writing">كتابة وترجمة</option>
                  </select>
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2" size={18} />
                </div>
              </div>
              
              {/* Budget Range */}
              <div className="mb-6">
                <label className="block font-medium mb-2">الميزانية</label>
                <div className="flex gap-4">
                  <input 
                    type="number" 
                    placeholder="من"
                    className={`
                      w-1/2 py-2 px-3 rounded-md
                      ${theme === 'light' 
                        ? 'bg-gray-100 text-deep-charcoal' 
                        : 'bg-gray-700 text-soft-ivory'}
                    `}
                  />
                  <input 
                    type="number" 
                    placeholder="إلى"
                    className={`
                      w-1/2 py-2 px-3 rounded-md
                      ${theme === 'light' 
                        ? 'bg-gray-100 text-deep-charcoal' 
                        : 'bg-gray-700 text-soft-ivory'}
                    `}
                  />
                </div>
              </div>
              
              {/* Experience Level */}
              <div className="mb-6">
                <label className="block font-medium mb-2">مستوى الخبرة</label>
                <div className="space-y-2">
                  {['مبتدئ', 'متوسط', 'خبير'].map((level) => (
                    <label key={level} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="ml-2"
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Project Type */}
              <div className="mb-6">
                <label className="block font-medium mb-2">نوع المشروع</label>
                <div className="space-y-2">
                  {['ثابت السعر', 'بالساعة'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="ml-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Project Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold font-cairo">نتائج البحث</h1>
              <p className="text-medium-grey dark:text-cool-grey">
                تم العثور على 127 مشروع
              </p>
            </div>
            
            {/* Projects List */}
            <div className="space-y-4">
              {sampleProjects.map((project) => (
                <div 
                  key={project.id}
                  className={`
                    rounded-lg p-6
                    ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold hover:text-professional-blue dark:hover:text-muted-gold">
                      <a href="#">{project.title}</a>
                    </h2>
                    <button className={`
                      p-2 rounded-full
                      ${theme === 'light' 
                        ? 'hover:bg-gray-100' 
                        : 'hover:bg-gray-700'}
                    `}>
                      <BookmarkPlus size={20} />
                    </button>
                  </div>
                  
                  <p className="text-medium-grey dark:text-cool-grey mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className={`
                          text-sm px-3 py-1 rounded-full
                          ${theme === 'light' 
                            ? 'bg-gray-100 text-deep-charcoal' 
                            : 'bg-gray-700 text-soft-ivory'}
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-medium-grey dark:text-cool-grey">
                    <div className="flex items-center">
                      <DollarSign size={16} className="ml-1" />
                      <span>{project.budget}$</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="ml-1" />
                      <span>{project.proposals} عرض</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="ml-1" />
                      <span>{project.postedDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <button className={`
                  p-2 rounded-md
                  ${theme === 'light' 
                    ? 'bg-gray-100 hover:bg-gray-200' 
                    : 'bg-gray-700 hover:bg-gray-600'}
                `}>
                  <ChevronRight size={20} />
                </button>
                
                {[1, 2, 3, '...', 10].map((page, index) => (
                  <button 
                    key={index}
                    className={`
                      w-10 h-10 rounded-md flex items-center justify-center
                      ${index === 0
                        ? theme === 'light'
                          ? 'bg-professional-blue text-white'
                          : 'bg-deep-ocean-blue text-white'
                        : theme === 'light'
                          ? 'bg-gray-100 hover:bg-gray-200'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}
                
                <button className={`
                  p-2 rounded-md
                  ${theme === 'light' 
                    ? 'bg-gray-100 hover:bg-gray-200' 
                    : 'bg-gray-700 hover:bg-gray-600'}
                `}>
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListingPage;
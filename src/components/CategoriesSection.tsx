import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  PenSquare, Code, Brush, Globe, LineChart, Camera, Video, BookOpen 
} from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: 'تصميم جرافيك', 
    icon: <Brush />, 
    count: 2150 
  },
  { 
    id: 2, 
    name: 'برمجة وتطوير', 
    icon: <Code />, 
    count: 1830 
  },
  { 
    id: 3, 
    name: 'كتابة وترجمة', 
    icon: <PenSquare />, 
    count: 1650 
  },
  { 
    id: 4, 
    name: 'تسويق رقمي', 
    icon: <LineChart />, 
    count: 1420 
  },
  { 
    id: 5, 
    name: 'تطوير مواقع ويب', 
    icon: <Globe />, 
    count: 1280 
  },
  { 
    id: 6, 
    name: 'تصوير فوتوغرافي', 
    icon: <Camera />, 
    count: 980 
  },
  { 
    id: 7, 
    name: 'مونتاج فيديو', 
    icon: <Video />, 
    count: 860 
  },
  { 
    id: 8, 
    name: 'تدقيق لغوي', 
    icon: <BookOpen />, 
    count: 750 
  },
];

const CategoriesSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-cairo mb-4">تصفح حسب الفئة</h2>
          <p className="text-medium-grey dark:text-cool-grey max-w-2xl mx-auto">
            اكتشف أفضل المستقلين والمشاريع في مختلف المجالات والتخصصات
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className={`
            px-6 py-3 rounded-md border transition-colors
            ${theme === 'light' 
              ? 'border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white' 
              : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
          `}>
            عرض جميع الفئات
          </button>
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    icon: React.ReactNode;
    count: number;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href="#" 
      className={`
        block rounded-lg p-6 transition-all duration-300 hover:scale-105
        ${theme === 'light' 
          ? 'bg-white shadow-sm hover:shadow-md' 
          : 'bg-gray-800 hover:bg-gray-750'}
      `}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`
          w-16 h-16 rounded-full flex items-center justify-center mb-4
          ${theme === 'light' 
            ? 'bg-blue-50 text-professional-blue' 
            : 'bg-gray-700 text-muted-gold'}
        `}>
          {category.icon}
        </div>
        
        <h3 className="font-cairo font-bold text-lg mb-2">{category.name}</h3>
        
        <p className="text-medium-grey dark:text-cool-grey text-sm">
          {category.count.toLocaleString('ar-EG')} مشروع متاح
        </p>
      </div>
    </a>
  );
};

export default CategoriesSection;
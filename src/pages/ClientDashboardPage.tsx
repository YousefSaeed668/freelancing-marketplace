import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  LayoutDashboard, Briefcase, MessageSquare, Wallet, Settings, Search,
  TrendingUp, Clock, CheckCircle, DollarSign, Bell, ChevronRight,
  FileText, User, ExternalLink, Download, Eye, Plus,
  Star
} from 'lucide-react';

type DashboardSection = 'overview' | 'projects' | 'messages' | 'billing' | 'settings';
type ProjectsTab = 'active' | 'posted' | 'completed';

const ClientDashboardPage: React.FC = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');
  const [activeProjectsTab, setActiveProjectsTab] = useState<ProjectsTab>('active');
  
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold font-cairo mb-2">
                  مرحباً، شركة الأناقة!
                </h1>
                <p className="text-medium-grey dark:text-cool-grey">
                  آخر تسجيل دخول: اليوم، 10:15 صباحاً
                </p>
              </div>
              <div className="flex gap-3">
                <button className={`
                  px-6 py-2 rounded-md text-white
                  ${theme === 'light' 
                    ? 'bg-professional-blue hover:bg-blue-700' 
                    : 'bg-deep-ocean-blue hover:bg-blue-900'}
                `}>
                  <Plus className="inline-block ml-2" size={18} />
                  نشر مشروع جديد
                </button>
                <button className={`
                  p-2 rounded-full relative
                  ${theme === 'light' 
                    ? 'hover:bg-gray-100' 
                    : 'hover:bg-gray-700'}
                `}>
                  <Bell size={24} />
                  <span className={`
                    absolute top-0 right-0 w-3 h-3 rounded-full
                    ${theme === 'light' 
                      ? 'bg-professional-blue' 
                      : 'bg-muted-gold'}
                  `}></span>
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="المشاريع النشطة"
                value="5"
                icon={<Briefcase size={24} />}
                trend="+2 هذا الشهر"
              />
              <StatCard 
                title="المشاريع المكتملة"
                value="12"
                icon={<CheckCircle size={24} />}
                trend="98% نسبة الرضا"
              />
              <StatCard 
                title="إجمالي الإنفاق"
                value="$15,750"
                icon={<DollarSign size={24} />}
                trend="+$3,200 هذا الشهر"
              />
              <StatCard 
                title="العروض المستلمة"
                value="28"
                icon={<FileText size={24} />}
                trend="8 عروض جديدة"
              />
            </div>

            {/* Recent Activity */}
            <div className={`
              rounded-lg p-6
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <h2 className="text-xl font-bold font-cairo mb-6">النشاط الأخير</h2>
              <div className="space-y-4">
                <ActivityItem 
                  icon={<FileText size={20} />}
                  title="عرض جديد على مشروع تصميم الموقع"
                  description="من أحمد محمد"
                  time="منذ 15 دقيقة"
                />
                <ActivityItem 
                  icon={<CheckCircle size={20} />}
                  title="اكتمل مشروع تصميم الهوية البصرية"
                  description="مع سارة أحمد"
                  time="منذ ساعتين"
                />
                <ActivityItem 
                  icon={<DollarSign size={20} />}
                  title="تم دفع مستحقات المشروع"
                  description="2,500$ - مشروع تطوير التطبيق"
                  time="منذ 3 ساعات"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`
                rounded-lg p-6
                ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
              `}>
                <h2 className="text-xl font-bold font-cairo mb-6">روابط سريعة</h2>
                <div className="space-y-3">
                  <QuickLink 
                    icon={<Plus size={20} />}
                    title="نشر مشروع جديد"
                    subtitle="اعثر على أفضل المستقلين لمشروعك"
                  />
                  <QuickLink 
                    icon={<Search size={20} />}
                    title="تصفح المستقلين"
                    subtitle="ابحث عن مواهب جديدة"
                  />
                  <QuickLink 
                    icon={<Download size={20} />}
                    title="تحميل الفواتير"
                    subtitle="سجل المدفوعات والفواتير"
                  />
                </div>
              </div>

              <div className={`
                rounded-lg p-6
                ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
              `}>
                <h2 className="text-xl font-bold font-cairo mb-6">المستقلون الموصى بهم</h2>
                <div className="space-y-4">
                  <FreelancerCard 
                    name="أحمد محمد"
                    title="مصمم UI/UX"
                    rating={4.9}
                    image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  />
                  <FreelancerCard 
                    name="سارة أحمد"
                    title="مطورة ويب"
                    rating={4.8}
                    image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold font-cairo">مشاريعي</h1>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveProjectsTab('active')}
                  className={`
                    px-4 py-2 rounded-md
                    ${activeProjectsTab === 'active'
                      ? theme === 'light'
                        ? 'bg-professional-blue text-white'
                        : 'bg-deep-ocean-blue text-white'
                      : theme === 'light'
                        ? 'text-deep-charcoal hover:bg-gray-100'
                        : 'text-soft-ivory hover:bg-gray-700'
                    }
                  `}
                >
                  النشطة
                </button>
                <button 
                  onClick={() => setActiveProjectsTab('posted')}
                  className={`
                    px-4 py-2 rounded-md
                    ${activeProjectsTab === 'posted'
                      ? theme === 'light'
                        ? 'bg-professional-blue text-white'
                        : 'bg-deep-ocean-blue text-white'
                      : theme === 'light'
                        ? 'text-deep-charcoal hover:bg-gray-100'
                        : 'text-soft-ivory hover:bg-gray-700'
                    }
                  `}
                >
                  المنشورة
                </button>
                <button 
                  onClick={() => setActiveProjectsTab('completed')}
                  className={`
                    px-4 py-2 rounded-md
                    ${activeProjectsTab === 'completed'
                      ? theme === 'light'
                        ? 'bg-professional-blue text-white'
                        : 'bg-deep-ocean-blue text-white'
                      : theme === 'light'
                        ? 'text-deep-charcoal hover:bg-gray-100'
                        : 'text-soft-ivory hover:bg-gray-700'
                    }
                  `}
                >
                  المكتملة
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <ProjectCard 
                title="تصميم موقع إلكتروني"
                freelancer="أحمد محمد"
                status="جاري العمل"
                progress={60}
                dueDate="15 مارس 2024"
                budget="$2,500"
                proposals={12}
              />
              <ProjectCard 
                title="تطوير تطبيق موبايل"
                freelancer="سارة أحمد"
                status="في انتظار المراجعة"
                progress={90}
                dueDate="20 مارس 2024"
                budget="$4,000"
                proposals={8}
              />
            </div>
          </div>
        );

      case 'billing':
        return (
          <div>
            <h1 className="text-3xl font-bold font-cairo mb-8">المدفوعات والفواتير</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Payment History */}
                <div className={`
                  rounded-lg p-6 mb-8
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-6">سجل المدفوعات</h2>
                  <div className="space-y-4">
                    <PaymentItem 
                      title="مشروع تصميم الموقع"
                      amount="2,500"
                      date="15 مارس 2024"
                      status="مكتمل"
                      freelancer="أحمد محمد"
                    />
                    <PaymentItem 
                      title="مشروع تطوير التطبيق"
                      amount="1,800"
                      date="10 مارس 2024"
                      status="معلق"
                      freelancer="سارة أحمد"
                    />
                  </div>
                </div>

                {/* Invoices */}
                <div className={`
                  rounded-lg p-6
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-6">الفواتير</h2>
                  <div className="space-y-4">
                    <InvoiceItem 
                      number="INV-2024-001"
                      amount="2,500"
                      date="15 مارس 2024"
                      project="تصميم الموقع"
                    />
                    <InvoiceItem 
                      number="INV-2024-002"
                      amount="1,800"
                      date="10 مارس 2024"
                      project="تطوير التطبيق"
                    />
                  </div>
                </div>
              </div>

              <div>
                {/* Payment Methods */}
                <div className={`
                  rounded-lg p-6 mb-8
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-6">طرق الدفع</h2>
                  <div className="space-y-4">
                    <PaymentMethodCard 
                      type="card"
                      name="فيزا"
                      number="****4582"
                    />
                    <PaymentMethodCard 
                      type="bank"
                      name="البنك الأهلي"
                      number="****7891"
                    />
                  </div>
                  <button className={`
                    w-full py-2 mt-4 rounded-md border
                    ${theme === 'light'
                      ? 'border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white'
                      : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
                  `}>
                    إضافة طريقة دفع
                  </button>
                </div>

                {/* Billing Summary */}
                <div className={`
                  rounded-lg p-6
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-4">ملخص الفواتير</h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>المشاريع النشطة</span>
                      <span>$4,300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>المشاريع المكتملة</span>
                      <span>$11,450</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>الإجمالي</span>
                      <span>$15,750</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <div className={`
              rounded-lg p-4 sticky top-24
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <nav className="space-y-2">
                <NavItem 
                  icon={<LayoutDashboard size={20} />}
                  label="لوحة التحكم"
                  active={activeSection === 'overview'}
                  onClick={() => setActiveSection('overview')}
                />
                <NavItem 
                  icon={<Briefcase size={20} />}
                  label="المشاريع"
                  active={activeSection === 'projects'}
                  onClick={() => setActiveSection('projects')}
                />
                <NavItem 
                  icon={<MessageSquare size={20} />}
                  label="الرسائل"
                  active={activeSection === 'messages'}
                  onClick={() => setActiveSection('messages')}
                />
                <NavItem 
                  icon={<Wallet size={20} />}
                  label="المدفوعات"
                  active={activeSection === 'billing'}
                  onClick={() => setActiveSection('billing')}
                />
                <NavItem 
                  icon={<Settings size={20} />}
                  label="الإعدادات"
                  active={activeSection === 'settings'}
                  onClick={() => setActiveSection('settings')}
                />
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 p-3 rounded-md transition-colors
        ${active
          ? theme === 'light'
            ? 'bg-professional-blue text-white'
            : 'bg-deep-ocean-blue text-white'
          : theme === 'light'
            ? 'text-deep-charcoal hover:bg-gray-100'
            : 'text-soft-ivory hover:bg-gray-700'
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      rounded-lg p-6
      ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
    `}>
      <div className="flex items-center justify-between mb-4">
        <div className={`
          p-3 rounded-full
          ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-700'}
        `}>
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <p className="text-sm text-medium-grey dark:text-cool-grey">{trend}</p>
    </div>
  );
};

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, title, description, time }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-start gap-4">
      <div className={`
        p-2 rounded-full
        ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-700'}
      `}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-medium-grey dark:text-cool-grey">{description}</p>
      </div>
      <span className="text-sm text-medium-grey dark:text-cool-grey">{time}</span>
    </div>
  );
};

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ icon, title, subtitle }) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href="#" 
      className={`
        flex items-center gap-4 p-3 rounded-md transition-colors
        ${theme === 'light' 
          ? 'hover:bg-gray-100' 
          : 'hover:bg-gray-700'}
      `}
    >
      <div className={`
        p-2 rounded-full
        ${theme === 'light' ? 'bg-blue-50' : 'bg-gray-700'}
      `}>
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-medium-grey dark:text-cool-grey">{subtitle}</p>
      </div>
      <ChevronRight className="mr-auto" size={20} />
    </a>
  );
};

interface FreelancerCardProps {
  name: string;
  title: string;
  rating: number;
  image: string;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ name, title, rating, image }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-4">
      <img 
        src={image} 
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-medium-grey dark:text-cool-grey">{title}</p>
      </div>
      <div className="flex items-center">
        <Star size={16} className="text-yellow-400 fill-current" />
        <span className="ml-1">{rating}</span>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  freelancer: string;
  status: string;
  progress: number;
  dueDate: string;
  budget: string;
  proposals: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, freelancer, status, progress, dueDate, budget, proposals 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      rounded-lg p-6
      ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
    `}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-medium-grey dark:text-cool-grey">{freelancer}</p>
        </div>
        <span className={`
          px-3 py-1 rounded-full text-sm
          ${theme === 'light' 
            ? 'bg-blue-50 text-professional-blue' 
            : 'bg-gray-700 text-muted-gold'}
        `}>
          {status}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>التقدم</span>
          <span>{progress}%</span>
        </div>
        <div className={`
          h-2 rounded-full overflow-hidden
          ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'}
        `}>
          <div 
            className={`
              h-full rounded-full
              ${theme === 'light' 
                ? 'bg-professional-blue' 
                : 'bg-deep-ocean-blue'}
            `}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between text-sm text-medium-grey dark:text-cool-grey">
        <div className="flex items-center">
          <Clock size={16} className="ml-1" />
          {dueDate}
        </div>
        <div className="flex items-center">
          <DollarSign size={16} className="ml-1" />
          {budget}
        </div>
        <div className="flex items-center">
          <Eye size={16} className="ml-1" />
          {proposals} عرض
        </div>
      </div>
    </div>
  );
};

interface PaymentItemProps {
  title: string;
  amount: string;
  date: string;
  status: string;
  freelancer: string;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ 
  title, amount, date, status, freelancer 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-0">
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-medium-grey dark:text-cool-grey">
          {freelancer}
        </p>
      </div>
      <div className="text-left">
        <p className="font-bold mb-1">{amount}$</p>
        <span className={`
          text-sm px-2 py-1 rounded-full
          ${status === 'مكتمل'
            ? theme === 'light'
              ? 'bg-green-100 text-green-700'
              : 'bg-green-900 text-green-100'
            : theme === 'light'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-yellow-900 text-yellow-100'
          }
        `}>
          {status}
        </span>
      </div>
    </div>
  );
};

interface InvoiceItemProps {
  number: string;
  amount: string;
  date: string;
  project: string;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({ 
  number, amount, date, project 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-0">
      <div>
        <h4 className="font-medium mb-1">{number}</h4>
        <p className="text-sm text-medium-grey dark:text-cool-grey">
          {project}
        </p>
      </div>
      <div className="text-left">
        <p className="font-bold mb-1">{amount}$</p>
        <p className="text-sm text-medium-grey dark:text-cool-grey">
          {date}
        </p>
      </div>
      <button className={`
        p-2 rounded-full
        ${theme === 'light' 
          ? 'hover:bg-gray-100' 
          : 'hover:bg-gray-700'}
      `}>
        <Download size={20} />
      </button>
    </div>
  );
};

interface PaymentMethodCardProps {
  type: 'card' | 'bank';
  name: string;
  number: string;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ 
  type, name, number 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      p-4 rounded-md border
      ${theme === 'light' ? 'border-gray-200' : 'border-gray-700'}
    `}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium">{name}</h4>
        <span className={`
          text-sm px-2 py-1 rounded-full
          ${theme === 'light'
            ? 'bg-blue-50 text-professional-blue'
            : 'bg-gray-700 text-muted-gold'}
        `}>
          {type === 'card' ? 'بطاقة ائتمان' : 'حساب بنكي'}
        </span>
      </div>
      <p className="text-sm text-medium-grey dark:text-cool-grey">
        {number}
      </p>
    </div>
  );
};

export default ClientDashboardPage;
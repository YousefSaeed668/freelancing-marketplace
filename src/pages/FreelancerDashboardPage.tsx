import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  LayoutDashboard, Briefcase, MessageSquare, Wallet, Settings, Search,
  TrendingUp, Clock, CheckCircle, DollarSign, Bell, ChevronRight,
  FileText, User, ExternalLink, Download
} from 'lucide-react';

type DashboardSection = 'overview' | 'projects' | 'messages' | 'earnings' | 'settings';
type ProjectsTab = 'active' | 'proposals' | 'completed';

const FreelancerDashboardPage: React.FC = () => {
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
                  مرحباً، أحمد!
                </h1>
                <p className="text-medium-grey dark:text-cool-grey">
                  آخر تسجيل دخول: اليوم، 09:30 صباحاً
                </p>
              </div>
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

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="المشاريع النشطة"
                value="3"
                icon={<Briefcase size={24} />}
                trend="+1 هذا الأسبوع"
              />
              <StatCard 
                title="العروض المقدمة"
                value="8"
                icon={<FileText size={24} />}
                trend="5 في انتظار الرد"
              />
              <StatCard 
                title="إجمالي الأرباح"
                value="$12,450"
                icon={<DollarSign size={24} />}
                trend="+$2,300 هذا الشهر"
              />
              <StatCard 
                title="الرصيد الحالي"
                value="$3,200"
                icon={<Wallet size={24} />}
                trend="متاح للسحب"
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
                  icon={<MessageSquare size={20} />}
                  title="رسالة جديدة من سارة أحمد"
                  description="بخصوص مشروع تصميم الموقع"
                  time="منذ 30 دقيقة"
                />
                <ActivityItem 
                  icon={<Eye size={20} />}
                  title="تم مشاهدة عرضك"
                  description="مشروع تطوير تطبيق الجوال"
                  time="منذ ساعتين"
                />
                <ActivityItem 
                  icon={<CheckCircle size={20} />}
                  title="تم قبول العرض"
                  description="مشروع تصميم الهوية البصرية"
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
                    icon={<User size={20} />}
                    title="عرض الملف الشخصي"
                    subtitle="تحديث المعلومات والمهارات"
                  />
                  <QuickLink 
                    icon={<Search size={20} />}
                    title="البحث عن مشاريع"
                    subtitle="تصفح أحدث الفرص المتاحة"
                  />
                  <QuickLink 
                    icon={<Download size={20} />}
                    title="تحميل التقارير"
                    subtitle="إحصائيات وتقارير الأداء"
                  />
                </div>
              </div>

              <div className={`
                rounded-lg p-6
                ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
              `}>
                <h2 className="text-xl font-bold font-cairo mb-6">إحصائيات الملف</h2>
                <div className="space-y-4">
                  <ProfileStat 
                    label="نسبة إكمال الملف"
                    value={85}
                  />
                  <ProfileStat 
                    label="معدل قبول العروض"
                    value={70}
                  />
                  <ProfileStat 
                    label="تقييم العملاء"
                    value={95}
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
                  onClick={() => setActiveProjectsTab('proposals')}
                  className={`
                    px-4 py-2 rounded-md
                    ${activeProjectsTab === 'proposals'
                      ? theme === 'light'
                        ? 'bg-professional-blue text-white'
                        : 'bg-deep-ocean-blue text-white'
                      : theme === 'light'
                        ? 'text-deep-charcoal hover:bg-gray-100'
                        : 'text-soft-ivory hover:bg-gray-700'
                    }
                  `}
                >
                  العروض المقدمة
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
              {/* Project Cards would go here based on activeProjectsTab */}
              <ProjectCard 
                title="تصميم موقع إلكتروني"
                client="شركة الأناقة للأزياء"
                status="جاري العمل"
                progress={60}
                dueDate="15 مارس 2024"
                budget="$2,500"
              />
              <ProjectCard 
                title="تطوير تطبيق موبايل"
                client="تك سوليوشنز"
                status="في انتظار المراجعة"
                progress={90}
                dueDate="20 مارس 2024"
                budget="$4,000"
              />
            </div>
          </div>
        );

      case 'earnings':
        return (
          <div>
            <h1 className="text-3xl font-bold font-cairo mb-8">الأرباح والمدفوعات</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Earnings Chart */}
                <div className={`
                  rounded-lg p-6 mb-8
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-6">إحصائيات الأرباح</h2>
                  {/* Chart would go here */}
                  <div className="h-64 flex items-center justify-center border border-dashed rounded">
                    رسم بياني الأرباح
                  </div>
                </div>

                {/* Transactions */}
                <div className={`
                  rounded-lg p-6
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-6">سجل المعاملات</h2>
                  <div className="space-y-4">
                    <TransactionItem 
                      title="دفعة مشروع تصميم الموقع"
                      amount="2,500"
                      date="15 مارس 2024"
                      status="مكتمل"
                    />
                    <TransactionItem 
                      title="دفعة مشروع تطوير التطبيق"
                      amount="1,800"
                      date="10 مارس 2024"
                      status="معلق"
                    />
                    <TransactionItem 
                      title="سحب إلى البنك"
                      amount="3,000"
                      date="5 مارس 2024"
                      status="مكتمل"
                      type="withdrawal"
                    />
                  </div>
                </div>
              </div>

              <div>
                {/* Balance Card */}
                <div className={`
                  rounded-lg p-6 mb-8
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-4">الرصيد الحالي</h2>
                  <div className="text-3xl font-bold mb-4">$3,200</div>
                  <button className={`
                    w-full py-3 rounded-md text-white mb-4
                    ${theme === 'light'
                      ? 'bg-professional-blue hover:bg-blue-700'
                      : 'bg-deep-ocean-blue hover:bg-blue-900'}
                  `}>
                    سحب الأموال
                  </button>
                  <p className="text-sm text-medium-grey dark:text-cool-grey">
                    يتم معالجة عمليات السحب خلال 2-3 أيام عمل
                  </p>
                </div>

                {/* Payment Methods */}
                <div className={`
                  rounded-lg p-6
                  ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
                `}>
                  <h2 className="text-xl font-bold font-cairo mb-6">طرق الدفع</h2>
                  <div className="space-y-4">
                    <PaymentMethodCard 
                      type="bank"
                      name="البنك الأهلي"
                      number="****4582"
                    />
                    <PaymentMethodCard 
                      type="paypal"
                      name="PayPal"
                      email="ahmed@example.com"
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
                  label="الأرباح"
                  active={activeSection === 'earnings'}
                  onClick={() => setActiveSection('earnings')}
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

interface ProfileStatProps {
  label: string;
  value: number;
}

const ProfileStat: React.FC<ProfileStatProps> = ({ label, value }) => {
  const { theme } = useTheme();
  
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{label}</span>
        <span>{value}%</span>
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
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  client: string;
  status: string;
  progress: number;
  dueDate: string;
  budget: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, client, status, progress, dueDate, budget 
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
          <p className="text-medium-grey dark:text-cool-grey">{client}</p>
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
      </div>
    </div>
  );
};

interface TransactionItemProps {
  title: string;
  amount: string;
  date: string;
  status: 'مكتمل' | 'معلق';
  type?: 'payment' | 'withdrawal';
}

const TransactionItem: React.FC<TransactionItemProps> = ({ 
  title, amount, date, status, type = 'payment' 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-0">
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-medium-grey dark:text-cool-grey">{date}</p>
      </div>
      <div className="text-left">
        <p className={`
          font-bold mb-1
          ${type === 'withdrawal' ? 'text-red-500' : ''}
        `}>
          {type === 'withdrawal' ? '-' : '+'}{amount}$
        </p>
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

interface PaymentMethodCardProps {
  type: 'bank' | 'paypal';
  name: string;
  number?: string;
  email?: string;
}

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({ 
  type, name, number, email 
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
          {type === 'bank' ? 'حساب بنكي' : 'PayPal'}
        </span>
      </div>
      <p className="text-sm text-medium-grey dark:text-cool-grey">
        {type === 'bank' ? number : email}
      </p>
    </div>
  );
};

export default FreelancerDashboardPage;
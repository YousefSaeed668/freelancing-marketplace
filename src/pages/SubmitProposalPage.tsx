import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Upload, Clock, DollarSign, Send, Save } from 'lucide-react';

const SubmitProposalPage: React.FC = () => {
  const { theme } = useTheme();
  const [bidAmount, setBidAmount] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [questions, setQuestions] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle proposal submission
  };

  return (
    <div className="py-8">
      <div className="container mx-auto">
        {/* Back Link */}
        <a 
          href="#" 
          className={`
            inline-flex items-center mb-6 hover:underline
            ${theme === 'light' 
              ? 'text-professional-blue' 
              : 'text-muted-gold'}
          `}
        >
          <ArrowRight className="ml-2" size={20} />
          العودة إلى تفاصيل المشروع
        </a>

        <h1 className="text-3xl font-bold font-cairo mb-8">
          تقديم عرض على مشروع تصميم موقع إلكتروني لمتجر أزياء
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className={`
                rounded-lg p-6 mb-8
                ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
              `}>
                {/* Bid Amount */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">قيمة العرض</label>
                  <div className="relative">
                    <DollarSign 
                      size={20} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-grey dark:text-cool-grey" 
                    />
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className={`
                        w-full py-2 px-10 rounded-md
                        ${theme === 'light' 
                          ? 'bg-gray-100 text-deep-charcoal' 
                          : 'bg-gray-700 text-soft-ivory'}
                      `}
                      placeholder="أدخل قيمة العرض"
                    />
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">مدة التنفيذ</label>
                  <div className="relative">
                    <Clock 
                      size={20} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-medium-grey dark:text-cool-grey" 
                    />
                    <select
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className={`
                        w-full py-2 px-10 rounded-md appearance-none
                        ${theme === 'light' 
                          ? 'bg-gray-100 text-deep-charcoal' 
                          : 'bg-gray-700 text-soft-ivory'}
                      `}
                    >
                      <option value="">اختر مدة التنفيذ</option>
                      <option value="7">7 أيام</option>
                      <option value="14">14 يوم</option>
                      <option value="30">30 يوم</option>
                      <option value="custom">مدة مخصصة</option>
                    </select>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">تفاصيل العرض</label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    rows={8}
                    className={`
                      w-full p-4 rounded-md
                      ${theme === 'light' 
                        ? 'bg-gray-100 text-deep-charcoal' 
                        : 'bg-gray-700 text-soft-ivory'}
                    `}
                    placeholder="اكتب تفاصيل عرضك وخبراتك ذات الصلة بالمشروع..."
                  />
                </div>

                {/* File Upload */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">المرفقات</label>
                  <div className={`
                    border-2 border-dashed rounded-md p-6 text-center
                    ${theme === 'light' 
                      ? 'border-gray-300 bg-gray-50' 
                      : 'border-gray-600 bg-gray-750'}
                  `}>
                    <Upload className="mx-auto mb-2" size={32} />
                    <p className="mb-2">اسحب الملفات هنا أو اضغط للاختيار</p>
                    <p className="text-sm text-medium-grey dark:text-cool-grey">
                      PDF, DOC, PNG, JPG (الحد الأقصى: 10MB)
                    </p>
                  </div>
                </div>

                {/* Questions */}
                <div className="mb-6">
                  <label className="block font-medium mb-2">أسئلة للعميل (اختياري)</label>
                  <textarea
                    value={questions}
                    onChange={(e) => setQuestions(e.target.value)}
                    rows={4}
                    className={`
                      w-full p-4 rounded-md
                      ${theme === 'light' 
                        ? 'bg-gray-100 text-deep-charcoal' 
                        : 'bg-gray-700 text-soft-ivory'}
                    `}
                    placeholder="هل لديك أي أسئلة للعميل قبل البدء؟"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button 
                    type="submit"
                    className={`
                      flex-1 py-3 rounded-md flex items-center justify-center
                      ${theme === 'light'
                        ? 'bg-professional-blue hover:bg-blue-700 text-white'
                        : 'bg-deep-ocean-blue hover:bg-blue-900 text-white'}
                    `}
                  >
                    <Send size={20} className="ml-2" />
                    تقديم العرض
                  </button>
                  <button 
                    type="button"
                    className={`
                      flex-1 py-3 rounded-md flex items-center justify-center border
                      ${theme === 'light'
                        ? 'border-warm-sand text-warm-sand hover:bg-warm-sand hover:text-white'
                        : 'border-muted-gold text-muted-gold hover:bg-muted-gold hover:text-night-sky'}
                    `}
                  >
                    <Save size={20} className="ml-2" />
                    حفظ كمسودة
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Project Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className={`
              rounded-lg p-6 sticky top-24
              ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-800'}
            `}>
              <h2 className="text-xl font-bold font-cairo mb-4">ملخص المشروع</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">العميل</h3>
                  <p className="text-medium-grey dark:text-cool-grey">
                    شركة الأناقة للأزياء
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">الميزانية</h3>
                  <p className="text-medium-grey dark:text-cool-grey">
                    2000-3000$
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">المهارات المطلوبة</h3>
                  <div className="flex flex-wrap gap-2">
                    {['تصميم مواقع', 'UI/UX', 'Figma', 'Adobe XD'].map((skill) => (
                      <span 
                        key={skill}
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
                </div>

                <div>
                  <h3 className="font-medium mb-1">وصف مختصر</h3>
                  <p className="text-medium-grey dark:text-cool-grey">
                    تصميم موقع احترافي لمتجر أزياء عصري مع التركيز على تجربة المستخدم 
                    وسهولة الاستخدام.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitProposalPage;
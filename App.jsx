import React, { useState } from 'react';
import './App.css';
import InteractiveQuiz from './components/InteractiveQuiz';
import AssessmentTool from './components/AssessmentTool';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch(currentView) {
      case 'quiz':
        return <InteractiveQuiz />;
      case 'assessment':
        return <AssessmentTool />;
      case 'concepts':
        return (
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">المفاهيم الأساسية للبنية التحتية الرقمية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "مراكز البيانات", 
                  icon: "🏢", 
                  desc: "البنية التحتية الأساسية لتخزين ومعالجة البيانات",
                  image: "/images/data-center-1.jpg"
                },
                { 
                  title: "الربط الدولي", 
                  icon: "🌐", 
                  desc: "شبكات الاتصالات العالمية والكابلات البحرية",
                  image: "/images/fiber-optic-network.jpeg"
                },
                { 
                  title: "الحوسبة السحابية", 
                  icon: "☁️", 
                  desc: "خدمات الحوسبة والتخزين عبر الإنترنت",
                  image: "/images/cloud-computing.jpg"
                },
                { 
                  title: "الأمن السيبراني", 
                  icon: "🛡️", 
                  desc: "حماية الأنظمة والبيانات من التهديدات",
                  image: "/images/cybersecurity-shield.jpg"
                },
                { 
                  title: "المنصات الوطنية", 
                  icon: "🏛️", 
                  desc: "البنية التحتية للحكومة الرقمية",
                  image: "/images/digital-infrastructure.jpg"
                }
              ].map((concept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${concept.image})`}}>
                    <div className="h-full bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-6xl">{concept.icon}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{concept.title}</h3>
                    <p className="text-gray-600 text-center text-sm mb-4">{concept.desc}</p>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      اقرأ المزيد
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'cases':
        return (
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">دراسات الحالة التحليلية</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  country: "الإمارات العربية المتحدة", 
                  flag: "🇦🇪", 
                  status: "نموذج عالمي في الريادة الرقمية",
                  highlights: ["رؤية 2071", "الحكومة اللاورقية", "الذكاء الاصطناعي 2031"],
                  image: "/images/uae-smart-city.png"
                },
                { 
                  country: "سنغافورة", 
                  flag: "🇸🇬", 
                  status: "الدولة الذكية الرائدة عالمياً",
                  highlights: ["Smart Nation", "GovTech", "Digital Government Blueprint"],
                  image: "/images/singapore-smart-nation.jpg"
                },
                { 
                  country: "العراق", 
                  flag: "🇮🇶", 
                  status: "تحديات وفرص التطوير",
                  highlights: ["خطة 12 عام", "مقترحات عملية", "إعادة البناء الرقمي"],
                  image: "/images/iraq-digital-transformation.jpg"
                }
              ].map((caseStudy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${caseStudy.image})`}}>
                    <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-8xl">{caseStudy.flag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{caseStudy.country}</h3>
                    <p className="text-blue-600 font-semibold text-center mb-4 text-sm">{caseStudy.status}</p>
                    <div className="space-y-2 mb-4">
                      {caseStudy.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <span className="text-green-500 ml-2">✓</span>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                      اقرأ دراسة الحالة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'guide':
        return (
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">دليل بناء الرؤية الوطنية للتحول الرقمي</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">مراحل بناء الرؤية</h3>
                  <div className="space-y-4">
                    {[
                      { phase: "التحضير والتهيئة", duration: "3-6 أشهر", color: "blue" },
                      { phase: "التشاور والمشاركة", duration: "6-9 أشهر", color: "green" },
                      { phase: "الصياغة والتطوير", duration: "3-6 أشهر", color: "yellow" },
                      { phase: "المراجعة والاعتماد", duration: "2-3 أشهر", color: "purple" }
                    ].map((phase, index) => (
                      <div key={index} className={`p-4 bg-${phase.color}-50 rounded-lg border-r-4 border-${phase.color}-500`}>
                        <h4 className="font-semibold text-gray-800">{phase.phase}</h4>
                        <p className="text-sm text-gray-600">{phase.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">خارطة الطريق</h3>
                  <div className="space-y-4">
                    {[
                      { phase: "بناء الأسس", years: "السنوات 1-3", focus: "البنية التحتية والقوانين" },
                      { phase: "التوسع والتطوير", years: "السنوات 4-7", focus: "الخدمات والاقتصاد الرقمي" },
                      { phase: "الريادة والتميز", years: "السنوات 8-10", focus: "الابتكار والتصدير" }
                    ].map((roadmap, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800">{roadmap.phase}</h4>
                        <p className="text-sm text-blue-600">{roadmap.years}</p>
                        <p className="text-sm text-gray-600">{roadmap.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                اقرأ الدليل الكامل
              </button>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">المراجع والمصادر التعليمية</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center ml-4">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">د. مصطفى صادق لطيف</h3>
                    <p className="text-gray-600">خبير التحول الرقمي والبنية التحتية</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="text-blue-500 ml-2">📚</span>
                    <span className="text-gray-700">3 كتب مفتوحة المصدر</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 ml-2">🎥</span>
                    <span className="text-gray-700">65+ فيديو تعليمي</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 ml-2">📝</span>
                    <span className="text-gray-700">مقالات ودراسات متخصصة</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-500 ml-2">🎯</span>
                    <span className="text-gray-700">ندوات وورش عمل</span>
                  </div>
                </div>
                <a 
                  href="https://linktr.ee/mustafasadiq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  تواصل مع الدكتور
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">مصادر إضافية</h3>
                <div className="space-y-4">
                  {[
                    { title: "تقارير المنظمات الدولية", icon: "🌍", desc: "البنك الدولي، الأمم المتحدة، ITU" },
                    { title: "مراكز البحث المتخصصة", icon: "🔬", desc: "مراكز التميز العالمية والإقليمية" },
                    { title: "دورات تدريبية", icon: "🎓", desc: "منصات التعلم العربية والعالمية" },
                    { title: "أدوات التقييم", icon: "📊", desc: "نماذج وأدوات قياس النضج الرقمي" }
                  ].map((resource, index) => (
                    <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <span className="text-2xl ml-3">{resource.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-800">{resource.title}</h4>
                        <p className="text-sm text-gray-600">{resource.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                🤝 ادعم المبادرة المعرفية
              </h3>
              <p className="text-center text-gray-700 mb-6">
                ندعو جميع الخبراء والمتخصصين للمساهمة في تطوير هذا الموقع كمبادرة معرفية وطنية
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  "كتابة محتوى تعليمي متخصص",
                  "توثيق تجارب عملية",
                  "تطوير أدوات ونماذج"
                ].map((contribution, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl mb-2">✨</div>
                    <p className="text-sm text-gray-700">{contribution}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a 
                  href="https://linktr.ee/mustafasadiq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors inline-block"
                >
                  انضم للمبادرة
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold mb-6">
                  ابدأ من هنا: البنية التحتية الرقمية للدول والمؤسسات
                </h1>
                <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  موقع معرفي تعليمي شامل موجه لصناع السياسات والباحثين والمهندسين في مجال التحول الرقمي
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setCurrentView('quiz')}
                    className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    🧭 ابدأ الاختبار التفاعلي
                  </button>
                  <button 
                    onClick={() => setCurrentView('assessment')}
                    className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                  >
                    📊 قيّم النضج الرقمي
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ابدأ رحلتك حسب اهتمامك</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { 
                      title: "صناع السياسات", 
                      icon: "🏛️", 
                      desc: "أدلة بناء الرؤية الوطنية والاستراتيجيات",
                      action: () => setCurrentView('guide')
                    },
                    { 
                      title: "المهندسون", 
                      icon: "⚙️", 
                      desc: "المفاهيم التقنية والحلول العملية",
                      action: () => setCurrentView('concepts')
                    },
                    { 
                      title: "الباحثون", 
                      icon: "🔬", 
                      desc: "دراسات الحالة وأدوات التقييم",
                      action: () => setCurrentView('cases')
                    },
                    { 
                      title: "الطلاب", 
                      icon: "🎓", 
                      desc: "المصادر التعليمية والمراجع",
                      action: () => setCurrentView('resources')
                    }
                  ].map((user, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={user.action}>
                      <div className="text-4xl mb-4 text-center">{user.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{user.title}</h3>
                      <p className="text-gray-600 text-center text-sm">{user.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Sections */}
            <section className="py-16">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">المحاور الرئيسية</h2>
                
                {/* Concepts Section */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-blue-800">المفاهيم الأساسية للبنية التحتية الرقمية</h3>
                    <button 
                      onClick={() => setCurrentView('concepts')}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      عرض الكل ←
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                      { title: "مراكز البيانات", icon: "🏢", color: "blue" },
                      { title: "الربط الدولي", icon: "🌐", color: "green" },
                      { title: "الحوسبة السحابية", icon: "☁️", color: "purple" },
                      { title: "الأمن السيبراني", icon: "🛡️", color: "red" },
                      { title: "المنصات الوطنية", icon: "🏛️", color: "yellow" }
                    ].map((concept, index) => (
                      <div key={index} className={`bg-${concept.color}-50 p-6 rounded-lg border-2 border-${concept.color}-200 hover:border-${concept.color}-400 transition-colors cursor-pointer`}>
                        <div className="text-3xl mb-3 text-center">{concept.icon}</div>
                        <h4 className="font-semibold text-gray-800 text-center text-sm">{concept.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Studies Section */}
                <div className="mb-16">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-blue-800">دراسات الحالة التحليلية</h3>
                    <button 
                      onClick={() => setCurrentView('cases')}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      عرض الكل ←
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { country: "الإمارات", flag: "🇦🇪", status: "نموذج عالمي" },
                      { country: "سنغافورة", flag: "🇸🇬", status: "الدولة الذكية" },
                      { country: "العراق", flag: "🇮🇶", status: "مقترحات التطوير" }
                    ].map((caseStudy, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-4xl mb-3 text-center">{caseStudy.flag}</div>
                        <h4 className="font-bold text-gray-800 text-center">{caseStudy.country}</h4>
                        <p className="text-sm text-blue-600 text-center">{caseStudy.status}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-blue-800 mb-8">أدوات تقييم النضج الرقمي</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl ml-3">⚡</span>
                        <h4 className="text-xl font-bold text-blue-800">التقييم السريع</h4>
                      </div>
                      <p className="text-blue-700 mb-4">تقييم سريع في 15 دقيقة لتحديد مستوى النضج الرقمي الأولي</p>
                      <button 
                        onClick={() => setCurrentView('assessment')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        ابدأ التقييم
                      </button>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl ml-3">🔍</span>
                        <h4 className="text-xl font-bold text-green-800">التقييم الشامل</h4>
                      </div>
                      <p className="text-green-700 mb-4">تقييم مفصل وشامل مع توصيات عملية للتطوير</p>
                      <button 
                        onClick={() => setCurrentView('assessment')}
                        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        ابدأ التقييم
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">ابدأ رحلتك في التحول الرقمي اليوم</h2>
                <p className="text-xl mb-8">
                  اكتشف مستوى معرفتك واحصل على توصيات مخصصة لتطوير قدراتك في مجال البنية التحتية الرقمية
                </p>
                <button 
                  onClick={() => setCurrentView('quiz')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  🚀 ابدأ الآن
                </button>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors"
            >
              البنية التحتية الرقمية
            </button>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <button 
                onClick={() => setCurrentView('concepts')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                المفاهيم الأساسية
              </button>
              <button 
                onClick={() => setCurrentView('cases')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                دراسات الحالة
              </button>
              <button 
                onClick={() => setCurrentView('assessment')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                أدوات التقييم
              </button>
              <button 
                onClick={() => setCurrentView('guide')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                دليل الرؤية الوطنية
              </button>
              <button 
                onClick={() => setCurrentView('resources')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                المراجع والمصادر
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">حول الموقع</h3>
              <p className="text-gray-300">
                مبادرة معرفية وطنية لنشر المعرفة حول البنية التحتية الرقمية والتحول الرقمي
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <div className="space-y-2">
                <button onClick={() => setCurrentView('quiz')} className="block text-gray-300 hover:text-white transition-colors">الاختبار التفاعلي</button>
                <button onClick={() => setCurrentView('assessment')} className="block text-gray-300 hover:text-white transition-colors">تقييم النضج الرقمي</button>
                <button onClick={() => setCurrentView('guide')} className="block text-gray-300 hover:text-white transition-colors">دليل الرؤية الوطنية</button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <p className="text-gray-300 mb-2">د. مصطفى صادق لطيف</p>
              <a 
                href="https://linktr.ee/mustafasadiq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                linktr.ee/mustafasadiq
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 البنية التحتية الرقمية للدول والمؤسسات - مبادرة معرفية مفتوحة المصدر
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


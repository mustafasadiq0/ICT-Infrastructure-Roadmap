import React, { useState } from 'react';

const InteractiveQuiz = () => {
  const [currentStep, setCurrentStep] = useState('start');
  const [userProfile, setUserProfile] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const profileQuestions = {
    start: {
      question: "ما هو دورك أو اهتمامك الأساسي؟",
      options: [
        { id: 'policy', label: 'صانع سياسات أو قيادي حكومي', icon: '🏛️' },
        { id: 'engineer', label: 'مهندس أو متخصص تقني', icon: '⚙️' },
        { id: 'researcher', label: 'باحث أو أكاديمي', icon: '🔬' },
        { id: 'student', label: 'طالب أو متعلم', icon: '🎓' }
      ]
    }
  };

  const quizQuestions = {
    policy: [
      {
        question: "ما هو أهم عنصر في استراتيجية التحول الرقمي الوطنية؟",
        options: [
          "البنية التحتية التقنية",
          "تطوير القوانين والأنظمة",
          "تدريب الموارد البشرية",
          "جميع ما سبق بشكل متكامل"
        ],
        correct: 3,
        explanation: "التحول الرقمي الناجح يتطلب نهجاً شاملاً يجمع بين البنية التحتية والأطر التنظيمية والقدرات البشرية."
      },
      {
        question: "ما هي أكبر التحديات في تطبيق الحكومة الرقمية؟",
        options: [
          "التكاليف المالية العالية",
          "مقاومة التغيير من الموظفين",
          "نقص الخبرات التقنية",
          "ضعف البنية التحتية"
        ],
        correct: 1,
        explanation: "مقاومة التغيير من أكبر التحديات، حيث تتطلب تغيير الثقافة المؤسسية وطرق العمل التقليدية."
      },
      {
        question: "كيف يمكن قياس نجاح مبادرات التحول الرقمي؟",
        options: [
          "عدد التطبيقات المطورة",
          "مستوى رضا المواطنين عن الخدمات",
          "حجم الاستثمار في التقنية",
          "سرعة تنفيذ المشاريع"
        ],
        correct: 1,
        explanation: "رضا المواطنين هو المؤشر الأهم لنجاح التحول الرقمي، حيث يعكس تحسن جودة الخدمات وسهولة الوصول إليها."
      },
      {
        question: "ما هو دور القطاع الخاص في التحول الرقمي الوطني؟",
        options: [
          "تقديم الحلول التقنية فقط",
          "التمويل والاستثمار فقط",
          "شريك استراتيجي في التطوير والتنفيذ",
          "لا دور له في المبادرات الحكومية"
        ],
        correct: 2,
        explanation: "القطاع الخاص شريك استراتيجي يساهم في التطوير والتمويل والابتكار وتقديم الخبرات المتخصصة."
      },
      {
        question: "ما أهمية الأمن السيبراني في استراتيجية التحول الرقمي؟",
        options: [
          "مهم لحماية البيانات فقط",
          "ضروري لبناء الثقة العامة",
          "يمكن تأجيله لمراحل لاحقة",
          "مسؤولية الجهات التقنية فقط"
        ],
        correct: 1,
        explanation: "الأمن السيبراني أساسي لبناء ثقة المواطنين والشركات في استخدام الخدمات الرقمية وضمان استمراريتها."
      }
    ],
    engineer: [
      {
        question: "ما هي أهم خصائص مركز البيانات الحديث؟",
        options: [
          "السعة التخزينية الكبيرة فقط",
          "الكفاءة في استهلاك الطاقة والتبريد",
          "الموقع الجغرافي المناسب",
          "التقنيات المتقدمة للمعالجة"
        ],
        correct: 1,
        explanation: "الكفاءة في استهلاك الطاقة والتبريد (PUE) من أهم المعايير الحديثة لتقييم جودة مراكز البيانات."
      },
      {
        question: "ما الفرق الأساسي بين IaaS و PaaS؟",
        options: [
          "IaaS يوفر التطبيقات، PaaS يوفر البنية التحتية",
          "IaaS يوفر البنية التحتية، PaaS يوفر منصة التطوير",
          "لا يوجد فرق جوهري بينهما",
          "IaaS للشركات الكبيرة، PaaS للصغيرة"
        ],
        correct: 1,
        explanation: "IaaS يوفر البنية التحتية الافتراضية، بينما PaaS يوفر منصة كاملة لتطوير ونشر التطبيقات."
      },
      {
        question: "ما هو الهدف الأساسي من تقنية CDN؟",
        options: [
          "زيادة أمان المواقع",
          "تقليل زمن التحميل وتحسين الأداء",
          "توفير مساحة تخزين إضافية",
          "تشفير البيانات المنقولة"
        ],
        correct: 1,
        explanation: "شبكات توزيع المحتوى (CDN) تهدف لتقليل زمن التحميل عبر توزيع المحتوى جغرافياً قريباً من المستخدمين."
      },
      {
        question: "ما هي أفضل ممارسة لحماية قواعد البيانات؟",
        options: [
          "استخدام كلمات مرور قوية فقط",
          "التشفير والنسخ الاحتياطي والتحكم في الوصول",
          "وضعها في شبكة منفصلة فقط",
          "تحديث البرامج بانتظام فقط"
        ],
        correct: 1,
        explanation: "حماية قواعد البيانات تتطلب نهجاً شاملاً يشمل التشفير والنسخ الاحتياطي والتحكم في الوصول والمراقبة."
      },
      {
        question: "ما المقصود بـ Edge Computing؟",
        options: [
          "حوسبة في مراكز البيانات الكبيرة",
          "معالجة البيانات قريباً من مصدرها",
          "تقنية جديدة للتشفير",
          "نوع من قواعد البيانات"
        ],
        correct: 1,
        explanation: "الحوسبة الطرفية تعني معالجة البيانات قريباً من مصدرها لتقليل زمن الاستجابة وتوفير عرض النطاق."
      }
    ],
    researcher: [
      {
        question: "ما هو أفضل مؤشر لقياس النضج الرقمي لدولة ما؟",
        options: [
          "عدد مستخدمي الإنترنت",
          "مؤشر التنافسية الرقمية المركب",
          "حجم الاستثمار في التقنية",
          "عدد الشركات التقنية"
        ],
        correct: 1,
        explanation: "المؤشرات المركبة مثل مؤشر التنافسية الرقمية تعطي صورة شاملة تجمع بين عدة أبعاد للنضج الرقمي."
      },
      {
        question: "ما هي أهم منهجية لتقييم تأثير التحول الرقمي؟",
        options: [
          "التحليل الكمي فقط",
          "التحليل النوعي فقط",
          "منهجية مختلطة (كمية ونوعية)",
          "دراسات الحالة فقط"
        ],
        correct: 2,
        explanation: "المنهجية المختلطة توفر فهماً أعمق من خلال الجمع بين البيانات الكمية والتحليل النوعي للسياق."
      },
      {
        question: "ما أهمية دراسات الحالة في بحوث التحول الرقمي؟",
        options: [
          "توفر بيانات إحصائية دقيقة",
          "تساعد في فهم السياق والعوامل المؤثرة",
          "أسهل في التنفيذ من المسوحات",
          "تعطي نتائج قابلة للتعميم"
        ],
        correct: 1,
        explanation: "دراسات الحالة مهمة لفهم السياق والعوامل المعقدة التي تؤثر على نجاح أو فشل مبادرات التحول الرقمي."
      },
      {
        question: "كيف يمكن قياس العائد على الاستثمار في التحول الرقمي؟",
        options: [
          "المقاييس المالية فقط",
          "تحسن الكفاءة التشغيلية فقط",
          "مزيج من المقاييس المالية والاجتماعية والتشغيلية",
          "رضا المستخدمين فقط"
        ],
        correct: 2,
        explanation: "قياس العائد يتطلب نهجاً شاملاً يشمل المنافع المالية والاجتماعية والتشغيلية لإعطاء صورة كاملة."
      },
      {
        question: "ما هو التحدي الأكبر في بحوث التحول الرقمي؟",
        options: [
          "نقص البيانات المتاحة",
          "سرعة التغير التقني",
          "صعوبة قياس التأثير طويل المدى",
          "تعقد العوامل المؤثرة"
        ],
        correct: 3,
        explanation: "تعقد العوامل المؤثرة وتداخلها يجعل من الصعب تحديد العلاقات السببية الواضحة في بحوث التحول الرقمي."
      }
    ],
    student: [
      {
        question: "ما المقصود بالبنية التحتية الرقمية؟",
        options: [
          "أجهزة الكمبيوتر والهواتف الذكية",
          "الشبكات والخوادم والأنظمة الأساسية",
          "التطبيقات والبرامج",
          "المواقع الإلكترونية فقط"
        ],
        correct: 1,
        explanation: "البنية التحتية الرقمية تشمل الشبكات ومراكز البيانات والخوادم والأنظمة الأساسية التي تدعم الخدمات الرقمية."
      },
      {
        question: "ما هو الهدف من التحول الرقمي؟",
        options: [
          "استخدام التقنية في كل شيء",
          "تحسين الخدمات وزيادة الكفاءة",
          "توفير المال فقط",
          "مواكبة الدول الأخرى"
        ],
        correct: 1,
        explanation: "الهدف الأساسي من التحول الرقمي هو تحسين جودة الخدمات وزيادة الكفاءة وتعزيز تجربة المستخدمين."
      },
      {
        question: "لماذا الأمن السيبراني مهم؟",
        options: [
          "لحماية البيانات الشخصية والمؤسسية",
          "لتسريع الإنترنت",
          "لتوفير التكاليف",
          "لتحسين التصميم"
        ],
        correct: 0,
        explanation: "الأمن السيبراني ضروري لحماية البيانات والمعلومات الحساسة من التهديدات والهجمات الإلكترونية."
      },
      {
        question: "ما هي الحوسبة السحابية؟",
        options: [
          "تخزين الملفات على الكمبيوتر الشخصي",
          "استخدام موارد الحاسوب عبر الإنترنت",
          "نوع من البرمجيات",
          "تقنية لتسريع الإنترنت"
        ],
        correct: 1,
        explanation: "الحوسبة السحابية تعني استخدام موارد الحاسوب (تخزين، معالجة، تطبيقات) عبر الإنترنت بدلاً من الأجهزة المحلية."
      },
      {
        question: "ما فائدة الحكومة الرقمية للمواطنين؟",
        options: [
          "تعقيد الإجراءات",
          "تسهيل الحصول على الخدمات وتوفير الوقت",
          "زيادة التكاليف",
          "تقليل التفاعل الإنساني"
        ],
        correct: 1,
        explanation: "الحكومة الرقمية تسهل على المواطنين الحصول على الخدمات بسرعة وسهولة وتوفر الوقت والجهد."
      }
    ]
  };

  const recommendations = {
    policy: {
      title: "توصيات لصناع السياسات",
      sections: [
        {
          title: "ابدأ بهذه الأقسام",
          items: [
            "دليل بناء الرؤية الوطنية للتحول الرقمي",
            "دراسات الحالة - الإمارات وسنغافورة",
            "أدوات تقييم النضج الرقمي"
          ]
        },
        {
          title: "مصادر مفيدة",
          items: [
            "تقارير المنظمات الدولية",
            "أفضل الممارسات العالمية",
            "أدوات التقييم والقياس"
          ]
        }
      ],
      nextSteps: "ابدأ بقراءة دليل بناء الرؤية الوطنية لفهم المراحل والخطوات العملية."
    },
    engineer: {
      title: "توصيات للمهندسين والتقنيين",
      sections: [
        {
          title: "ابدأ بهذه الأقسام",
          items: [
            "المفاهيم الأساسية - مراكز البيانات",
            "المفاهيم الأساسية - الحوسبة السحابية",
            "المفاهيم الأساسية - الأمن السيبراني"
          ]
        },
        {
          title: "مصادر تقنية متقدمة",
          items: [
            "سلسلة فيديوهات د. مصطفى صادق",
            "دورات تقنية متخصصة",
            "أدوات التقييم التقني"
          ]
        }
      ],
      nextSteps: "ابدأ بمراجعة المفاهيم الأساسية ثم انتقل للمصادر التقنية المتقدمة."
    },
    researcher: {
      title: "توصيات للباحثين والأكاديميين",
      sections: [
        {
          title: "ابدأ بهذه الأقسام",
          items: [
            "أدوات تقييم النضج الرقمي",
            "دراسات الحالة التحليلية",
            "المراجع والمصادر البحثية"
          ]
        },
        {
          title: "منهجيات البحث",
          items: [
            "دليل أفضل الممارسات في التقييم",
            "مراكز البحث المتخصصة",
            "أدوات جمع وتحليل البيانات"
          ]
        }
      ],
      nextSteps: "راجع أدوات التقييم والمنهجيات البحثية ثم ادرس دراسات الحالة للتطبيق العملي."
    },
    student: {
      title: "توصيات للطلاب والمتعلمين",
      sections: [
        {
          title: "ابدأ بهذه الأقسام",
          items: [
            "المفاهيم الأساسية - جميع الأقسام",
            "دراسات الحالة المبسطة",
            "المصادر التعليمية الأساسية"
          ]
        },
        {
          title: "مسار التعلم المقترح",
          items: [
            "ابدأ بالمفاهيم الأساسية",
            "ادرس دراسات الحالة",
            "جرب أدوات التقييم السريع"
          ]
        }
      ],
      nextSteps: "ابدأ بقراءة المفاهيم الأساسية بالترتيب، ثم انتقل لدراسات الحالة لفهم التطبيق العملي."
    }
  };

  const handleProfileSelect = (profile) => {
    setUserProfile(profile);
    setCurrentStep('quiz');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = { ...answers, [currentQuestion]: answerIndex };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions[userProfile].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    const questions = quizQuestions[userProfile];
    let correctCount = 0;
    let totalQuestions = questions.length;

    Object.keys(finalAnswers).forEach(questionIndex => {
      if (finalAnswers[questionIndex] === questions[questionIndex].correct) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / totalQuestions) * 100);
    let level = '';
    let feedback = '';

    if (percentage >= 80) {
      level = 'متقدم';
      feedback = 'ممتاز! لديك فهم قوي للمفاهيم. يمكنك الانتقال للمواضيع المتقدمة.';
    } else if (percentage >= 60) {
      level = 'متوسط';
      feedback = 'جيد! لديك أساس جيد. راجع المفاهيم الأساسية وانتقل للتطبيقات العملية.';
    } else {
      level = 'مبتدئ';
      feedback = 'ابدأ بالمفاهيم الأساسية وخذ وقتك في فهمها قبل الانتقال للمواضيع المتقدمة.';
    }

    setResults({
      correctCount,
      totalQuestions,
      percentage,
      level,
      feedback,
      recommendations: recommendations[userProfile]
    });

    setCurrentStep('results');
  };

  const resetQuiz = () => {
    setCurrentStep('start');
    setUserProfile('');
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  if (currentStep === 'start') {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            🧭 اختبار تفاعلي لتوجيه التعلم
          </h2>
          <p className="text-gray-600 text-lg">
            اكتشف مستوى معرفتك واحصل على توصيات مخصصة حسب اهتمامك
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            {profileQuestions.start.question}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileQuestions.start.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleProfileSelect(option.id)}
                className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-right"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-gray-800">
                    {option.label}
                  </span>
                  <span className="text-3xl ml-4">{option.icon}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-3">ما ستحصل عليه:</h4>
          <ul className="space-y-2 text-blue-700">
            <li>• تقييم سريع لمستوى معرفتك (5 أسئلة فقط)</li>
            <li>• توصيات مخصصة للمحتوى المناسب لك</li>
            <li>• مسار تعلم واضح حسب اهتمامك</li>
            <li>• روابط مباشرة للمصادر المفيدة</li>
          </ul>
        </div>
      </div>
    );
  }

  if (currentStep === 'quiz') {
    const questions = quizQuestions[userProfile];
    const currentQ = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-800">
              اختبار المعرفة
            </h2>
            <span className="text-gray-600">
              السؤال {currentQuestion + 1} من {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {currentQ.question}
          </h3>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className="w-full p-4 text-right border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
              >
                <span className="text-gray-800">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={resetQuiz}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            إعادة البدء
          </button>
          <div className="text-sm text-gray-500">
            اختر الإجابة الأنسب من وجهة نظرك
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            🎉 تم إكمال الاختبار!
          </h2>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {results.percentage}%
            </div>
            <div className="text-lg text-green-700 mb-2">
              {results.correctCount} من {results.totalQuestions} إجابات صحيحة
            </div>
            <div className="text-xl font-semibold text-green-800">
              المستوى: {results.level}
            </div>
          </div>
          <p className="text-gray-700 text-lg">
            {results.feedback}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">
            {results.recommendations.title}
          </h3>
          
          {results.recommendations.sections.map((section, index) => (
            <div key={index} className="mb-6 bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 ml-2">•</span>
                    <span className="text-blue-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-yellow-800 mb-3">
              الخطوة التالية المقترحة:
            </h4>
            <p className="text-yellow-700">
              {results.recommendations.nextSteps}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            إعادة الاختبار
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            استكشاف المحتوى
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default InteractiveQuiz;


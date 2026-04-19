import React, { useState } from 'react';

const AssessmentTool = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [assessmentType, setAssessmentType] = useState('');
  const [currentDimension, setCurrentDimension] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const assessmentTypes = {
    quick: {
      title: "التقييم السريع",
      description: "تقييم سريع في 15 دقيقة (20 سؤال)",
      duration: "15 دقيقة",
      questions: 20,
      icon: "⚡"
    },
    comprehensive: {
      title: "التقييم الشامل",
      description: "تقييم مفصل وشامل (50 سؤال)",
      duration: "45 دقيقة",
      questions: 50,
      icon: "🔍"
    }
  };

  const dimensions = [
    {
      id: 'infrastructure',
      title: 'البنية التحتية الرقمية',
      weight: 25,
      icon: '🏗️',
      description: 'تقييم جودة وتوفر البنية التحتية التقنية'
    },
    {
      id: 'services',
      title: 'الخدمات والتطبيقات الرقمية',
      weight: 20,
      icon: '📱',
      description: 'تقييم مستوى وجودة الخدمات الرقمية المتاحة'
    },
    {
      id: 'skills',
      title: 'رأس المال البشري والمهارات',
      weight: 20,
      icon: '👥',
      description: 'تقييم مستوى المهارات والكفاءات الرقمية'
    },
    {
      id: 'governance',
      title: 'الحوكمة والسياسات الرقمية',
      weight: 15,
      icon: '⚖️',
      description: 'تقييم فعالية الأطر التنظيمية والسياسات'
    },
    {
      id: 'innovation',
      title: 'الابتكار والتطوير الرقمي',
      weight: 20,
      icon: '💡',
      description: 'تقييم مستوى الابتكار والتطوير التقني'
    }
  ];

  const quickQuestions = {
    infrastructure: [
      {
        question: "كيف تقيم جودة الإنترنت في منطقتك/مؤسستك؟",
        options: [
          "ممتازة - سريعة وموثوقة دائماً",
          "جيدة - سريعة معظم الوقت",
          "متوسطة - مقبولة مع انقطاعات أحياناً",
          "ضعيفة - بطيئة مع انقطاعات متكررة"
        ],
        scores: [5, 4, 3, 2]
      },
      {
        question: "هل تستخدم مؤسستك/دولتك الحوسبة السحابية؟",
        options: [
          "نعم، بشكل شامل في معظم الأنظمة",
          "نعم، في بعض الأنظمة المهمة",
          "نعم، بشكل محدود",
          "لا، ولا توجد خطط حالياً"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "ما مستوى الأمن السيبراني لديكم؟",
        options: [
          "متقدم جداً مع فريق متخصص ومراقبة 24/7",
          "جيد مع أنظمة حماية شاملة",
          "متوسط مع حماية أساسية",
          "ضعيف مع حماية محدودة"
        ],
        scores: [5, 4, 3, 2]
      },
      {
        question: "هل تتوفر أنظمة دفع إلكتروني؟",
        options: [
          "نعم، متنوعة وسهلة الاستخدام",
          "نعم، جيدة ومتاحة",
          "نعم، لكن محدودة",
          "غير متوفرة أو نادرة"
        ],
        scores: [5, 4, 3, 1]
      }
    ],
    services: [
      {
        question: "كم نسبة الخدمات الحكومية المتاحة رقمياً؟",
        options: [
          "أكثر من 80%",
          "60-80%",
          "40-60%",
          "أقل من 40%"
        ],
        scores: [5, 4, 3, 2]
      },
      {
        question: "ما مدى سهولة استخدام الخدمات الرقمية؟",
        options: [
          "سهلة جداً وبديهية",
          "سهلة ومريحة",
          "مقبولة مع بعض التعقيد",
          "معقدة وتحتاج مساعدة"
        ],
        scores: [5, 4, 3, 2]
      },
      {
        question: "هل تتوفر هوية رقمية موحدة؟",
        options: [
          "نعم، شاملة وآمنة",
          "نعم، جيدة ومفيدة",
          "نعم، لكن محدودة",
          "غير متوفرة"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "ما مستوى رقمنة التعليم والصحة؟",
        options: [
          "متقدم جداً مع خدمات شاملة",
          "جيد مع خدمات متنوعة",
          "متوسط مع خدمات أساسية",
          "ضعيف أو غير موجود"
        ],
        scores: [5, 4, 3, 1]
      }
    ],
    skills: [
      {
        question: "ما مستوى المهارات الرقمية في مجتمعك/مؤسستك؟",
        options: [
          "متقدم جداً - الجميع يستخدم التقنية بكفاءة",
          "جيد - معظم الناس لديهم مهارات كافية",
          "متوسط - مهارات أساسية منتشرة",
          "ضعيف - مهارات محدودة"
        ],
        scores: [5, 4, 3, 2]
      },
      {
        question: "هل تتوفر برامج تدريب على التقنيات الرقمية؟",
        options: [
          "نعم، شاملة ومتطورة",
          "نعم، جيدة ومتاحة",
          "نعم، لكن محدودة",
          "غير متوفرة"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "ما مستوى القيادة الرقمية؟",
        options: [
          "قيادة رؤيوية ومتقدمة",
          "قيادة جيدة وداعمة",
          "قيادة مقبولة",
          "غياب القيادة الرقمية"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "هل يتوفر خبراء ومتخصصون في التقنيات الرقمية؟",
        options: [
          "نعم، بأعداد كبيرة ومؤهلات عالية",
          "نعم، بأعداد جيدة",
          "نعم، لكن بأعداد محدودة",
          "نادر جداً أو غير متوفر"
        ],
        scores: [5, 4, 3, 1]
      }
    ],
    governance: [
      {
        question: "هل تتوفر استراتيجية واضحة للتحول الرقمي؟",
        options: [
          "نعم، شاملة ومفصلة مع خطة تنفيذ",
          "نعم، جيدة وواضحة",
          "نعم، لكن عامة",
          "غير موجودة"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "ما مدى فعالية القوانين والأنظمة الرقمية؟",
        options: [
          "فعالة جداً ومتطورة",
          "فعالة وداعمة",
          "مقبولة مع بعض النقص",
          "غير موجودة أو سيئة"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "هل يتوفر تنسيق جيد بين الجهات المختلفة؟",
        options: [
          "تنسيق ممتاز وتكامل شامل",
          "تنسيق جيد وفعال",
          "تنسيق مقبول",
          "لا يوجد تنسيق"
        ],
        scores: [5, 4, 3, 1]
      }
    ],
    innovation: [
      {
        question: "ما مستوى الاستثمار في البحث والتطوير التقني؟",
        options: [
          "استثمار كبير ومستمر",
          "استثمار جيد ومتنامي",
          "استثمار متوسط",
          "لا يوجد استثمار يذكر"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "هل يتوفر نظام بيئي للشركات الناشئة التقنية؟",
        options: [
          "نظام بيئي قوي ومزدهر",
          "نظام بيئي جيد ونشط",
          "نظام بيئي ناشئ",
          "لا يوجد نظام بيئي"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "ما مدى اعتماد التقنيات المتقدمة (ذكاء اصطناعي، إنترنت الأشياء)؟",
        options: [
          "اعتماد واسع ومتقدم",
          "اعتماد جيد ومتنامي",
          "اعتماد محدود",
          "لا يوجد اعتماد"
        ],
        scores: [5, 4, 3, 1]
      },
      {
        question: "هل تتوفر مشاريع تجريبية ومبادرات رائدة؟",
        options: [
          "مشاريع كثيرة ومتنوعة",
          "مشاريع جيدة ومفيدة",
          "بعض المشاريع",
          "لا توجد مشاريع"
        ],
        scores: [5, 4, 3, 1]
      }
    ]
  };

  const maturityLevels = [
    {
      range: [0, 20],
      level: "البداية",
      color: "red",
      description: "في بداية رحلة التحول الرقمي",
      recommendations: [
        "التركيز على بناء الوعي ووضع الأسس",
        "البدء بمشاريع صغيرة وتدريجية",
        "وضع استراتيجية واضحة للتحول الرقمي",
        "الاستثمار في البنية التحتية الأساسية"
      ]
    },
    {
      range: [21, 40],
      level: "التطوير",
      color: "orange",
      description: "مستوى ضعيف يحتاج إلى تطوير واضح",
      recommendations: [
        "تحسين البنية التحتية والخدمات الأساسية",
        "تطوير المهارات والكوادر البشرية",
        "وضع خطة تنفيذية واضحة",
        "تعزيز التنسيق بين الجهات المختلفة"
      ]
    },
    {
      range: [41, 60],
      level: "النمو",
      color: "yellow",
      description: "مستوى متوسط يحتاج إلى تطوير واضح",
      recommendations: [
        "التركيز على سد الفجوات الموجودة",
        "تطوير الخدمات المتقدمة والتكامل بين الأنظمة",
        "تعزيز الابتكار والبحث والتطوير",
        "تحسين تجربة المستخدم"
      ]
    },
    {
      range: [61, 80],
      level: "النضج",
      color: "blue",
      description: "مستوى جيد من النضج الرقمي مع إمكانيات للتطوير",
      recommendations: [
        "التركيز على التحسين المستمر والتقنيات المتقدمة",
        "الاستثمار في الابتكار والبحث والتطوير",
        "تطوير الخدمات المتقدمة والذكية",
        "بناء شراكات استراتيجية"
      ]
    },
    {
      range: [81, 100],
      level: "الريادة",
      color: "green",
      description: "مستوى ممتاز من النضج الرقمي",
      recommendations: [
        "الحفاظ على الريادة من خلال الابتكار المستمر",
        "تصدير الخبرات والحلول للآخرين",
        "قيادة التطوير في التقنيات المستقبلية",
        "بناء شراكات عالمية في البحث والتطوير"
      ]
    }
  ];

  const handleAssessmentTypeSelect = (type) => {
    setAssessmentType(type);
    setCurrentStep('assessment');
    setCurrentDimension(0);
    setAnswers({});
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const dimensionId = dimensions[currentDimension].id;
    const newAnswers = {
      ...answers,
      [`${dimensionId}_${questionIndex}`]: answerIndex
    };
    setAnswers(newAnswers);

    const currentDimensionQuestions = quickQuestions[dimensionId];
    if (questionIndex < currentDimensionQuestions.length - 1) {
      // Move to next question in same dimension
      return;
    } else if (currentDimension < dimensions.length - 1) {
      // Move to next dimension
      setCurrentDimension(currentDimension + 1);
    } else {
      // Calculate results
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers) => {
    let totalScore = 0;
    let maxScore = 0;
    const dimensionScores = {};

    dimensions.forEach(dimension => {
      const dimensionQuestions = quickQuestions[dimension.id];
      let dimensionScore = 0;
      let dimensionMaxScore = 0;

      dimensionQuestions.forEach((question, qIndex) => {
        const answerKey = `${dimension.id}_${qIndex}`;
        const answerIndex = finalAnswers[answerKey];
        if (answerIndex !== undefined) {
          dimensionScore += question.scores[answerIndex];
        }
        dimensionMaxScore += Math.max(...question.scores);
      });

      const dimensionPercentage = Math.round((dimensionScore / dimensionMaxScore) * 100);
      dimensionScores[dimension.id] = {
        score: dimensionScore,
        maxScore: dimensionMaxScore,
        percentage: dimensionPercentage,
        weightedScore: (dimensionPercentage * dimension.weight) / 100
      };

      totalScore += dimensionScores[dimension.id].weightedScore;
      maxScore += dimension.weight;
    });

    const overallPercentage = Math.round(totalScore);
    const maturityLevel = maturityLevels.find(level => 
      overallPercentage >= level.range[0] && overallPercentage <= level.range[1]
    );

    setResults({
      overallPercentage,
      maturityLevel,
      dimensionScores,
      totalQuestions: Object.keys(finalAnswers).length
    });

    setCurrentStep('results');
  };

  const resetAssessment = () => {
    setCurrentStep('intro');
    setAssessmentType('');
    setCurrentDimension(0);
    setAnswers({});
    setResults(null);
  };

  if (currentStep === 'intro') {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            📊 أداة تقييم النضج الرقمي
          </h2>
          <p className="text-gray-600 text-lg">
            اكتشف مستوى النضج الرقمي لمؤسستك أو دولتك واحصل على توصيات مخصصة للتطوير
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries(assessmentTypes).map(([key, type]) => (
            <div
              key={key}
              onClick={() => handleAssessmentTypeSelect(key)}
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all duration-200"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>⏱️ {type.duration}</span>
                  <span>❓ {type.questions} سؤال</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-3">ما ستحصل عليه:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-700">
            <ul className="space-y-2">
              <li>• تقييم شامل لـ 5 أبعاد رئيسية</li>
              <li>• نسبة مئوية دقيقة لمستوى النضج</li>
              <li>• تحديد نقاط القوة والضعف</li>
            </ul>
            <ul className="space-y-2">
              <li>• توصيات عملية للتطوير</li>
              <li>• مقارنة مع أفضل الممارسات</li>
              <li>• خطة عمل مقترحة</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'assessment') {
    const currentDim = dimensions[currentDimension];
    const currentQuestions = quickQuestions[currentDim.id];
    const progress = ((currentDimension + 1) / dimensions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-blue-800">
              تقييم النضج الرقمي
            </h2>
            <span className="text-gray-600">
              البُعد {currentDimension + 1} من {dimensions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl ml-3">{currentDim.icon}</span>
              <h3 className="text-xl font-bold text-blue-800">
                {currentDim.title}
              </h3>
            </div>
            <p className="text-blue-700">
              {currentDim.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {currentQuestions.map((question, qIndex) => {
            const answerKey = `${currentDim.id}_${qIndex}`;
            const selectedAnswer = answers[answerKey];

            return (
              <div key={qIndex} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {qIndex + 1}. {question.question}
                </h4>
                <div className="space-y-2">
                  {question.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleAnswerSelect(qIndex, optIndex)}
                      className={`w-full p-3 text-right border-2 rounded-lg transition-all duration-200 ${
                        selectedAnswer === optIndex
                          ? 'border-blue-500 bg-blue-100 text-blue-800'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={resetAssessment}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            إعادة البدء
          </button>
          <div className="text-sm text-gray-500">
            أجب على جميع الأسئلة للانتقال للبُعد التالي
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'results') {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            📈 نتائج تقييم النضج الرقمي
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {results.overallPercentage}%
            </div>
            <div className="text-2xl font-semibold text-gray-800 mb-2">
              مستوى النضج: {results.maturityLevel.level}
            </div>
            <p className="text-gray-700 text-lg">
              {results.maturityLevel.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              تفصيل النتائج حسب الأبعاد
            </h3>
            <div className="space-y-4">
              {dimensions.map(dimension => {
                const score = results.dimensionScores[dimension.id];
                return (
                  <div key={dimension.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-xl ml-2">{dimension.icon}</span>
                        <span className="font-semibold text-gray-800">
                          {dimension.title}
                        </span>
                      </div>
                      <span className="font-bold text-blue-600">
                        {score.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${score.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              توصيات للتطوير
            </h3>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {results.maturityLevel.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 ml-2 font-bold">•</span>
                    <span className="text-yellow-800">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-3">
            الخطوات التالية المقترحة:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-700">
            <div>
              <h5 className="font-semibold mb-2">قصير المدى (3-6 أشهر)</h5>
              <ul className="text-sm space-y-1">
                <li>• تحليل الفجوات الحالية</li>
                <li>• وضع خطة عمل مفصلة</li>
                <li>• تحديد الأولويات</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">متوسط المدى (6-18 شهر)</h5>
              <ul className="text-sm space-y-1">
                <li>• تنفيذ المبادرات الأساسية</li>
                <li>• تطوير القدرات</li>
                <li>• قياس التقدم</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">طويل المدى (1-3 سنوات)</h5>
              <ul className="text-sm space-y-1">
                <li>• تحقيق الأهداف الاستراتيجية</li>
                <li>• التحسين المستمر</li>
                <li>• الريادة والابتكار</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={resetAssessment}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            إعادة التقييم
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            طباعة النتائج
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default AssessmentTool;


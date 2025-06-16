
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Brain, 
  Eye, 
  MessageCircleQuestion, 
  BookOpen, 
  Bot,
  Microscope, 
  Wand2, 
  Languages, 
  Lightbulb, 
  Beaker,
  ArrowRight,
  HelpCircle,
  Calculator,
  Mic,
  Network,
  TrendingUp,
  FileText,
  Calendar,
  Smile,
  Users,
  Download
} from 'lucide-react';

const features = [
  {
    id: 'vqa',
    title: 'الإجابة على الأسئلة المرئية',
    description: 'ارفع الصور واسأل أسئلة للحصول على تفسيرات مدعومة بالذكاء الاصطناعي',
    icon: MessageCircleQuestion,
    color: 'blue',
    path: '/vqa'
  },
  {
    id: 'homework',
    title: 'مساعد الواجبات المنزلية',
    description: 'ارفع الملاحظات المكتوبة بخط اليد للحصول على تحليل فوري وحلول',
    icon: BookOpen,
    color: 'green',
    path: '/homework'
  },
  {
    id: 'chatbot',
    title: 'روبوت المحادثة LLaVA',
    description: 'تحدث مع الذكاء الاصطناعي حول الصور والتعلم المرئي',
    icon: Bot,
    color: 'purple',
    path: '/chatbot'
  },
  {
    id: 'interactive',
    title: 'التعلم التفاعلي',
    description: 'استكشف الصور التعليمية واسأل أسئلة حول ما تراه',
    icon: Microscope,
    color: 'purple',
    path: '/interactive'
  },
  {
    id: 'generator',
    title: 'مولد المحتوى المرئي',
    description: 'أنشئ رسوماً بيانية ورسوماً توضيحية تعليمية من الأوصاف النصية',
    icon: Wand2,
    color: 'orange',
    path: '/generator'
  },
  {
    id: 'language',
    title: 'تعلم اللغات',
    description: 'تدرب على وصف الصور بلغات أجنبية',
    icon: Languages,
    color: 'teal',
    path: '/language'
  },
  {
    id: 'explanation',
    title: 'الشرح المرئي',
    description: 'ارفع صفحات الكتب المدرسية للحصول على ملخصات مبسطة وأسئلة دراسية',
    icon: Lightbulb,
    color: 'indigo',
    path: '/explanation'
  },
  {
    id: 'lab',
    title: 'تحليل المختبر',
    description: 'ارفع صور المختبر لتحليل التجارب والحصول على ملاحظات',
    icon: Beaker,
    color: 'red',
    path: '/lab'
  },
  {
    id: 'quiz',
    title: 'مولد الاختبارات',
    description: 'أنشئ اختبارات تلقائياً من صفحات الكتب المدرسية أو الملاحظات (اختيار متعدد، إجابة قصيرة، صحيح/خطأ)',
    icon: HelpCircle,
    color: 'cyan',
    path: '/quiz'
  },
  {
    id: 'math-solver',
    title: 'حلال الرياضيات خطوة بخطوة',
    description: 'احصل على حلول مفصلة خطوة بخطوة لمسائل الرياضيات المكتوبة بخط اليد أو المطبوعة',
    icon: Calculator,
    color: 'emerald',
    path: '/math-solver'
  },
  {
    id: 'voice',
    title: 'الإدخال الصوتي والقراءة بصوت عالٍ',
    description: 'اسأل أسئلة بصوتك واستمع إلى إجابات الذكاء الاصطناعي مقروءة بصوت عالٍ',
    icon: Mic,
    color: 'pink',
    path: '/voice'
  },
  {
    id: 'concept-visualizer',
    title: 'مُصور المفاهيم',
    description: 'أنشئ خرائط مفاهيم ورسوماً بيانية لأي موضوع أو مصطلح',
    icon: Network,
    color: 'violet',
    path: '/concept-visualizer'
  },
  {
    id: 'progress-tracker',
    title: 'متتبع تقدم الواجبات',
    description: 'تتبع تقدمك في التعلم مع تقارير أسبوعية وتحليل نقاط الضعف',
    icon: TrendingUp,
    color: 'amber',
    path: '/progress-tracker'
  },
  {
    id: 'past-paper',
    title: 'محلل الأوراق السابقة',
    description: 'ارفع أوراق الامتحانات للحصول على أسئلة مصنفة وإجابات مقترحة',
    icon: FileText,
    color: 'slate',
    path: '/past-paper'
  },
  {
    id: 'daily-challenge',
    title: 'التحدي اليومي / روبوت المعلم الذكي',
    description: 'احصل على دروس مصغرة وتحديات يومية لبناء عادات تعلم مستمرة',
    icon: Calendar,
    color: 'rose',
    path: '/daily-challenge'
  },
  {
    id: 'explain-simple',
    title: 'اشرح لي كأنني طفل في الخامسة',
    description: 'احصل على تفسيرات بسيطة جداً للمفاهيم المعقدة، مع إزالة كل المصطلحات الصعبة',
    icon: Smile,
    color: 'lime',
    path: '/explain-simple'
  },
  {
    id: 'collaboration',
    title: 'لوحة التعاون متعددة الطلاب',
    description: 'تعلم مع طلاب آخرين حول مواضيع ومناقشات مشتركة',
    icon: Users,
    color: 'sky',
    path: '/collaboration'
  },
  {
    id: 'offline-pack',
    title: 'تصدير حزمة الدراسة غير المتصلة',
    description: 'حمّل ملخصات وصور واختبارات مُنشأة بالذكاء الاصطناعي للدراسة بدون إنترنت',
    icon: Download,
    color: 'neutral',
    path: '/offline-pack'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: 'border-blue-200/50 hover:border-blue-300 text-blue-700 bg-blue-50/30',
    green: 'border-green-200/50 hover:border-green-300 text-green-700 bg-green-50/30',
    purple: 'border-purple-200/50 hover:border-purple-300 text-purple-700 bg-purple-50/30',
    orange: 'border-orange-200/50 hover:border-orange-300 text-orange-700 bg-orange-50/30',
    teal: 'border-teal-200/50 hover:border-teal-300 text-teal-700 bg-teal-50/30',
    indigo: 'border-indigo-200/50 hover:border-indigo-300 text-indigo-700 bg-indigo-50/30',
    red: 'border-red-200/50 hover:border-red-300 text-red-700 bg-red-50/30',
    cyan: 'border-cyan-200/50 hover:border-cyan-300 text-cyan-700 bg-cyan-50/30',
    emerald: 'border-emerald-200/50 hover:border-emerald-300 text-emerald-700 bg-emerald-50/30',
    pink: 'border-pink-200/50 hover:border-pink-300 text-pink-700 bg-pink-50/30',
    violet: 'border-violet-200/50 hover:border-violet-300 text-violet-700 bg-violet-50/30',
    amber: 'border-amber-200/50 hover:border-amber-300 text-amber-700 bg-amber-50/30',
    slate: 'border-slate-200/50 hover:border-slate-300 text-slate-700 bg-slate-50/30',
    rose: 'border-rose-200/50 hover:border-rose-300 text-rose-700 bg-rose-50/30',
    lime: 'border-lime-200/50 hover:border-lime-300 text-lime-700 bg-lime-50/30',
    sky: 'border-sky-200/50 hover:border-sky-300 text-sky-700 bg-sky-50/30',
    neutral: 'border-neutral-200/50 hover:border-neutral-300 text-neutral-700 bg-neutral-50/30'
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduVision AI
                </h1>
                <p className="text-sm text-gray-600">مساعد التعلم المرئي</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
              <Eye className="h-4 w-4" />
              <span>مدعوم بتقنية الرؤية واللغة</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            تعلم بذكاء مع الذكاء الاصطناعي المرئي
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ارفع الصور، اسأل أسئلة، واحصل على تفسيرات ذكية مدعومة بنماذج الرؤية واللغة المتقدمة
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Link key={feature.id} to={feature.path}>
                <Card className={`bg-white/70 backdrop-blur-sm ${getColorClasses(feature.color)} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full`}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <IconComponent className="h-5 w-5" />
                        <span className="text-sm font-semibold">{feature.title}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 opacity-60 rotate-180" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-blue-200/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-2">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold">EduVision AI</span>
            </div>
            <p className="text-sm">تمكين التعليم من خلال تقنية الذكاء الاصطناعي المرئي</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

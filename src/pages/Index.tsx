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
  Quiz,
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
    title: 'Visual Question Answering',
    description: 'Upload images and ask questions to get AI-powered explanations',
    icon: MessageCircleQuestion,
    color: 'blue',
    path: '/vqa'
  },
  {
    id: 'homework',
    title: 'Homework Helper',
    description: 'Upload handwritten notes for instant analysis and solutions',
    icon: BookOpen,
    color: 'green',
    path: '/homework'
  },
  {
    id: 'chatbot',
    title: 'LLaVA Chatbot',
    description: 'Chat with AI about images and visual learning',
    icon: Bot,
    color: 'purple',
    path: '/chatbot'
  },
  {
    id: 'interactive',
    title: 'Interactive Learning',
    description: 'Explore educational images and ask questions about what you see',
    icon: Microscope,
    color: 'purple',
    path: '/interactive'
  },
  {
    id: 'generator',
    title: 'Visual Content Generator',
    description: 'Generate educational diagrams and illustrations from text descriptions',
    icon: Wand2,
    color: 'orange',
    path: '/generator'
  },
  {
    id: 'language',
    title: 'Language Learning',
    description: 'Practice describing images in foreign languages',
    icon: Languages,
    color: 'teal',
    path: '/language'
  },
  {
    id: 'explanation',
    title: 'Visual Explanation',
    description: 'Upload textbook pages for simplified summaries and study questions',
    icon: Lightbulb,
    color: 'indigo',
    path: '/explanation'
  },
  {
    id: 'lab',
    title: 'Lab Analysis',
    description: 'Upload lab photos for experiment analysis and feedback',
    icon: Beaker,
    color: 'red',
    path: '/lab'
  },
  {
    id: 'quiz',
    title: 'Quiz Generator',
    description: 'Auto-generate quizzes from textbook pages or notes (MCQs, short answer, true/false)',
    icon: Quiz,
    color: 'cyan',
    path: '/quiz'
  },
  {
    id: 'math-solver',
    title: 'Step-by-Step Math Solver',
    description: 'Get detailed step-by-step solutions for handwritten or typed math problems',
    icon: Calculator,
    color: 'emerald',
    path: '/math-solver'
  },
  {
    id: 'voice',
    title: 'Voice Input & Read-Aloud',
    description: 'Ask questions with your voice and hear AI answers read aloud',
    icon: Mic,
    color: 'pink',
    path: '/voice'
  },
  {
    id: 'concept-visualizer',
    title: 'Concept Visualizer',
    description: 'Generate concept maps and diagrams for any topic or term',
    icon: Network,
    color: 'violet',
    path: '/concept-visualizer'
  },
  {
    id: 'progress-tracker',
    title: 'Homework Progress Tracker',
    description: 'Track your learning progress with weekly reports and weak point analysis',
    icon: TrendingUp,
    color: 'amber',
    path: '/progress-tracker'
  },
  {
    id: 'past-paper',
    title: 'Past Paper Analyzer',
    description: 'Upload exam papers for categorized questions and suggested answers',
    icon: FileText,
    color: 'slate',
    path: '/past-paper'
  },
  {
    id: 'daily-challenge',
    title: 'Daily Challenge / AI Tutor Bot',
    description: 'Get daily mini-lessons and challenges to build consistent learning habits',
    icon: Calendar,
    color: 'rose',
    path: '/daily-challenge'
  },
  {
    id: 'explain-simple',
    title: 'Explain Like I\'m 5',
    description: 'Get very simple explanations for complex concepts, removing all jargon',
    icon: Smile,
    color: 'lime',
    path: '/explain-simple'
  },
  {
    id: 'collaboration',
    title: 'Multi-Student Collaboration Board',
    description: 'Learn together with other students on shared topics and discussions',
    icon: Users,
    color: 'sky',
    path: '/collaboration'
  },
  {
    id: 'offline-pack',
    title: 'Offline Study Pack Export',
    description: 'Download AI-generated summaries, images, and quizzes for offline studying',
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EduVision AI
                </h1>
                <p className="text-sm text-gray-600">Visual Learning Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Eye className="h-4 w-4" />
              <span>Vision-Language Powered</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Smarter with AI Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload images, ask questions, and get intelligent explanations powered by advanced vision-language models
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
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5" />
                        <span className="text-sm font-semibold">{feature.title}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 opacity-60" />
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
            <div className="flex items-center justify-center space-x-2 mb-2">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold">EduVision AI</span>
            </div>
            <p className="text-sm">Empowering education through visual AI technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

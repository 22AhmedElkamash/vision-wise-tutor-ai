
import React from 'react';
import { VQASection } from '@/components/VQASection';
import { HomeworkHelp } from '@/components/HomeworkHelp';
import { InteractiveLearning } from '@/components/InteractiveLearning';
import { VisualContentGenerator } from '@/components/VisualContentGenerator';
import { LanguageLearning } from '@/components/LanguageLearning';
import { VisualExplanation } from '@/components/VisualExplanation';
import { LabAnalysis } from '@/components/LabAnalysis';
import { GraduationCap, Brain, Eye } from 'lucide-react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <VQASection />
          <HomeworkHelp />
          <InteractiveLearning />
          <VisualContentGenerator />
          <LanguageLearning />
          <VisualExplanation />
          <LabAnalysis />
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

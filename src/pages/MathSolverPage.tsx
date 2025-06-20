
import React from 'react';
import { Link } from 'react-router-dom';
import { MathSolver } from '@/components/MathSolver';
import { ArrowLeft, Brain } from 'lucide-react';

const MathSolverPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5 rotate-180" />
              <span>العودة للرئيسية</span>
            </Link>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                حلال الرياضيات خطوة بخطوة
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MathSolver />
      </div>
    </div>
  );
};

export default MathSolverPage;

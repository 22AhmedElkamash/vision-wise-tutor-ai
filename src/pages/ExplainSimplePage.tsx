
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Smile } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExplainSimplePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Explain Like I'm 5
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white/70 backdrop-blur-sm border-lime-200/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lime-700">
              <Smile className="h-5 w-5" />
              <span>Explain Like I'm 5</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Get very simple explanations for complex concepts, removing all jargon.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExplainSimplePage;

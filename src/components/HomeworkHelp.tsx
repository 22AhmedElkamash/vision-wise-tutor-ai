
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const HomeworkHelp = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(`**Problem Identified:** Quadratic equation: x² - 5x + 6 = 0

**Solution Steps:**
1. Factor the equation: (x - 2)(x - 3) = 0
2. Set each factor to zero: x - 2 = 0 or x - 3 = 0
3. Solve: x = 2 or x = 3

**Verification:** Substitute back into original equation to confirm both solutions work.

**Key Concept:** This demonstrates factoring quadratic expressions where the coefficient of x² is 1.`);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-green-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-green-700">
          <BookOpen className="h-5 w-5" />
          <span>Homework Helper</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Upload handwritten notes for instant analysis and solutions</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="Upload handwritten notes"
        />

        <Button 
          onClick={handleAnalyze}
          disabled={!uploadedImage || isAnalyzing}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
        >
          {isAnalyzing ? 'Analyzing Notes...' : 'Analyze & Solve'}
        </Button>

        {analysis && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="h-4 w-4 text-green-600" />
              <h4 className="font-medium text-green-800">Analysis Result:</h4>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{analysis}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

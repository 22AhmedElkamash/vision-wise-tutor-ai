
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Lightbulb, HelpCircle } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const VisualExplanation = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [explanation, setExplanation] = useState('');

  const handleAnalyze = async () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setExplanation(`**📖 Summary:**
This textbook page covers the fundamental principles of photosynthesis, explaining how plants convert light energy into chemical energy.

**🔑 Key Concepts:**
• **Light-dependent reactions** occur in the thylakoids
• **Calvin cycle** takes place in the stroma
• **Chlorophyll** absorbs light energy
• **ATP and NADPH** are energy carriers

**💡 Simplified Explanation:**
Think of photosynthesis like a solar panel system in plants. Just like solar panels convert sunlight into electricity, leaves convert sunlight into food (glucose) using water and carbon dioxide.

**❓ Study Questions:**
1. What are the two main stages of photosynthesis?
2. Where does each stage occur in the chloroplast?
3. What role does chlorophyll play in capturing light?
4. How do plants use the glucose they produce?`);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-indigo-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-indigo-700">
          <Lightbulb className="h-5 w-5" />
          <span>Visual Explanation</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Upload textbook pages for simplified summaries and study questions</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="Upload textbook page or screenshot"
        />

        <Button 
          onClick={handleAnalyze}
          disabled={!uploadedImage || isAnalyzing}
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
        >
          {isAnalyzing ? 'Processing...' : 'Summarize & Explain'}
        </Button>

        {explanation && (
          <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="flex items-center space-x-2 mb-3">
              <FileText className="h-4 w-4 text-indigo-600" />
              <h4 className="font-medium text-indigo-800">Detailed Explanation:</h4>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{explanation}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

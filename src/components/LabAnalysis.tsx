
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flask, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const LabAnalysis = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState('');

  const handleAnalyzeLab = async () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysis(`**🔬 Experiment Analysis: Chemical Reaction Lab**

**✅ Correct Procedures Identified:**
• Proper use of safety goggles and gloves
• Correct measurement of reactants (2:1 ratio)
• Appropriate heat application technique

**⚠️ Areas for Improvement:**
• Beaker positioning could be more stable
• Consider using a magnetic stirrer for better mixing
• Temperature monitoring needs to be more frequent

**🧪 Expected Results:**
Based on the setup, you should observe:
• Color change from clear to blue-green
• Slight temperature increase (exothermic reaction)
• Formation of precipitate after 5-10 minutes

**📋 Next Steps:**
1. Record observations every 2 minutes
2. Measure final temperature
3. Filter and weigh the precipitate
4. Calculate percent yield

**💡 Learning Points:**
This experiment demonstrates double displacement reactions and stoichiometry principles.`);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-red-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-red-700">
          <Flask className="h-5 w-5" />
          <span>Lab Analysis</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Upload lab photos for experiment analysis and feedback</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="Upload lab photo or experiment setup"
        />

        <Button 
          onClick={handleAnalyzeLab}
          disable={!uploadedImage || isAnalyzing}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
        >
          {isAnalyzing ? 'Analyzing Lab...' : 'Analyze Experiment'}
        </Button>

        {analysis && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center space-x-2 mb-3">
              <Info className="h-4 w-4 text-red-600" />
              <h4 className="font-medium text-red-800">Lab Analysis Report:</h4>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{analysis}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

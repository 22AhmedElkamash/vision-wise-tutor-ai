
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, Target } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const MathSolver = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [solution, setSolution] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [equation, setEquation] = useState('');

  const handleSolve = async () => {
    if (!uploadedImage && !equation.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setSolution(`**Problem:** 2x + 5 = 13

**Step-by-Step Solution:**

**Step 1:** Subtract 5 from both sides
2x + 5 - 5 = 13 - 5
2x = 8

**Step 2:** Divide both sides by 2
2x ÷ 2 = 8 ÷ 2
x = 4

**Step 3:** Verification
Substitute x = 4 back into the original equation:
2(4) + 5 = 8 + 5 = 13 ✓

**Final Answer:** x = 4

**Key Concepts Used:**
- Inverse operations (subtraction and division)
- Equation balancing principle
- Solution verification`);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-emerald-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-emerald-700">
          <Calculator className="h-5 w-5" />
          <span>Step-by-Step Math Solver</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Get detailed step-by-step solutions for handwritten or typed math problems</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Type your equation (optional)</label>
          <Input
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            placeholder="e.g., 2x + 5 = 13"
            className="border-emerald-200 focus:border-emerald-400"
          />
        </div>

        <div className="text-center text-sm text-gray-500">OR</div>

        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="Upload handwritten math problem"
        />

        <Button 
          onClick={handleSolve}
          disabled={(!uploadedImage && !equation.trim()) || isAnalyzing}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
        >
          {isAnalyzing ? 'Solving...' : 'Solve Step-by-Step'}
        </Button>

        {solution && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-emerald-600" />
              <h4 className="font-medium text-emerald-800">Solution:</h4>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{solution}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

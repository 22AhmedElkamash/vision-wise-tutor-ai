
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, CheckCircle2 } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const MathSolver = () => {
  const [isSolving, setIsSolving] = useState(false);
  const [solution, setSolution] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleSolve = async () => {
    if (!uploadedImage) return;
    
    setIsSolving(true);
    // Simulate API call
    setTimeout(() => {
      setSolution({
        problem: "2x + 5 = 13",
        steps: [
          {
            step: 1,
            description: "اطرح 5 من كلا الطرفين",
            equation: "2x + 5 - 5 = 13 - 5",
            result: "2x = 8"
          },
          {
            step: 2,
            description: "اقسم كلا الطرفين على 2",
            equation: "2x ÷ 2 = 8 ÷ 2",
            result: "x = 4"
          }
        ],
        verification: "التحقق: 2(4) + 5 = 8 + 5 = 13 ✓",
        answer: "x = 4"
      });
      setIsSolving(false);
    }, 3000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-emerald-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-emerald-700">
          <Calculator className="h-5 w-5" />
          <span>حلال الرياضيات خطوة بخطوة</span>
        </CardTitle>
        <p className="text-sm text-gray-600">احصل على حلول مفصلة خطوة بخطوة لمسائل الرياضيات المكتوبة بخط اليد أو المطبوعة</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="ارفع مسألة رياضية"
        />

        <Button 
          onClick={handleSolve}
          disabled={!uploadedImage || isSolving}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
        >
          {isSolving ? 'جاري الحل...' : 'حل المسألة'}
        </Button>

        {solution && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <h4 className="font-medium text-emerald-800">الحل خطوة بخطوة:</h4>
            </div>
            
            <div className="mb-4 p-3 bg-white rounded border">
              <h5 className="font-medium text-gray-800 mb-2">المسألة:</h5>
              <p className="text-lg font-mono">{solution.problem}</p>
            </div>

            <div className="space-y-3 mb-4">
              {solution.steps.map((step: any, idx: number) => (
                <div key={idx} className="p-3 bg-white rounded border">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm font-medium">
                      الخطوة {step.step}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">{step.description}</p>
                  <p className="font-mono text-gray-800 mb-1">{step.equation}</p>
                  <p className="font-mono font-bold text-emerald-700">{step.result}</p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-green-100 rounded border border-green-300">
              <p className="text-green-800 font-medium mb-2">الإجابة النهائية:</p>
              <p className="text-xl font-bold text-green-900">{solution.answer}</p>
              <p className="text-sm text-green-700 mt-2">{solution.verification}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

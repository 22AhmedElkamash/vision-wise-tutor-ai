
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
      setAnalysis(`**المسألة المُحددة:** معادلة تربيعية: س² - 5س + 6 = 0

**خطوات الحل:**
1. تحليل المعادلة إلى عوامل: (س - 2)(س - 3) = 0
2. جعل كل عامل يساوي صفر: س - 2 = 0 أو س - 3 = 0
3. الحل: س = 2 أو س = 3

**التحقق:** عوّض القيم في المعادلة الأصلية للتأكد من صحة الحلين.

**المفهوم الأساسي:** هذا يوضح تحليل التعبيرات التربيعية حيث معامل س² يساوي 1.`);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-green-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-green-700">
          <BookOpen className="h-5 w-5" />
          <span>مساعد الواجبات المنزلية</span>
        </CardTitle>
        <p className="text-sm text-gray-600">ارفع الملاحظات المكتوبة بخط اليد للحصول على تحليل فوري وحلول</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="ارفع الملاحظات المكتوبة بخط اليد"
        />

        <Button 
          onClick={handleAnalyze}
          disabled={!uploadedImage || isAnalyzing}
          className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
        >
          {isAnalyzing ? 'جاري تحليل الملاحظات...' : 'حلل واحل'}
        </Button>

        {analysis && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 space-x-reverse mb-2">
              <FileText className="h-4 w-4 text-green-600" />
              <h4 className="font-medium text-green-800">نتيجة التحليل:</h4>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{analysis}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};


import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Upload, MessageCircleQuestion, Image as ImageIcon } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const VQASection = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleAskAI = async () => {
    if (!uploadedImage || !question.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnswer("بناءً على الصورة المرفوعة، أستطيع أن أرى أن هذا يبدو وكأنه رسم بياني رياضي يوضح العلاقات الهندسية. السؤال الذي طرحته يتعلق بقياسات الزوايا، والإجابة ستكون 45 درجة بناءً على الزوايا المتتامة الموضحة في الشكل.");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-blue-700">
          <MessageCircleQuestion className="h-5 w-5" />
          <span>الإجابة على الأسئلة المرئية</span>
        </CardTitle>
        <p className="text-sm text-gray-600">ارفع الصور واسأل أسئلة للحصول على تفسيرات مدعومة بالذكاء الاصطناعي</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="ارفع رسماً بيانياً رياضياً/علمياً"
        />
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">سؤالك</label>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="ما الزاوية التي يوضحها هذا الرسم البياني؟"
            className="border-blue-200 focus:border-blue-400"
          />
        </div>

        <Button 
          onClick={handleAskAI}
          disabled={!uploadedImage || !question.trim() || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
        >
          {isLoading ? 'جاري التحليل...' : 'اسأل الذكاء الاصطناعي'}
        </Button>

        {answer && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">إجابة الذكاء الاصطناعي:</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

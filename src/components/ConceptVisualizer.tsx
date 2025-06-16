
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Network, Eye, Download } from 'lucide-react';

export const ConceptVisualizer = () => {
  const [concept, setConcept] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [visualization, setVisualization] = useState<any>(null);

  const handleGenerate = async () => {
    if (!concept.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setVisualization({
        title: concept,
        centralConcept: concept,
        relatedConcepts: [
          { name: 'الضوء', connection: 'يحتاج إلى' },
          { name: 'الماء', connection: 'يحتاج إلى' },
          { name: 'ثاني أكسيد الكربون', connection: 'يستهلك' },
          { name: 'الأكسجين', connection: 'ينتج' },
          { name: 'الجلوكوز', connection: 'ينتج' },
          { name: 'الكلوروفيل', connection: 'يتطلب' }
        ],
        description: 'عملية التمثيل الضوئي هي العملية التي تستخدمها النباتات لتحويل الضوء والماء وثاني أكسيد الكربون إلى طاقة (جلوكوز) وأكسجين.',
        keyPoints: [
          'تحدث في الأوراق الخضراء',
          'تتطلب وجود الكلوروفيل',
          'تنتج الأكسجين كناتج جانبي',
          'أساسية لدورة الحياة على الأرض'
        ]
      });
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-violet-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-violet-700">
          <Network className="h-5 w-5" />
          <span>مُصور المفاهيم</span>
        </CardTitle>
        <p className="text-sm text-gray-600">أنشئ خرائط مفاهيم ورسوماً بيانية لأي موضوع أو مصطلح</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">المفهوم أو الموضوع</label>
          <Input
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="مثال: التمثيل الضوئي"
            className="border-violet-200 focus:border-violet-400"
          />
        </div>

        <Button 
          onClick={handleGenerate}
          disabled={!concept.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800"
        >
          {isGenerating ? 'جاري إنشاء الخريطة...' : 'أنشئ خريطة المفاهيم'}
        </Button>

        {visualization && (
          <div className="mt-4 p-4 bg-violet-50 rounded-lg border border-violet-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Eye className="h-4 w-4 text-violet-600" />
                <h4 className="font-medium text-violet-800">خريطة المفاهيم: {visualization.title}</h4>
              </div>
              <Button size="sm" variant="outline" className="border-violet-300">
                <Download className="h-4 w-4 ml-1" />
                تحميل
              </Button>
            </div>

            {/* Central Concept */}
            <div className="text-center mb-6">
              <div className="inline-block bg-violet-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
                {visualization.centralConcept}
              </div>
            </div>

            {/* Related Concepts */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {visualization.relatedConcepts.map((item: any, idx: number) => (
                <div key={idx} className="text-center">
                  <div className="bg-white border-2 border-violet-300 rounded-lg p-3 hover:bg-violet-50 transition-colors">
                    <div className="font-medium text-gray-800">{item.name}</div>
                    <div className="text-xs text-violet-600 mt-1">{item.connection}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white p-4 rounded-lg border mb-4">
              <h5 className="font-medium text-gray-800 mb-2">الوصف:</h5>
              <p className="text-gray-700 text-sm leading-relaxed">{visualization.description}</p>
            </div>

            {/* Key Points */}
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-medium text-gray-800 mb-3">النقاط الرئيسية:</h5>
              <ul className="space-y-2">
                {visualization.keyPoints.map((point: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-2 space-x-reverse">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

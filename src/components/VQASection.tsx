
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
      setAnswer("Based on the uploaded image, I can see this appears to be a mathematical diagram showing geometric relationships. The question you've asked relates to the angle measurements, and the answer would be 45 degrees based on the complementary angles shown in the figure.");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-blue-700">
          <MessageCircleQuestion className="h-5 w-5" />
          <span>Visual Question Answering</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Upload images and ask questions to get AI-powered explanations</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="Upload math/science diagram"
        />
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Your Question</label>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What angle does this diagram show?"
            className="border-blue-200 focus:border-blue-400"
          />
        </div>

        <Button 
          onClick={handleAskAI}
          disabled={!uploadedImage || !question.trim() || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
        >
          {isLoading ? 'Analyzing...' : 'Ask AI'}
        </Button>

        {answer && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">AI Response:</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

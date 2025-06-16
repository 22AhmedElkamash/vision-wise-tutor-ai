
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Microscope, Palette, Map, Shuffle } from 'lucide-react';

const sampleImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475', subject: 'Biology', title: 'Cell Structure' },
  { id: 2, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', subject: 'Geography', title: 'Mountain Formation' },
  { id: 3, url: 'https://images.unsplash.com/photo-1500673922987-e212871fec22', subject: 'Art', title: 'Light & Shadow' }
];

export const InteractiveLearning = () => {
  const [currentImage, setCurrentImage] = useState(sampleImages[0]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * sampleImages.length);
    setCurrentImage(sampleImages[randomIndex]);
    setAnswer('');
  };

  const handleAskQuestion = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setAnswer(`Looking at this ${currentImage.subject.toLowerCase()} image of ${currentImage.title.toLowerCase()}, I can explain that ${question.toLowerCase().includes('how') ? 'the process involves' : 'this shows'} key educational concepts. The visual elements demonstrate important principles that are fundamental to understanding this subject area.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-purple-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-purple-700">
          <Microscope className="h-5 w-5" />
          <span>Interactive Learning</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Explore educational images and ask questions about what you see</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <img 
            src={currentImage.url} 
            alt={currentImage.title}
            className="w-full h-48 object-cover rounded-lg border border-purple-200"
          />
          <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-md text-xs font-medium">
            {currentImage.subject}
          </div>
          <Button
            onClick={getRandomImage}
            size="sm"
            variant="outline"
            className="absolute top-2 right-2 bg-white/80 border-purple-200"
          >
            <Shuffle className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Ask about this image</label>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="How does this process work?"
            className="border-purple-200 focus:border-purple-400"
          />
        </div>

        <Button 
          onClick={handleAskQuestion}
          disabled={!question.trim() || isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
        >
          {isLoading ? 'Analyzing...' : 'Get Explanation'}
        </Button>

        {answer && (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">Educational Explanation:</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

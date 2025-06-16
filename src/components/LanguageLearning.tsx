
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Languages, Star, RefreshCw } from 'lucide-react';

const promptImages = [
  { url: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901', description: 'A cat resting on fabric' },
  { url: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23', description: 'Animals in nature' },
  { url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7', description: 'Person with technology' }
];

export const LanguageLearning = () => {
  const [currentImage, setCurrentImage] = useState(promptImages[0]);
  const [language, setLanguage] = useState('spanish');
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);

  const getNewImage = () => {
    const randomIndex = Math.floor(Math.random() * promptImages.length);
    setCurrentImage(promptImages[randomIndex]);
    setDescription('');
    setFeedback('');
  };

  const handleEvaluate = async () => {
    if (!description.trim()) return;
    
    setIsEvaluating(true);
    setTimeout(() => {
      const score = Math.floor(Math.random() * 3) + 3; // Random score 3-5
      setFeedback(`**Score: ${score}/5 ⭐**

**Strengths:**
- Good vocabulary usage
- Clear sentence structure
- Appropriate tense usage

**Suggestions for improvement:**
- Try adding more descriptive adjectives
- Consider using more complex sentence structures
- Practice gender agreement with nouns

**New vocabulary from your description:**
- "comfortable" - cómodo/a
- "peaceful" - tranquilo/a
- "relaxed environment" - ambiente relajado`);
      setIsEvaluating(false);
    }, 2000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-teal-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-teal-700">
          <Languages className="h-5 w-5" />
          <span>Language Learning</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Practice describing images in foreign languages</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <img 
            src={currentImage.url} 
            alt="Language practice prompt"
            className="w-full h-40 object-cover rounded-lg border border-teal-200"
          />
          <Button
            onClick={getNewImage}
            size="sm"
            variant="outline"
            className="absolute top-2 right-2 bg-white/80 border-teal-200"
          >
            <RefreshCw className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Target Language</label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="border-teal-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
              <SelectItem value="german">German</SelectItem>
              <SelectItem value="italian">Italian</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Describe the image</label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={`Describe what you see in ${language}...`}
            className="min-h-20 border-teal-200 focus:border-teal-400"
          />
        </div>

        <Button 
          onClick={handleEvaluate}
          disabled={!description.trim() || isEvaluating}
          className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
        >
          {isEvaluating ? 'Evaluating...' : 'Evaluate Description'}
        </Button>

        {feedback && (
          <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="h-4 w-4 text-teal-600" />
              <h4 className="font-medium text-teal-800">Feedback & Suggestions:</h4>
            </div>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{feedback}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

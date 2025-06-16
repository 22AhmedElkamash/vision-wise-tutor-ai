
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Image as ImageIcon } from 'lucide-react';

export const VisualContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate image generation
    setTimeout(() => {
      // Using a placeholder that represents a scientific diagram
      setGeneratedImage('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-orange-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-orange-700">
          <Wand2 className="h-5 w-5" />
          <span>Visual Content Generator</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Generate educational diagrams and illustrations from text descriptions</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Describe what to generate</label>
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Draw a labeled diagram of the water cycle with evaporation, condensation, and precipitation"
            className="min-h-20 border-orange-200 focus:border-orange-400"
          />
        </div>

        <Button 
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800"
        >
          {isGenerating ? 'Generating Visual...' : 'Generate Visual'}
        </Button>

        {generatedImage && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4 text-orange-600" />
              <h4 className="font-medium text-orange-800">Generated Visual:</h4>
            </div>
            <img 
              src={generatedImage} 
              alt="Generated visual content"
              className="w-full rounded-lg border border-orange-200"
            />
            <p className="text-xs text-gray-600 italic">Generated diagram based on your prompt</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

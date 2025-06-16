
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, CheckCircle2 } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

export const QuizGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [quiz, setQuiz] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!uploadedImage) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setQuiz({
        title: "Biology Quiz - Cell Structure",
        questions: [
          {
            type: "mcq",
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
            correct: 1
          },
          {
            type: "true_false",
            question: "Plant cells have cell walls.",
            correct: true
          },
          {
            type: "short_answer",
            question: "Name two organelles found in plant cells but not in animal cells."
          }
        ]
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-cyan-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-cyan-700">
          <HelpCircle className="h-5 w-5" />
          <span>Quiz Generator</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Auto-generate quizzes from textbook pages or notes (MCQs, short answer, true/false)</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ImageUpload 
          onImageUpload={setUploadedImage}
          placeholder="Upload textbook page or notes"
        />

        <Button 
          onClick={handleGenerate}
          disabled={!uploadedImage || isGenerating}
          className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800"
        >
          {isGenerating ? 'Generating Quiz...' : 'Generate Quiz'}
        </Button>

        {quiz && (
          <div className="mt-4 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle2 className="h-4 w-4 text-cyan-600" />
              <h4 className="font-medium text-cyan-800">{quiz.title}</h4>
            </div>
            <div className="space-y-4">
              {quiz.questions.map((q: any, idx: number) => (
                <div key={idx} className="bg-white p-3 rounded border">
                  <p className="font-medium text-gray-800 mb-2">Q{idx + 1}: {q.question}</p>
                  {q.type === 'mcq' && (
                    <div className="space-y-1">
                      {q.options.map((option: string, optIdx: number) => (
                        <div key={optIdx} className="text-sm text-gray-600">
                          {String.fromCharCode(65 + optIdx)}. {option}
                        </div>
                      ))}
                    </div>
                  )}
                  {q.type === 'true_false' && (
                    <div className="text-sm text-gray-600">True / False</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

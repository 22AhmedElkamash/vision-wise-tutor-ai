
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Volume2, MicOff } from 'lucide-react';

export const VoiceInteraction = () => {
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const startListening = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setTranscript("What is photosynthesis?");
      setIsListening(false);
      // Auto-generate response
      setTimeout(() => {
        setResponse("Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create glucose and release oxygen. It happens in the chloroplasts of plant cells and is essential for life on Earth.");
      }, 1000);
    }, 3000);
  };

  const playResponse = () => {
    setIsPlaying(true);
    // Simulate text-to-speech
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-pink-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-pink-700">
          <Mic className="h-5 w-5" />
          <span>Voice Input & Read-Aloud</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Ask questions with your voice and hear AI answers read aloud</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <Button 
            onClick={startListening}
            disabled={isListening}
            className={`w-32 h-32 rounded-full ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800'}`}
          >
            {isListening ? (
              <MicOff className="h-12 w-12 animate-pulse" />
            ) : (
              <Mic className="h-12 w-12" />
            )}
          </Button>
          <p className="mt-2 text-sm text-gray-600">
            {isListening ? 'Listening...' : 'Tap to speak'}
          </p>
        </div>

        {transcript && (
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <h4 className="font-medium text-pink-800 mb-2">You said:</h4>
            <p className="text-gray-700 text-sm">{transcript}</p>
          </div>
        )}

        {response && (
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-pink-800">AI Response:</h4>
              <Button
                onClick={playResponse}
                disabled={isPlaying}
                size="sm"
                className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800"
              >
                <Volume2 className={`h-4 w-4 mr-1 ${isPlaying ? 'animate-pulse' : ''}`} />
                {isPlaying ? 'Playing...' : 'Read Aloud'}
              </Button>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{response}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

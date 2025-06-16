
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, Volume2, MicOff, Pause } from 'lucide-react';

export const VoiceInteraction = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const handleStartRecording = () => {
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false);
      setTranscript('ما هي العاصمة المصرية؟');
      setResponse('العاصمة المصرية هي القاهرة. القاهرة هي أكبر مدينة في العالم العربي وأفريقيا، وتقع على ضفاف نهر النيل. تُعرف باسم "أم الدنيا" وهي مركز الثقافة والحضارة في المنطقة.');
    }, 3000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const handlePlayResponse = () => {
    setIsPlaying(true);
    // Simulate TTS playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };

  const handleStopPlaying = () => {
    setIsPlaying(false);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-pink-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" dir="rtl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-pink-700">
          <Mic className="h-5 w-5" />
          <span>الإدخال الصوتي والقراءة بصوت عالٍ</span>
        </CardTitle>
        <p className="text-sm text-gray-600">اسأل أسئلة بصوتك واستمع إلى إجابات الذكاء الاصطناعي مقروءة بصوت عالٍ</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <Button 
            onClick={isRecording ? handleStopRecording : handleStartRecording}
            disabled={isPlaying}
            className={`flex-1 ${isRecording 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800'
            }`}
          >
            {isRecording ? (
              <>
                <MicOff className="h-4 w-4 ml-2" />
                إيقاف التسجيل
              </>
            ) : (
              <>
                <Mic className="h-4 w-4 ml-2" />
                ابدأ التسجيل
              </>
            )}
          </Button>

          {response && (
            <Button 
              onClick={isPlaying ? handleStopPlaying : handlePlayResponse}
              disabled={isRecording}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-4 w-4 ml-2" />
                  إيقاف التشغيل
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 ml-2" />
                  استمع للإجابة
                </>
              )}
            </Button>
          )}
        </div>

        {isRecording && (
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-700 font-medium">جاري التسجيل...</span>
            </div>
          </div>
        )}

        {transcript && (
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <h4 className="font-medium text-pink-800 mb-2">ما قلته:</h4>
            <p className="text-gray-700">{transcript}</p>
          </div>
        )}

        {response && (
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">إجابة الذكاء الاصطناعي:</h4>
            <p className="text-gray-700 leading-relaxed">{response}</p>
            {isPlaying && (
              <div className="mt-3 flex items-center space-x-2 space-x-reverse">
                <Volume2 className="h-4 w-4 text-blue-600 animate-pulse" />
                <span className="text-blue-600 text-sm">جاري تشغيل الإجابة...</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

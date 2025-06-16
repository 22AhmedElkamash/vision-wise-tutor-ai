
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Network, Map } from 'lucide-react';

export const ConceptVisualizer = () => {
  const [concept, setConcept] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [conceptMap, setConceptMap] = useState<any>(null);

  const handleVisualize = async () => {
    if (!concept.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setConceptMap({
        title: concept,
        nodes: [
          { id: 'main', label: concept, x: 300, y: 200, type: 'main' },
          { id: 'sub1', label: 'Process', x: 150, y: 100, type: 'sub' },
          { id: 'sub2', label: 'Components', x: 450, y: 100, type: 'sub' },
          { id: 'sub3', label: 'Location', x: 150, y: 300, type: 'sub' },
          { id: 'sub4', label: 'Products', x: 450, y: 300, type: 'sub' }
        ],
        connections: [
          { from: 'main', to: 'sub1' },
          { from: 'main', to: 'sub2' },
          { from: 'main', to: 'sub3' },
          { from: 'main', to: 'sub4' }
        ]
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-violet-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center space-x-2 text-violet-700">
          <Network className="h-5 w-5" />
          <span>Concept Visualizer</span>
        </CardTitle>
        <p className="text-sm text-gray-600">Generate concept maps and diagrams for any topic or term</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Enter concept or topic</label>
          <Input
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="e.g., photosynthesis, democracy, mitosis"
            className="border-violet-200 focus:border-violet-400"
          />
        </div>

        <Button 
          onClick={handleVisualize}
          disabled={!concept.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800"
        >
          {isGenerating ? 'Creating Visualization...' : 'Visualize Concept'}
        </Button>

        {conceptMap && (
          <div className="mt-4 p-4 bg-violet-50 rounded-lg border border-violet-200">
            <div className="flex items-center space-x-2 mb-4">
              <Map className="h-4 w-4 text-violet-600" />
              <h4 className="font-medium text-violet-800">Concept Map: {conceptMap.title}</h4>
            </div>
            <div className="bg-white rounded border h-64 flex items-center justify-center relative overflow-hidden">
              {conceptMap.nodes.map((node: any) => (
                <div
                  key={node.id}
                  className={`absolute px-3 py-2 rounded text-xs font-medium ${
                    node.type === 'main' 
                      ? 'bg-violet-600 text-white' 
                      : 'bg-violet-100 text-violet-800 border border-violet-300'
                  }`}
                  style={{ left: `${(node.x / 600) * 100}%`, top: `${(node.y / 400) * 100}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {node.label}
                </div>
              ))}
              {/* Simplified connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {conceptMap.connections.map((conn: any, idx: number) => (
                  <line
                    key={idx}
                    x1="50%"
                    y1="50%"
                    x2={`${(conceptMap.nodes.find((n: any) => n.id === conn.to)?.x / 600) * 100}%`}
                    y2={`${(conceptMap.nodes.find((n: any) => n.id === conn.to)?.y / 400) * 100}%`}
                    stroke="#8b5cf6"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                ))}
              </svg>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

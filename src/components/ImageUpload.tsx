
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string | null) => void;
  placeholder?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, placeholder = "Upload image" }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreview(result);
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const clearImage = () => {
    setPreview(null);
    onImageUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-2">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />
      
      {preview ? (
        <div className="relative">
          <img 
            src={preview} 
            alt="Uploaded preview" 
            className="w-full h-32 object-cover rounded-lg border border-gray-200"
          />
          <Button
            onClick={clearImage}
            size="sm"
            variant="outline"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={openFileDialog}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragOver 
              ? 'border-blue-400 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="p-2 bg-gray-100 rounded-full">
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">{placeholder}</p>
              <p className="text-xs text-gray-500">Click or drag to upload</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, File, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface FileUploadProps {
  onUploadSuccess: () => void;
}

const FileUpload = ({ onUploadSuccess }: FileUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const sanitizeFileName = (fileName: string) => {
    // Remove acentos e caracteres especiais
    const sanitized = fileName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-zA-Z0-9.-]/g, '_') // Substitui caracteres especiais por underscore
      .replace(/_{2,}/g, '_') // Remove múltiplos underscores consecutivos
      .toLowerCase();
    
    return sanitized;
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles(files);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async () => {
    if (selectedFiles.length === 0) {
      toast.error('Selecione pelo menos um arquivo');
      return;
    }

    setUploading(true);
    
    try {
      for (const file of selectedFiles) {
        const sanitizedName = sanitizeFileName(file.name);
        const fileName = `${Date.now()}-${sanitizedName}`;
        
        console.log(`Uploading file: ${file.name} as ${fileName}`);
        
        const { error } = await supabase.storage
          .from('referencias')
          .upload(fileName, file);

        if (error) {
          throw error;
        }
      }

      toast.success(`${selectedFiles.length} arquivo(s) enviado(s) com sucesso!`);
      setSelectedFiles([]);
      onUploadSuccess();
    } catch (error) {
      console.error('Erro no upload:', error);
      toast.error('Erro ao enviar arquivos');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-5 w-5 mr-2" />
          Upload de Arquivos de Referência
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
            accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            <Upload className="h-8 w-8 text-gray-400" />
            <span className="text-sm text-gray-600">
              Clique para selecionar arquivos ou arraste-os aqui
            </span>
            <span className="text-xs text-gray-400">
              PDF, DOC, DOCX, TXT, PNG, JPG (máx. 50MB cada)
            </span>
          </label>
        </div>

        {selectedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Arquivos selecionados:</h4>
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <div className="flex items-center">
                  <File className="h-4 w-4 mr-2" />
                  <span className="text-sm">{file.name}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <Button
          onClick={uploadFiles}
          disabled={uploading || selectedFiles.length === 0}
          className="w-full"
        >
          {uploading ? 'Enviando...' : `Enviar ${selectedFiles.length} arquivo(s)`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FileUpload;

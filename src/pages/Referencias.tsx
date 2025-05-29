
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FileUpload from '@/components/FileUpload';
import FileManager from '@/components/FileManager';
import { useNavigate } from 'react-router-dom';

const Referencias = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const navigate = useNavigate();

  const handleUploadSuccess = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-amber-800 hover:bg-amber-100 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Relatório
          </Button>
          
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Gerenciar Arquivos de Referência
          </h1>
          <p className="text-xl text-gray-700">
            Faça upload dos arquivos que servirão como referência para o conteúdo do site
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <FileUpload onUploadSuccess={handleUploadSuccess} />
          <FileManager refreshTrigger={refreshTrigger} />
        </div>

        <div className="mt-8 p-6 bg-white/70 rounded-lg backdrop-blur-sm border border-amber-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Como usar as referências</h3>
          <div className="space-y-2 text-gray-700">
            <p>• Os arquivos enviados ficarão disponíveis publicamente através de URLs</p>
            <p>• Você pode referenciar estes arquivos no conteúdo do site</p>
            <p>• URLs dos arquivos seguem o padrão: <code className="bg-amber-100 px-2 py-1 rounded text-sm text-amber-800">https://urukdcuubogfqwkipccr.supabase.co/storage/v1/object/public/referencias/nome-do-arquivo</code></p>
            <p>• Formatos suportados: PDF, DOC, DOCX, TXT, PNG, JPG, JPEG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referencias;

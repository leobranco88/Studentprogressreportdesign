import { Download } from 'lucide-react';
import logoImage from '../../assets/eic-logo-transparente.png';

export function ReportHeader() {
  return (
    <div className="bg-white shadow-sm px-8 py-4 flex items-center justify-between rounded-t-lg">
      <div className="flex items-center gap-4">
        <img 
          src={logoEIC}
          alt="EIC - Escola de Idiomas e Cultura"
          className="h-16 w-auto object-contain"
        />
      </div>
      <button className="bg-[#EC5800] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#d64f00] transition-colors">
        <Download className="w-4 h-4" />
        Exportar PDF
      </button>
    </div>
  );
}
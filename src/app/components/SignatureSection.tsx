import { QRCodeSVG } from 'qrcode.react';

interface SignatureSectionProps {
  reportId: string;
}

export function SignatureSection({ reportId }: SignatureSectionProps) {
  const reportUrl = `https://studentprogressreportdesign.vercel.app/?reportId=${reportId}`;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center">
          <QRCodeSVG
            value={reportUrl}
            size={120}
            level="H"
            includeMargin={true}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-3">
            COORDENAÇÃO
          </div>
          <div className="border-b-2 border-[#070738] mb-2 pb-6"></div>
          <div className="text-sm font-semibold text-[#070738]">Leonardo Branco Costa</div>
          <div className="text-xs text-[#9CA3AF]">Coordenador Pedagógico</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-3">
            RESPONSÁVEL
          </div>
          <div className="border-b-2 border-[#070738] mb-2 pb-6"></div>
          <div className="text-sm font-semibold text-[#070738]">Assinatura</div>
          <div className="text-xs text-[#9CA3AF]">Pai/Mãe/Responsável</div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-3">
            DATA
          </div>
          <div className="border-b-2 border-[#070738] mb-2 pb-6"></div>
          <div className="text-sm font-semibold text-[#070738]">___/___/2026</div>
          <div className="text-xs text-[#9CA3AF]">Data da assinatura</div>
        </div>
      </div>
    </div>
  );
}

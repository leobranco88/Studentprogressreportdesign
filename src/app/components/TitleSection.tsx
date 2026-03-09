import { getProgressGradient } from '../utils/progressColors';

interface TitleSectionProps {
  situation: string;
  evaluation: string;
  cycleFocus: string;
  studentName: string;
  studentClass: string;
  classType: string;
  period: string;
}

export function TitleSection({ studentName, studentClass, classType, period, evaluation }: TitleSectionProps) {
  const progressPercentage = evaluation === "2 de 2 ciclos" ? 100 : 50;

  const classTypeLabel = classType === "regular" ? "Regular" : classType === "intensive" ? "Intensivo" : "Particular";

  return (
    <div className="bg-white shadow-sm px-8 py-6">
      <h1 className="text-3xl font-bold text-[#070738] mb-2">
        Relatório do Aluno — {studentName}
      </h1>
      <p className="text-[#9CA3AF] text-base mb-4">
        {classTypeLabel} · {studentClass} · {period}
      </p>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9CA3AF]">Avaliação {evaluation}</span>
          <span className="text-[#EC5800] font-semibold">{progressPercentage}%</span>
        </div>
        <div className="w-full h-2 bg-[#F0F4F8] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progressPercentage}%`,
              background: getProgressGradient(progressPercentage)
            }}
          />
        </div>
      </div>
    </div>
  );
}

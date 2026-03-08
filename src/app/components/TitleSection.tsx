import { getProgressGradient } from '../utils/progressColors';

export function TitleSection() {
  const progressPercentage = 50; // Avaliação 1 de 2 = 50%
  
  return (
    <div className="bg-white shadow-sm px-8 py-6">
      <h1 className="text-3xl font-bold text-[#070738] mb-2">
        Relatório do Aluno — Leonardo
      </h1>
      <p className="text-[#9CA3AF] text-base mb-4">
        Regular · Teens 5 · End-of-Year 2026
      </p>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9CA3AF]">Avaliação 1 de 2 ciclos</span>
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
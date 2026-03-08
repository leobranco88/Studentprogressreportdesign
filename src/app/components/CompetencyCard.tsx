import { getProgressColor } from '../utils/progressColors';

interface CompetencyCardProps {
  title: string;
  score: number;
  maxScore: number;
  whatISee: string;
  whyItMatters: string;
  whatToDo: string;
}

export function CompetencyCard({ 
  title, 
  score, 
  maxScore, 
  whatISee, 
  whyItMatters, 
  whatToDo 
}: CompetencyCardProps) {
  const percentage = (score / maxScore) * 100;
  const { barColor, badgeColor, label } = getProgressColor(percentage);
  
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#070738]">{title}</h3>
        <div className="flex items-center gap-2">
          <span className={`${badgeColor} text-white px-3 py-1 rounded-lg font-bold text-sm`}>
            {score}/{maxScore}
          </span>
          <span className="text-xs text-[#9CA3AF] font-medium">({label})</span>
        </div>
      </div>
      
      <div className="w-full h-2 bg-[#F0F4F8] rounded-full overflow-hidden mb-6">
        <div 
          className="h-full rounded-full transition-all duration-300"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: barColor
          }}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-2">
            O QUE VEJO
          </div>
          <p className="text-sm text-[#6B7280] italic leading-relaxed">
            {whatISee}
          </p>
        </div>
        
        <div>
          <div className="text-[11px] text-[#EC5800] uppercase tracking-widest mb-2">
            POR QUE IMPORTA
          </div>
          <p className="text-sm text-[#6B7280] italic leading-relaxed">
            {whyItMatters}
          </p>
        </div>
        
        <div>
          <div className="text-[11px] text-[#070738] uppercase tracking-widest mb-2">
            O QUE FAZER
          </div>
          <p className="text-sm text-[#070738] leading-relaxed">
            {whatToDo}
          </p>
        </div>
      </div>
    </div>
  );
}
import { User, Star, CheckCircle, BarChart2 } from 'lucide-react';

interface StatCardsProps {
  attendance: number;
  testScore: number;
  situation: string;
  cefrLevel: string;
}

const getSituacaoLabel = (situation: string) => {
  switch (situation) {
    case 'approved': return 'Aprovado(a)';
    case 'in-progress': return 'Em Progresso';
    case 'needs-attention': return 'Necessita Atenção';
    case 'failed': return 'Reprovado(a)';
    default: return situation;
  }
};

export function StatCards({ attendance, testScore, situation, cefrLevel }: StatCardsProps) {
  const stats = [
    {
      label: 'FREQUÊNCIA',
      value: `${attendance}%`,
      icon: User,
      bgColor: 'bg-orange-50',
      iconColor: 'text-[#EC5800]'
    },
    {
      label: 'NOTA DO TESTE',
      value: `${testScore}%`,
      icon: Star,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-[#F5A623]'
    },
    {
      label: 'SITUAÇÃO',
      value: getSituacaoLabel(situation),
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      iconColor: 'text-[#16A34A]'
    },
    {
      label: 'NÍVEL CEFR',
      value: cefrLevel,
      icon: BarChart2,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-white rounded-2xl shadow-sm p-6">
            <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
              <Icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-1">
              {stat.label}
            </div>
            <div className="text-2xl font-bold text-[#070738]">
              {stat.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

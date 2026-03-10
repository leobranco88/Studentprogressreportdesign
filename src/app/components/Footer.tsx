import { Heart, Award, Users, BookOpen, Target, Sparkles } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Respeito' },
  { icon: Award, label: 'Excelência' },
  { icon: Users, label: 'Colaboração' },
  { icon: BookOpen, label: 'Aprendizado' },
  { icon: Target, label: 'Foco' },
  { icon: Sparkles, label: 'Criatividade' }
];

export function Footer() {
  return (
    <div className="space-y-0">
      <div className="bg-white px-8 py-6 flex items-center justify-around">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div key={value.label} className="flex flex-col items-center gap-2">
              <Icon className="w-6 h-6 text-[#EC5800]" />
              <span className="text-xs text-[#9CA3AF] font-semibold">{value.label}</span>
            </div>
          );
        })}
      </div>

      <div className="bg-[#EC5800] px-8 py-4 flex items-center justify-between">
        <div className="text-white text-sm">
          <span className="font-semibold">EIC - Escola de Idiomas e Cultura</span>
        </div>
        <div className="text-white text-sm">
          (11) 95354-1126
        </div>
        <div className="text-white text-sm">
          Rua dos Encanadores, 332 - Jardim Europa
        </div>
      </div>
    </div>
  );
}

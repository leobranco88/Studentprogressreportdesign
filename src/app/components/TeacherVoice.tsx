import { Quote } from 'lucide-react';

export function TeacherVoice() {
  return (
    <div className="bg-[#070738] rounded-2xl shadow-lg p-8 border-l-8 border-[#EC5800] relative overflow-hidden">
      <Quote className="absolute top-4 right-4 w-16 h-16 text-[#EC5800] opacity-20" />
      
      <h3 className="text-xl font-bold text-white mb-4">Voz do Professor</h3>
      
      <p className="text-white text-base italic leading-relaxed mb-6">
        "Leonardo demonstrou excelente progresso ao longo do semestre. Sua participação nas aulas 
        tem sido consistente e ele mostra grande interesse em aprender. Recomendo que continue 
        praticando a conversação fora da sala de aula para fortalecer ainda mais sua fluência."
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#EC5800] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">MS</span>
        </div>
        <div>
          <div className="text-white font-semibold">Maria Silva</div>
          <div className="text-[#9CA3AF] text-sm">Professora de Inglês</div>
        </div>
      </div>
    </div>
  );
}

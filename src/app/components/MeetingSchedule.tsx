import { useState } from 'react';

export function MeetingSchedule() {
  const [selected, setSelected] = useState<'sim' | 'nao' | null>(null);
  
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-[#070738] mb-4">
        Agendar Reunião?
      </h3>
      <p className="text-sm text-[#9CA3AF] mb-4">
        Gostaria de agendar uma reunião para discutir o progresso do aluno?
      </p>
      
      <div className="flex gap-3">
        <button
          onClick={() => setSelected('sim')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
            selected === 'sim'
              ? 'bg-[#EC5800] text-white shadow-md'
              : 'bg-[#F0F4F8] text-[#9CA3AF] hover:bg-[#E5E7EB]'
          }`}
        >
          Sim
        </button>
        <button
          onClick={() => setSelected('nao')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
            selected === 'nao'
              ? 'bg-[#EC5800] text-white shadow-md'
              : 'bg-[#F0F4F8] text-[#9CA3AF] hover:bg-[#E5E7EB]'
          }`}
        >
          Não
        </button>
      </div>
    </div>
  );
}

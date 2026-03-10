import { useState } from 'react';

interface MeetingScheduleProps {
  studentName: string;
}

export function MeetingSchedule({ studentName }: MeetingScheduleProps) {
  const [selected, setSelected] = useState<'sim' | 'nao' | null>(null);

  const handleSim = () => {
    setSelected('sim');
    const msg = encodeURIComponent(
      `Olá! Sou responsável pelo(a) ${studentName} e gostaria de agendar uma reunião para discutir o relatório de progresso. Poderia me informar os horários disponíveis?`
    );
    window.open(`https://wa.me/5511953541126?text=${msg}`, '_blank');
  };

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
          onClick={handleSim}
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

      {selected === 'sim' && (
        <p className="text-xs text-[#16A34A] mt-3 text-center">
          Abrindo WhatsApp para agendamento...
        </p>
      )}
      {selected === 'nao' && (
        <p className="text-xs text-[#9CA3AF] mt-3 text-center">
          Tudo bem! O relatório fica disponível para consulta a qualquer momento.
        </p>
      )}
    </div>
  );
}

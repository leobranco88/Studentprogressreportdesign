import { Quote } from 'lucide-react';

interface TeacherVoiceProps {
  message: string;
  professorName: string;
}

export function TeacherVoice({ message, professorName }: TeacherVoiceProps) {
  const initials = professorName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0].toUpperCase())
    .join('');

  return (
    <div className="bg-[#070738] rounded-2xl shadow-lg p-8 border-l-8 border-[#EC5800] relative overflow-hidden">
      <Quote className="absolute top-4 right-4 w-16 h-16 text-[#EC5800] opacity-20" />

      <h3 className="text-xl font-bold text-white mb-4">Voz do Professor</h3>

      <p className="text-white text-base italic leading-relaxed mb-6">
        "{message}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#EC5800] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">{initials}</span>
        </div>
        <div>
          <div className="text-white font-semibold">{professorName}</div>
          <div className="text-[#9CA3AF] text-sm">Professor(a)</div>
        </div>
      </div>
    </div>
  );
}

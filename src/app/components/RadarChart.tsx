import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface Competency {
  id: string;
  name: string;
  rating: number;
  whatISee: string;
  whyItMatters: string;
  whatToDo: string;
}

interface RadarChartSectionProps {
  competencies: Competency[];
}

const shortName = (name: string) => {
  const map: Record<string, string> = {
    'Comportamento e Compromisso': 'Comportamento',
    'Organização e Responsabilidade': 'Organização',
    'Fala e Comunicação': 'Fala',
    'Gramática e Vocabulário': 'Gramática',
    'Compreensão Auditiva': 'Compreensão',
    'Leitura e Escrita': 'Leitura',
  };
  return map[name] || name.split(' ')[0];
};

export function RadarChartSection({ competencies }: RadarChartSectionProps) {
  const data = competencies.map(c => ({
    skill: shortName(c.name),
    nota: c.rating,
  }));

  const media = competencies.length > 0
    ? (competencies.reduce((sum, c) => sum + c.rating, 0) / competencies.length).toFixed(1)
    : '0';

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-xl font-bold text-[#070738] mb-6">Perfil de Competências</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="w-full h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsRadar data={data}>
              <PolarGrid stroke="#E5E7EB" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: '#6B7280', fontSize: 11 }}
              />
              <Radar
                name="Nota"
                dataKey="nota"
                stroke="#EC5800"
                fill="#EC5800"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </RechartsRadar>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <div className="w-4 h-4 bg-[#EC5800] rounded opacity-60"></div>
            <span>Desempenho por competência (1–5)</span>
          </div>

          <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-[#EC5800] mt-4">
            <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-1">
              MÉDIA GERAL
            </div>
            <div className="text-2xl font-bold text-[#EC5800]">{media}</div>
            <div className="text-xs text-[#9CA3AF] mt-1">de 5.0</div>
          </div>

          <div className="space-y-2 mt-2">
            {competencies.map(c => (
              <div key={c.id} className="flex items-center justify-between text-sm">
                <span className="text-[#6B7280]">{shortName(c.name)}</span>
                <span className="font-semibold text-[#070738]">{c.rating}/5</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

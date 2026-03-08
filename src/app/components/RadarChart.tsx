import { Radar, RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { skill: 'Listening', aval1: 4, aval2: 4.5 },
  { skill: 'Speaking', aval1: 3.5, aval2: 4 },
  { skill: 'Reading', aval1: 4.5, aval2: 4.5 },
  { skill: 'Writing', aval1: 3, aval2: 4 },
  { skill: 'Grammar', aval1: 4, aval2: 4.5 },
  { skill: 'Vocabulary', aval1: 4, aval2: 4.5 }
];

export function RadarChartSection() {
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
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <Radar
                key="radar-aval1"
                name="Avaliação 1"
                dataKey="aval1"
                stroke="#EC5800"
                fill="#EC5800"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar
                key="radar-aval2"
                name="Avaliação 2"
                dataKey="aval2"
                stroke="#070738"
                fill="#070738"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </RechartsRadar>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <div className="text-sm text-[#9CA3AF] mb-2 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#EC5800] rounded"></div>
              <span>Avaliação 1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#070738] rounded"></div>
              <span>Avaliação 2</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-[#EC5800]">
              <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-1">
                AVAL. 1
              </div>
              <div className="text-2xl font-bold text-[#EC5800]">3.8</div>
              <div className="text-xs text-[#9CA3AF] mt-1">Média geral</div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-[#070738]">
              <div className="text-[11px] text-[#9CA3AF] uppercase tracking-widest mb-1">
                AVAL. 2
              </div>
              <div className="text-2xl font-bold text-[#070738]">4.3</div>
              <div className="text-xs text-[#9CA3AF] mt-1">Média geral</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ProgressLegend() {
  const levels = [
    { color: '#16A34A', label: 'Excelente', range: '80-100%' },
    { color: '#EC5800', label: 'Bom', range: '60-79%' },
    { color: '#F5A623', label: 'Regular', range: '40-59%' },
    { color: '#EF4444', label: 'Precisa Melhorar', range: '0-39%' }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
      <h4 className="text-xs font-semibold text-[#070738] uppercase tracking-widest mb-3">
        Legenda de Desempenho
      </h4>
      <div className="grid grid-cols-4 gap-3">
        {levels.map((level) => (
          <div key={level.label} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: level.color }}
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#070738]">{level.label}</span>
              <span className="text-[10px] text-[#9CA3AF]">{level.range}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

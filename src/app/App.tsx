import { ReportHeader } from './components/ReportHeader';
import { TitleSection } from './components/TitleSection';
import { StatCards } from './components/StatCards';
import { ProgressLegend } from './components/ProgressLegend';
import { RadarChartSection } from './components/RadarChart';
import { CompetencyCard } from './components/CompetencyCard';
import { TeacherVoice } from './components/TeacherVoice';
import { SignatureSection } from './components/SignatureSection';
import { MeetingSchedule } from './components/MeetingSchedule';
import { Footer } from './components/Footer';

const competencies1 = [
  {
    title: 'Listening Comprehension',
    score: 4,
    maxScore: 5,
    whatISee: 'Demonstra boa compreensão de áudios autênticos e conversas cotidianas.',
    whyItMatters: 'A escuta ativa é essencial para comunicação real e desenvolvimento de fluência.',
    whatToDo: 'Assistir séries com legendas em inglês. Ouvir podcasts 15min/dia.'
  },
  {
    title: 'Speaking & Pronunciation',
    score: 3,
    maxScore: 5,
    whatISee: 'Participa bem em aula, mas ainda hesita em conversas mais longas.',
    whyItMatters: 'A fala é a competência mais visível e impacta a confiança do aluno.',
    whatToDo: 'Gravar áudios falando sobre o dia. Participar de grupos de conversação online.'
  }
];

const competencies2 = [
  {
    title: 'Reading Comprehension',
    score: 5,
    maxScore: 5,
    whatISee: 'Excelente compreensão de textos complexos e vocabulário avançado.',
    whyItMatters: 'A leitura expande vocabulário e estruturas gramaticais passivamente.',
    whatToDo: 'Continuar lendo artigos e livros em inglês regularmente.'
  },
  {
    title: 'Writing Skills',
    score: 3,
    maxScore: 5,
    whatISee: 'Bom uso de estruturas básicas, mas precisa expandir repertório.',
    whyItMatters: 'Escrita clara é crucial para comunicação acadêmica e profissional.',
    whatToDo: 'Escrever um parágrafo diário. Usar apps como Grammarly para feedback.'
  },
  {
    title: 'Grammar & Structure',
    score: 4,
    maxScore: 5,
    whatISee: 'Domina tempos verbais principais. Alguns erros em estruturas complexas.',
    whyItMatters: 'Gramática sólida permite expressar ideias com precisão e clareza.',
    whatToDo: 'Fazer exercícios de conditionals e reported speech 2x/semana.'
  },
  {
    title: 'Vocabulary Range',
    score: 2,
    maxScore: 5,
    whatISee: 'Vocabulário limitado. Repete palavras simples com frequência.',
    whyItMatters: 'Vocabulário rico permite comunicação mais nuanceada e precisa.',
    whatToDo: 'Aprender 10 palavras/dia com contexto. Usar flashcards (Anki). Ler diariamente.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0F4F8] py-8 px-4">
      <div className="max-w-[210mm] mx-auto space-y-8">
        {/* PAGE 1 */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ 
          width: '210mm', 
          minHeight: '297mm',
          padding: '0'
        }}>
          <div className="space-y-0">
            <ReportHeader />
            <TitleSection />
          </div>
          
          <div className="p-8 space-y-6">
            <StatCards />
            <ProgressLegend />
            <RadarChartSection />
            
            <div>
              <h2 className="text-xl font-bold text-[#070738] mb-4">
                Avaliação por Competência
              </h2>
              <div className="space-y-4">
                {competencies1.map((comp) => (
                  <CompetencyCard key={comp.title} {...comp} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ 
          width: '210mm', 
          minHeight: '297mm',
          padding: '0'
        }}>
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              {competencies2.map((comp) => (
                <CompetencyCard key={comp.title} {...comp} />
              ))}
            </div>
            
            <TeacherVoice />
            
            <SignatureSection />
            
            <MeetingSchedule />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}
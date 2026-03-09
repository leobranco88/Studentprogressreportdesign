import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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

const firebaseConfig = {
  apiKey: "AIzaSyBALFFBpqNLMhtNmAXz0wiPIhFVmBz3fPI",
  authDomain: "eic-relatorios-d7d9e.firebaseapp.com",
  projectId: "eic-relatorios-d7d9e",
  storageBucket: "eic-relatorios-d7d9e.firebasestorage.app",
  messagingSenderId: "214650677656",
  appId: "1:214650677656:web:4db01b4b035084f0efa3ed",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface ReportData {
  studentName: string;
  class: string;
  classType: string;
  period: string;
  evaluation: string;
  coordinator: string;
  professorName: string;
  attendance: number;
  testScore: number;
  situation: string;
  cefrLevel: string;
  competencies: Array<{
    id: string;
    name: string;
    rating: number;
    whatISee: string;
    whyItMatters: string;
    whatToDo: string;
  }>;
  professorVoice: string;
  cycleFocus: string;
  technicalFocus?: string;
  engagementHours?: string;
  observedHabits?: string[];
}

export default function App() {
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reportId = params.get('reportId');

    if (!reportId) {
      setError('Nenhum relatório especificado. Adicione ?reportId=... na URL.');
      setLoading(false);
      return;
    }

    const fetchReport = async () => {
      try {
        const docRef = doc(db, 'reports', reportId);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          setError('Relatório não encontrado.');
        } else {
          setReport(docSnap.data() as ReportData);
        }
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar relatório. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#EC5800] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#070738] text-lg">Carregando relatório...</p>
        </div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-[#F0F4F8] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm">
          <p className="text-4xl mb-4">📄</p>
          <h2 className="text-xl text-[#070738] mb-2">Relatório não encontrado</h2>
          <p className="text-[#9CA3AF] text-sm">{error}</p>
        </div>
      </div>
    );
  }

  const competencies1 = report.competencies.slice(0, 2).map(c => ({
    title: c.name,
    score: c.rating,
    maxScore: 5,
    whatISee: c.whatISee,
    whyItMatters: c.whyItMatters,
    whatToDo: c.whatToDo,
  }));

  const competencies2 = report.competencies.slice(2).map(c => ({
    title: c.name,
    score: c.rating,
    maxScore: 5,
    whatISee: c.whatISee,
    whyItMatters: c.whyItMatters,
    whatToDo: c.whatToDo,
  }));

  return (
    <div className="min-h-screen bg-[#F0F4F8] py-8 px-4">
      <div className="max-w-[210mm] mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ width: '210mm', minHeight: '297mm', padding: '0' }}>
          <div className="space-y-0">
            <ReportHeader />
            <TitleSection
              situation={report.situation}
              evaluation={report.evaluation}
              cycleFocus={report.cycleFocus}
              studentName={report.studentName}
              studentClass={report.class}
              classType={report.classType}
              period={report.period}
            />
          </div>
          <div className="p-8 space-y-6">
            <StatCards
              attendance={report.attendance}
              testScore={report.testScore}
              situation={report.situation}
              cefrLevel={report.cefrLevel}
            />
            <ProgressLegend />
            <RadarChartSection competencies={report.competencies} />
            <div>
              <h2 className="text-xl font-bold text-[#070738] mb-4">Avaliação por Competência</h2>
              <div className="space-y-4">
                {competencies1.map((comp) => (
                  <CompetencyCard key={comp.title} {...comp} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden" style={{ width: '210mm', minHeight: '297mm', padding: '0' }}>
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              {competencies2.map((comp) => (
                <CompetencyCard key={comp.title} {...comp} />
              ))}
            </div>
            <TeacherVoice
              message={report.professorVoice}
              professorName={report.professorName}
            />
            <SignatureSection
              coordinatorName={report.coordinator}
              professorName={report.professorName}
            />
            <MeetingSchedule />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

/**
 * Retorna cores baseadas na porcentagem de desempenho
 * - 80-100%: Verde (Excelente)
 * - 60-79%: Laranja (Bom)
 * - 40-59%: Amarelo (Regular)
 * - 0-39%: Vermelho (Precisa melhorar)
 */
export function getProgressColor(percentage: number): {
  barColor: string;
  badgeColor: string;
  label: string;
} {
  if (percentage >= 80) {
    return {
      barColor: '#16A34A', // Verde
      badgeColor: 'bg-green-600',
      label: 'Excelente'
    };
  } else if (percentage >= 60) {
    return {
      barColor: '#EC5800', // Laranja
      badgeColor: 'bg-[#EC5800]',
      label: 'Bom'
    };
  } else if (percentage >= 40) {
    return {
      barColor: '#F5A623', // Amarelo
      badgeColor: 'bg-[#F5A623]',
      label: 'Regular'
    };
  } else {
    return {
      barColor: '#EF4444', // Vermelho
      badgeColor: 'bg-red-600',
      label: 'Precisa melhorar'
    };
  }
}

/**
 * Retorna gradiente baseado na porcentagem
 */
export function getProgressGradient(percentage: number): string {
  if (percentage >= 80) {
    return 'linear-gradient(to right, #16A34A, #22C55E)'; // Verde
  } else if (percentage >= 60) {
    return 'linear-gradient(to right, #EC5800, #F5A623)'; // Laranja para Amarelo
  } else if (percentage >= 40) {
    return 'linear-gradient(to right, #F59E0B, #FCD34D)'; // Amarelo
  } else {
    return 'linear-gradient(to right, #EF4444, #F87171)'; // Vermelho
  }
}

// CÓDIGO EXATO do dashboard
class Dashboard {
  constructor() {
    this.init();
  }

  init() {
    this.initPerformanceChart();
    this.updateDashboardStats();
  }

  initPerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Desempenho',
          data: [85, 78, 90, 82, 88, 92],
          backgroundColor: '#4f46e5',
          borderColor: '#4f46e5',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }

  updateDashboardStats() {
    // Atualizar estatísticas do dashboard
    document.getElementById('totalEmployees').textContent = '24';
    document.getElementById('activeGoals').textContent = '18';
    document.getElementById('activeTrainings').textContent = '8';
    document.getElementById('pendingEvaluations').textContent = '5';
  }
}

// Inicializar dashboard quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('dashboard')) {
    window.dashboard = new Dashboard();
  }
});
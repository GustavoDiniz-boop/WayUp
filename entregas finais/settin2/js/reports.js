// Funcionalidades específicas da página de Relatórios
class Reports {
  constructor() {
    this.init();
  }

  init() {
    this.initReportCharts();
    this.setupEventListeners();
  }

  initReportCharts() {
    // Gráfico de Turnover
    const turnoverCtx = document.getElementById('turnoverChart');
    if (turnoverCtx) {
      new Chart(turnoverCtx.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
          datasets: [{
            label: 'Taxa de Turnover (%)',
            data: [8.2, 7.5, 6.8, 5.9, 5.2, 4.8, 5.1, 4.9, 4.7, 4.5, 4.3, 4.1],
            borderColor: '#4f46e5',
            backgroundColor: 'rgba(79, 70, 229, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 10
            }
          }
        }
      });
    }

    // Gráfico de Satisfação
    const satisfactionCtx = document.getElementById('satisfactionChart');
    if (satisfactionCtx) {
      new Chart(satisfactionCtx.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['TI', 'RH', 'Vendas', 'Marketing', 'Financeiro', 'Operações'],
          datasets: [{
            label: 'Satisfação por Departamento',
            data: [4.5, 4.2, 4.1, 4.3, 4.0, 4.4],
            backgroundColor: [
              '#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 5
            }
          }
        }
      });
    }
  }

  setupEventListeners() {
    // Event listeners específicos de relatórios
    const exportButtons = document.querySelectorAll('#reports-page button');
    exportButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('Exportar')) {
          Utils.showMessage('Funcionalidade de exportação em desenvolvimento', 'success');
        } else if (e.target.textContent.includes('Visualizar')) {
          Utils.showMessage('Funcionalidade de visualização em desenvolvimento', 'success');
        }
      });
    });
  }
}

// Inicializar funcionalidades de relatórios
let reports;
if (document.getElementById('turnoverChart')) {
  reports = new Reports();
}
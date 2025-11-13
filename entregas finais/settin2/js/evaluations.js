// Funcionalidades específicas da página de Avaliações
class Evaluations {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  showAddEvaluationForm() {
    Utils.showMessage('Funcionalidade "Nova Avaliação" em desenvolvimento', 'success');
  }

  setupEventListeners() {
    // Event listeners específicos de avaliações
    const evaluationButtons = document.querySelectorAll('#evaluations-page button');
    evaluationButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('Realizar Avaliação')) {
          Utils.showMessage('Funcionalidade de avaliação em desenvolvimento', 'success');
        }
      });
    });
  }
}

// Inicializar funcionalidades de avaliações
let evaluations;
if (document.querySelector('[data-page="evaluations"]')) {
  evaluations = new Evaluations();
}

// Funções globais para os botões
function showAddEvaluationForm() {
  if (evaluations) evaluations.showAddEvaluationForm();
}
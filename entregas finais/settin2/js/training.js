// Funcionalidades específicas da página de Treinamentos
class Training {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  showAddTrainingForm() {
    Utils.showMessage('Funcionalidade "Novo Treinamento" em desenvolvimento', 'success');
  }

  setupEventListeners() {
    // Event listeners específicos de treinamentos
    const trainingButtons = document.querySelectorAll('#training-page button');
    trainingButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('Inscrever Funcionários')) {
          Utils.showMessage('Funcionalidade de inscrição em desenvolvimento', 'success');
        }
      });
    });
  }
}

// Inicializar funcionalidades de treinamentos
let training;
if (document.querySelector('[data-page="training"]')) {
  training = new Training();
}

// Funções globais para os botões
function showAddTrainingForm() {
  if (training) training.showAddTrainingForm();
}
// Funcionalidades específicas da página de Metas
class Goals {
  constructor() {
    this.init();
  }

  init() {
    this.loadGoals();
    this.setupEventListeners();
  }

  loadGoals() {
    const activeGoalsList = document.getElementById('activeGoalsList');
    const completedGoalsList = document.getElementById('completedGoalsList');
    
    if (!activeGoalsList || !completedGoalsList) return;
    
    activeGoalsList.innerHTML = '';
    completedGoalsList.innerHTML = '';
    
    mockData.goals.forEach(goal => {
      const goalElement = this.createGoalElement(goal.funcionarioId, goal);
      
      if (goal.status === 'em_andamento') {
        activeGoalsList.appendChild(goalElement);
      } else {
        completedGoalsList.appendChild(goalElement);
      }
    });
  }

  createGoalElement(employeeId, goal) {
    const element = document.createElement('div');
    element.className = 'border border-gray-200 rounded-lg p-4';
    
    const statusClass = goal.status === 'concluido' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
    const statusText = goal.status === 'concluido' ? 'Concluído' : 'Em Andamento';
    const progressColor = goal.status === 'concluido' ? 'bg-green-500' : 'bg-blue-500';
    
    element.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <h4 class="font-medium">${goal.titulo}</h4>
          <p class="text-sm text-gray-500 mt-1">${goal.descricao}</p>
        </div>
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
          ${statusText}
        </span>
      </div>
      <div class="mt-3">
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>Progresso</span>
          <span>${goal.progresso}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="${progressColor} h-2 rounded-full" style="width: ${goal.progresso}%"></div>
        </div>
      </div>
      <div class="flex justify-between mt-2 text-sm text-gray-500">
        <span>Prazo: ${Utils.formatDate(goal.prazo)}</span>
        <span>Prioridade: ${goal.prioridade}</span>
      </div>
      <div class="flex justify-end mt-3 space-x-2">
        <button onclick="goals.editGoal(${employeeId}, ${goal.id})" class="text-blue-600 hover:text-blue-800 text-sm">
          <i class="fas fa-edit mr-1"></i> Editar
        </button>
        <button onclick="goals.deleteGoal(${employeeId}, ${goal.id})" class="text-red-600 hover:text-red-800 text-sm">
          <i class="fas fa-trash-alt mr-1"></i> Remover
        </button>
      </div>
    `;
    
    return element;
  }

  showAddGoalForm() {
    document.getElementById('addGoalModal').classList.remove('hidden');
  }

  closeAddGoalForm() {
    document.getElementById('addGoalModal').classList.add('hidden');
    document.getElementById('addGoalForm').reset();
  }

  editGoal(employeeId, goalId) {
    const goal = mockData.goals.find(g => g.id === goalId && g.funcionarioId === employeeId);
    if (goal) {
      currentGoalId = goalId;
      
      // Preencher formulário com dados da meta
      document.getElementById('editGoalTitle').value = goal.titulo;
      document.getElementById('editGoalDescription').value = goal.descricao;
      document.getElementById('editGoalDeadline').value = goal.prazo;
      document.getElementById('editGoalProgress').value = goal.progresso;
      document.getElementById('editGoalPriority').value = goal.prioridade;
      document.getElementById('editGoalStatus').value = goal.status;
      
      document.getElementById('editGoalModal').classList.remove('hidden');
    }
  }

  closeEditGoalForm() {
    document.getElementById('editGoalModal').classList.add('hidden');
    document.getElementById('editGoalForm').reset();
  }

  deleteGoal(employeeId, goalId) {
    if (confirm('Tem certeza que deseja remover esta meta?')) {
      Utils.showMessage('Meta removida com sucesso!', 'success');
      this.loadGoals();
    }
  }

  setupEventListeners() {
    const addGoalForm = document.getElementById('addGoalForm');
    if (addGoalForm) {
      addGoalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        Utils.showMessage('Meta adicionada com sucesso!', 'success');
        this.closeAddGoalForm();
        this.loadGoals();
      });
    }

    const editGoalForm = document.getElementById('editGoalForm');
    if (editGoalForm) {
      editGoalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        Utils.showMessage('Meta atualizada com sucesso!', 'success');
        this.closeEditGoalForm();
        this.loadGoals();
      });
    }
  }
}

// Inicializar funcionalidades das metas
let goals;
if (document.getElementById('activeGoalsList')) {
  goals = new Goals();
}

// Funções globais para os botões
function showAddGoalForm() {
  if (goals) goals.showAddGoalForm();
}

function closeAddGoalForm() {
  if (goals) goals.closeAddGoalForm();
}

function closeEditGoalForm() {
  if (goals) goals.closeEditGoalForm();
}
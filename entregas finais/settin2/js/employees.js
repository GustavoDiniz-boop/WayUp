// Funcionalidades específicas da página de Funcionários
class Employees {
  constructor() {
    this.init();
  }

  init() {
    this.loadEmployeesTable();
    this.setupEventListeners();
  }

  loadEmployeesTable() {
    const tbody = document.getElementById('employeeTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    mockData.employees.forEach(emp => {
      const progressRing = Utils.createProgressRing(emp.progresso);
      const statusBadge = Utils.createStatusBadge(emp.status);
      
      const row = document.createElement('tr');
      row.className = 'hover:bg-gray-50';
      row.innerHTML = `
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-10 w-10">
              <img class="h-10 w-10 rounded-full" src="${emp.foto}" alt="${emp.nome}">
            </div>
            <div class="ml-4">
              <div class="text-sm font-medium text-gray-900">${emp.nome}</div>
              <div class="text-sm text-gray-500">${emp.departamento}</div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${emp.cargo}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-900">${emp.departamento}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            ${progressRing}
            <div class="ml-2 w-20">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: ${emp.progresso}%"></div>
              </div>
            </div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          ${statusBadge}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button onclick="employees.viewEmployee(${emp.id})" class="text-indigo-600 hover:text-indigo-900 mr-3">
            <i class="fas fa-eye"></i>
          </button>
          <button onclick="employees.editEmployee(${emp.id})" class="text-blue-600 hover:text-blue-900 mr-3">
            <i class="fas fa-edit"></i>
          </button>
          <button onclick="employees.deleteEmployee(${emp.id})" class="text-red-600 hover:text-red-900">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
      
      tbody.appendChild(row);
    });
    
    Utils.updatePaginationInfo(1, mockData.employees.length, mockData.employees.length);
  }

  viewEmployee(id) {
    const employee = mockData.employees.find(emp => emp.id === id);
    if (employee) {
      currentEmployeeId = id;
      
      // Preencher informações básicas
      document.getElementById('employeeModalTitle').textContent = `Detalhes de ${employee.nome}`;
      document.getElementById('employeeModalName').textContent = employee.nome;
      document.getElementById('employeeModalRole').textContent = employee.cargo;
      document.getElementById('employeeModalPhoto').src = employee.foto;
      document.getElementById('employeeModalDept').textContent = employee.departamento;
      document.getElementById('employeeModalEmail').textContent = employee.email;
      
      // Formatando data de admissão
      const hireDate = new Date(employee.admissao);
      document.getElementById('employeeModalHireDate').textContent = hireDate.toLocaleDateString('pt-BR');
      
      // Status
      const statusBadge = document.getElementById('employeeModalStatus');
      statusBadge.textContent = employee.status === 'ativo' ? 'Ativo' : 'Inativo';
      statusBadge.className = `px-3 py-1 ${employee.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} rounded-full text-sm font-medium`;
      
      // Carregar metas do funcionário
      this.loadEmployeeGoals(employee.id);
      
      // Mostrar modal e primeira aba
      document.getElementById('employeeDetailsModal').classList.remove('hidden');
      this.showEmployeeTab('metas');
    }
  }

  loadEmployeeGoals(employeeId) {
    const goalsList = document.getElementById('employeeGoalsList');
    if (!goalsList) return;
    
    goalsList.innerHTML = '';
    
    const employeeGoals = mockData.goals.filter(goal => goal.funcionarioId === employeeId);
    
    if (employeeGoals.length === 0) {
      goalsList.innerHTML = '<p class="text-gray-500 text-center py-4">Nenhuma meta atribuída</p>';
      return;
    }
    
    employeeGoals.forEach(meta => {
      const goalElement = this.createGoalElement(employeeId, meta);
      goalsList.appendChild(goalElement);
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
        <button onclick="employees.editGoal(${employeeId}, ${goal.id})" class="text-blue-600 hover:text-blue-800 text-sm">
          <i class="fas fa-edit mr-1"></i> Editar
        </button>
        <button onclick="employees.deleteGoal(${employeeId}, ${goal.id})" class="text-red-600 hover:text-red-800 text-sm">
          <i class="fas fa-trash-alt mr-1"></i> Remover
        </button>
      </div>
    `;
    
    return element;
  }

  showEmployeeTab(tabName) {
    // Esconder todas as abas
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });
    
    // Mostrar aba selecionada
    const tabElement = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    if (tabElement) {
      tabElement.classList.remove('hidden');
    }
    
    // Atualizar botões das abas
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
    });
    event.target.classList.add('active');
  }

  closeEmployeeDetails() {
    document.getElementById('employeeDetailsModal').classList.add('hidden');
  }

  showAddEmployeeForm() {
    document.getElementById('addEmployeeModal').classList.remove('hidden');
  }

  closeAddEmployeeForm() {
    document.getElementById('addEmployeeModal').classList.add('hidden');
    document.getElementById('addEmployeeForm').reset();
  }

  editEmployee(id) {
    const employee = mockData.employees.find(emp => emp.id === id);
    if (employee) {
      Utils.showMessage(`Editando funcionário: ${employee.nome}`, 'success');
    }
  }

  deleteEmployee(id) {
    if (confirm('Tem certeza que deseja remover este funcionário?')) {
      Utils.showMessage('Funcionário removido com sucesso!', 'success');
    }
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

  deleteGoal(employeeId, goalId) {
    if (confirm('Tem certeza que deseja remover esta meta?')) {
      Utils.showMessage('Meta removida com sucesso!', 'success');
      this.loadEmployeeGoals(employeeId);
    }
  }

  setupEventListeners() {
    // Adicionar event listeners específicos da página de funcionários
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    if (addEmployeeForm) {
      addEmployeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        Utils.showMessage('Funcionário adicionado com sucesso!', 'success');
        this.closeAddEmployeeForm();
        this.loadEmployeesTable();
      });
    }
  }
}

// Inicializar funcionalidades dos funcionários
let employees;
if (document.getElementById('employeeTableBody')) {
  employees = new Employees();
}

// Funções globais para os botões
function showAddEmployeeForm() {
  if (employees) employees.showAddEmployeeForm();
}

function closeAddEmployeeForm() {
  if (employees) employees.closeAddEmployeeForm();
}

function closeEmployeeDetails() {
  if (employees) employees.closeEmployeeDetails();
}
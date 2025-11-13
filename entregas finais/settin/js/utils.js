// Funções utilitárias globais
class Utils {
  static showMessage(message, type = 'success') {
    const messageArea = document.getElementById('messageArea');
    const className = type === 'error' ? 'error-message' : 'success-message';
    
    messageArea.innerHTML = `
      <div class="${className}">
        <div class="flex justify-between items-center">
          <span>${message}</span>
          <button onclick="this.parentElement.parentElement.remove()" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    `;
    
    setTimeout(() => {
      if (messageArea.innerHTML.includes(message)) {
        messageArea.innerHTML = '';
      }
    }, 5000);
  }

  static formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('pt-BR');
  }

  static createProgressRing(progress) {
    return `
      <svg class="w-8 h-8" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="16" fill="none" class="stroke-gray-200" stroke-width="2"></circle>
        <circle cx="18" cy="18" r="16" fill="none" class="stroke-green-500" stroke-width="2"
          stroke-dasharray="100"
          stroke-dashoffset="${100 - progress}">
        </circle>
        <text x="18" y="20" text-anchor="middle" class="text-xs font-bold">${progress}%</text>
      </svg>
    `;
  }

  static createStatusBadge(status) {
    const isActive = status === 'ativo';
    const className = isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    const text = isActive ? 'Ativo' : 'Inativo';
    
    return `<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${className}">${text}</span>`;
  }
}

// Dados mockados globais
const mockData = {
  employees: [
    {
      id: 1,
      nome: "João Silva",
      cargo: "Desenvolvedor Senior",
      departamento: "TI",
      email: "joao.silva@empresa.com",
      foto: "https://via.placeholder.com/150",
      progresso: 85,
      status: "ativo",
      admissao: "2022-03-15"
    }
    // ... mais dados
  ],
  goals: [
    {
      id: 1,
      titulo: "Certificação AWS Solutions Architect",
      descricao: "Concluir certificação AWS e implementar soluções em cloud",
      prazo: "2024-03-15",
      progresso: 75,
      prioridade: "alta",
      status: "em_andamento",
      funcionarioId: 1
    }
    // ... mais dados
  ]
};
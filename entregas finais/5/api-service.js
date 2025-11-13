// api-service.js - VERSÃO CORRIGIDA
class ApiService {
    constructor() {
        this.backend = window.mockBackend;
    }

    // Funcionários
    async getEmployees(filters = {}) {
        try {
            return await this.backend.getEmployees(filters);
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
            throw new Error(`Erro ao buscar funcionários: ${error.message}`);
        }
    }

    async getEmployee(id) {
        try {
            return await this.backend.getEmployee(id);
        } catch (error) {
            console.error('Erro ao buscar funcionário:', error);
            throw new Error(`Erro ao buscar funcionário: ${error.message}`);
        }
    }

    async createEmployee(employeeData) {
        try {
            // Garantir que os dados estejam no formato correto
            const formattedData = {
                nome: employeeData.nome || 'Novo Funcionário',
                cargo: employeeData.cargo || '',
                departamento: employeeData.departamento || '',
                email: employeeData.email || '',
                foto: employeeData.foto || 'https://via.placeholder.com/150',
                status: employeeData.status || 'ativo',
                admissao: employeeData.admissao || new Date().toISOString().split('T')[0],
                progresso: 0
            };
            return await this.backend.createEmployee(formattedData);
        } catch (error) {
            console.error('Erro ao criar funcionário:', error);
            throw new Error(`Erro ao criar funcionário: ${error.message}`);
        }
    }

    async updateEmployee(id, employeeData) {
        try {
            return await this.backend.updateEmployee(id, employeeData);
        } catch (error) {
            console.error('Erro ao atualizar funcionário:', error);
            throw new Error(`Erro ao atualizar funcionário: ${error.message}`);
        }
    }

    async deleteEmployee(id) {
        try {
            return await this.backend.deleteEmployee(id);
        } catch (error) {
            console.error('Erro ao deletar funcionário:', error);
            throw new Error(`Erro ao deletar funcionário: ${error.message}`);
        }
    }

    // Metas
    async getGoals() {
        try {
            return await this.backend.getGoals();
        } catch (error) {
            console.error('Erro ao buscar metas:', error);
            throw new Error(`Erro ao buscar metas: ${error.message}`);
        }
    }

    async getEmployeeGoals(employeeId) {
        try {
            return await this.backend.getEmployeeGoals(employeeId);
        } catch (error) {
            console.error('Erro ao buscar metas do funcionário:', error);
            throw new Error(`Erro ao buscar metas do funcionário: ${error.message}`);
        }
    }

    async createGoal(goalData) {
        try {
            const formattedData = {
                titulo: goalData.titulo || 'Nova Meta',
                descricao: goalData.descricao || '',
                prazo: goalData.prazo || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                prioridade: goalData.prioridade || 'media',
                funcionarioId: parseInt(goalData.funcionarioId) || 1,
                progresso: 0,
                status: 'em_andamento'
            };
            return await this.backend.createGoal(formattedData);
        } catch (error) {
            console.error('Erro ao criar meta:', error);
            throw new Error(`Erro ao criar meta: ${error.message}`);
        }
    }

    async updateGoal(id, goalData) {
        try {
            return await this.backend.updateGoal(id, goalData);
        } catch (error) {
            console.error('Erro ao atualizar meta:', error);
            throw new Error(`Erro ao atualizar meta: ${error.message}`);
        }
    }

    async updateGoalProgress(id, progress) {
        try {
            return await this.backend.updateGoalProgress(id, progress);
        } catch (error) {
            console.error('Erro ao atualizar progresso da meta:', error);
            throw new Error(`Erro ao atualizar progresso da meta: ${error.message}`);
        }
    }

    async deleteGoal(id) {
        try {
            return await this.backend.deleteGoal(id);
        } catch (error) {
            console.error('Erro ao deletar meta:', error);
            throw new Error(`Erro ao deletar meta: ${error.message}`);
        }
    }

    // Treinamentos
    async getTrainings() {
        try {
            return await this.backend.getTrainings();
        } catch (error) {
            console.error('Erro ao buscar treinamentos:', error);
            throw new Error(`Erro ao buscar treinamentos: ${error.message}`);
        }
    }

    async createTraining(trainingData) {
        try {
            return await this.backend.createTraining(trainingData);
        } catch (error) {
            console.error('Erro ao criar treinamento:', error);
            throw new Error(`Erro ao criar treinamento: ${error.message}`);
        }
    }

    // Avaliações
    async getEvaluations() {
        try {
            return await this.backend.getEvaluations();
        } catch (error) {
            console.error('Erro ao buscar avaliações:', error);
            throw new Error(`Erro ao buscar avaliações: ${error.message}`);
        }
    }

    async createEvaluation(evaluationData) {
        try {
            return await this.backend.createEvaluation(evaluationData);
        } catch (error) {
            console.error('Erro ao criar avaliação:', error);
            throw new Error(`Erro ao criar avaliação: ${error.message}`);
        }
    }

    // Dashboard
    async getDashboardStats() {
        try {
            return await this.backend.getDashboardStats();
        } catch (error) {
            console.error('Erro ao buscar estatísticas:', error);
            // Retornar dados padrão em caso de erro
            return {
                totalEmployees: 0,
                activeGoals: 0,
                activeTrainings: 0,
                pendingEvaluations: 0,
                avgProgress: 0,
                recentActivities: []
            };
        }
    }

    // Departamentos
    async getDepartments() {
        try {
            return await this.backend.getDepartments();
        } catch (error) {
            console.error('Erro ao buscar departamentos:', error);
            throw new Error(`Erro ao buscar departamentos: ${error.message}`);
        }
    }

    // Relatórios
    async getReportData() {
        try {
            return await this.backend.getReportData();
        } catch (error) {
            console.error('Erro ao buscar dados de relatório:', error);
            throw new Error(`Erro ao buscar dados de relatório: ${error.message}`);
        }
    }
}

// Inicializar serviço
const apiService = new ApiService();
window.apiService = apiService;
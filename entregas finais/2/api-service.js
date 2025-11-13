// api-service.js
class ApiService {
    constructor() {
        this.backend = window.mockBackend;
    }

    // Funcionários
    async getEmployees(filters = {}) {
        try {
            return await this.backend.getEmployees(filters);
        } catch (error) {
            throw new Error(`Erro ao buscar funcionários: ${error.message}`);
        }
    }

    async getEmployee(id) {
        try {
            return await this.backend.getEmployee(id);
        } catch (error) {
            throw new Error(`Erro ao buscar funcionário: ${error.message}`);
        }
    }

    async createEmployee(employeeData) {
        try {
            return await this.backend.createEmployee(employeeData);
        } catch (error) {
            throw new Error(`Erro ao criar funcionário: ${error.message}`);
        }
    }

    async updateEmployee(id, employeeData) {
        try {
            return await this.backend.updateEmployee(id, employeeData);
        } catch (error) {
            throw new Error(`Erro ao atualizar funcionário: ${error.message}`);
        }
    }

    async deleteEmployee(id) {
        try {
            return await this.backend.deleteEmployee(id);
        } catch (error) {
            throw new Error(`Erro ao deletar funcionário: ${error.message}`);
        }
    }

    // Metas
    async getGoals() {
        try {
            return await this.backend.getGoals();
        } catch (error) {
            throw new Error(`Erro ao buscar metas: ${error.message}`);
        }
    }

    async getEmployeeGoals(employeeId) {
        try {
            return await this.backend.getEmployeeGoals(employeeId);
        } catch (error) {
            throw new Error(`Erro ao buscar metas do funcionário: ${error.message}`);
        }
    }

    async createGoal(goalData) {
        try {
            return await this.backend.createGoal(goalData);
        } catch (error) {
            throw new Error(`Erro ao criar meta: ${error.message}`);
        }
    }

    async updateGoal(id, goalData) {
        try {
            return await this.backend.updateGoal(id, goalData);
        } catch (error) {
            throw new Error(`Erro ao atualizar meta: ${error.message}`);
        }
    }

    async updateGoalProgress(id, progress) {
        try {
            return await this.backend.updateGoalProgress(id, progress);
        } catch (error) {
            throw new Error(`Erro ao atualizar progresso da meta: ${error.message}`);
        }
    }

    async deleteGoal(id) {
        try {
            return await this.backend.deleteGoal(id);
        } catch (error) {
            throw new Error(`Erro ao deletar meta: ${error.message}`);
        }
    }

    // Treinamentos
    async getTrainings() {
        try {
            return await this.backend.getTrainings();
        } catch (error) {
            throw new Error(`Erro ao buscar treinamentos: ${error.message}`);
        }
    }

    async createTraining(trainingData) {
        try {
            return await this.backend.createTraining(trainingData);
        } catch (error) {
            throw new Error(`Erro ao criar treinamento: ${error.message}`);
        }
    }

    // Avaliações
    async getEvaluations() {
        try {
            return await this.backend.getEvaluations();
        } catch (error) {
            throw new Error(`Erro ao buscar avaliações: ${error.message}`);
        }
    }

    async createEvaluation(evaluationData) {
        try {
            return await this.backend.createEvaluation(evaluationData);
        } catch (error) {
            throw new Error(`Erro ao criar avaliação: ${error.message}`);
        }
    }

    // Dashboard
    async getDashboardStats() {
        try {
            return await this.backend.getDashboardStats();
        } catch (error) {
            throw new Error(`Erro ao buscar estatísticas: ${error.message}`);
        }
    }

    // Departamentos
    async getDepartments() {
        try {
            return await this.backend.getDepartments();
        } catch (error) {
            throw new Error(`Erro ao buscar departamentos: ${error.message}`);
        }
    }

    // Relatórios
    async getReportData() {
        try {
            return await this.backend.getReportData();
        } catch (error) {
            throw new Error(`Erro ao buscar dados de relatório: ${error.message}`);
        }
    }
}

// Inicializar serviço
const apiService = new ApiService();
window.apiService = apiService;
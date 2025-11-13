// api-service.js
class ApiService {
    constructor() {
        this.baseURL = ''; // Para o backend falso
        this.mockBackend = window.mockBackend || new MockBackend();
    }

    // Simula delay de rede
    async simulateNetworkDelay(ms = 500) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Funcionários
    async getEmployees() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getEmployees();
    }

    async getEmployee(id) {
        await this.simulateNetworkDelay();
        return this.mockBackend.getEmployee(id);
    }

    async createEmployee(employeeData) {
        await this.simulateNetworkDelay();
        return this.mockBackend.addEmployee(employeeData);
    }

    async updateEmployee(id, employeeData) {
        await this.simulateNetworkDelay();
        return this.mockBackend.updateEmployee(id, employeeData);
    }

    async deleteEmployee(id) {
        await this.simulateNetworkDelay();
        return this.mockBackend.deleteEmployee(id);
    }

    // Metas
    async getGoals() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getGoals();
    }

    async getEmployeeGoals(employeeId) {
        await this.simulateNetworkDelay();
        return this.mockBackend.getEmployeeGoals(employeeId);
    }

    async createGoal(goalData) {
        await this.simulateNetworkDelay();
        return this.mockBackend.addGoal(goalData);
    }

    async updateGoalProgress(id, progress) {
        await this.simulateNetworkDelay();
        return this.mockBackend.updateGoalProgress(id, progress);
    }

    // Habilidades
    async getSkills() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getSkills();
    }

    async createSkill(skillData) {
        await this.simulateNetworkDelay();
        return this.mockBackend.addSkill(skillData);
    }

    // Mentorias
    async getMentorships() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getMentorships();
    }

    // Dashboard
    async getDashboardStats() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getDashboardStats();
    }

    // Treinamentos
    async getTrainings() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getTrainings();
    }

    // Avaliações
    async getEvaluations() {
        await this.simulateNetworkDelay();
        return this.mockBackend.getEvaluations();
    }
}

// Inicializar serviço
const apiService = new ApiService();

// Para uso global
window.apiService = apiService;
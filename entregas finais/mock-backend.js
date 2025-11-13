// mock-backend.js
class MockBackend {
    constructor() {
        this.employees = this.generateEmployees();
        this.goals = this.generateGoals();
        this.trainings = this.generateTrainings();
        this.evaluations = this.generateEvaluations();
        this.departments = this.generateDepartments();
        this.activities = this.generateActivities();
    }

    // =============================================
    // GERADORES DE DADOS SAMPLE
    // =============================================

    generateEmployees() {
        return [
            {
                id: 1,
                nome: "João Silva",
                cargo: "Desenvolvedor Senior",
                departamento: "TI",
                email: "joao.silva@empresa.com",
                foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                progresso: 85,
                status: "ativo",
                admissao: "2022-03-15",
                telefone: "(11) 99999-9999",
                salario: 8500,
                habilidades: ["JavaScript", "React", "Node.js", "AWS"],
                dataNascimento: "1990-05-15"
            },
            {
                id: 2,
                nome: "Maria Santos",
                cargo: "Analista de RH",
                departamento: "RH",
                email: "maria.santos@empresa.com",
                foto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                progresso: 92,
                status: "ativo",
                admissao: "2021-08-22",
                telefone: "(11) 98888-8888",
                salario: 5200,
                habilidades: ["Recrutamento", "Treinamento", "Gestão de Pessoas"],
                dataNascimento: "1988-09-20"
            },
            {
                id: 3,
                nome: "Pedro Costa",
                cargo: "Gerente de Projetos",
                departamento: "TI",
                email: "pedro.costa@empresa.com",
                foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                progresso: 78,
                status: "ativo",
                admissao: "2020-11-10",
                telefone: "(11) 97777-7777",
                salario: 12000,
                habilidades: ["Gestão de Projetos", "Scrum", "Liderança"],
                dataNascimento: "1985-03-10"
            },
            {
                id: 4,
                nome: "Ana Oliveira",
                cargo: "Desenvolvedora Front-end",
                departamento: "TI",
                email: "ana.oliveira@empresa.com",
                foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                progresso: 65,
                status: "ativo",
                admissao: "2023-01-30",
                telefone: "(11) 96666-6666",
                salario: 4800,
                habilidades: ["Vue.js", "CSS", "UI/UX"],
                dataNascimento: "1995-07-22"
            },
            {
                id: 5,
                nome: "Carlos Lima",
                cargo: "Analista de Marketing",
                departamento: "Marketing",
                email: "carlos.lima@empresa.com",
                foto: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
                progresso: 88,
                status: "ativo",
                admissao: "2022-06-18",
                telefone: "(11) 95555-5555",
                salario: 4500,
                habilidades: ["Marketing Digital", "SEO", "Redes Sociais"],
                dataNascimento: "1992-11-30"
            },
            {
                id: 6,
                nome: "Fernanda Rodrigues",
                cargo: "Gerente de Vendas",
                departamento: "Vendas",
                email: "fernanda.rodrigues@empresa.com",
                foto: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
                progresso: 95,
                status: "ativo",
                admissao: "2019-04-12",
                telefone: "(11) 94444-4444",
                salario: 15000,
                habilidades: ["Vendas", "Negociação", "Gestão de Equipe"],
                dataNascimento: "1983-12-05"
            }
        ];
    }

    generateGoals() {
        return [
            {
                id: 1,
                titulo: "Certificação AWS Solutions Architect",
                descricao: "Concluir certificação AWS e implementar soluções em cloud para 3 projetos",
                prazo: "2024-06-15",
                progresso: 75,
                prioridade: "alta",
                status: "em_andamento",
                funcionarioId: 1,
                categoria: "Certificação",
                dataInicio: "2024-01-10",
                tarefas: [
                    { id: 1, descricao: "Estudar módulo IAM e EC2", concluida: true },
                    { id: 2, descricao: "Praticar com laboratórios AWS", concluida: true },
                    { id: 3, descricao: "Fazer simulado oficial", concluida: false },
                    { id: 4, descricao: "Agendar exame", concluida: false }
                ]
            },
            {
                id: 2,
                titulo: "Curso de Liderança Avançada",
                descricao: "Completar curso avançado de liderança e gestão de equipes",
                prazo: "2024-04-30",
                progresso: 100,
                prioridade: "media",
                status: "concluido",
                funcionarioId: 3,
                categoria: "Desenvolvimento Pessoal",
                dataInicio: "2024-01-15",
                tarefas: [
                    { id: 1, descricao: "Módulo 1 - Fundamentos", concluida: true },
                    { id: 2, descricao: "Módulo 2 - Gestão de Conflitos", concluida: true },
                    { id: 3, descricao: "Projeto final", concluida: true }
                ]
            },
            {
                id: 3,
                titulo: "Meta de Vendas Q1 2024",
                descricao: "Atingir meta de R$ 500.000 em vendas no primeiro trimestre",
                prazo: "2024-03-31",
                progresso: 60,
                prioridade: "alta",
                status: "em_andamento",
                funcionarioId: 6,
                categoria: "Vendas",
                dataInicio: "2024-01-01",
                tarefas: [
                    { id: 1, descricao: "Contatar 50 leads", concluida: true },
                    { id: 2, descricao: "Fechar 15 contratos", concluida: false },
                    { id: 3, descricao: "Report mensal", concluida: false }
                ]
            },
            {
                id: 4,
                titulo: "Implementação Novo Sistema de RH",
                descricao: "Migrar todos os processos de RH para o novo sistema",
                prazo: "2024-05-20",
                progresso: 40,
                prioridade: "alta",
                status: "em_andamento",
                funcionarioId: 2,
                categoria: "Projeto",
                dataInicio: "2024-02-01",
                tarefas: [
                    { id: 1, descricao: "Mapear processos atuais", concluida: true },
                    { id: 2, descricao: "Configurar sistema", concluida: false },
                    { id: 3, descricao: "Treinar equipe", concluida: false }
                ]
            }
        ];
    }

    generateTrainings() {
        return [
            {
                id: 1,
                titulo: "Liderança e Gestão de Equipes",
                descricao: "Desenvolvimento de habilidades de liderança para gestores",
                instrutor: "Carlos Mendes",
                duracao: "40 horas",
                status: "ativo",
                progresso: 65,
                dataInicio: "2024-02-01",
                dataFim: "2024-03-15",
                participantes: [1, 3, 6],
                categoria: "Liderança",
                vagas: 20,
                vagasDisponiveis: 8
            },
            {
                id: 2,
                titulo: "Comunicação Eficaz",
                descricao: "Técnicas avançadas de comunicação interpessoal",
                instrutor: "Ana Costa",
                duracao: "20 horas",
                status: "ativo",
                progresso: 80,
                dataInicio: "2024-01-15",
                dataFim: "2024-02-28",
                participantes: [2, 4, 5],
                categoria: "Comunicação",
                vagas: 15,
                vagasDisponiveis: 7
            },
            {
                id: 3,
                titulo: "Gestão do Tempo",
                descricao: "Otimização do tempo e aumento da produtividade",
                instrutor: "Roberto Alves",
                duracao: "16 horas",
                status: "agendado",
                progresso: 0,
                dataInicio: "2024-03-15",
                dataFim: "2024-03-20",
                participantes: [],
                categoria: "Produtividade",
                vagas: 20,
                vagasDisponiveis: 20
            },
            {
                id: 4,
                titulo: "Inteligência Emocional",
                descricao: "Desenvolvimento da inteligência emocional no ambiente corporativo",
                instrutor: "Patrícia Lima",
                duracao: "24 horas",
                status: "agendado",
                progresso: 0,
                dataInicio: "2024-03-22",
                dataFim: "2024-04-05",
                participantes: [],
                categoria: "Desenvolvimento Pessoal",
                vagas: 15,
                vagasDisponiveis: 15
            }
        ];
    }

    generateEvaluations() {
        return [
            {
                id: 1,
                funcionarioId: 1,
                avaliador: "Pedro Costa",
                data: "2024-01-20",
                tipo: "Trimestral",
                competencias: [
                    { nome: "Qualidade do Trabalho", nota: 4.5 },
                    { nome: "Produtividade", nota: 4.0 },
                    { nome: "Trabalho em Equipe", nota: 4.8 },
                    { nome: "Proatividade", nota: 4.2 },
                    { nome: "Conhecimento Técnico", nota: 4.7 }
                ],
                feedback: "Excelente desempenho técnico e ótima colaboração com a equipe. Continue com o bom trabalho!",
                status: "concluida",
                notaGeral: 4.4
            },
            {
                id: 2,
                funcionarioId: 2,
                avaliador: "Pedro Costa",
                data: "2024-01-22",
                tipo: "Trimestral",
                competencias: [
                    { nome: "Qualidade do Trabalho", nota: 4.8 },
                    { nome: "Produtividade", nota: 4.5 },
                    { nome: "Trabalho em Equipe", nota: 4.6 },
                    { nome: "Proatividade", nota: 4.7 },
                    { nome: "Comunicação", nota: 4.9 }
                ],
                feedback: "Profissional excepcional com ótimas habilidades de comunicação e organização.",
                status: "concluida",
                notaGeral: 4.7
            },
            {
                id: 3,
                funcionarioId: 3,
                avaliador: "João Silva",
                data: "2024-03-15",
                tipo: "Trimestral",
                competencias: [
                    { nome: "Liderança", nota: null },
                    { nome: "Gestão de Projetos", nota: null },
                    { nome: "Comunicação", nota: null },
                    { nome: "Tomada de Decisão", nota: null }
                ],
                feedback: "",
                status: "pendente",
                notaGeral: null
            }
        ];
    }

    generateDepartments() {
        return [
            { id: 1, nome: "TI", totalFuncionarios: 3, orcamento: 500000 },
            { id: 2, nome: "RH", totalFuncionarios: 1, orcamento: 200000 },
            { id: 3, nome: "Vendas", totalFuncionarios: 1, orcamento: 300000 },
            { id: 4, nome: "Marketing", totalFuncionarios: 1, orcamento: 150000 }
        ];
    }

    generateActivities() {
        return [
            {
                id: 1,
                tipo: "novo_funcionario",
                descricao: "Novo funcionário contratado",
                detalhes: "Carlos Lima - Analista de Marketing",
                data: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                icone: "fa-user-plus",
                cor: "blue"
            },
            {
                id: 2,
                tipo: "meta_concluida",
                descricao: "Meta concluída",
                detalhes: "Pedro Costa - Curso de Liderança Avançada",
                data: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                icone: "fa-bullseye",
                cor: "green"
            },
            {
                id: 3,
                tipo: "treinamento_iniciado",
                descricao: "Treinamento iniciado",
                detalhes: "Liderança e Gestão de Equipes",
                data: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                icone: "fa-graduation-cap",
                cor: "purple"
            },
            {
                id: 4,
                tipo: "avaliacao_agendada",
                descricao: "Avaliação agendada",
                detalhes: "Avaliação de desempenho trimestral",
                data: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
                icone: "fa-clipboard-check",
                cor: "yellow"
            }
        ];
    }

    // =============================================
    // MÉTODOS DA API (CRUD)
    // =============================================

    // Funcionários
    async getEmployees(filters = {}) {
        await this.simulateDelay();
        let filtered = this.employees;
        
        if (filters.departamento) {
            filtered = filtered.filter(emp => emp.departamento === filters.departamento);
        }
        if (filters.status) {
            filtered = filtered.filter(emp => emp.status === filters.status);
        }
        if (filters.cargo) {
            filtered = filtered.filter(emp => emp.cargo.toLowerCase().includes(filters.cargo.toLowerCase()));
        }
        
        return filtered;
    }

    async getEmployee(id) {
        await this.simulateDelay();
        const employee = this.employees.find(emp => emp.id === parseInt(id));
        if (!employee) throw new Error('Funcionário não encontrado');
        return employee;
    }

    async createEmployee(employeeData) {
        await this.simulateDelay();
        const newEmployee = {
            id: Math.max(...this.employees.map(e => e.id)) + 1,
            ...employeeData,
            progresso: 0,
            status: 'ativo',
            foto: employeeData.foto || 'https://via.placeholder.com/150',
            dataCriacao: new Date().toISOString()
        };
        this.employees.push(newEmployee);
        return newEmployee;
    }

    async updateEmployee(id, employeeData) {
        await this.simulateDelay();
        const index = this.employees.findIndex(emp => emp.id === parseInt(id));
        if (index === -1) throw new Error('Funcionário não encontrado');
        
        this.employees[index] = { ...this.employees[index], ...employeeData };
        return this.employees[index];
    }

    async deleteEmployee(id) {
        await this.simulateDelay();
        const index = this.employees.findIndex(emp => emp.id === parseInt(id));
        if (index === -1) throw new Error('Funcionário não encontrado');
        
        this.employees.splice(index, 1);
        return { success: true };
    }

    // Metas
    async getGoals() {
        await this.simulateDelay();
        return this.goals;
    }

    async getEmployeeGoals(employeeId) {
        await this.simulateDelay();
        return this.goals.filter(goal => goal.funcionarioId === parseInt(employeeId));
    }

    async createGoal(goalData) {
        await this.simulateDelay();
        const newGoal = {
            id: Math.max(...this.goals.map(g => g.id)) + 1,
            ...goalData,
            progresso: 0,
            status: 'em_andamento',
            dataCriacao: new Date().toISOString(),
            tarefas: []
        };
        this.goals.push(newGoal);
        return newGoal;
    }

    async updateGoal(id, goalData) {
        await this.simulateDelay();
        const index = this.goals.findIndex(g => g.id === parseInt(id));
        if (index === -1) throw new Error('Meta não encontrada');
        
        this.goals[index] = { ...this.goals[index], ...goalData };
        return this.goals[index];
    }

    async updateGoalProgress(id, progress) {
        await this.simulateDelay();
        const goal = this.goals.find(g => g.id === parseInt(id));
        if (!goal) throw new Error('Meta não encontrada');
        
        goal.progresso = progress;
        if (progress === 100) {
            goal.status = 'concluido';
        }
        return goal;
    }

    async deleteGoal(id) {
        await this.simulateDelay();
        const index = this.goals.findIndex(g => g.id === parseInt(id));
        if (index === -1) throw new Error('Meta não encontrada');
        
        this.goals.splice(index, 1);
        return { success: true };
    }

    // Treinamentos
    async getTrainings() {
        await this.simulateDelay();
        return this.trainings;
    }

    async createTraining(trainingData) {
        await this.simulateDelay();
        const newTraining = {
            id: Math.max(...this.trainings.map(t => t.id)) + 1,
            ...trainingData,
            status: 'agendado',
            progresso: 0,
            participantes: []
        };
        this.trainings.push(newTraining);
        return newTraining;
    }

    // Avaliações
    async getEvaluations() {
        await this.simulateDelay();
        return this.evaluations;
    }

    async createEvaluation(evaluationData) {
        await this.simulateDelay();
        const newEvaluation = {
            id: Math.max(...this.evaluations.map(e => e.id)) + 1,
            ...evaluationData,
            status: 'pendente',
            data: new Date().toISOString().split('T')[0]
        };
        this.evaluations.push(newEvaluation);
        return newEvaluation;
    }

    // Dashboard
    async getDashboardStats() {
        await this.simulateDelay();
        const activeGoals = this.goals.filter(g => g.status === 'em_andamento').length;
        const completedGoals = this.goals.filter(g => g.status === 'concluido').length;
        const activeTrainings = this.trainings.filter(t => t.status === 'ativo').length;
        const pendingEvaluations = this.evaluations.filter(e => e.status === 'pendente').length;
        
        return {
            totalEmployees: this.employees.length,
            activeGoals,
            completedGoals,
            activeTrainings,
            pendingEvaluations,
            avgProgress: Math.round(this.employees.reduce((acc, emp) => acc + emp.progresso, 0) / this.employees.length),
            recentActivities: this.activities
        };
    }

    // Utilitários
    async simulateDelay(ms = 500) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Departamentos
    async getDepartments() {
        await this.simulateDelay();
        return this.departments;
    }

    // Relatórios
    async getReportData() {
        await this.simulateDelay();
        return {
            turnoverData: [8.2, 7.5, 6.8, 5.9, 5.2, 4.8, 5.1, 4.9, 4.7, 4.5, 4.3, 4.1],
            satisfactionData: [4.5, 4.2, 4.1, 4.3, 4.0, 4.4],
            departmentLabels: ['TI', 'RH', 'Vendas', 'Marketing', 'Financeiro', 'Operações']
        };
    }
}

// =============================================
// INICIALIZAÇÃO
// =============================================
const mockBackend = new MockBackend();

// Para uso no navegador
if (typeof window !== 'undefined') {
    window.mockBackend = mockBackend;
}
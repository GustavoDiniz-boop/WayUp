// mock-backend.js
class MockBackend {
    constructor() {
        this.employees = this.generateEmployees();
        this.goals = this.generateGoals();
        this.skills = this.generateSkills();
        this.trainings = this.generateTrainings();
        this.mentorships = this.generateMentorships();
        this.evaluations = this.generateEvaluations();
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
                habilidades: ["JavaScript", "React", "Node.js"]
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
                habilidades: ["Recrutamento", "Treinamento", "Gestão de Pessoas"]
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
                habilidades: ["Gestão de Projetos", "Scrum", "Liderança"]
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
                habilidades: ["Vue.js", "CSS", "UI/UX"]
            }
        ];
    }

    generateGoals() {
        return [
            {
                id: 1,
                titulo: "Certificação AWS Solutions Architect",
                descricao: "Concluir certificação AWS e implementar soluções em cloud",
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
                funcionarioId: 2,
                categoria: "Vendas",
                dataInicio: "2024-01-01",
                tarefas: [
                    { id: 1, descricao: "Contatar 50 leads", concluida: true },
                    { id: 2, descricao: "Fechar 15 contratos", concluida: false },
                    { id: 3, descricao: "Report mensal", concluida: false }
                ]
            }
        ];
    }

    generateSkills() {
        return [
            {
                id: 1,
                nome: "JavaScript Avançado",
                categoria: "Técnicas",
                nivel: "Avançado",
                descricao: "Domínio de ES6+, async/await, e frameworks modernos",
                funcionarioId: 1,
                dataAdicao: "2024-01-15",
                progresso: 90
            },
            {
                id: 2,
                nome: "React e React Native",
                categoria: "Técnicas",
                nivel: "Avançado",
                descricao: "Desenvolvimento de aplicações web e mobile",
                funcionarioId: 1,
                dataAdicao: "2024-01-10",
                progresso: 85
            },
            {
                id: 3,
                nome: "Liderança de Equipes",
                categoria: "Liderança",
                nivel: "Intermediário",
                descricao: "Gestão de squipes ágeis e desenvolvimento de talentos",
                funcionarioId: 3,
                dataAdicao: "2024-01-20",
                progresso: 75
            },
            {
                id: 4,
                nome: "Comunicação Eficaz",
                categoria: "Comportamentais",
                nivel: "Avançado",
                descricao: "Apresentações, negociação e comunicação interpessoal",
                funcionarioId: 2,
                dataAdicao: "2024-01-05",
                progresso: 95
            }
        ];
    }

    generateTrainings() {
        return [
            {
                id: 1,
                titulo: "Scrum Master Certification",
                descricao: "Certificação oficial Scrum Master",
                instrutor: "Carlos Mendes",
                duracao: "40 horas",
                status: "em_andamento",
                progresso: 60,
                dataInicio: "2024-02-01",
                dataFim: "2024-03-15",
                participantes: [1, 3]
            },
            {
                id: 2,
                titulo: "Gestão de Tempo e Produtividade",
                descricao: "Otimização do tempo e aumento da produtividade",
                instrutor: "Ana Beatriz",
                duracao: "20 horas",
                status: "concluido",
                progresso: 100,
                dataInicio: "2024-01-10",
                dataFim: "2024-01-30",
                participantes: [1, 2, 3, 4]
            }
        ];
    }

    generateMentorships() {
        return [
            {
                id: 1,
                mentor: "Maria Silva",
                mentorado: "João Silva",
                area: "Liderança e Gestão de Equipes",
                status: "ativa",
                encontrosRealizados: 3,
                totalEncontros: 6,
                dataInicio: "2024-01-15",
                dataFim: "2024-04-15",
                tarefas: [
                    { id: 1, descricao: "Preparar apresentação de liderança", concluida: true },
                    { id: 2, descricao: "Revisar feedback do último encontro", concluida: false },
                    { id: 3, descricao: "Ler livro sobre gestão", concluida: false }
                ]
            },
            {
                id: 2,
                mentor: "Carlos Oliveira",
                mentorado: "Ana Oliveira",
                area: "Desenvolvimento de Carreira e Networking",
                status: "ativa",
                encontrosRealizados: 2,
                totalEncontros: 5,
                dataInicio: "2024-02-01",
                dataFim: "2024-05-01",
                tarefas: [
                    { id: 1, descricao: "Atualizar currículo", concluida: true },
                    { id: 2, descricao: "Participar de evento de networking", concluida: false }
                ]
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
                    { nome: "Proatividade", nota: 4.2 }
                ],
                feedback: "Excelente desempenho técnico e ótima colaboração com a equipe.",
                status: "concluida"
            }
        ];
    }

    // =============================================
    // MÉTODOS DA API (CRUD)
    // =============================================

    // Funcionários
    getEmployees() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.employees), 500);
        });
    }

    getEmployee(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const employee = this.employees.find(emp => emp.id === parseInt(id));
                if (employee) {
                    resolve(employee);
                } else {
                    reject(new Error('Funcionário não encontrado'));
                }
            }, 300);
        });
    }

    addEmployee(employeeData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newEmployee = {
                    id: Math.max(...this.employees.map(e => e.id)) + 1,
                    ...employeeData,
                    progresso: 0,
                    status: 'ativo',
                    dataAdicao: new Date().toISOString().split('T')[0]
                };
                this.employees.push(newEmployee);
                resolve(newEmployee);
            }, 500);
        });
    }

    updateEmployee(id, employeeData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.employees.findIndex(emp => emp.id === parseInt(id));
                if (index !== -1) {
                    this.employees[index] = { ...this.employees[index], ...employeeData };
                    resolve(this.employees[index]);
                } else {
                    reject(new Error('Funcionário não encontrado'));
                }
            }, 500);
        });
    }

    deleteEmployee(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.employees.findIndex(emp => emp.id === parseInt(id));
                if (index !== -1) {
                    this.employees.splice(index, 1);
                    resolve({ success: true });
                } else {
                    reject(new Error('Funcionário não encontrado'));
                }
            }, 500);
        });
    }

    // Metas
    getGoals() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.goals), 500);
        });
    }

    getEmployeeGoals(employeeId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const employeeGoals = this.goals.filter(goal => goal.funcionarioId === parseInt(employeeId));
                resolve(employeeGoals);
            }, 400);
        });
    }

    addGoal(goalData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newGoal = {
                    id: Math.max(...this.goals.map(g => g.id)) + 1,
                    ...goalData,
                    progresso: 0,
                    status: 'em_andamento',
                    dataCriacao: new Date().toISOString().split('T')[0],
                    tarefas: []
                };
                this.goals.push(newGoal);
                resolve(newGoal);
            }, 500);
        });
    }

    updateGoalProgress(id, progress) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const goal = this.goals.find(g => g.id === parseInt(id));
                if (goal) {
                    goal.progresso = progress;
                    if (progress === 100) {
                        goal.status = 'concluido';
                    }
                    resolve(goal);
                } else {
                    reject(new Error('Meta não encontrada'));
                }
            }, 300);
        });
    }

    // Habilidades
    getSkills() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.skills), 400);
        });
    }

    addSkill(skillData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newSkill = {
                    id: Math.max(...this.skills.map(s => s.id)) + 1,
                    ...skillData,
                    dataAdicao: new Date().toISOString().split('T')[0],
                    progresso: 0
                };
                this.skills.push(newSkill);
                resolve(newSkill);
            }, 500);
        });
    }

    // Mentorias
    getMentorships() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.mentorships), 500);
        });
    }

    // Dashboard Stats
    getDashboardStats() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const stats = {
                    totalEmployees: this.employees.length,
                    activeGoals: this.goals.filter(g => g.status === 'em_andamento').length,
                    completedGoals: this.goals.filter(g => g.status === 'concluido').length,
                    activeTrainings: this.trainings.filter(t => t.status === 'em_andamento').length,
                    pendingEvaluations: 3, // Simulado
                    avgProgress: Math.round(this.employees.reduce((acc, emp) => acc + emp.progresso, 0) / this.employees.length),
                    recentActivities: this.generateRecentActivities()
                };
                resolve(stats);
            }, 600);
        });
    }

    generateRecentActivities() {
        return [
            {
                id: 1,
                tipo: "novo_funcionario",
                descricao: "Novo funcionário contratado",
                detalhes: "Carlos Lima - Analista de Marketing",
                data: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 2,
                tipo: "meta_concluida",
                descricao: "Meta concluída",
                detalhes: "João Silva - Certificação Cloud",
                data: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
            },
            {
                id: 3,
                tipo: "treinamento_iniciado",
                descricao: "Treinamento iniciado",
                detalhes: "Liderança e Gestão de Equipes",
                data: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            }
        ];
    }
}

// =============================================
// INICIALIZAÇÃO E EXPORTAÇÃO
// =============================================
const mockBackend = new MockBackend();

// Para uso no navegador
if (typeof window !== 'undefined') {
    window.mockBackend = mockBackend;
}

// Para uso com módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockBackend;
}
// api-service-funcionario.js
class ApiServiceFuncionario {
    constructor() {
        this.backend = window.mockBackend;
        this.funcionarioId = 1; // ID do funcionário logado (pode vir de login/autenticação)
    }

    // Metas do funcionário
    async getMinhasMetas() {
        try {
            return await this.backend.getEmployeeGoals(this.funcionarioId);
        } catch (error) {
            console.error('Erro ao buscar metas:', error);
            throw new Error(`Erro ao buscar metas: ${error.message}`);
        }
    }

    async createMeta(metaData) {
        try {
            const formattedData = {
                ...metaData,
                funcionarioId: this.funcionarioId,
                progresso: 0,
                status: 'em_andamento'
            };
            return await this.backend.createGoal(formattedData);
        } catch (error) {
            console.error('Erro ao criar meta:', error);
            throw new Error(`Erro ao criar meta: ${error.message}`);
        }
    }

    async updateMeta(id, metaData) {
        try {
            return await this.backend.updateGoal(id, metaData);
        } catch (error) {
            console.error('Erro ao atualizar meta:', error);
            throw new Error(`Erro ao atualizar meta: ${error.message}`);
        }
    }

    async updateProgressoMeta(id, progresso) {
        try {
            return await this.backend.updateGoalProgress(id, progresso);
        } catch (error) {
            console.error('Erro ao atualizar progresso:', error);
            throw new Error(`Erro ao atualizar progresso: ${error.message}`);
        }
    }

    async deleteMeta(id) {
        try {
            return await this.backend.deleteGoal(id);
        } catch (error) {
            console.error('Erro ao deletar meta:', error);
            throw new Error(`Erro ao deletar meta: ${error.message}`);
        }
    }

    // Habilidades (precisamos estender o backend)
    async getMinhasHabilidades() {
        try {
            // Simular dados de habilidades
            await this.backend.simulateDelay();
            return [
                { 
                    id: 1,
                    nome: 'Desenvolvimento Front-end', 
                    categoria: 'Técnicas', 
                    nivel: 'Intermediário',
                    descricao: 'HTML, CSS, JavaScript e frameworks modernos',
                    progresso: 80
                },
                { 
                    id: 2,
                    nome: 'Comunicação Eficaz', 
                    categoria: 'Comportamentais', 
                    nivel: 'Avançado',
                    descricao: 'Apresentações, negociação e comunicação interpessoal',
                    progresso: 90
                },
                { 
                    id: 3,
                    nome: 'Liderança', 
                    categoria: 'Liderança', 
                    nivel: 'Intermediário',
                    descricao: 'Gestão de equipes e tomada de decisão',
                    progresso: 70
                }
            ];
        } catch (error) {
            console.error('Erro ao buscar habilidades:', error);
            return [];
        }
    }

    async createHabilidade(habilidadeData) {
        try {
            await this.backend.simulateDelay();
            // Simular criação de habilidade
            return {
                id: Date.now(),
                ...habilidadeData,
                progresso: 0
            };
        } catch (error) {
            console.error('Erro ao criar habilidade:', error);
            throw new Error(`Erro ao criar habilidade: ${error.message}`);
        }
    }

    async updateHabilidade(id, habilidadeData) {
        try {
            await this.backend.simulateDelay();
            // Simular atualização de habilidade
            return { id, ...habilidadeData };
        } catch (error) {
            console.error('Erro ao atualizar habilidade:', error);
            throw new Error(`Erro ao atualizar habilidade: ${error.message}`);
        }
    }

    async deleteHabilidade(id) {
        try {
            await this.backend.simulateDelay();
            // Simular exclusão de habilidade
            return { success: true };
        } catch (error) {
            console.error('Erro ao deletar habilidade:', error);
            throw new Error(`Erro ao deletar habilidade: ${error.message}`);
        }
    }

    // Mentorias (precisamos estender o backend)
    async getMinhasMentorias() {
        try {
            await this.backend.simulateDelay();
            return [
                {
                    id: 1,
                    mentor: 'Maria Silva',
                    foco: 'Liderança e Gestão de Equipes',
                    encontrosRestantes: 2,
                    status: 'ativa',
                    tarefas: [
                        { id: 1, descricao: 'Preparar apresentação de liderança', concluida: false },
                        { id: 2, descricao: 'Revisar feedback do último encontro', concluida: true }
                    ]
                },
                {
                    id: 2,
                    mentor: 'Carlos Oliveira',
                    foco: 'Desenvolvimento de Carreira e Networking',
                    encontrosRestantes: 5,
                    status: 'ativa',
                    tarefas: [
                        { id: 1, descricao: 'Atualizar currículo', concluida: false },
                        { id: 2, descricao: 'Participar de evento de networking', concluida: false }
                    ]
                }
            ];
        } catch (error) {
            console.error('Erro ao buscar mentorias:', error);
            return [];
        }
    }

    async createMentoria(mentoriaData) {
        try {
            await this.backend.simulateDelay();
            return {
                id: Date.now(),
                ...mentoriaData,
                status: 'ativa',
                tarefas: []
            };
        } catch (error) {
            console.error('Erro ao criar mentoria:', error);
            throw new Error(`Erro ao criar mentoria: ${error.message}`);
        }
    }

    // Dashboard stats específicos do funcionário
    async getDashboardStats() {
        try {
            const metas = await this.getMinhasMetas();
            const habilidades = await this.getMinhasHabilidades();
            const mentorias = await this.getMinhasMentorias();

            const metasConcluidas = metas.filter(meta => meta.status === 'concluido').length;
            const progressoGeral = metas.length > 0 ? 
                Math.round(metas.reduce((acc, meta) => acc + meta.progresso, 0) / metas.length) : 0;
            
            const habilidadesProgresso = habilidades.length > 0 ?
                Math.round(habilidades.reduce((acc, hab) => acc + hab.progresso, 0) / habilidades.length) : 0;

            return {
                progressoGeral,
                habilidadesProgresso,
                metasConcluidas: `${metasConcluidas}/${metas.length}`,
                totalMetas: metas.length,
                totalHabilidades: habilidades.length,
                totalMentorias: mentorias.length,
                ultimaAvaliacao: 4.5
            };
        } catch (error) {
            console.error('Erro ao carregar estatísticas:', error);
            return {
                progressoGeral: 0,
                habilidadesProgresso: 0,
                metasConcluidas: '0/0',
                totalMetas: 0,
                totalHabilidades: 0,
                totalMentorias: 0,
                ultimaAvaliacao: 0
            };
        }
    }
}

// Inicializar serviço
const apiServiceFuncionario = new ApiServiceFuncionario();
window.apiServiceFuncionario = apiServiceFuncionario;
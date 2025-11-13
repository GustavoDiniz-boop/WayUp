// api-service-funcionario.js - CORRIGIDA
class ApiServiceFuncionario {
    constructor() {
        this.backend = window.mockBackend;
        // Obter ID do usuário logado
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        this.funcionarioId = 1; // ID do funcionário logado (João Silva)
        this.mentoriasStorageKey = 'mentoriasFuncionario';
        this.habilidadesStorageKey = 'habilidadesFuncionario';
        this.initializeData();
    }

    initializeData() {
        // Inicializar dados no localStorage se não existirem
        if (!localStorage.getItem(this.mentoriasStorageKey)) {
            const mentoriasIniciais = [
                {
                    id: 1,
                    mentor: "Carlos Silva",
                    foco: "Desenvolvimento de Liderança",
                    status: "ativa",
                    encontrosRestantes: 3,
                    encontrosTotais: 6,
                    tarefas: [
                        { id: "mt1", descricao: "Preparar plano de desenvolvimento", concluida: true },
                        { id: "mt2", descricao: "Ler livro sobre gestão de equipes", concluida: false },
                        { id: "mt3", descricao: "Participar de workshop de comunicação", concluida: false }
                    ]
                },
                {
                    id: 2,
                    mentor: "Ana Santos", 
                    foco: "Habilidades Técnicas Avançadas",
                    status: "concluida",
                    encontrosRestantes: 0,
                    encontrosTotais: 8,
                    tarefas: [
                        { id: "mt4", descricao: "Revisar conceitos avançados", concluida: true },
                        { id: "mt5", descricao: "Implementar projeto prático", concluida: true },
                        { id: "mt6", descricao: "Apresentar resultados", concluida: true }
                    ]
                }
            ];
            this.saveMentorias(mentoriasIniciais);
        }

        if (!localStorage.getItem(this.habilidadesStorageKey)) {
            const habilidadesIniciais = [
                {
                    id: 1,
                    nome: "JavaScript",
                    categoria: "Tecnologia",
                    nivel: "Avançado",
                    progresso: 85,
                    descricao: "Desenvolvimento front-end e back-end com Node.js"
                },
                {
                    id: 2,
                    nome: "Gestão de Projetos",
                    categoria: "Gestão", 
                    nivel: "Intermediário",
                    progresso: 60,
                    descricao: "Metodologias ágeis e acompanhamento de projetos"
                },
                {
                    id: 3,
                    nome: "React",
                    categoria: "Tecnologia",
                    nivel: "Intermediário", 
                    progresso: 75,
                    descricao: "Desenvolvimento de interfaces modernas"
                }
            ];
            this.saveHabilidades(habilidadesIniciais);
        }
    }

    // ========== MÉTODOS DE PERSISTÊNCIA ==========
    getMentorias() {
        const data = localStorage.getItem(this.mentoriasStorageKey);
        return data ? JSON.parse(data) : [];
    }

    saveMentorias(mentorias) {
        localStorage.setItem(this.mentoriasStorageKey, JSON.stringify(mentorias));
    }

    getHabilidades() {
        const data = localStorage.getItem(this.habilidadesStorageKey);
        return data ? JSON.parse(data) : [];
    }

    saveHabilidades(habilidades) {
        localStorage.setItem(this.habilidadesStorageKey, JSON.stringify(habilidades));
    }

    // ========== MÉTODOS PARA METAS ==========
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

    async deleteMeta(id) {
        try {
            return await this.backend.deleteGoal(id);
        } catch (error) {
            console.error('Erro ao deletar meta:', error);
            throw new Error(`Erro ao deletar meta: ${error.message}`);
        }
    }

    // ========== MÉTODOS PARA HABILIDADES ==========
    async getMinhasHabilidades() {
        try {
            await this.backend.simulateDelay();
            return this.getHabilidades();
        } catch (error) {
            console.error('Erro ao buscar habilidades:', error);
            return this.getHabilidades(); // Fallback para localStorage
        }
    }

    async createHabilidade(habilidadeData) {
        try {
            await this.backend.simulateDelay();
            const habilidades = this.getHabilidades();
            const novaHabilidade = {
                id: Date.now(),
                ...habilidadeData,
                progresso: 0
            };
            
            habilidades.push(novaHabilidade);
            this.saveHabilidades(habilidades);
            return novaHabilidade;
        } catch (error) {
            console.error('Erro ao criar habilidade:', error);
            throw new Error(`Erro ao criar habilidade: ${error.message}`);
        }
    }

    async updateHabilidade(id, habilidadeData) {
        try {
            await this.backend.simulateDelay();
            const habilidades = this.getHabilidades();
            const index = habilidades.findIndex(h => h.id === parseInt(id));
            
            if (index !== -1) {
                habilidades[index] = { ...habilidades[index], ...habilidadeData };
                this.saveHabilidades(habilidades);
                return habilidades[index];
            }
            throw new Error('Habilidade não encontrada');
        } catch (error) {
            console.error('Erro ao atualizar habilidade:', error);
            throw new Error(`Erro ao atualizar habilidade: ${error.message}`);
        }
    }

    async deleteHabilidade(id) {
        try {
            await this.backend.simulateDelay();
            const habilidades = this.getHabilidades();
            const habilidadesAtualizadas = habilidades.filter(h => h.id !== parseInt(id));
            this.saveHabilidades(habilidadesAtualizadas);
            return { success: true };
        } catch (error) {
            console.error('Erro ao deletar habilidade:', error);
            throw new Error(`Erro ao deletar habilidade: ${error.message}`);
        }
    }

    // ========== MÉTODOS PARA MENTORIAS ==========
    async getMinhasMentorias() {
        try {
            await this.backend.simulateDelay();
            return this.getMentorias();
        } catch (error) {
            console.error('Erro ao buscar mentorias:', error);
            return this.getMentorias(); // Fallback para localStorage
        }
    }

    async createMentoria(mentoriaData) {
        try {
            await this.backend.simulateDelay();
            const mentorias = this.getMentorias();
            const novaMentoria = {
                id: Date.now(),
                ...mentoriaData,
                status: 'ativa',
                tarefas: []
            };
            
            mentorias.push(novaMentoria);
            this.saveMentorias(mentorias);
            return novaMentoria;
        } catch (error) {
            console.error('Erro ao criar mentoria:', error);
            throw new Error(`Erro ao criar mentoria: ${error.message}`);
        }
    }

    async updateMentoria(id, mentoriaData) {
        try {
            await this.backend.simulateDelay();
            const mentorias = this.getMentorias();
            const index = mentorias.findIndex(m => m.id === parseInt(id));
            
            if (index !== -1) {
                mentorias[index] = { ...mentorias[index], ...mentoriaData };
                this.saveMentorias(mentorias);
                return mentorias[index];
            }
            throw new Error('Mentoria não encontrada');
        } catch (error) {
            console.error('Erro ao atualizar mentoria:', error);
            throw new Error(`Erro ao atualizar mentoria: ${error.message}`);
        }
    }

    async deleteMentoria(id) {
        try {
            await this.backend.simulateDelay();
            const mentorias = this.getMentorias();
            const mentoriasAtualizadas = mentorias.filter(m => m.id !== parseInt(id));
            this.saveMentorias(mentoriasAtualizadas);
            return { success: true };
        } catch (error) {
            console.error('Erro ao deletar mentoria:', error);
            throw new Error(`Erro ao deletar mentoria: ${error.message}`);
        }
    }

    // ========== DASHBOARD STATS ==========
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

            const mentoriasAtivas = mentorias.filter(m => m.status === 'ativa').length;

            return {
                progressoGeral,
                habilidadesProgresso,
                metasConcluidas: `${metasConcluidas}/${metas.length}`,
                totalMetas: metas.length,
                totalHabilidades: habilidades.length,
                totalMentorias: mentorias.length,
                mentoriasAtivas: mentoriasAtivas
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
                mentoriasAtivas: 0
            };
        }
    }
}

// Inicializar serviço
const apiServiceFuncionario = new ApiServiceFuncionario();
window.apiServiceFuncionario = apiServiceFuncionario;
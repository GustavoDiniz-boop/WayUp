// Configuração e inicialização do app
class FacilitaRH {
  constructor() {
    this.currentPage = 'dashboard';
    this.init();
  }

  async init() {
    await this.loadComponents();
    this.setupEventListeners();
    this.showPage('dashboard');
  }

  async loadComponents() {
    // Carregar componentes comuns
    await this.loadComponent('sidebar-container', 'components/sidebar.html');
    await this.loadComponent('header-container', 'components/header.html');
    await this.loadComponent('modals-container', 'components/modals.html');
  }

  async loadComponent(containerId, filePath) {
    try {
      const response = await fetch(filePath);
      const html = await response.text();
      document.getElementById(containerId).innerHTML = html;
    } catch (error) {
      console.error(`Erro ao carregar ${filePath}:`, error);
    }
  }

  setupEventListeners() {
    // Sidebar toggle
    document.addEventListener('click', (e) => {
      if (e.target.id === 'sidebarToggle' || e.target.closest('#sidebarToggle')) {
        document.querySelector('.sidebar').classList.toggle('collapsed');
      }
    });

    // Navegação da sidebar
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-page]');
      if (link) {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        this.showPage(page);
      }
    });
  }

  async showPage(pageId) {
    // Remover página atual
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('page-active');
    });

    // Atualizar título
    this.updatePageTitle(pageId);

    // Carregar conteúdo da página
    await this.loadPageContent(pageId);

    // Inicializar scripts específicos da página
    this.initializePageScripts(pageId);
  }

  updatePageTitle(pageId) {
    const titles = {
      'dashboard': 'Dashboard do Gestor',
      'employees': 'Gestão de Funcionários',
      'metas': 'Gestão de Metas',
      'treinamentos': 'Treinamentos e Desenvolvimento',
      'avaliacoes': 'Avaliações de Desempenho',
      'relatorios': 'Relatórios e Analytics',
      'configuracoes': 'Configurações do Sistema'
    };
    
    document.getElementById('pageTitle').textContent = titles[pageId] || 'FacilitaRH';
  }

  async loadPageContent(pageId) {
    try {
      const response = await fetch(`pages/${pageId}.html`);
      const html = await response.text();
      
      const container = document.getElementById('main-content');
      container.innerHTML = html;
      
      // Adicionar classe ativa à página
      const pageElement = container.firstElementChild;
      if (pageElement) {
        pageElement.classList.add('page-active');
      }
    } catch (error) {
      console.error(`Erro ao carregar página ${pageId}:`, error);
      document.getElementById('main-content').innerHTML = `
        <div class="page page-active">
          <div class="text-center py-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Erro ao carregar página</h2>
            <p class="text-gray-600">Não foi possível carregar o conteúdo solicitado.</p>
          </div>
        </div>
      `;
    }
  }

  initializePageScripts(pageId) {
    // Carregar script específico da página se existir
    const scriptMap = {
      'dashboard': 'dashboard.js',
      'employees': 'employees.js',
      'metas': 'goals.js',
      'treinamentos': 'training.js',
      'avaliacoes': 'evaluations.js',
      'relatorios': 'reports.js',
      'configuracoes': 'settings.js'
    };

    const scriptName = scriptMap[pageId];
    if (scriptName && !document.querySelector(`[data-page-script="${pageId}"]`)) {
      const script = document.createElement('script');
      script.src = `js/${scriptName}`;
      script.setAttribute('data-page-script', pageId);
      document.body.appendChild(script);
    }
  }
}

// Inicializar aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.app = new FacilitaRH();
});
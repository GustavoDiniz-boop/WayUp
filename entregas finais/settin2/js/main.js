// Sistema de navegação e carregamento de páginas
class FacilitaRH {
  constructor() {
    this.currentPage = 'dashboard';
    this.init();
  }

  async init() {
    await this.loadComponents();
    this.setupEventListeners();
    await this.showPage('dashboard');
  }

  async loadComponents() {
    await this.loadHTML('sidebar-container', 'components/sidebar.html');
    await this.loadHTML('header-container', 'components/header.html');
    await this.loadHTML('modals-container', 'components/modals.html');
  }

  async loadHTML(containerId, filePath) {
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

    // Navegação
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
    this.currentPage = pageId;
    
    // Atualizar título
    this.updatePageTitle(pageId);
    
    // Carregar conteúdo da página
    await this.loadPageContent(pageId);
    
    // Inicializar scripts da página
    this.initializePageScripts(pageId);
    
    // Atualizar menu ativo
    this.updateActiveMenu(pageId);
  }

  updatePageTitle(pageId) {
    const titles = {
      'dashboard': 'Dashboard do Gestor',
      'employees': 'Gestão de Funcionários',
      'goals': 'Gestão de Metas',
      'training': 'Treinamentos e Desenvolvimento',
      'evaluations': 'Avaliações de Desempenho',
      'reports': 'Relatórios e Analytics',
      'settings': 'Configurações do Sistema'
    };
    
    document.getElementById('pageTitle').textContent = titles[pageId] || 'FacilitaRH';
  }

  async loadPageContent(pageId) {
    try {
      const response = await fetch(`pages/${pageId}.html`);
      const html = await response.text();
      
      const container = document.getElementById('main-content');
      container.innerHTML = html;
    } catch (error) {
      console.error(`Erro ao carregar página ${pageId}:`, error);
      document.getElementById('main-content').innerHTML = `
        <div class="page-active">
          <div class="text-center py-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Erro ao carregar página</h2>
            <p class="text-gray-600">Não foi possível carregar o conteúdo solicitado.</p>
          </div>
        </div>
      `;
    }
  }

  initializePageScripts(pageId) {
    // Remover scripts anteriores
    document.querySelectorAll('[data-page-script]').forEach(script => script.remove());
    
    // Carregar script específico da página
    const scriptMap = {
      'dashboard': 'dashboard.js',
      'employees': 'employees.js',
      'goals': 'goals.js',
      'training': 'training.js',
      'evaluations': 'evaluations.js',
      'reports': 'reports.js',
      'settings': 'settings.js'
    };

    const scriptName = scriptMap[pageId];
    if (scriptName) {
      const script = document.createElement('script');
      script.src = `js/${scriptName}`;
      script.setAttribute('data-page-script', pageId);
      document.body.appendChild(script);
    }
  }

  updateActiveMenu(pageId) {
    // Atualizar links ativos na sidebar
    document.querySelectorAll('[data-page]').forEach(link => {
      link.classList.remove('bg-indigo-700');
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('bg-indigo-700');
      }
    });
  }
}

// Inicializar app
document.addEventListener('DOMContentLoaded', () => {
  window.app = new FacilitaRH();
});
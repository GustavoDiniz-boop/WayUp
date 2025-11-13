// Funcionalidades específicas da página de Configurações
class Settings {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Event listeners específicos de configurações
    const settingsButtons = document.querySelectorAll('#settings-page button');
    settingsButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('Salvar')) {
          Utils.showMessage('Configurações salvas com sucesso!', 'success');
        } else if (e.target.textContent.includes('Backup')) {
          Utils.showMessage('Backup realizado com sucesso!', 'success');
        } else if (e.target.textContent.includes('Encerrar')) {
          Utils.showMessage('Todas as sessões foram encerradas!', 'success');
        } else if (e.target.textContent.includes('Excel') || e.target.textContent.includes('PDF')) {
          Utils.showMessage('Exportação em desenvolvimento', 'success');
        }
      });
    });

    // Toggle switches
    const toggleSwitches = document.querySelectorAll('#settings-page input[type="checkbox"]');
    toggleSwitches.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const settingName = e.target.closest('.flex.justify-between').querySelector('p').textContent;
        Utils.showMessage(`${settingName} ${e.target.checked ? 'ativado' : 'desativado'}`, 'success');
      });
    });
  }
}

// Inicializar funcionalidades de configurações
let settings;
if (document.querySelector('[data-page="settings"]')) {
  settings = new Settings();
}
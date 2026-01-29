/* THEME.JS
   Gerencia o Dark Mode e persiste a preferência do usuário.
*/

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');
    const body = document.body;

    // 1. Verifica se já existe uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    
    // 2. Verifica preferência do Sistema Operacional (caso não tenha salvo)
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); // Ícone de sol para voltar ao claro
        } else {
            body.removeAttribute('data-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon'); // Ícone de lua para ir ao escuro
        }
    }

    // Lógica Inicial ao Carregar a Página
    if (savedTheme === 'dark') {
        applyTheme('dark');
    } else if (savedTheme === 'light') {
        applyTheme('light');
    } else if (systemPrefersDark) {
        // Se o usuário nunca escolheu, respeita o sistema operacional
        applyTheme('dark');
    }

    // 3. Evento de Clique no Botão
    themeBtn.addEventListener('click', () => {
        const isDark = body.hasAttribute('data-theme');
        
        if (isDark) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
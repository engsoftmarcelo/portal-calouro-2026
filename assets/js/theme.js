/* THEME.JS
   Gerencia o Dark Mode e persiste a preferência do usuário.
   Atualizado com transições mais suaves e dinâmicas para o ícone.
*/

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');
    const body = document.body;

    // 1. Verifica se já existe uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    
    // 2. Verifica preferência do Sistema Operacional (caso não tenha salvo)
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Configura a transição do ícone via CSS direto no JS
    themeIcon.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Função para aplicar o tema
    function applyTheme(theme, animate = false) {
        if (animate) {
            // Adiciona um pequeno giro e fade no ícone ao trocar de tema
            themeIcon.style.transform = 'rotate(180deg) scale(0.5)';
            themeIcon.style.opacity = '0';
            
            // Espera a animação de saída para trocar a classe do FontAwesome
            setTimeout(() => {
                switchIcon(theme);
                themeIcon.style.transform = 'rotate(360deg) scale(1)';
                themeIcon.style.opacity = '1';
                
                // Reseta a rotação após a animação para não bugar futuros cliques
                setTimeout(() => {
                    themeIcon.style.transition = 'none';
                    themeIcon.style.transform = 'rotate(0deg) scale(1)';
                    // Força um reflow para aplicar o 'none' antes de voltar a transição
                    void themeIcon.offsetWidth; 
                    themeIcon.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                }, 300);

            }, 150);
        } else {
            switchIcon(theme);
        }

        // Aplica as cores no body
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
        }
    }

    // Função auxiliar para apenas trocar o ícone HTML
    function switchIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); // Ícone de sol para voltar ao claro
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon'); // Ícone de lua para ir ao escuro
        }
    }

    // Lógica Inicial ao Carregar a Página (sem animação para não piscar a tela)
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
            applyTheme('light', true); // Passa 'true' para ativar a animação
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark', true);
            localStorage.setItem('theme', 'dark');
        }
    });
});
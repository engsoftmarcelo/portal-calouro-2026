/* SEARCH.JS
   Sistema de Busca "Command Palette" & Easter Eggs
   Controla a navegação rápida, atalhos de teclado e segredos do sistema.
*/

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchWrapper = document.querySelector('.search-wrapper');

    // --- 1. CONFIGURAÇÃO DE ATALHOS (HOTKEYS) ---
    
    document.addEventListener('keydown', (e) => {
        // Atalho: CTRL + K (ou CMD + K no Mac) para focar na busca
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault(); // Evita comportamento padrão do navegador
            if (searchInput) {
                searchInput.focus();
                // Efeito visual de foco
                searchWrapper.style.transform = "scale(1.05)";
                setTimeout(() => searchWrapper.style.transform = "scale(1)", 200);
                
                // Scroll suave até a busca se ela não estiver visível
                searchWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });

    // --- 2. KONAMI CODE (GOD MODE) ---
    // Sequência: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase() || e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateGodMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateGodMode() {
        alert("GOD MODE ATIVADO: Acesso ROOT simulado. Bem-vindo à Matrix.");
        
        // Efeito Matrix/Hacker
        document.body.style.fontFamily = "'Courier New', monospace";
        
        // Injeta CSS para override total das cores
        const style = document.createElement('style');
        style.innerHTML = `
            :root {
                --primary-color: #00FF00 !important;
                --text-main: #00FF00 !important;
                --bg-body: #000000 !important;
                --neon-purple: #00FF00 !important;
                --neon-blue: #00FF00 !important;
                --neon-pink: #00FF00 !important;
            }
            body { background: #000 !important; }
            .bento-item, .card { border-color: #00FF00 !important; }
        `;
        document.head.appendChild(style);
        
        if (searchInput) searchInput.value = "SYSTEM.ROOT_ACCESS_GRANTED";
    }

    // --- 3. MAPA DE BUSCA INTELIGENTE ---
    const searchIndex = {
        // Sistemas & Acessos
        'canvas': 'https://canvas.pucminas.br/',
        'sga': 'https://www.pucminas.br/sgaalunos', // Link Atualizado
        'notas': 'https://www.pucminas.br/sgaalunos',
        'falta': 'https://www.pucminas.br/sgaalunos',
        'outlook': 'https://outlook.office.com',
        'email': 'https://outlook.office.com',
        
        // Configurações
        'wifi': 'sistemas.html',
        'senha': 'sistemas.html',
        'login': 'sistemas.html',
        'acesso': 'sistemas.html',
        
        // Localização
        'mapa': 'campus.html',
        'predio': 'campus.html',
        'almoco': 'campus.html',
        'comida': 'campus.html',
        'biblioteca': 'campus.html',
        'p4': 'campus.html',
        
        // Acadêmico
        'grade': 'academico.html',
        'materias': 'academico.html',
        'horario': 'academico.html',
        'calculo': 'academico.html',
        'algoritmos': 'academico.html',
        'ti': 'academico.html',
        'coordenacao': 'academico.html',
        
        // Benefícios
        'bolsa': 'beneficios.html',
        'monitoria': 'beneficios.html',
        'psicologo': 'beneficios.html',
        'nai': 'beneficios.html',
        'carteirinha': 'beneficios.html'
    };

    // --- 4. EASTER EGGS TEXTUAIS ---
    const textEasterEggs = {
        'coffee': () => alert("☕ O combustível do programador. Tem café no Paçaki!"),
        'cafe': () => alert("☕ O combustível do programador. Tem café no Paçaki!"),
        'socorro': () => alert("Calma! Respire. O 1º período assusta mas passa. Procure a monitoria!"),
        'help': () => alert("Calma! Respire. O 1º período assusta mas passa. Procure a monitoria!"),
        'sudo': () => {
            alert("sudo: você não é administrador do sistema. Tente estudar mais Linux!");
            window.open('https://linuxjourney.com/', '_blank');
        },
        'hack': () => {
            document.body.style.filter = "invert(1) hue-rotate(180deg)";
            setTimeout(() => document.body.style.filter = "none", 3000);
        },
        '42': () => alert("A resposta para a vida, o universo e tudo mais... mas não vai cair na prova de Cálculo.")
    };

    // --- 5. FUNÇÃO DE BUSCA ---
    function performSearch() {
        if (!searchInput) return;

        const rawQuery = searchInput.value.toLowerCase().trim();
        // Remove acentos (ex: 'física' vira 'fisica')
        const query = rawQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (query === "") return;

        // 5.1 Verifica Easter Eggs de Texto
        if (textEasterEggs[query]) {
            textEasterEggs[query]();
            searchInput.value = '';
            return;
        }

        // 5.2 Verifica Mapa de Navegação
        let found = false;
        
        // Procura correspondência parcial (ex: "sga aluno" acha "sga")
        for (const [key, url] of Object.entries(searchIndex)) {
            if (query.includes(key)) {
                
                // Se for link externo, abre nova aba
                if (url.startsWith('http') && !url.includes(window.location.hostname)) {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
                
                found = true;
                break;
            }
        }

        // 5.3 Feedback de Erro (Shake Animation)
        if (!found) {
            const box = document.querySelector('.search-box');
            box.style.borderColor = "var(--neon-pink)";
            box.style.animation = "shake 0.5s ease-in-out";
            
            // Remove animação após acabar para poder rodar de novo
            setTimeout(() => {
                box.style.animation = "none";
                box.style.borderColor = "var(--border-color)";
            }, 500);
        }
    }

    // Adiciona o keyframe de shake dinamicamente se não existir
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Evento de Enter
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});
/* SEARCH.JS
   Sistema de busca inteligente para redirecionamento rápido.
   Atualizado com Easter Eggs e comandos secretos para os calouros descobrirem!
*/

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    // 1. Mapa de Palavras-Chave -> Destino (Arquivo + ID da seção)
    const searchIndex = {
        // Sistemas e Acessos
        'sga': 'sistemas.html#sga',
        'nota': 'sistemas.html#sga',
        'boleto': 'sistemas.html#sga',
        'senha': 'sistemas.html#sga',
        'canvas': 'sistemas.html#canvas',
        'aula': 'sistemas.html#canvas',
        'email': 'sistemas.html#canvas',
        'outlook': 'sistemas.html#canvas',
        'wifi': 'sistemas.html#eduroam',
        'internet': 'sistemas.html#eduroam',
        'eduroam': 'sistemas.html#eduroam',

        // Campus e Localização
        'mapa': 'campus.html',
        'predio': 'campus.html', 
        'sala': 'campus.html',
        'comida': 'campus.html',
        'almoco': 'campus.html', 
        'pacaki': 'campus.html', 
        'xerox': 'campus.html',
        'impressao': 'campus.html',
        'biblioteca': 'campus.html',

        // Acadêmico e Coordenação
        'grade': 'academico.html',
        'materia': 'academico.html',
        'ti': 'academico.html',
        'trabalho': 'academico.html',
        'horas': 'academico.html',
        'estudo': 'academico.html',
        'github': 'academico.html',
        'ingles': 'academico.html',
        'optativa': 'academico.html',
        'coordenacao': 'academico.html#coordenacao',
        'soraia': 'academico.html#coordenacao',

        // Benefícios, Bolsas e Apoio
        'carteirinha': 'beneficios.html',
        'meia': 'beneficios.html',
        'dne': 'beneficios.html',
        'nai': 'beneficios.html',
        'psicologia': 'beneficios.html',
        'terapia': 'beneficios.html',
        'apoio': 'beneficios.html',
        'monitoria': 'beneficios.html',
        'bolsa': 'beneficios.html',
        'iniciacao': 'beneficios.html',
        'pibic': 'beneficios.html'
    };

    // 2. Códigos Secretos (Easter Eggs) - A magia acontece aqui!
    const easterEggs = {
        'mundo invertido': triggerUpsideDown,
        'upside down': triggerUpsideDown,
        'vecna': triggerUpsideDown,
        'stranger things': triggerUpsideDown,
        'sudo': triggerRoot,
        'rm -rf /': triggerRoot,
        'anitta': triggerShow // Pequena surpresa musical
    };

    function triggerUpsideDown() {
        document.body.classList.toggle('upside-down');
        const isOn = document.body.classList.contains('upside-down');
        
        // Feedback visual ameaçador na barra de busca
        searchInput.value = isOn ? 'CUIDADO COM O DEMOGORGON...' : '';
        searchInput.style.color = isOn ? 'var(--primary-color)' : '';
        searchInput.style.borderColor = isOn ? 'var(--primary-color)' : 'transparent';
    }

    function triggerRoot() {
        alert("Acesso Negado. Você não tem privilégios de ROOT (ou talvez a gente não tenha banco de dados mesmo 😅).");
        searchInput.value = '';
    }

    function triggerShow() {
        alert("Prepara! 💃 Mas primeiro foca em passar em Introdução a Algoritmos!");
        searchInput.value = '';
    }

    // 3. Função de Busca Principal
    function performSearch() {
        // Transforma tudo em minúsculo e remove acentos para facilitar a busca
        const rawQuery = searchInput.value.toLowerCase().trim();
        const query = rawQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (query === "") return;

        // Feedback visual de carregamento rápido
        searchInput.style.borderColor = "var(--primary-color)";

        // 3.1 Verifica se o utilizador digitou um código secreto primeiro
        for (const [key, action] of Object.entries(easterEggs)) {
            if (rawQuery === key) {
                action();
                return; // Interrompe a pesquisa normal para rodar o Easter Egg
            }
        }

        // 3.2 Verifica se alguma palavra-chave normal está contida na busca
        let found = false;
        
        for (const [key, url] of Object.entries(searchIndex)) {
            const normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            
            if (query.includes(normalizedKey)) {
                window.location.href = url;
                found = true;
                break;
            }
        }

        if (!found) {
            // Efeito de "Erro" (Shake/Vibração visual) mais suave
            searchInput.style.borderColor = "var(--danger-color)";
            searchInput.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-8px)' },
                { transform: 'translateX(8px)' },
                { transform: 'translateX(-4px)' },
                { transform: 'translateX(4px)' },
                { transform: 'translateX(0)' }
            ], { duration: 400, easing: 'ease-in-out' });
            
            alert(`Não encontramos um atalho exato para "${rawQuery}". \nTente termos mais curtos como: "wifi", "notas", "monitoria" ou "almoço".`);
        }
    }

    // 4. Eventos: Pressionar ENTER e Digitação
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Retorna a borda ao normal quando o utilizador volta a digitar
        searchInput.addEventListener('input', () => {
            // Só limpa o estilo se o Mundo Invertido não estiver ativo
            if (!document.body.classList.contains('upside-down')) {
                searchInput.style.borderColor = "transparent";
                searchInput.style.color = "var(--text-main)";
            }
        });
    }
});
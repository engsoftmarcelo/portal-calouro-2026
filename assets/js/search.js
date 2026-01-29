/* SEARCH.JS
   Sistema de busca inteligente para redirecionamento rápido.
   Como não temos banco de dados, usamos um mapa de palavras-chave.
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
        'prédio': 'campus.html',
        'sala': 'campus.html',
        'comida': 'campus.html',
        'xerox': 'campus.html',
        'impressão': 'campus.html',
        'biblioteca': 'campus.html',

        // Acadêmico
        'grade': 'academico.html',
        'matéria': 'academico.html',
        'ti': 'academico.html',
        'trabalho': 'academico.html',
        'horas': 'academico.html',
        'estudo': 'academico.html',
        'github': 'academico.html',

        // Benefícios (Passe Livre removido)
        'carteirinha': 'beneficios.html',
        'meia': 'beneficios.html',
        'nap': 'beneficios.html',
        'apoio': 'beneficios.html'
    };

    // 2. Função de Busca
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === "") return;

        // Feedback visual
        searchInput.style.borderColor = "var(--primary-color)";

        // Verifica se alguma palavra-chave está contida na busca do usuário
        // Ex: Usuário digita "como configurar o wifi" -> encontra "wifi"
        let found = false;
        
        for (const [key, url] of Object.entries(searchIndex)) {
            if (query.includes(key)) {
                window.location.href = url;
                found = true;
                break;
            }
        }

        if (!found) {
            // Efeito de "Erro" (Shake/Vibração visual) se não encontrar
            searchInput.style.borderColor = "var(--danger-color)";
            searchInput.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], { duration: 300 });
            
            // Mensagem atualizada sem sugerir "passe"
            alert(`Não encontramos um atalho exato para "${query}". \nTente termos como: "wifi", "notas" ou "mapa".`);
        }
    }

    // 3. Evento: Pressionar ENTER
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});
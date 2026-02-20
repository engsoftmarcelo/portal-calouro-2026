/* SEARCH.JS
   Sistema de busca inteligente para redirecionamento rápido.
   Como não temos banco de dados, usamos um mapa de palavras-chave atualizado.
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

        // Campus e Localização (Guia Gastronômico atualizado)
        'mapa': 'campus.html',
        'prédio': 'campus.html',
        'sala': 'campus.html',
        'comida': 'campus.html',
        'almoço': 'campus.html',
        'paçaki': 'campus.html',
        'xerox': 'campus.html',
        'impressão': 'campus.html',
        'biblioteca': 'campus.html',

        // Acadêmico (Incluindo as Optativas e Coordenação)
        'grade': 'academico.html',
        'matéria': 'academico.html',
        'ti': 'academico.html',
        'trabalho': 'academico.html',
        'horas': 'academico.html',
        'estudo': 'academico.html',
        'github': 'academico.html',
        'inglês': 'academico.html',
        'optativa': 'academico.html',
        'coordenação': 'academico.html#coordenacao',
        'soraia': 'academico.html#coordenacao',

        // Benefícios, Bolsas e Apoio (Incluindo NAI, Psicologia e Monitorias)
        'carteirinha': 'beneficios.html',
        'meia': 'beneficios.html',
        'dne': 'beneficios.html',
        'nai': 'beneficios.html',
        'psicologia': 'beneficios.html',
        'terapia': 'beneficios.html',
        'apoio': 'beneficios.html',
        'monitoria': 'beneficios.html',
        'bolsa': 'beneficios.html',
        'iniciação': 'beneficios.html',
        'pibic': 'beneficios.html'
    };

    // 2. Função de Busca
    function performSearch() {
        // Transforma tudo em minúsculo e remove acentos para facilitar a busca
        const rawQuery = searchInput.value.toLowerCase().trim();
        const query = rawQuery.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (query === "") return;

        // Feedback visual de carregamento rápido
        searchInput.style.borderColor = "var(--primary-color)";

        // Verifica se alguma palavra-chave está contida na busca do usuário
        let found = false;
        
        for (const [key, url] of Object.entries(searchIndex)) {
            // Normaliza a chave do índice também
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
            
            // Mensagem atualizada com dicas
            alert(`Não encontramos um atalho exato para "${rawQuery}". \nTente termos mais curtos como: "wifi", "notas", "monitoria" ou "almoço".`);
        }
    }

    // 3. Evento: Pressionar ENTER
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Retorna a borda ao normal quando o usuário volta a digitar
        searchInput.addEventListener('input', () => {
            searchInput.style.borderColor = "transparent";
        });
    }
});
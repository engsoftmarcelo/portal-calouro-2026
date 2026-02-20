/* NAVIGATION.JS
   Gerencia o Menu Mobile (Overlay), Scroll Suave e Animações de Entrada.
   Cria o menu dinamicamente para não precisarmos editar o HTML de todas as páginas.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENU MOBILE (OVERLAY DINÂMICO) ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const body = document.body;

    if (mobileBtn) {
        // Criar o elemento do Menu Overlay via JS
        const overlay = document.createElement('div');
        overlay.id = 'mobile-menu-overlay';
        overlay.innerHTML = `
            <div class="menu-content">
                <button class="close-btn"><i class="fas fa-times"></i></button>
                <nav>
                    <a href="index.html" class="menu-link"><i class="fas fa-home"></i> Início</a>
                    <a href="sistemas.html" class="menu-link"><i class="fas fa-laptop-code"></i> Sistemas & Wi-Fi</a>
                    <a href="academico.html" class="menu-link"><i class="fas fa-book-open"></i> Vida Acadêmica</a>
                    <a href="academico.html#coordenacao" class="menu-link"><i class="fas fa-users"></i> Coordenação</a>
                    <a href="campus.html" class="menu-link"><i class="fas fa-map-marked-alt"></i> Mapa & Campus</a>
                    <a href="beneficios.html" class="menu-link"><i class="fas fa-id-card"></i> Benefícios</a>
                </nav>
            </div>
        `;

        // Estilos essenciais para o menu funcionar (com animações mais fluidas)
        const style = document.createElement('style');
        style.innerHTML = `
            #mobile-menu-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background-color: var(--bg-body);
                z-index: 2000;
                transform: translateY(-100%); /* Escondido pra cima */
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Efeito elástico no menu */
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #mobile-menu-overlay.active {
                transform: translateY(0); /* Mostra */
            }
            .menu-content {
                text-align: center;
                width: 100%;
            }
            .menu-link {
                display: block;
                font-size: 1.5rem;
                padding: 1.5rem;
                color: var(--text-main);
                font-weight: 700;
                border-bottom: 1px solid var(--border-color);
                transition: all 0.2s ease;
            }
            .menu-link:hover {
                color: var(--primary-color);
                background-color: rgba(0,0,0,0.02);
                transform: scale(1.05); /* Leve pulo ao passar o mouse no menu */
            }
            .close-btn {
                position: absolute;
                top: 20px;
                right: 20px;
                background: none;
                border: none;
                font-size: 2rem;
                color: var(--text-main);
                cursor: pointer;
                transition: transform 0.3s ease, color 0.3s ease;
            }
            .close-btn:hover {
                transform: rotate(90deg) scale(1.2); /* Gira e aumenta o X ao fechar */
                color: var(--danger-color);
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(overlay);

        // Lógica de Abrir/Fechar
        const closeBtn = overlay.querySelector('.close-btn');
        const links = overlay.querySelectorAll('.menu-link');

        function toggleMenu() {
            overlay.classList.toggle('active');
            // Bloqueia o scroll do fundo quando o menu está aberto
            body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
        }

        mobileBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // Fecha o menu ao clicar em um link
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    // --- 2. SCROLL SUAVE (SMOOTH SCROLL) ---
    // Aplica o efeito suave ao clicar em links internos (ex: #sga)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Só executa se o alvo existir na mesma página
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                // Compensa a altura do Header fixo (80px)
                const headerOffset = 85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 3. ANIMAÇÃO DE ENTRADA (DINAMISMO EXTRA) ---
    // Melhoramos o IntersectionObserver para dar um efeito mais "vivo" ao rolar a página
    const observerOptions = {
        threshold: 0.1, // Dispara quando 10% do elemento estiver visível
        rootMargin: "0px 0px -30px 0px" // Dispara um pouco antes de aparecer totalmente
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Remove o delay se for mobile para não travar a experiência, 
                // mas aplica um efeito de transição fluido
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Descomente a linha abaixo se quiser que a animação aconteça SÓ na primeira vez que rolar
                // observer.unobserve(entry.target);
            } else {
                // Reseta o estado quando sai da tela para animar de novo ao voltar
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(30px) scale(0.95)';
            }
        });
    }, observerOptions);

    // Aplica o observador não só nos cards, mas em títulos e alertas
    document.querySelectorAll('.card, .section-title, .alert-box').forEach((el) => {
        // Estado inicial invisível e levemente menor/abaixado
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px) scale(0.95)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });
});
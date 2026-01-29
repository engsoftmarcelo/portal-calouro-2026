/* NAVIGATION.JS
   Gerencia o Menu Mobile (Overlay) e Scroll Suave.
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

        // Estilos essenciais para o menu funcionar
        const style = document.createElement('style');
        style.innerHTML = `
            #mobile-menu-overlay {
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                background-color: var(--bg-body);
                z-index: 2000;
                transform: translateY(-100%); /* Escondido pra cima */
                transition: transform 0.3s ease-in-out;
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
                transition: 0.2s;
            }
            .menu-link:hover {
                color: var(--primary-color);
                background-color: rgba(0,0,0,0.02);
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

    // --- 3. ANIMAÇÃO DE ENTRADA DOS CARDS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.card').forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
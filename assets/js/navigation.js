/* NAVIGATION.JS
   Gerencia o Menu Mobile (Overlay), Scroll Suave, Animações de Entrada,
   Interações do Mascote, Comportamento de Cartões e o Menu do WhatsApp.
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
                transform: translateY(-100%);
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            #mobile-menu-overlay.active {
                transform: translateY(0);
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
                transform: scale(1.05);
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
                transform: rotate(90deg) scale(1.2);
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
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
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
            } else {
                entry.target.style.opacity = 0;
                entry.target.style.transform = 'translateY(30px) scale(0.95)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .section-title, .alert-box, .deck-card').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px) scale(0.95)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // --- 4. INTERAÇÃO DO MASCOTE (DICAS ALEATÓRIAS) ---
    const mascote = document.querySelector('.mascote-hero');
    
    if (mascote) {
        // Envolve o mascote num container dinamicamente se não estiver envolvido
        if (!mascote.parentElement.classList.contains('mascote-container')) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('mascote-container');
            mascote.parentNode.insertBefore(wrapper, mascote);
            wrapper.appendChild(mascote);
            
            // Adiciona o balão de fala
            const bubble = document.createElement('div');
            bubble.classList.add('speech-bubble');
            wrapper.appendChild(bubble);
        }

        const mascoteContainer = document.querySelector('.mascote-container');
        const speechBubble = mascoteContainer.querySelector('.speech-bubble');

        // Banco de falas gamificadas para os calouros
        const dicas = [
            "Não deixe o T.I. para a última semana! 🐺",
            "Já configurou o seu eduroam no celular?",
            "O Paçaki salva nos dias de fome, vai por mim.",
            "Esqueceu a senha do SGA de novo? 😅",
            "A biblioteca no Prédio 4 é ótima para focar.",
            "Lógica de programação é prática. Não desista!",
            "Precisa de ajuda? O D.A. está aqui para você!"
        ];

        // Mostra uma dica aleatória ao clicar/tocar no mascote
        mascoteContainer.addEventListener('click', () => {
            const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
            speechBubble.innerText = dicaAleatoria;
            
            mascoteContainer.classList.add('active');
            
            // Remove o balão após 4 segundos
            setTimeout(() => {
                mascoteContainer.classList.remove('active');
            }, 4000);
        });
    }

    // --- 5. COMPORTAMENTO DE CARTÕES (FLIP) NO MOBILE ---
    // Permite que os cartões de disciplina virem ao toque em ecrãs pequenos
    const deckCards = document.querySelectorAll('.deck-card');
    
    deckCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove a classe de flip dos outros cartões (para não ficarem todos virados)
            deckCards.forEach(c => {
                if (c !== this) c.classList.remove('flipped');
            });
            // Alterna o flip no cartão atual
            this.classList.toggle('flipped');
        });
    });

    // --- 6. MENU FLUTUANTE DO WHATSAPP (TURMAS) ---
    const waBtn = document.getElementById('floating-wa-btn');
    const waContainer = document.querySelector('.floating-whatsapp-container');

    if (waBtn && waContainer) {
        // Alterna a classe 'active' para abrir/fechar o menu ao clicar no botão
        waBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita qualquer comportamento padrão
            waContainer.classList.toggle('active');
        });

        // Fecha o menu automaticamente se o utilizador clicar noutro local do ecrã
        document.addEventListener('click', (e) => {
            if (!waContainer.contains(e.target)) {
                waContainer.classList.remove('active');
            }
        });
    }
});
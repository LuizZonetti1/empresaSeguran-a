// =========================================
// SCRIPT DE ANIMAÇÕES PARA SITE DE SEGURANÇA
// =========================================

// Configurações do Intersection Observer para detectar quando elementos entram na tela
const observerOptions = {
    threshold: [0, 0.1, 0.25],  // Múltiplos pontos de ativação para maior sensibilidade
    rootMargin: '0px 0px -100px 0px'  // Margem maior para reset mais cedo
};

// Observer para animar seções principais (containers grandes)
const sectionObserver = new IntersectionObserver((entries) => {
    // Para cada elemento observado que mudou de estado
    entries.forEach(entry => {
        // Se o elemento está entrando na área visível
        if (entry.isIntersecting) {
            // Adiciona a classe que ativa a animação CSS
            entry.target.classList.add('section-visible');
            // Ativa animações específicas de elementos filhos
            activateChildAnimations(entry.target);
        } else {
            // Se o elemento saiu da área visível, remove a classe para resetar
            entry.target.classList.remove('section-visible');
            // Reseta animações de elementos filhos
            resetChildAnimations(entry.target);
        }
    });
}, observerOptions);

// Observer para animar cards individuais (elementos menores)
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
        } else {
            // Remove a classe para permitir reanimação
            entry.target.classList.remove('card-visible');
        }
    });
}, {
    threshold: [0, 0.1, 0.2],  // Múltiplos thresholds para maior sensibilidade
    rootMargin: '0px 0px -50px 0px'  // Margem para reset antecipado
});

/**
 * Função que reseta animações de elementos filhos específicos
 * Necessária para elementos com animações CSS dependentes da classe pai
 */
function resetChildAnimations(section) {
    // Reset específico para seção Sobre Nós
    if (section.classList.contains('empresa-info')) {
        const textoSobre = section.querySelector('.texto-sobre');
        const imagemSobre = section.querySelector('.imagem-sobre');
        
        if (textoSobre) {
            // Remove temporariamente as transições para reset instantâneo
            textoSobre.style.transition = 'none';
            textoSobre.style.opacity = '0';
            textoSobre.style.transform = 'translateX(-50px)';
            
            // Reativa as transições após um frame
            requestAnimationFrame(() => {
                textoSobre.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s';
            });
        }
        
        if (imagemSobre) {
            imagemSobre.style.transition = 'none';
            imagemSobre.style.opacity = '0';
            imagemSobre.style.transform = 'translateX(50px) scale(0.9)';
            
            requestAnimationFrame(() => {
                imagemSobre.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s';
            });
        }
    }
}

/**
 * Função que ativa animações de elementos filhos
 * Garante que animações dependentes sejam executadas corretamente
 */
function activateChildAnimations(section) {
    if (section.classList.contains('empresa-info')) {
        const textoSobre = section.querySelector('.texto-sobre');
        const imagemSobre = section.querySelector('.imagem-sobre');
        
        // Pequeno delay para garantir que o reset foi aplicado
        setTimeout(() => {
            if (textoSobre) {
                textoSobre.style.opacity = '1';
                textoSobre.style.transform = 'translateX(0)';
            }
            
            if (imagemSobre) {
                imagemSobre.style.opacity = '1';
                imagemSobre.style.transform = 'translateX(0) scale(1)';
            }
        }, 50);
    }
}
function initAnimations() {
    // Seleciona todas as seções principais do site
    const sections = document.querySelectorAll('.empresa-info, .nossos-servicos, .certificacoes, .clientes, .localizacao, .comentarios');
    
    // Para cada seção, ativa o observer que detecta scroll
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Seleciona todos os cards individuais
    const cards = document.querySelectorAll('.card, .certificacao-item, .cliente-card, .card-comentario');
    
    // Para cada card, ativa o observer
    cards.forEach(card => {
        cardObserver.observe(card);
    });
}

/**
 * Função que anima o título principal da página
 * Cria um efeito de entrada especial para o H1
 */
function animateMainTitle() {
    // Encontra o primeiro título H1 da página
    const title = document.querySelector('h1');
    
    if (title) {
        // Espera 300ms e então anima o título
        setTimeout(() => {
            title.style.opacity = '1';           // Torna visível
            title.style.transform = 'translateY(0)';  // Move para posição final
        }, 300);
    }
}

/**
 * Função que detecta se o usuário está em um dispositivo móvel
 * Usado para ajustar comportamentos específicos
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Função que adiciona navegação suave entre seções
 * Substitui o comportamento padrão dos links âncora
 * Ajustada para funcionar melhor em mobile sem header fixo
 */
function initSmoothNavigation() {
    // Seleciona todos os links de navegação que começam com #
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        // Adiciona evento de clique para cada link
        anchor.addEventListener('click', function (e) {
            e.preventDefault();  // Impede o comportamento padrão do link
            
            // Encontra o elemento destino usando o href do link
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Em mobile, rola até a seção normalmente (sem offset)
                // Em desktop, considera o header fixo
                const offsetTop = isMobile() ? 0 : 80;
                
                // Executa scroll suave até o elemento
                window.scrollTo({
                    top: target.offsetTop - offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Função que configura o estado inicial do título
 * Define propriedades CSS iniciais antes da animação
 */
function setupMainTitle() {
    const title = document.querySelector('h1');
    
    if (title) {
        // Define estado inicial (invisível e deslocado)
        title.style.opacity = '0';
        title.style.transform = 'translateY(-30px)';
        title.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
}

// =========================================
// INICIALIZAÇÃO DO SCRIPT
// =========================================

// Event listener que aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    // 1. Configura o estado inicial do título
    setupMainTitle();
    
    // 2. Inicializa os observadores de animação
    initAnimations();
    
    // 3. Inicia a animação do título principal
    animateMainTitle();
    
    // 4. Configura a navegação suave
    initSmoothNavigation();
    
    // 5. Configura o clique na logo para voltar ao topo
    initLogoScrollToTop();
});

// =========================================
// EXPLICAÇÃO DOS CONCEITOS UTILIZADOS
// =========================================

/*
INTERSECTION OBSERVER API:
- API moderna do JavaScript que detecta quando elementos entram/saem da área visível
- Mais eficiente que scroll events tradicionais
- Não bloqueia a thread principal do navegador

THRESHOLD:
- Define qual porcentagem do elemento deve estar visível para ativar
- 0.1 = 10% do elemento visível
- 1.0 = 100% do elemento visível

ROOT MARGIN:
- Funciona como margin CSS, mas para a área de detecção
- Valores negativos antecipam a animação
- '0px 0px -50px 0px' = margem inferior negativa de 50px

CUBIC-BEZIER:
- Função de timing que define a curva de animação
- (0.25, 0.46, 0.45, 0.94) = curva suave e natural
- Torna as animações mais orgânicas

DOM CONTENT LOADED:
- Evento que dispara quando o HTML foi completamente carregado
- Não espera por imagens, CSS ou outros recursos
- Ideal para inicializar scripts que manipulam o DOM

SISTEMA DE REANIMAÇÃO:
- As animações agora se resetam quando o elemento sai da tela
- Permite que as animações sejam executadas múltiplas vezes
- Útil para navegação repetitiva ou scroll longo

MÚLTIPLOS THRESHOLDS:
- [0, 0.1, 0.25] = Detecta em 0%, 10% e 25% de visibilidade
- Maior sensibilidade para ativação/desativação
- Melhor controle sobre quando resetar animações

REQUEST ANIMATION FRAME:
- Sincroniza mudanças CSS com o ciclo de renderização do browser
- Garante que resets sejam aplicados antes de novas animações
- Evita conflitos visuais durante transições
*/

// =========================================
// FUNÇÕES DE CONTROLE DOS MODAIS DE SERVIÇOS
// =========================================

/**
 * Abre o modal especificado pelo ID
 * @param {string} modalId - ID do modal a ser aberto
 */
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        // Adiciona listener para fechar com ESC
        document.addEventListener('keydown', handleEscapeKey);
        
        // Detecta se é mobile para ajustar comportamento
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Em mobile, bloqueia scroll do body completamente
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
            
            // Adiciona classe para estilos específicos de mobile
            modal.classList.add('mobile-modal');
        } else {
            // Desktop: comportamento normal
            document.body.style.overflow = 'hidden';
        }
        
        // Anima a entrada do modal
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
        
        // Foca no modal para acessibilidade
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.focus();
        }
    }
}

/**
 * Fecha o modal especificado pelo ID
 * @param {string} modalId - ID do modal a ser fechado
 */
function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        // Anima a saída do modal
        modal.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('mobile-modal');
            
            // Restaura o scroll do body
            document.body.style.overflow = 'auto';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.height = '';
            
            // Remove listener do ESC
            document.removeEventListener('keydown', handleEscapeKey);
        }, 300);
    }
}

/**
 * Fecha modal ao pressionar a tecla ESC
 * @param {KeyboardEvent} event - Evento do teclado
 */
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        // Encontra o modal aberto e fecha
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                fecharModal(modal.id);
            }
        });
    }
}

/**
 * Fecha modal ao clicar fora do conteúdo
 * Adiciona listeners para todos os modais
 */
function initModalListeners() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            // Se clicou no overlay (fundo), fecha o modal
            if (event.target === modal) {
                fecharModal(modal.id);
            }
        });
    });
}

// Inicializa os listeners dos modais quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initModalListeners();
    
    // Adiciona suporte a teclado para cards clicáveis
    const cards = document.querySelectorAll('.card[onclick]');
    cards.forEach(card => {
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                card.click();
            }
        });
        
        // Melhora feedback visual em mobile
        card.addEventListener('touchstart', function() {
            card.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });
    
    // Detecta se é dispositivo mobile
    const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Adiciona classe específica para mobile
        document.body.classList.add('mobile-device');
        
        // Melhora a experiência dos modais em mobile
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('touchmove', function(e) {
                // Permite scroll dentro do modal
                e.stopPropagation();
            });
        });
    }
});

// =========================================
// FUNÇÃO PARA SCROLL AO TOPO PELA LOGO
// =========================================

function initLogoScrollToTop() {
    const logoLink = document.querySelector('.logo-link');
    
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll suave para o topo da página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
# 📋 Documentação JavaScript - Site de Empresa de Segurança

## 🎯 Visão Geral

Este documento explica detalhadamente todas as funções JavaScript utilizadas no site da empresa de segurança. O script principal (`script.js`) é responsável por criar animações suaves, detectar scroll, gerenciar navegação e otimizar a experiência do usuário.

---

## 📁 Estrutura do Arquivo

```
script.js
├── Configurações Globais
├── Observadores (Intersection Observer)
├── Funções de Animação
├── Funções Utilitárias
├── Inicialização
└── Documentação de Conceitos
```

---

## 🔧 Configurações Globais

### `observerOptions`

```javascript
const observerOptions = {
    threshold: [0, 0.1, 0.25],
    rootMargin: '0px 0px -100px 0px'
};
```

**O que faz:**
- Define configurações para o Intersection Observer
- Controla quando as animações são ativadas/desativadas

**Parâmetros:**
- `threshold: [0, 0.1, 0.25]`: Define múltiplos pontos de ativação
  - `0`: Quando qualquer pixel do elemento entra na tela
  - `0.1`: Quando 10% do elemento está visível
  - `0.25`: Quando 25% do elemento está visível
- `rootMargin: '0px 0px -100px 0px'`: Margem virtual aplicada à área de detecção
  - Funciona como CSS margin
  - `-100px` na parte inferior antecipa o reset da animação

**Por que usar múltiplos thresholds?**
- Maior sensibilidade para detectar mudanças
- Melhor controle sobre quando ativar/desativar animações
- Permite animações mais fluidas

---

## 👀 Observadores (Watchers)

### `sectionObserver`

```javascript
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            activateChildAnimations(entry.target);
        } else {
            entry.target.classList.remove('section-visible');
            resetChildAnimations(entry.target);
        }
    });
}, observerOptions);
```

**O que faz:**
- Monitora seções principais do site (containers grandes)
- Adiciona/remove classes CSS que controlam animações
- Gerencia animações de elementos filhos

**Fluxo de funcionamento:**
1. **Elemento entra na tela:** Adiciona classe `section-visible` + ativa animações filhas
2. **Elemento sai da tela:** Remove classe `section-visible` + reseta animações filhas

**Parâmetros:**
- `entries`: Array com todos os elementos observados que mudaram de estado
- `entry.isIntersecting`: Boolean que indica se o elemento está na área visível
- `entry.target`: Referência ao elemento HTML observado

### `cardObserver`

```javascript
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
        } else {
            entry.target.classList.remove('card-visible');
        }
    });
}, {
    threshold: [0, 0.1, 0.2],
    rootMargin: '0px 0px -50px 0px'
});
```

**O que faz:**
- Monitora cards individuais (elementos menores)
- Configurações ligeiramente diferentes das seções principais

**Diferenças do sectionObserver:**
- `rootMargin`: `-50px` (menor que seções principais)
- `threshold`: Até 0.2 (20% de visibilidade)
- Não gerencia elementos filhos (mais simples)

**Elementos observados:**
- Cards de serviços
- Cards de certificações
- Cards de clientes
- Cards de comentários

---

## 🎬 Funções de Animação

### `resetChildAnimations(section)`

```javascript
function resetChildAnimations(section) {
    if (section.classList.contains('empresa-info')) {
        const textoSobre = section.querySelector('.texto-sobre');
        const imagemSobre = section.querySelector('.imagem-sobre');
        
        if (textoSobre) {
            textoSobre.style.transition = 'none';
            textoSobre.style.opacity = '0';
            textoSobre.style.transform = 'translateX(-50px)';
            
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
```

**O que faz:**
- Reseta animações de elementos filhos para estado inicial
- Específica para seção "Sobre Nós" (empresa-info)

**Processo step-by-step:**
1. **Verifica** se é a seção correta (`empresa-info`)
2. **Encontra** elementos filhos (texto e imagem)
3. **Remove transições** temporariamente (`transition: 'none'`)
4. **Define estado inicial** (opacity: 0, transform com deslocamento)
5. **Reativa transições** no próximo frame de renderização

**Por que usar `requestAnimationFrame`?**
- Sincroniza com o ciclo de renderização do browser
- Garante que o reset seja aplicado antes de reativar transições
- Evita conflitos visuais durante mudanças

**Estados definidos:**
- **Texto:** `translateX(-50px)` (deslocado para a esquerda)
- **Imagem:** `translateX(50px) scale(0.9)` (deslocado para direita + menor)

### `activateChildAnimations(section)`

```javascript
function activateChildAnimations(section) {
    if (section.classList.contains('empresa-info')) {
        const textoSobre = section.querySelector('.texto-sobre');
        const imagemSobre = section.querySelector('.imagem-sobre');
        
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
```

**O que faz:**
- Ativa animações de elementos filhos para estado final
- Complementa a função `resetChildAnimations`

**Processo:**
1. **Aguarda 50ms** para garantir que o reset foi aplicado
2. **Define estado final** (opacity: 1, transform: posição normal)
3. **As transições CSS** fazem a animação suave

**Estados finais:**
- **Texto:** `translateX(0)` (posição normal)
- **Imagem:** `translateX(0) scale(1)` (posição normal + tamanho normal)

### `animateMainTitle()`

```javascript
function animateMainTitle() {
    const title = document.querySelector('h1');
    
    if (title) {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 300);
    }
}
```

**O que faz:**
- Anima o título principal (H1) na entrada da página
- Efeito especial de "boas-vindas"

**Funcionamento:**
1. **Encontra** o primeiro H1 da página
2. **Aguarda 300ms** após carregamento
3. **Torna visível** (opacity: 1)
4. **Move para posição final** (translateY: 0)

**Por que 300ms de delay?**
- Permite que outros elementos carreguem primeiro
- Cria sequência visual hierárquica
- Melhora percepção de performance

---

## 🧰 Funções Utilitárias

### `isMobile()`

```javascript
function isMobile() {
    return window.innerWidth <= 768;
}
```

**O que faz:**
- Detecta se o usuário está em dispositivo móvel
- Baseado na largura da tela

**Critério:**
- `<= 768px`: Considerado mobile
- `> 768px`: Considerado desktop

**Uso:**
- Ajustar comportamentos específicos para mobile
- Principalmente para navegação e scroll

### `initSmoothNavigation()`

```javascript
function initSmoothNavigation() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = isMobile() ? 0 : 80;
                
                window.scrollTo({
                    top: target.offsetTop - offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
```

**O que faz:**
- Configura navegação suave entre seções
- Substitui comportamento padrão dos links âncora

**Seletor:** `nav a[href^="#"]`
- `nav a`: Links dentro da tag nav
- `[href^="#"]`: Que começam com "#" (links âncora)

**Processo:**
1. **Intercepta clique** no link (`preventDefault()`)
2. **Encontra elemento destino** usando o href
3. **Calcula offset** baseado no dispositivo:
   - **Mobile:** 0px (header não é fixo)
   - **Desktop:** 80px (compensa header fixo)
4. **Executa scroll suave** usando `window.scrollTo()`

**Parâmetros do scrollTo:**
- `top`: Posição final menos offset
- `behavior: 'smooth'`: Animação suave nativa do browser

### `setupMainTitle()`

```javascript
function setupMainTitle() {
    const title = document.querySelector('h1');
    
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(-30px)';
        title.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
}
```

**O que faz:**
- Define estado inicial do título principal
- Prepara para animação posterior

**Estados definidos:**
- `opacity: '0'`: Invisível inicialmente
- `transform: 'translateY(-30px)'`: Deslocado 30px para cima
- `transition`: Curva de animação suave (0.8s)

---

## 🚀 Funções de Inicialização

### `initAnimations()`

```javascript
function initAnimations() {
    const sections = document.querySelectorAll('.empresa-info, .nossos-servicos, .certificacoes, .clientes, .localizacao, .comentarios');
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const cards = document.querySelectorAll('.card, .certificacao-item, .cliente-card, .card-comentario');
    
    cards.forEach(card => {
        cardObserver.observe(card);
    });
}
```

**O que faz:**
- Conecta elementos HTML com observadores JavaScript
- Ativa o sistema de detecção de scroll

**Elementos observados:**

**Seções principais:**
- `.empresa-info`: Seção "Sobre Nós"
- `.nossos-servicos`: Seção de serviços
- `.certificacoes`: Seção de certificações
- `.clientes`: Seção de clientes
- `.localizacao`: Seção de localização
- `.comentarios`: Seção de comentários

**Cards individuais:**
- `.card`: Cards de serviços
- `.certificacao-item`: Items de certificação
- `.cliente-card`: Cards de clientes
- `.card-comentario`: Cards de comentários

**Processo:**
1. **Seleciona** todos os elementos target
2. **Para cada elemento**, aplica o observador correspondente
3. **Ativa monitoramento** automático de scroll

---

## ⚡ Inicialização Principal

### Event Listener `DOMContentLoaded`

```javascript
document.addEventListener('DOMContentLoaded', () => {
    setupMainTitle();
    initAnimations();
    animateMainTitle();
    initSmoothNavigation();
});
```

**O que faz:**
- Ponto de entrada principal do script
- Executa quando HTML está carregado

**Ordem de execução:**
1. **`setupMainTitle()`**: Prepara título para animação
2. **`initAnimations()`**: Ativa observadores de scroll
3. **`animateMainTitle()`**: Inicia animação do título
4. **`initSmoothNavigation()`**: Configura navegação suave

**Por que usar `DOMContentLoaded`?**
- Não espera por imagens, CSS ou outros recursos
- Mais rápido que `window.onload`
- Ideal para scripts que manipulam DOM
- Garante que elementos HTML existem

---

## 🧠 Conceitos Técnicos Utilizados

### Intersection Observer API

**O que é:**
- API moderna para detectar quando elementos entram/saem da viewport
- Substitui eventos de scroll tradicionais
- Melhor performance e responsividade

**Vantagens:**
- **Assíncrono**: Não bloqueia thread principal
- **Eficiente**: Otimizado pelo browser
- **Preciso**: Detecta intersecções exatas
- **Flexible**: Múltiplos thresholds e margens

### Threshold (Limiar)

**Definição:**
- Porcentagem do elemento que deve estar visível para ativar
- Valores de 0 (0%) a 1 (100%)
- Pode ser array para múltiplos pontos

**Exemplos:**
- `0.1`: 10% do elemento visível
- `[0, 0.5, 1]`: Ativa em 0%, 50% e 100%

### Root Margin

**Definição:**
- Margem virtual aplicada à área de detecção
- Funciona como CSS margin
- Permite antecipar ou atrasar ativação

**Formato:** `'top right bottom left'`
- Valores negativos: Reduzem área de detecção
- Valores positivos: Expandem área de detecção

### Cubic Bezier

**O que é:**
- Função que define curva de animação
- Cria transições mais naturais e orgânicas

**Exemplo usado:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **P1 (0.25, 0.46)**: Ponto de controle inicial
- **P2 (0.45, 0.94)**: Ponto de controle final
- **Resultado**: Animação suave com leve aceleração/desaceleração

### RequestAnimationFrame

**O que faz:**
- Sincroniza código com ciclo de renderização
- Executa no próximo frame disponível
- Garante performance suave

**Uso no projeto:**
- Aplicar resets de CSS antes de reativar transições
- Evitar conflitos visuais durante mudanças de estado

---

## 📊 Fluxo de Animações

### 1. Carregamento da Página
```
1. HTML carrega
2. DOMContentLoaded dispara
3. setupMainTitle() → Título fica invisível
4. initAnimations() → Ativa observadores
5. animateMainTitle() → Título aparece (300ms delay)
6. initSmoothNavigation() → Configura navegação
```

### 2. Scroll do Usuário
```
1. Usuário rola a página
2. Intersection Observer detecta mudanças
3. Elemento entra na tela:
   → Adiciona classe CSS
   → Ativa animações filhas
4. Elemento sai da tela:
   → Remove classe CSS
   → Reseta animações filhas
```

### 3. Sistema de Reanimação
```
1. Elemento sai da tela → Reset (invisível)
2. Usuário volta à seção → Nova animação
3. Repetível infinitamente
4. Performance otimizada
```

---

## 🎯 Benefícios da Arquitetura

### Performance
- **Intersection Observer**: Mais eficiente que scroll events
- **RequestAnimationFrame**: Sincronizado com renderização
- **CSS Transitions**: Aceleração por hardware

### Manutenibilidade
- **Funções modulares**: Cada função tem responsabilidade específica
- **Comentários detalhados**: Fácil entendimento
- **Configurações centralizadas**: Fácil ajuste

### Experiência do Usuário
- **Animações suaves**: Transições naturais
- **Responsividade**: Adaptado para mobile/desktop
- **Feedback visual**: Usuário entende navegação

### Acessibilidade
- **Reduced motion**: Respeita preferências do usuário
- **Scroll suave**: Navegação previsível
- **Timing apropriado**: Animações não muito rápidas/lentas

---

## 🔧 Possíveis Melhorias Futuras

### 1. Lazy Loading
```javascript
// Carregar imagens apenas quando necessário
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
        }
    });
});
```

### 2. Prefers Reduced Motion
```javascript
// Respeitar preferências de acessibilidade
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Desativar ou simplificar animações
}
```

### 3. Progressive Enhancement
```javascript
// Verificar suporte antes de usar
if ('IntersectionObserver' in window) {
    initAnimations();
} else {
    // Fallback para browsers antigos
    initBasicAnimations();
}
```

### 4. Analytics de Scroll
```javascript
// Rastrear quais seções são mais visualizadas
const analyticsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Enviar evento para analytics
            gtag('event', 'section_view', {
                section_name: entry.target.id
            });
        }
    });
});
```

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Intersection Observer MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Transitions MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [RequestAnimationFrame MDN](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

### Ferramentas Úteis
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Can I Use - Intersection Observer](https://caniuse.com/intersectionobserver)
- [Chrome DevTools Animation Inspector](https://developers.google.com/web/tools/chrome-devtools/inspect-styles/animations)

---

*Documentação criada em 06/10/2025 - Versão 1.0*
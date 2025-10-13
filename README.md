# 🛡️ UNIFORCE SEGURANÇA LTDA

<header>

## 📋 Informações do Projeto

**Empresa:** UNIFORCE SEGURANÇA LTDA  
**CNPJ:** 54.421.279/0001-06  
**Endereço:** Av. João Paulino Vieira Filho, 305 - Zona 7, Maringá - PR, CEP 87020-015  
**Desenvolvido por:** Luiz Zonetti  
**Repositório:** [empresaSeguran-a](https://github.com/LuizZonetti1/empresaSeguran-a)

</header>

---

<main>

## 🎯 Sobre o Projeto

Este é o **website institucional** da UNIFORCE SEGURANÇA LTDA, uma empresa especializada em serviços de segurança patrimonial. O site foi desenvolvido com foco em **experiência do usuário**, **responsividade** e **identidade visual profissional**.

<section>

### 🏢 Sobre a Empresa

A UNIFORCE SEGURANÇA LTDA é uma empresa especializada em serviços de segurança patrimonial, oferecendo soluções completas e personalizadas para proteger seu patrimônio. Com uma equipe altamente qualificada e treinada, atendemos diversos segmentos do mercado, desde estabelecimentos comerciais até condomínios residenciais de alto padrão.

</section>

<section>

### 🚀 Funcionalidades Principais

#### 📞 Contato Direto
- **WhatsApp Integrado:** Links diretos para orçamentos e emergências
- **Botão Flutuante:** Acesso rápido ao WhatsApp em todas as páginas
- **Cards Clicáveis:** Contatos organizados na seção hero

#### 🎨 Design Moderno
- **Tema Escuro:** Paleta de cores preta com detalhes dourados
- **Responsivo:** Adaptado para desktop, tablet e mobile
- **Animações:** Transições suaves e efeitos visuais elegantes
- **Marca D'água:** Águia-leão como elemento visual de força

#### 🔧 Serviços Interativos
- **4 Serviços Principais:** Monitoramento, Zeladoria, Automatização, Portaria Remota
- **Modais Informativos:** Detalhes completos de cada serviço
- **Layout em Grid:** 4 colunas no desktop, responsivo para mobile

</section>

<section>

### 🛠️ Tecnologias Utilizadas

#### Frontend
- **HTML5:** Estrutura semântica moderna
- **CSS3:** Styling avançado com Grid, Flexbox e animações
- **JavaScript ES6+:** Interatividade e modais dinâmicos
- **SVG:** Ícones otimizados e logo vetorial

#### Recursos Visuais
- **Google Fonts:** Poppins para tipografia moderna
- **Backdrop Filter:** Efeitos de blur para glassmorphism
- **CSS Grid:** Layout responsivo de 4 colunas
- **Custom Properties:** Variáveis CSS para manutenção

#### Integração
- **WhatsApp API:** Links diretos com mensagens pré-formatadas
- **Google Maps:** Mapa embedado da localização
- **Instagram:** Link para perfil oficial da empresa

</section>

<section>

### 📱 Estrutura de Seções

#### `<header>`
- Logo clicável (scroll to top)
- Navegação responsiva
- Tema escuro consistente

#### `<section class="hero">`
- Logo ampliada da empresa
- Cards de contato clicáveis
- Marca d'água águia-leão
- Slogan: "Nosso objetivo é sua segurança"

#### `<section id="empresa-info">`
- Informações detalhadas da empresa
- Imagem da equipe
- CNPJ e dados oficiais

#### `<section id="nossos-servicos">`
- 4 cards de serviços em grid
- Modais com informações detalhadas
- Botões de orçamento integrados

#### `<section id="certificacoes">`
- Certificações e autorizações
- ISO 9001:2015, Polícia Federal, SESVESP, ABESE

#### `<section id="clientes">`
- Portfolio de clientes atendidos
- 9 empresas parceiras
- Layout em grid responsivo

#### `<section id="localizacao">`
- Mapa interativo do Google Maps
- Informações de localização
- Vantagens estratégicas
- Horários de atendimento

#### `<section id="comentarios">`
- Depoimentos de clientes
- Avatars gerados dinamicamente
- Layout responsivo

#### `<footer>`
- Logo ampliada
- Informações da empresa organizadas
- Links de contato e redes sociais
- Layout em duas colunas

</section>

<section>

### 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-black: #000000;
--secondary-black: #1a1a1a;
--gold-primary: #d4af00;
--gold-secondary: #ffcc00;
--white: #ffffff;

/* Opacidades */
--black-overlay: rgba(0, 0, 0, 0.95);
--gold-overlay: rgba(212, 175, 0, 0.3);
```

</section>

<section>

### 📂 Estrutura de Arquivos

```
empresaSegurança/
├── index.html              # Página principal
├── styles.css              # Estilos principais
├── script.js               # JavaScript interativo
├── README.md               # Documentação
└── assets/                 # Recursos visuais
    ├── aguia-leao.png      # Marca d'água
    ├── Uniforce vetor logo.pdf (2).png  # Logo principal
    ├── whatsapp-icon.svg   # Ícone WhatsApp
    ├── instagram-icon.svg  # Ícone Instagram
    ├── monitoramento.webp  # Serviço 1
    ├── servico-zeladoria.jpg       # Serviço 2
    ├── automatização.jpg   # Serviço 3
    ├── portaria remota.jpeg        # Serviço 4
    ├── iso-certificacao.png        # Certificação ISO
    ├── pf-certificacao.png # Cert. Polícia Federal
    ├── sesvesp-logo.png    # Logo SESVESP
    ├── abese-logo.png      # Logo ABESE
    ├── evento-banco-safra-a2-seguranca-equipe.jpeg  # Foto equipe
    └── [clientes]/         # Logos dos clientes
        ├── cropped-Lajeresk.jpeg
        ├── meu-chef.jpeg
        ├── volkswagem-caminhoes.png
        ├── igui-piscina.jpeg
        ├── eletroinga.jpeg
        ├── graneleiro-logo.png
        ├── frota-brasil.png
        ├── royal-garden.png
        └── sesi.jpg
```

</section>

<section>

### 📱 Responsividade

#### Desktop (1200px+)
- Grid de 4 colunas para serviços
- Logo hero de 300px
- Layout em duas colunas no footer

#### Tablet (768px - 1024px)
- Grid de 2 colunas para serviços
- Ajustes de espaçamento
- Marca d'água otimizada

#### Mobile (até 768px)
- Layout em coluna única
- Header não fixo
- Modais em tela cheia
- Cards de contato empilhados
- Logo hero de 180px

</section>

<section>

### ⚙️ Funcionalidades JavaScript

#### Modais Dinâmicos
```javascript
function abrirModal(modalId)    // Abre modal específico
function fecharModal(modalId)   // Fecha modal
```

#### Navegação Suave
```javascript
initSmoothNavigation()          // Scroll suave entre seções
initLogoScrollToTop()           // Logo clica para topo
```

#### Animações
```javascript
initAnimations()                // Observadores de intersecção
animateMainTitle()              // Animação do título
```

#### Detecção Mobile
```javascript
// Otimizações específicas para dispositivos móveis
// Eventos de toque otimizados
// Performance melhorada em modais
```

</section>

</main>

---

<aside>

## 📞 Contatos da Empresa

### 💼 Orçamentos
**WhatsApp:** (44) 99908-6712  
**Link Direto:** [Solicitar Orçamento](https://wa.me/5544999086712?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20serviços%20de%20segurança.)

### 🚨 Emergência 24h
**WhatsApp:** (44) 7400-1539  
**Link Direto:** [Emergência](https://wa.me/554474001539?text=Emergência%20-%20Preciso%20de%20atendimento%20imediato!)

### 🌐 Redes Sociais
**Instagram:** [@uniforce_seguranca](https://www.instagram.com/uniforce_seguranca)

### 📍 Localização
**Endereço:** Av. João Paulino Vieira Filho, 305  
**Bairro:** Zona 7  
**Cidade:** Maringá - PR  
**CEP:** 87020-015

</aside>

---

<footer>

## 📋 Informações Técnicas

### 🔧 Como Executar

1. **Clone o repositório:**
```bash
git clone https://github.com/LuizZonetti1/empresaSeguran-a.git
```

2. **Acesse o diretório:**
```bash
cd empresaSeguran-a
```

3. **Abra o arquivo:**
```bash
# Opção 1: Abrir diretamente no navegador
open index.html

# Opção 2: Servidor local (recomendado)
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 🚀 Deploy

O site está otimizado para deploy em:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Hospedagem tradicional**

### 📊 Performance

- ✅ **Mobile-First Design**
- ✅ **Imagens Otimizadas**
- ✅ **CSS Minificado**
- ✅ **JavaScript Otimizado**
- ✅ **SEO Friendly**

### 🔒 Segurança

- ✅ **HTTPS Ready**
- ✅ **No External Dependencies**
- ✅ **Sanitized Inputs**
- ✅ **Safe External Links**

---

### 📄 Licença

© 2024 UNIFORCE SEGURANÇA LTDA. Todos os direitos reservados.

**Desenvolvido com 💛 por [Luiz Zonetti](https://github.com/LuizZonetti1)**

</footer>

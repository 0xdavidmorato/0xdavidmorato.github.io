# Discovery e decisões de reconstrução

Data da auditoria: 22 de agosto de 2026.

## Estado original

O repositório continha um único site estático: index.html, styles.css e script.js, sem package.json, build, linter, testes ou GitHub Actions. A branch rastreada é main, com remoto https://github.com/0xdavidmorato/0xdavidmorato.github.io.git. Não existiam ficheiros de configuração do GitHub.

O markup original concentrava cerca de 770 linhas numa experiência de desktop simulada com pop-ups. Carregava Typed.js, Font Awesome e Ionicons por CDN. O JavaScript usava controlo manual de pop-ups e slider; havia markup de FAQ e elementos cujas interações não eram coerentes com a página. A estrutura não incluía metadados essenciais de SEO, viewport, favicon, sitemap ou robots.

## Conteúdo e ativos reutilizados

- A fotografia assets/imagens/David_work1.jpg foi mantida como retrato.
- As imagens DrinkDrips e Music foram reutilizadas como fundos dos dois projetos ligados no site anterior.
- O e-mail público existente foi mantido.
- A formação e a experiência em desenvolvimento web, presentes no README original, foram mantidas com redação concisa.

Não foram inventados cargos, clientes, certificações, números nem resultados.

## Riscos e dívida técnica identificados

- O ficheiro PHP não podia funcionar em GitHub Pages e tinha lógica de mensagem incorreta. Foi removido; o site usa um link de e-mail até existir um endpoint próprio.
- O conteúdo de preços, pagamentos, hardware, assistência técnica e procurement não apoiava o posicionamento escolhido e foi removido da interface.
- Dependências por CDN eram um ponto de falha e adicionavam peso; a nova versão não depende delas.
- Não foram encontrados padrões de segredos no conteúdo rastreado ou no histórico local analisado.

## Decisão arquitetural

Foi escolhida uma single-page estática, semanticamente estruturada, porque o conteúdo é essencialmente de apresentação e o GitHub Pages é o alvo de publicação. Isto evita uma toolchain desnecessária, reduz o custo de manutenção e preserva desempenho. O JavaScript limita-se a navegação mobile e animações progressivas; a página permanece navegável sem JavaScript.

## Direção visual

Base escura azulada, acento lima, tipografia editorial e uma visualização de workflow no hero. A composição procura comunicar precisão técnica e maturidade sem recorrer a gradientes excessivos ou ilustrações genéricas de IA. A acessibilidade inclui skip link, foco visível, HTML semântico, menu responsivo e respeito por prefers-reduced-motion.

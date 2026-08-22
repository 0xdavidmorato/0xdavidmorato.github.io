# David Morato — portfolio

Website pessoal de David Morato, centrado em desenvolvimento e automação assistidos por IA. É um site estático, intencionalmente sem framework ou dependências de produção, para manter o deploy no GitHub Pages rápido e simples.

## Executar localmente

Não há etapa de instalação. Abra index.html num navegador ou sirva a pasta com um servidor HTTP local:

    python3 -m http.server 8000

Depois, visite http://localhost:8000.

## Validação

O workflow de CI valida a sintaxe do JavaScript e o HTML a cada pull request e push para main. Para a revisão final, testar visualmente em desktop e mobile, validar todos os links e conferir o contacto por e-mail.

## Deploy

O repositório é adequado para GitHub Pages com a opção **Deploy from a branch**, selecionando main e a pasta / (root). Não existe build: o GitHub Pages publica os ficheiros da raiz.

O antigo endpoint PHP foi removido porque o GitHub Pages não executa PHP. O contacto é feito por ligação mailto; caso seja necessário um formulário, adicionar um serviço de backend ou endpoint de formulário antes de o publicar.

## Workflow de Git e GitHub

1. Criar uma branch de feature a partir de main: git switch -c feature/nome-da-alteracao.
2. Fazer alterações pequenas, validar localmente e criar commits claros.
3. Abrir uma pull request para main.
4. Aguardar os checks de CI e fazer revisão.
5. Fazer merge depois da aprovação; o GitHub Pages publica a versão atualizada.

Recomendação para as configurações do repositório: proteger main, exigir pull request e aprovação antes de merge e exigir o check **Validate site**. Estas opções requerem permissões administrativas no GitHub.

## Estrutura

- index.html — conteúdo, semântica e metadados SEO
- styles.css — design responsivo e animações
- script.js — navegação mobile e animações de entrada
- assets/ — fotografia e imagens reutilizadas dos projetos
- .github/workflows/validate.yml — validação contínua
- robots.txt, sitemap.xml, favicon.svg — descoberta e identidade básica

## Conteúdo a completar

Os projetos apresentados usam apenas links já existentes no repositório. Ao disponibilizar novos case studies, acrescentar problema, processo, papel desempenhado, tecnologias e resultados verificáveis — sem alegações não comprovadas.

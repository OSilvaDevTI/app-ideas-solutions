<div align="center">

# 💡 App Ideas Solutions

**Minhas soluções para os desafios do [App Ideas](https://github.com/florinpop17/app-ideas)**

[![My Skills](https://skillicons.dev/icons?i=html)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=css)](https://skillicons.dev)
[![My Skills](https://skillicons.dev/icons?i=javascript)](https://skillicons.dev)

</div>

---

## 📖 Sobre o projeto

Este repositório reúne as soluções que desenvolvo para os desafios do repositório [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas), uma coleção de ideias de aplicações organizadas por nível de dificuldade.

O objetivo é **praticar lógica de programação, HTML, CSS e JavaScript** construindo projetos reais, do mais simples ao mais complexo, e manter tudo num portfólio navegável.

Cada projeto é **independente**: o CSS global fornece a base visual e o `style.css` de cada projeto cuida apenas do que é específico dele.

## ✨ Funcionalidades

- 🗂️ Página principal (`index.html`) listando todos os projetos organizados por nível
- 📊 Contadores de progresso por nível, alimentados pelo `data-status` de cada projeto
- 🎨 Design system compartilhado (tokens, layout e componentes em `global.css`)
- 🧩 Template pronto para iniciar novos projetos rapidamente
- 🔌 Projetos autônomos, sem dependências externas nem etapa de build

## 🛠️ Tecnologias

| Tecnologia | Uso |
| ---------- | --- |
| **HTML** | Estrutura das páginas |
| **CSS** | Estilização, tokens de design e layout responsivo |
| **JavaScript (Vanilla)** | Lógica dos projetos e contadores de progresso |

## 📁 Estrutura do repositório

```
app-ideas-solutions/
├── index.html                  # Página principal com todos os níveis
├── README.md
├── .gitignore
├── assets/
│   ├── css                     # Estilos globais (tokens, layout, componentes)
│   ├── js                      # Contadores de progresso
│   └── img/                    # Imagens e ícones compartilhados
└── projects/                   # Resoluções dos Projetos 
    ├── beginner/
    ├── intermediate/
    └── advanced/
```

## ▶️ Como executar

Não há dependências nem build. Basta clonar e abrir no navegador.

```bash
# Clone o repositório
git clone https://github.com/OSilvaDevTI/app-ideas-solutions.git

# Entre na pasta
cd app-ideas-solutions
```

Depois, escolha uma das opções:

- **Direto no navegador:** abra o `index.html` da raiz (ou o `index.html` de um projeto específico).
- **Com servidor local** (opcional, recomendado):

  ```bash
  # Com Python
  python -m http.server 5500

  # Ou com a extensão Live Server do VS Code
  ```

  Acesse `http://localhost:5500`.

## ➕ Como adicionar um novo projeto

1. Copie `projects/` para `projects/<nível>/<nome-do-projeto>` (nome em minúsculas, com hífens).
2. Desenvolva a solução nos arquivos `index.html`, `style.css` e `script.js` da pasta.
3. No `index.html` da raiz, copie o molde comentado no topo e cole dentro do nível correto.
4. Preencha nome, explicação e resultado, e mude `data-status` para `done`.
5. Atualize a tabela de projetos neste README.

## 🎯 Aprendizados

Principais focos de estudo ao longo dos projetos:

- Manipulação do DOM e tratamento de eventos
- Validação de entradas do usuário
- Organização de código e separação de responsabilidades
- Boas práticas de CSS (variáveis, reutilização e responsividade)
- Estruturação de um portfólio escalável

## 🙏 Créditos

Os enunciados e ideias dos projetos pertencem ao repositório [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas), criado por [Florin Pop](https://github.com/florinpop17). As soluções contidas aqui são de minha autoria.

## 👤 Autor

<div align="center">
    
**OSilvaDevTI**

[![My Skills](https://skillicons.dev/icons?i=github)](https://github.com/OSilvaDevTI)

</div>

---

<div align="center">

Feito com 💻 e muito estudo. Se curtiu, deixe uma ⭐!

</div>

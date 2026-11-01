# Minhas soluções do App Ideas

Portfólio com os projetos que resolvi do repositório [florinpop17/app-ideas](https://github.com/florinpop17/app-ideas).

## Estrutura

```
app-ideas-solutions/
├── index.html                  # Página principal com todos os níveis
├── README.md
├── .gitignore
├── assets/
│   ├── css/global.css          # Estilos globais (tokens, layout, componentes)
│   ├── js/main.js              # Contadores de progresso
│   └── img/                    # Imagens e ícones compartilhados
└── projects/
    ├── _template/              # Copie esta pasta para começar um projeto novo
    ├── beginner/
    │   └── bin2dec/            # Exemplo pronto
    ├── intermediate/
    └── advanced/
```

## Como adicionar um projeto

1. Copie `projects/_template` para `projects/<nível>/<nome-do-projeto>` (nome em minúsculas, com hífens).
2. Desenvolva a solução nos arquivos `index.html`, `style.css` e `script.js` da pasta.
3. No `index.html` da raiz, copie o molde comentado no topo e cole dentro do nível certo.
4. Preencha nome, explicação e resultado, e mude `data-status` para `done`.

Cada projeto é independente: o CSS global fornece a base e o `style.css` do projeto só cuida do que é específico dele.
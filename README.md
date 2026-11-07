<h1 align="center">✂️ [Projeto Barbearia]</h1>

<p align="center">
  Sistema de agendamentos para barbearia, desenvolvido com JavaScript, Webpack e Babel, consumindo uma API local.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/github/last-commit/hemerlyandree/[nome-do-repositorio]?style=flat-square" alt="Último commit" />
</p>

---

## 📖 Sobre o projeto

Aplicação web para gerenciar os horários de uma barbearia. Nela é possível **cadastrar agendamentos**, **visualizar os horários já marcados** e **cancelar** agendamentos existentes.

O projeto foi pensado para praticar conceitos importantes do front-end moderno: modularização do código, configuração de um ambiente com **Webpack** e **Babel**, e consumo de uma **API local** simulada com `server.json`, sem depender de um back-end externo.

## ✨ Funcionalidades

- 📅 Cadastro de novos agendamentos
- 🕐 Listagem dos horários agendados, organizados por período
- ❌ Cancelamento de agendamentos
- 🔄 Atualização da lista a cada alteração
- [➕ Outras funcionalidades: filtro por data, validação de horários ocupados, etc.]

## 🛠️ Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **JavaScript (ES6+)** | Lógica da aplicação |
| **Webpack** | Empacotamento de módulos, CSS e imagens |
| **Babel** | Compatibilidade do JavaScript moderno com navegadores |
| **HTML5 / CSS3** | Estrutura e estilo da interface |
| **[json-server]** | API local para simular o back-end |

## 📁 Estrutura do projeto

```
├── dist/              # Build gerado pelo Webpack
├── src/
│   ├── libs/          # Bibliotecas e configurações auxiliares
│   ├── modules/       # Módulos de cada funcionalidade
│   ├── services/      # Comunicação com a API
│   ├── utils/         # Funções utilitárias
│   └── main.js        # Ponto de entrada da aplicação
├── index.html         # Página principal
├── server.json        # Banco de dados da API local
├── webpack.config.js  # Configuração do Webpack
└── package.json
```

## 🧠 O que aprendi

- Configurar um projeto do zero com Webpack e Babel
- Carregar CSS e imagens (SVG) pelo Webpack
- Organizar o código em módulos, serviços e utilitários
- Consumir uma API local com requisições HTTP
- Manipular datas e horários no JavaScript

## 🔮 Próximos passos

- [ ] Adicionar edição de agendamentos
- [ ] Criar tela de login para os clientes
- [ ] Tornar o layout responsivo para celular
- [ ] Migrar a API local para um back-end real

## 👨‍💻 Autor

<p>
  Feito com 💙 por <a href="https://github.com/hemerlyandree"><b>André Hemerly</b></a>
</p>

<p>
  <a href="https://github.com/hemerlyandree">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="[seu-linkedin]">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

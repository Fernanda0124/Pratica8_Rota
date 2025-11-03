# Pratica 8_Rota
Desenvolver uma aplicação dividida em duas partes:  
 • Web: Utilizando React com Vite  
 • Mobile: Utilizando React Native com Expo 
 O foco é implementar rotas de navegação entre telas/páginas, simulando uma aplicação  de listagem e detalhes de produtos

A atividade visa consolidar conhecimentos sobre: 
• Estrutura de projetos modernos 
• Navegação com React Router e React Navigation 
• Organização de código 
• Entrega de projetos com documentação no GitHub 

•    Descrição clara do projeto 
•    Instruções de instalação e execução para web e mobile 
•    Explicação das rotas implementadas 
•    Passos para rodar localmente 
•    Créditos ou referências (se houver)



# ☑️ Descrição do Projeto

Este projeto é um Estudo de Caso para consolidar o conhecimento em **implementação de rotas** em duas plataformas distintas: **Web** (utilizando React com Vite e React Router DOM) e **Mobile** (utilizando React Native com Expo e React Navigation).

O objetivo é simular uma aplicação simples de lista de eletronicos na web e produtos para atividades fisicas.

# 📁 Estrutura do Projeto

O projeto é dividido em dois diretórios principais:
1.  **`web/`**: Projeto React configurado com Vite.
2.  **`mobile/`**: Projeto React Native configurado com Expo.

# 🌐 Parte 1: Aplicação Web (`web/`)

## Rotas Implementadas
A aplicação Web utiliza o `react-router-dom` e possui as seguintes rotas:

* **`/`**: Página inicial que exibe a lista de produtos.
* **`/product/:id`**: Página de detalhes, onde `:id` é o parâmetro dinâmico para buscar o produto específico.

## [cite_start]Instruções de Execução (Web) 
1.  Navegue até o diretório `web/`: `cd web`
2.  Instale as dependências (se necessário): `npm install`
3.  Inicie o servidor de desenvolvimento: `npm run dev`
4.  Acesse o link local fornecido no terminal (ex: `http://localhost:5173/`).

# 📱 Parte 2: Aplicação Mobile (`mobile/`)

## Rotas Implementadas
A aplicação Mobile utiliza o `React Navigation` (Stack Navigator) e possui as seguintes rotas (telas):

* **`Home`**: Tela inicial com botões que representam a lista de produtos.
* **`Details`**: Tela que recebe parâmetros de navegação para exibir os detalhes do produto selecionado.

## Instruções de Execução (Mobile) 
1.  Navegue até o diretório `mobile/`: `cd mobile`
2.  Instale as dependências (se necessário): `npm install`
3.  Inicie o servidor Expo: `npx expo start` 
4.  Use o aplicativo **Expo Go** no seu celular para escanear o QR Code exibido no terminal.

# 💾 Entrega no GitHub

Para finalizar a entrega do projeto:

1.  Certifique-se de estar no diretório **raiz** (`Pratica8_Rota/`).
2.  Execute os comandos Git ( `Fernanda0124`):

```bash
git init
git add 
git commit -m "Roteiro de Atividade Prática: Estudo de Caso com Rotas em Aplicações Web e  Mobile"
git remote add origin [(https://github.com/Fernanda0124/Pratica8_Rota)]
git branch -M main 
git push -u origin main

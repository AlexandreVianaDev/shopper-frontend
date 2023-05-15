# Resumo do projeto

Este é o FrontEnd do Teste Técnico para a Shopper.
Se trata de uma ferramenta para atualização de preços de produtos utilizando um arquivo csv.
No FrontEnd
Além di

# :hammer: Funcionalidades do projeto

- `Validação do CSV`: é possível enviar um arquivo csv com o código do produto(product_code) e o novo preço (new_value) para ser validado, seguindo algumas regras, tais como:

  - o novo preço não pode ficar abaixo do preço de custo;
  - o reajuste não pode ser maior ou menor do que 10% do preço atual do produto;
  - para aumentar o preço de um produto pacote, ou seja, que contenha outros produtos como componente só deve se dar caso também seja enviado os novos valores dos produtos componentes, além disso o preço deve bater, o inverso também é verdadeiro;

- `Atualizar o Banco de Dados usando o CSV`: caso o CSV seja validado, o botão de atualizar vai ser liberado e vai ser possível atualizar o Banco de Dados.

## ✔️ Técnicas e tecnologias utilizadas

- `React-TS`
- `axios try catch`
- `styled-components`
- `toastify`
- `Vite`
- `Npm`
- `Padrão de código (ESLint)`
- `Trello`
- `Figma`

# 🛠️ Abrir e rodar o projeto

\*\*Passos para rodar a aplicação:

- clonar este repositório;
- abrir o terminal na pasta clonada no seu computador;
- executar o comando de instalação de dependencias: npm install;
- executar o comando para inicializar o React: npm run dev;
  Obs.: lembre-se de ligar o servidor.
  \*\*

GitHub do BackEnd: https://github.com/AlexandreVianaDev/shopper-backend

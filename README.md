# Dontpad Clone

Este projeto é uma versão simplificada do Dontpad com suporte a edição apenas com senha, e em dark mode permanente, desenvolvido com React, TypeScript e Node.js/Express para o backend.

## Funcionalidades

- Autenticação por senha para edição de conteúdo.
- Interface de usuário em dark mode.
- Edição de texto simples com salvamento em arquivo no servidor.

## Pré-requisitos

- Node.js instalado
- NPM instalado

## Como executar o projeto

### Backend

1. Navegue até o diretório do projeto.

    ```sh
    cd dontpad_clone
    ```

2. Instale as dependências do backend.

    ```sh
    npm install
    ```

3. Inicie o servidor backend.

    ```sh
    node server.js
    ```

### Frontend

1. Navegue até o diretório `dontpad-clone`.

    ```sh
    cd dontpad-clone
    ```

2. Instale as dependências do frontend.

    ```sh
    npm install
    ```

3. Inicie a aplicação React.

    ```sh
    npm start
    ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## Como usar

1. **Login**: Ao acessar o site, você verá uma tela de login. Insira a senha definida no código para autenticar.
2. **Editor**: Após a autenticação, você poderá editar o texto e salvá-lo. O conteúdo será salvo no servidor.

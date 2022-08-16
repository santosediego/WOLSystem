# WOLSystem

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/santosediego/WOLSystem/blob/main/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a301c4f-8b37-43c5-951c-f517c50407b9/deploy-status)](https://app.netlify.com/sites/wolsystem/deploys)

## Sobre o projeto

Aplicação web para envio de pacotes com foco na inicialização de computadores via habilitados para wake on lan.

https://wolsystem.netlify.app/

## Tecnologias utilizadas
### Back end
- Java
- Spring Boot
- Maven
### Front end
- HTML / CSS / TypeScript
- ReactJS
- React-toastify

## Como executar o projeto

### Back end
Pré-requisito: Java 17

```bash
# clonar repositório
git clone https://github.com/santosediego/WOLSystem.git

# entrar na pasta do projeto back end
cd WOLSystem/backend/

# executar o projeto (por padrão será executado com perfil de teste)
./mvnw spring-boot:run
```

### Front end
Pré-requisitos: 
- npm / yarn
- Back end em execução

```bash
# clonar repositório
git clone https://github.com/santosediego/WOLSystem.git

# entrar na pasta do projeto front end web
cd WOLSystem/frontend/

# instalar dependências
yarn

# executar o projeto
yarn start
```

## Autor

[Diego Santos](https://www.linkedin.com/in/santosediego/ "Perfil Linkedin Diego Santos")


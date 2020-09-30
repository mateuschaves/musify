# Musify backend
💚 Gerenciador de músicas


## Tecnologias

:white_check_mark: Express\
:white_check_mark: Docker\
:white_check_mark: Docker Compose\
:white_check_mark: TypeORM\
:white_check_mark: Typescript\
:white_check_mark: Postgres


[Link da collection no postman](https://documenter.getpostman.com/view/4758899/TVRd8qct)

## Instalação

```bash
$ npm install
```
ou
```
$ yarn install
```

## Variáveis de ambiente

crie um arquivo ``.env`` seguindo a mesma estrutura do arquivo ``.env.example``
```
PORT=3000

# database
DB_PORT=5432
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=

# security

JWT_SECRET=
JWT_EXPIRES=
```

## Executando a aplicação

```bash
docker-compose build

docker-compose up
```

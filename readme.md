# 📝 Todo List - Laravel + InertiaJS

Este é um simples aplicativo de Todo List criado com o [Laravel Framework](https://laravel.com/docs/12.x) & [InertiaJS Lib](https://inertiajs.com/) com o objetivo de estudar e explorar os recursos oferecidos pelo framework.

## 🚀 Como subir o projeto

Certifique-se de ter o **Docker** e o **Docker Compose** instalados na sua máquina.
Para iniciar o projeto, execute:

```bash
docker-compose up --build
```

Esse comando irá iniciar dois containers:

- **PHP-FPM 8.3.3** + **Nginx**
- **PostgreSQL**

Após configurar e subir os containers, vocé pode acessar o projeto em http://localhost:8080.

## ⚙️ Configuração

Antes de rodar o projeto, você precisa criar um arquivo `.env` na raiz com as seguintes variáveis:

```env
DB_CONNECTION=pgsql
DB_HOST=laravel-db
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD={SUA_SENHA}
```

Substitua `{SUA_SENHA}` pela senha desejada para o banco de dados PostgreSQL.

## 👤 Usuário e Autenticação

Crie um **usuário**!. Com ele, é possível acessar o sistema e gerenciar suas tarefas.

## ✅ Funcionalidades

Com o usuário criado, você pode:

- Criar tarefas com:
  - Nome
  - Descrição
  - Status (Pendente ou Concluída)
  - Data prevista para finalização
- Listar, editar e excluir tarefas
- Funcionalidades básicas de um CRUD

## 📦 Tecnologias Utilizadas

- [Laravel Framework](https://laravel.com/docs/12.x)
- [InertiaJS Lib](https://inertiajs.com/)
- PHP 8.3.3 (FPM)
- InertiaJS
- Nginx
- PostgreSQL
- Docker + Docker Compose

---

Desenvolvido com foco em aprendizado e experimentação com Laravel Framework e InertiaJS 🚧


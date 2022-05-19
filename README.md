
#Tabela de conteúdo
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Database](#Database)
   * [Tabela de Conteúdo](#Tabela-de-conteúdo)
   * [Tecnologias](#Tecnologias)
   * [Como usar](#Como-usar)
<!--te-->
#
# Sobre

Projeto Todoapp, onde é possivel criar task e cronometrar o tem de execução.

#
# Database

```
docker run --name todo-database -p 3306:3306 -e MARIADB_ROOT_PASSWORD=123 -d mariadb:latest
```

#
# Tecnologias


<p align="center">
  <a href="https://pt-br.reactjs.org/" target="blank"><img src="https://i2.wp.com/blog.hariken.co/wp-content/uploads/2019/03/react-logo.png?ssl=1" width="320"  alt="React Logo" /></a>
</p>

## Front end
- Typescript 
- Axios
- React
- React-router-dom
- Styled Component


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Back end
- Typescript 
- NestJs
- TypeORM
- MariaDB


#
# Como usar

## 1 passo
### clonar repositório
```bash
git clone https://github.com/henriquepython/todoapp.git
```

```bash
## entrar pasta todoapp
cd todoapp
```

## 2 passo


### Database

```bash
# entrar na pasta do projeto backend
cd todo-app-backend

# rodar banco com docker
docker-compose up
```


## 3 passo


### Back end

```bash
# abra outro terminal

# entrar na pasta do projeto backend
cd todo-app-backend

# instalar dependências
npm install

# executar o projeto
nest start

# Acesso a documentação
http://localhost:3333/docs
```

## 4 passo

### Front end

```bash
# abra outro terminal

# entrar na pasta do projeto frontend
cd todo-app-frontend

# instalar dependências npm
npm install

# executar o projeto
npm run start

# Acesso ao front end
http://localhost:3000/
```
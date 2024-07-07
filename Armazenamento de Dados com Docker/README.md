# Armazenamento de Dados com Docker

## Montando mount um local de armazenamento

```bash
docker inspect mysql-A
```

```bash
mkdir /data
mkdir /data/mysql-A
```

```bash
docker run -e MYSQL_ROOT_PASSWORD=0707 --name mysql-A -d -p 3306:3306 --volume=/data/mysql-A:/var/lib/mysql mysql
```

```bash
mysql -u root -p --protocol=tcp --port=3306
```

### Criando banco de dados

```bash
create database aula;

use aula;
```

#### Tabela Alunos

```bash
CREATE TABLE alunos (
    AlunoID int,
    Nome varchar(50),
    Sobrenome varchar(50),
    Endereco varchar(150),
    Cidade varchar(50)
);
```

----

## Tipos de mount bind, named, dockerfile volume

```bash
docker run -dti --mount type=bind,src=/data/debian-A,dst=/data debian
```

```
docker exec -ti <NAME>
``` 

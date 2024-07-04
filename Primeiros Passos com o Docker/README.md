# Primeiros Passos

- [Docker - Hub](https://hub.docker.com/)

```bash
docker --help
```

### Fazendo download de uma imagem e mostrar lista das imagens baixadas

1. **Download**
```bash
docker pull <image download>
```

2. **Lista de imagens**
```bash
docker imagens
```

----

## 🐋 | Executando um contêiner

### Executar uma imagem

```bash
docker run <image>
```

### Mostrar containers (em execução)

```bash
docker ps
```

### Quais containers foram executados

```bash
docker ps -a
```

```bash
sudo docker run <image> sleep 5
```

### Parar execução de um container

```bash
docker stop <CONTAINER ID>||<NAMES>
```

----

## 🐋️ | Executando aplicações no contêiner

```bash
docker run -dti <image_name>
```

```bash
docker exec -it <CONTAINER ID>||<NAMES> <COMMAND>
```

----

## 🐋️ | Excluindo e nomeando contêineres

- **Removendo container**

```bash
docker rm <CONTAINER ID>
```

- **Removendo Imagens**

```bash
docker rmi <REPOSITORY>
```

- **Nomenado**

```bash
docker run -dti --name <NAME> <image> 
```

----

## 🐋️ | Copiando arquivos para o contêiner

- **Criando diretorio**

```bash
docker exec <NAME> mkdir /destino
```

```bash
docker exec <NAME> ls
```

```bash
docker cp <FILE> <NAME> /destino
```

```bash
docker exec <NAME> ls /destino -l
```

----

## 🐋️ | Copiando arquivos do contêiner

```bash
docker cp <NAME>:/destino/arquivo.txt <PATH>
```

----

## 🐋 | TAGS

```bash
docker run -dti <image_name>:<TAG>
```

----

## 🐋 | Criando um container do MYSQL

- [Docker Hub - Mysql](https://hub.docker.com/_/mysql/)

```bash
docker pull mysql
```

```bash
docker run -e MYSQL_ROOT_PASSWORD=<Senha> --name mysql-A -d -p <port>:<port> mysql
```

```bash
docker exec -it mysql-A bash
```

```bash
mysql -u root -p --protocol=tcp
```

```bash
sudo apy -y install mysql-client
```

# Definição e Criação de um Docker File

## Primeiro Docker File

```bash
docker run -dti --name ubuntu-python ubuntu
``` 

```bash
docker exec -ti ubuntu-python bash
```

```bash
apt update
```

**Instalando o Python e o Nano**
```bash
apt install -y python3 nano
```

```bash
apt clean
```

**Utilizando dockerfile**

`dockerfile`

```
FROM ubuntu

RUN apt update && apt install -y python3 && apt clean

COPY app.py /opt/app.py

CMD python3 /opt/app.py
```

----

## Criando uma imagem personalizada do Apache


----

## Criando imagens personalizadas a partir de imagens de liguagens de programação

----

## Gerando uma imagem Multistage

----

## Realizando o upload de imagens para o Hub do Docker


----

## Registry Criando um servidor de imagens


```bash
docker pull registry
```

```bash
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

```bash
docker ps
```

```bash
docker images
```

```bash
docker image tag <IMAGE ID> <IP>:<PORT>/<REPOSITORY>:<TAG>
```


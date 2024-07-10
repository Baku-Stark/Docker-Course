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

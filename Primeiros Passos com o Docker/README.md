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

# Processamento, Logs e Rede com Docker

## Limitando memória e CPU

```bash
docker status <CONTAINER>
```

**Estabelecendo limite de processamento**
```bash
docker update <CONTAINER> -m 128M --cpus 0.2
```

**Outro método**
```bash
docker run --name <USER CHOICE NAME> -dti -m 128M --cpus 0.2 <CONTAINER>
```

**Finalizando com**
```bash
docker status <CONTAINER>
```

----

## Informações, logs e processos

**Informações do servidor**
```bash
docker info
```

**Mostrar logs**
```bash
docker container logs <IMAGE>
```

**Mostrar processos**
```bash
docker container top <IMAGE>
```

----

## Redes

```bash
docker network --help
```

```txt
Usage:  docker network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or more networks
  ls          List networks
  prune       Remove all unused networks
  rm          Remove one or more networks
```

```bash
docker network ls
```

**Output (headers):** `NETWORK ID NAME DRIVER SCOPE`

```bash
docker network inspect <NETWORK NAME>
```

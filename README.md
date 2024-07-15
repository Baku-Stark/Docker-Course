# 🐋 | Docker

Docker é uma plataforma de software que permite criar, testar e implantar aplicações rapidamente. Ele utiliza a virtualização a nível de sistema operacional para entregar software em pacotes chamados contêineres. Aqui estão alguns conceitos-chave sobre o Docker:

1. **Contêineres**: São pacotes leves e portáteis que incluem tudo o que a aplicação precisa para rodar: código, runtime, bibliotecas, variáveis de ambiente, etc. Eles são isolados uns dos outros e do host, mas podem compartilhar o kernel do sistema operacional.

2. **Imagem Docker**: É um template imutável usado para criar contêineres. Uma imagem contém tudo o que é necessário para rodar uma aplicação, incluindo o código, runtime, bibliotecas e configurações.

3. **Dockerfile**: É um arquivo de texto que contém uma série de comandos que são lidos pelo Docker para montar uma imagem. Cada instrução no Dockerfile cria uma nova camada na imagem.

4. **Docker Hub**: É um serviço de registro de imagens Docker, que permite armazenar e compartilhar imagens publicamente ou privadamente.

5. **Orquestração**: Docker pode ser usado em conjunto com ferramentas de orquestração como Kubernetes ou Docker Swarm para gerenciar um grande número de contêineres, incluindo balanceamento de carga, escalabilidade e resiliência.

### Benefícios do Docker:

- **Portabilidade**: Como os contêineres incluem tudo o que a aplicação precisa, eles podem rodar consistentemente em qualquer ambiente, seja no desenvolvimento, testes ou produção.
- **Eficiência**: Contêineres são mais leves do que máquinas virtuais tradicionais, pois compartilham o kernel do sistema operacional, resultando em melhor desempenho e uso de recursos.
- **Isolamento**: Aplicações rodando em contêineres são isoladas umas das outras e do sistema host, o que melhora a segurança e evita conflitos entre dependências.
- **Desenvolvimento Ágil**: Docker permite que os desenvolvedores criem ambientes de desenvolvimento replicáveis e consistentes rapidamente.

Docker revolucionou a forma como as aplicações são desenvolvidas, testadas e implantadas, facilitando a adoção de práticas de DevOps e integração contínua/entrega contínua (CI/CD).

----

# 🐋  | Docker (Ubuntu 24.04)

### 1 – Atualizar o Sistema
O primeiro passo é atualizar a lista de pacotes do Ubuntu. Para isso entre com o seguinte comando:

```bash
sudo apt update
```

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

### 2 – Instalar pré-requisitos
Instale pacotes de pré-requisitos para permitir ao APT o uso de pacotes seguros HTTPS.

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

### 3 – Adicionar chave GPG
Vamos adicionar a chave para garantir a validade dos pacotes vindos do repositório do Docker.

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### 4 – Adicionar repositório Docker ao Ubuntu
Vamos adicionar o repositório Docker as fontes de pacotes do Ubuntu.

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 5 – Atualizar a lista de pacotes
Atualize novamente a lista dos pacotes.

```bash
sudo apt update
```

### 6 – Instalar o Docker
Vamos instalar o Docker no Ubuntu.

```bash
sudo apt install docker-ce
```

### 7 – Verificar a instalação
Para garantir que tudo deu certo vamos verificar se o Docker está em execução.

```bash
sudo systemctl status docker

docker --version
```

----

# 🐋  | Docker (Mint)

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
sudo apt update
```

```bash
apt-cache policy docker-ce
```

Output of `apt-cache policy docker-ce`:

```bash
docker-ce:
  Installed: (none)
  Candidate: 5:19.03.9~3-0~ubuntu-focal
  Version table:
     5:19.03.9~3-0~ubuntu-focal 500
        500 https://download.docker.com/linux/ubuntu focal/stable amd64 Packages

```

```bash
sudo apt install docker-ce
```

```bash
sudo systemctl status docker
```

Output `sudo systemctl status docker`:
```bash
Output
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2020-05-19 17:00:41 UTC; 17s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 24321 (dockerd)
      Tasks: 8
     Memory: 46.4M
     CGroup: /system.slice/docker.service
             └─24321 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

----

# O que é Docker Compose

O Docker Compose é uma ferramenta usada para definir e executar aplicativos de vários contêineres do Docker. Ele permite criar e gerenciar múltiplos contêineres através de um único arquivo YAML, facilitando o provisionamento e gerenciamento em ambientes de desenvolvimento e testes. Com o Docker Compose, é possível descrever parâmetros e configurações das imagens e subir toda a infraestrutura com um único comando.

##Comandos do Docker Compose

O Docker Compose possui alguns comandos a serem utilizados para garantir toda essa facilidade no provisionamento e gerenciamento dos contêineres, vejamos então os principais:

- **docker-compose up**: cria e inicia os contêineres;

- **docker-compose build**: realiza apenas a etapa de build das imagens que serão utilizadas;

- **docker-compose logs**: visualiza os logs dos contêineres;

- **docker-compose restart**: reinicia os contêineres;

- **docker-compose ps**: lista os contêineres;

- **docker-compose scale**: permite aumentar o número de réplicas de um contêiner;

- **docker-compose start**: inicia os contêineres;

- **docker-compose stop**: paralisa os contêineres;

- **docker-compose down**: paralisa e remove todos os contêineres e seus componentes como rede, imagem e volume.

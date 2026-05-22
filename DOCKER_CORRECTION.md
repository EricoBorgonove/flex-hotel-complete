# Correcao do Docker

Este guia explica a correcao aplicada em relacao ao Docker original do projeto `EricoBorgonove/flex-hotel-complete`.

Referencia original:

```txt
https://github.com/EricoBorgonove/flex-hotel-complete
```

## Problema

No `docker-compose.yml` original, o Postgres era publicado assim:

```yaml
ports:
  - "5432:5432"
```

Isso falha quando ja existe um PostgreSQL local usando a porta `5432` da maquina.

O erro visto foi:

```txt
ports are not available: exposing port TCP 0.0.0.0:5432:
listen tcp 0.0.0.0:5432: bind: address already in use
```

O nginx original tambem publicava:

```yaml
ports:
  - "80:80"
  - "443:443"
```

Essas portas tambem podem estar ocupadas por outro servidor local.

## Correcao aplicada

### 1. Postgres publicado em 5433 no host

Antes:

```yaml
ports:
  - "5432:5432"
```

Depois:

```yaml
ports:
  - "5433:5432"
```

Com isso:

- dentro do Docker, o backend continua usando `postgres:5432`;
- fora do Docker, ferramentas locais usam `localhost:5433`;
- a porta local `5432` fica livre para outro Postgres instalado na maquina.

### 2. Nginx publicado em 8080 e 8443

Antes:

```yaml
ports:
  - "80:80"
  - "443:443"
```

Depois:

```yaml
ports:
  - "8080:80"
  - "8443:443"
```

Com isso:

- app via nginx: `http://localhost:8080`;
- porta interna do nginx continua `80`;
- evita conflito com servidores locais que ja usam `80`.

### 3. Backend prepara o banco antes de iniciar

O backend passou a usar:

```yaml
command: sh -c "npm run db:prepare && npm run start"
```

Esse comando executa:

```bash
npx prisma generate && npx prisma migrate deploy && npx prisma db seed
```

Depois disso a API inicia com:

```bash
npm run start
```

Isso evita subir a API sem Prisma Client, sem migrations ou sem seed.

### 4. Remocao de `version`

O campo:

```yaml
version: '3.8'
```

foi removido porque o Docker Compose atual ignora esse campo e mostra aviso de atributo obsoleto.

## Portas atuais

```txt
Frontend direto:       http://localhost:5173
Backend:               http://localhost:3000
Backend health check:  http://localhost:3000/health
App via nginx:         http://localhost:8080
Postgres no host:      localhost:5433
Postgres no Docker:    postgres:5432
```

## Como subir corretamente

Na raiz do projeto:

```bash
docker compose up -d --build
```

Verificar containers:

```bash
docker compose ps
```

Ver logs do backend:

```bash
docker compose logs backend
```

Ver logs do banco:

```bash
docker compose logs postgres
```

## Como recriar depois de excluir containers ou imagens

Sem apagar os dados do banco:

```bash
docker compose down
docker compose up -d --build
```

Apagando tambem o banco local do projeto:

```bash
docker compose down -v
docker compose up -d --build
```

Use `down -v` apenas quando quiser recriar o banco do zero.

## Como conectar no banco

De dentro do Docker:

```bash
docker compose exec postgres psql -U postgres -d flexhotel
```

De fora do Docker:

```bash
psql postgresql://postgres:flexhotel123@localhost:5433/flexhotel
```

## O que nao fazer

Evite iniciar containers antigos pelo botao de play do Docker Desktop se eles ainda estiverem configurados com `5432:5432` ou `80:80`.

Prefira sempre subir pela raiz do projeto:

```bash
docker compose up -d
```

Assim o Docker usa o `docker-compose.yml` corrigido.

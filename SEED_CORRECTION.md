# Correcao das Seeds

Este guia explica a correcao aplicada ao fluxo de seed do FlexHotel e como executar o banco de forma previsivel no Docker ou fora dele.

## Problema

O seed precisa poder rodar mais de uma vez durante desenvolvimento. Quando o banco ja tinha dados de demo, um seed que apenas cria registros podia falhar com erro de chave unica ou duplicar dados operacionais, como reservas, estadias, cobranças e bloqueios de quarto.

Outro ponto importante e que o backend depende do Prisma Client gerado e das migrations aplicadas antes de iniciar a API. Por isso o Docker usa um comando de preparacao do banco antes do `npm run start`.

## Correcao

O script `backend/prisma/seed.js` foi organizado para ser idempotente nos dados principais e previsivel nos dados operacionais de demo:

- Roles sao criadas com `upsert`.
- Hoteis, usuarios, categorias e quartos usam chaves estaveis e `upsert`.
- Usuarios demo recebem sempre a senha `123456`.
- Dados operacionais de demo usam IDs fixos.
- Antes de recriar reservas, estadias, pagamentos, cobranças, hospedes demo e bloqueios demo, o seed remove esse conjunto controlado.
- A ordem de remocao respeita dependencias do banco para evitar erro de chave estrangeira.

Com isso, rodar o seed novamente atualiza a base demo sem acumular registros duplicados.

## Comando recomendado

No Docker, use:

```bash
docker compose exec backend npm run db:prepare
```

Esse comando executa:

```bash
npx prisma generate && npx prisma migrate deploy && npx prisma db seed
```

Ou seja:

- gera o Prisma Client;
- aplica migrations pendentes;
- roda o seed.

## Rodando fora do Docker

Se voce estiver usando o Postgres publicado pelo Docker, a porta do banco no host e `5433`.

Exemplo de `backend/.env`:

```env
DATABASE_URL=postgresql://postgres:flexhotel123@localhost:5433/flexhotel
JWT_SECRET=uma_senha_super_segura_com_muitos_caracteres
PORT=3000
NODE_ENV=development
```

Depois execute:

```bash
cd backend
npm install
npm run prisma:generate
npm run prisma:migrate
npm run seed
```

## Credenciais demo

Todos os usuarios abaixo usam a senha `123456`.

```txt
super@demo.com
admin@demo.com
recepcao@demo.com
financeiro@demo.com
governanca@demo.com
gerente@demo.com
admin.praia@demo.com
```

## Quando limpar o banco

Para manter os dados atuais:

```bash
docker compose down
docker compose up -d --build
```

Para apagar o volume do banco e recriar tudo do zero:

```bash
docker compose down -v
docker compose up -d --build
```

Ao apagar o volume, o seed sera executado novamente na inicializacao do backend por causa do `npm run db:prepare`.

## Diagnostico rapido

Ver containers:

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

Testar API:

```bash
curl http://localhost:3000/health
```

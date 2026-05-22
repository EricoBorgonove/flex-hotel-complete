# Troubleshooting e Erros Comuns

## Erro: Database connection failed
**Causa:** Variavel DATABASE_URL nao configurada ou PostgreSQL nao rodando
**Solucao:**
- Verificar .env
- Verificar se PostgreSQL esta rodando
- Verificar credenciais no DATABASE_URL
- No Docker, o backend usa `postgres:5432` dentro da rede Docker
- Fora do Docker, use `localhost:5433` se estiver conectando no Postgres publicado pelo compose

## Erro: P1001 Can't reach database server at `postgres:5432`
**Causa:** O backend subiu antes do banco ficar disponivel ou o container do Postgres nao iniciou
**Solucao:**
- Verificar containers: `docker compose ps`
- Verificar logs do banco: `docker compose logs postgres`
- Recriar banco e backend: `docker compose up -d --force-recreate postgres backend`

## Erro: JWT token invalid
**Causa:** JWT_SECRET nao configurado ou diferente
**Solucao:**
- Verificar JWT_SECRET no .env
- Deve ser consistente entre servidor e cliente

## Erro: Prisma client not generated
**Causa:** Prisma client nunca foi gerado
**Solucao:** `npm run prisma:generate`

## Erro: Port already in use
**Causa:** Outra aplicacao usando a mesma porta do host
**Solucao:**
- Porta 3000: mudar `PORT`/mapeamento ou fechar a aplicacao que usa essa porta
- Porta 5432: normalmente e um Postgres local. O compose principal usa `5433:5432`
- Porta 80: normalmente e outro servidor local. O compose principal usa `8080:80`
- Conferir portas: `docker compose ps`

## Erro: seed duplicando dados ou falhando por unique constraint
**Causa:** Seed antiga tentava criar dados demo sem limpar o conjunto operacional antes
**Solucao:**
- Usar o seed atual: `npm run seed`
- No Docker, preferir: `docker compose exec backend npm run db:prepare`
- Ver guia completo em `../SEED_CORRECTION.md`

## Erro: Cannot POST /api/...
**Causa:** Rota nao configurada
**Solucao:** Verificar se rota existe em routes/ e se middleware de rota foi adicionado em app.js

## Erro: Unauthorized
**Causa:** Token JWT nao enviado ou invalido
**Solucao:** Enviar header: Authorization: Bearer {token}

## Erro: Forbidden
**Causa:** Usuario nao tem role suficiente
**Solucao:** Verificar roles do usuario no banco de dados

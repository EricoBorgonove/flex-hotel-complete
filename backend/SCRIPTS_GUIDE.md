# Scripts Disponiveis

## Desenvolvimento
- `npm run dev` - Inicia servidor com nodemon (recarrega automaticamente)
- `npm run predev` - Gera cliente Prisma antes de iniciar

## Producao
- `npm start` - Inicia servidor em modo producao
- `npm run prestart` - Gera cliente Prisma antes de iniciar

## Banco de Dados
- `npm run prisma:generate` - Gera cliente Prisma
- `npm run prisma:migrate` - Executa migracao do banco
- `npm run seed` - Popula banco com dados de teste
- `npm run db:prepare` - Gera cliente Prisma, aplica migrations pendentes e executa seed

## Docker
- `docker compose up -d --build` - Sobe todos os containers
- `docker compose exec backend npm run db:prepare` - Prepara banco dentro do container
- `docker compose exec postgres psql -U postgres -d flexhotel` - Abre o banco via psql

## Testing
- `npm test` - Executa testes (nao configurado ainda)

# Troubleshooting e Erros Comuns

## Erro: Database connection failed
**Causa:** Variavel DATABASE_URL nao configurada ou PostgreSQL nao rodando
**Solucao:** 
- Verificar .env
- Verificar se PostgreSQL esta rodando
- Verificar credenciais no DATABASE_URL

## Erro: JWT token invalid
**Causa:** JWT_SECRET nao configurado ou diferente
**Solucao:**
- Verificar JWT_SECRET no .env
- Deve ser consistente entre servidor e cliente

## Erro: Prisma client not generated
**Causa:** Prisma client nunca foi gerado
**Solucao:** `npm run prisma:generate`

## Erro: Port already in use
**Causa:** Outra aplicacao usando porta 3000
**Solucao:** 
- Mudar PORT no .env
- Ou fechar aplicacao que usa porta 3000

## Erro: Cannot POST /api/...
**Causa:** Rota nao configurada
**Solucao:** Verificar se rota existe em routes/ e se middleware de rota foi adicionado em app.js

## Erro: Unauthorized
**Causa:** Token JWT nao enviado ou invalido
**Solucao:** Enviar header: Authorization: Bearer {token}

## Erro: Forbidden
**Causa:** Usuario nao tem role suficiente
**Solucao:** Verificar roles do usuario no banco de dados

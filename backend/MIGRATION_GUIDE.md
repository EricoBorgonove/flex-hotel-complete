# Guia de Migracao do Banco de Dados

## Primeira Migracao (20260225150044_init)
Cria as tabelas principais:
- User: usuarios do sistema
- Hotel: informacoes dos hoteis
- Room: quartos disponiveis
- Reservation: reservas de quartos
- Stay: estadias de hospedes
- Guest: dados dos hospedes

## Segunda Migracao (20260430214000_add_guest_hotel_scope)
Adiciona:
- Relacionamento entre Guest e Hotel
- Escopo de hospede por hotel
- Campos adicionais de rastreamento

## Como Executar
```bash
npm run prisma:migrate
```

## Como Criar Nova Migracao
```bash
npx prisma migrate dev --name descricao_migracao
```

## Como Resetar Banco
```bash
npx prisma migrate reset
```

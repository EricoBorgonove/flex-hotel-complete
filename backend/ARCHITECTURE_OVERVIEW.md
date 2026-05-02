# Arquitetura da Aplicacao

## Camadas da Aplicacao

### 1. Routes (Camada de Apresentacao)
- Arquivo: `src/routes/*.routes.js`
- Define endpoints HTTP
- Associa middlewares de autenticacao
- Chama controllers

### 2. Controllers (Camada de Negocio)
- Arquivo: `src/controllers/*.controller.js`
- Processa requisicoes HTTP
- Valida entrada com Zod
- Chama services

### 3. Services (Camada de Logica)
- Arquivo: `src/services/*.service.js`
- Logica de negocio pura
- Validacoes complexas
- Chama Prisma para dados

### 4. Database (Camada de Dados)
- Prisma ORM com PostgreSQL
- Models definidos em schema.prisma
- Migrations em prisma/migrations/

## Middlewares

### auth.js
- Verifica JWT token
- Extrai usuario do token
- Passa usuario ao request

### roles.js
- Verifica role do usuario
- Controla acesso por permissao
- Pode restringir por hotel/hotel_id

### error.js
- Captura exceções
- Formata erros
- Envia response apropriado

## Fluxo de uma Requisicao

1. GET /api/hotels
2. Route handler
3. auth middleware (verifica JWT)
4. Controller (valida input)
5. Service (executa logica)
6. Prisma (busca no banco)
7. Response (JSON)

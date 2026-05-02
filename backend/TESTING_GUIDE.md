# Guia de Testes

## Testes Manuais com Postman

### 1. Teste de Autenticacao
- POST http://localhost:3000/api/auth/login
- Body: { "email": "user@email.com", "password": "senha" }
- Esperado: 200 OK com token JWT

### 2. Teste de Criacao de Hotel
- POST http://localhost:3000/api/hotels
- Headers: Authorization: Bearer {token}
- Body: { "name": "Hotel Test", "city": "Rio de Janeiro" }
- Esperado: 201 Created

### 3. Teste de Listagem
- GET http://localhost:3000/api/hotels
- Esperado: 200 OK com array de hoteis

### 4. Teste de Reserva
- POST http://localhost:3000/api/reservations
- Headers: Authorization: Bearer {token}
- Body: { "roomId": 1, "checkIn": "2026-05-01", "checkOut": "2026-05-05" }
- Esperado: 201 Created

## Test Collections
- Postman: docs/tests/FlexHotel.postman_collection.json
- Thunder Client: docs/tests/thunder-client-tests.md

## Integracao CI/CD
- Configure GitHub Actions
- Execute testes automaticamente em cada push
- Bloquear merge se testes falharem

# API Documentation

## Authentication Endpoints
- POST /api/auth/login - Login usuario
- POST /api/auth/register - Registrar novo usuario

## Users Endpoints
- GET /api/users - Listar usuarios
- GET /api/users/:id - Obter usuario por ID
- PUT /api/users/:id - Atualizar usuario
- DELETE /api/users/:id - Deletar usuario

## Hotels Endpoints
- GET /api/hotels - Listar hoteis
- POST /api/hotels - Criar hotel
- GET /api/hotels/:id - Obter hotel por ID
- PUT /api/hotels/:id - Atualizar hotel
- DELETE /api/hotels/:id - Deletar hotel

## Rooms Endpoints
- GET /api/rooms - Listar quartos
- POST /api/rooms - Criar quarto
- GET /api/rooms/:id - Obter quarto por ID
- PUT /api/rooms/:id - Atualizar quarto
- DELETE /api/rooms/:id - Deletar quarto

## Reservations Endpoints
- GET /api/reservations - Listar reservas
- POST /api/reservations - Criar reserva
- GET /api/reservations/:id - Obter reserva por ID
- PUT /api/reservations/:id - Atualizar reserva
- DELETE /api/reservations/:id - Cancelar reserva

## Stays Endpoints
- GET /api/stays - Listar estadias
- POST /api/stays - Iniciar estadia
- GET /api/stays/:id - Obter estadia por ID
- PUT /api/stays/:id - Atualizar estadia
- DELETE /api/stays/:id - Finalizar estadia

## Guests Endpoints
- GET /api/guests - Listar hospedes
- POST /api/guests - Registrar hospede
- GET /api/guests/:id - Obter hospede por ID
- PUT /api/guests/:id - Atualizar dados hospede
- DELETE /api/guests/:id - Remover hospede

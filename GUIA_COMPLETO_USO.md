# Guia Completo de Uso - FlexHotel

Este guia vai te ensinar como usar a aplicação FlexHotel do zero até ter tudo funcionando.

## 📋 Índice

1. [Instalação](#instalação)
2. [Configuração Inicial](#configuração-inicial)
3. [Iniciando a Aplicação](#iniciando-a-aplicação)
4. [Usando o Frontend](#usando-o-frontend)
5. [Usando a API](#usando-a-api)
6. [Gerenciando Dados](#gerenciando-dados)
7. [Docker](#docker)
8. [Troubleshooting](#troubleshooting)

---

## Instalação

### Pré-requisitos

Antes de tudo, certifique-se de ter instalado:

- **Node.js** (versão 16 ou maior) - [Download aqui](https://nodejs.org)
- **Git** - [Download aqui](https://git-scm.com)
- **PostgreSQL** (versão 12 ou maior) - [Download aqui](https://www.postgresql.org/download)
- **Docker** (opcional, para usar containers) - [Download aqui](https://www.docker.com/products/docker-desktop)

### Verificar instalações

Abra o terminal e execute:

```bash
node --version
npm --version
git --version
psql --version
```

Todos devem retornar versões.

### Clone o repositório

```bash
git clone https://github.com/EricoBorgonove/flex-hotel-backend.git
cd flex-hotel-backend
```

---

## Configuração Inicial

### 1. Instalar dependências do backend

```bash
cd backend
npm install
```

Isso vai baixar todas as dependências necessárias (Express, Prisma, JWT, etc).

### 2. Configurar banco de dados

#### Criar banco de dados PostgreSQL

Abra o terminal do PostgreSQL:

```bash
psql -U postgres
```

Digite sua senha (se solicitado).

Crie o banco de dados:

```sql
CREATE DATABASE flexhotel;
```

Verifique se foi criado:

```sql
\l
```

Saia:

```sql
\q
```

#### Configurar variáveis de ambiente

Na pasta `backend`, crie um arquivo `.env`:

```bash
cd backend
touch .env
```

Ou no Windows:

```bash
type nul > .env
```

Edite o arquivo `.env` e adicione:

```
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/flexhotel"
JWT_SECRET="uma_senha_muito_segura_com_muitos_caracteres_aleatorios"
PORT=3000
NODE_ENV="development"
```

**Importantes:**
- `sua_senha` = senha do usuário postgres
- `JWT_SECRET` = use algo seguro e aleatório
- O arquivo `.env` NUNCA deve ser commitado no Git

### 3. Rodar migrações do banco

As migrações criam as tabelas do banco:

```bash
npm run prisma:migrate
```

Se pedir um nome para a migração, pressione Enter.

### 4. Seed do banco (dados de teste)

Popular o banco com dados de teste:

```bash
npm run seed
```

Agora seu banco de dados tem usuários, hotéis, quartos e reservas de exemplo.

### 5. Instalar dependências do frontend

Em outra aba do terminal:

```bash
cd frontend
npm install
```

---

## Iniciando a Aplicação

### Opção 1: Sem Docker (Recomendado para desenvolvimento)

#### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

Você verá:
```
Server running on port 3000
```

#### Terminal 2 - Frontend

```bash
cd frontend
npm run dev
```

Você verá:
```
Local:   http://localhost:5173/
```

Abra seu navegador e vá para `http://localhost:5173`

### Opção 2: Com Docker

Na raiz do projeto:

```bash
docker-compose up
```

Isto inicia todos os serviços:
- PostgreSQL
- Backend em http://localhost:3000
- Frontend em http://localhost:5173
- Nginx em http://localhost:80

Para parar:

```bash
docker-compose down
```

---

## Usando o Frontend

### 1. Login

Ao abrir a aplicação, você verá a tela de login.

Use as credenciais do seed:

```
Email: admin@flexhotel.com
Senha: admin123
```

Clique em "Login" ou pressione Enter.

### 2. Dashboard

Após login, você verá o dashboard com:
- Resumo de atividades
- Links para os módulos
- Dados rápidos

### 3. Menu Principal

No topo ou lateral, você tem acesso a:

#### **Hotéis**
- Listar todos os hotéis
- Criar novo hotel
- Editar informações
- Deletar hotel

#### **Quartos**
- Listar quartos disponíveis
- Ver detalhes do quarto
- Marcar como ocupado/disponível
- Adicionar novo quarto

#### **Reservas**
- Listar todas as reservas
- Criar nova reserva
- Cancelar reserva
- Ver histórico

#### **Hóspedes**
- Listar hóspedes cadastrados
- Ver detalhes do hóspede
- Registrar novo hóspede

#### **Estadias**
- Listar estadias ativas
- Check-in (iniciar estadia)
- Check-out (finalizar estadia)
- Ver histórico

### 4. Operações Comuns

#### Criar um Hotel

1. Vá em **Hotéis**
2. Clique em **Novo Hotel**
3. Preencha:
   - Nome do hotel
   - Cidade
   - Endereço
4. Clique em **Salvar**

#### Criar um Quarto

1. Vá em **Quartos**
2. Clique em **Novo Quarto**
3. Preencha:
   - Número do quarto
   - Tipo (Suite, Duplo, Simples)
   - Preço por noite
   - Selecione o hotel
4. Clique em **Salvar**

#### Fazer uma Reserva

1. Vá em **Reservas**
2. Clique em **Nova Reserva**
3. Preencha:
   - Selecione o quarto
   - Data de entrada
   - Data de saída
   - Selecione o hóspede
4. Clique em **Reservar**

---

## Usando a API

### Testar endpoints com Postman

1. Baixe [Postman](https://www.postman.com/downloads/)
2. Importe o arquivo em `docs/tests/FlexHotel.postman_collection.json`
3. Comece a testar os endpoints

### Endpoints principais

#### Autenticação

```http
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "admin@flexhotel.com",
  "password": "admin123"
}
```

Resposta:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "email": "admin@flexhotel.com",
    "role": "admin"
  }
}
```

#### Listar Hotéis

```http
GET http://localhost:3000/api/hotels
Authorization: Bearer {seu_token}
```

#### Criar Quarto

```http
POST http://localhost:3000/api/rooms
Authorization: Bearer {seu_token}
Content-Type: application/json

{
  "number": "101",
  "type": "Simples",
  "price": 100.00,
  "hotelId": 1
}
```

#### Criar Reserva

```http
POST http://localhost:3000/api/reservations
Authorization: Bearer {seu_token}
Content-Type: application/json

{
  "roomId": 1,
  "guestId": 1,
  "checkIn": "2026-05-15",
  "checkOut": "2026-05-20"
}
```

### Usando cURL

Exemplo de login via terminal:

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@flexhotel.com",
    "password": "admin123"
  }'
```

---

## Gerenciando Dados

### Acessar o Banco de Dados

#### Com Prisma Studio

Terminal na pasta backend:

```bash
npx prisma studio
```

Abre interface gráfica em http://localhost:5555

Você pode:
- Ver todas as tabelas
- Criar registros
- Editar dados
- Deletar registros

#### Com psql (terminal)

```bash
psql -U postgres -d flexhotel
```

Comandos úteis:

```sql
-- Ver usuários
SELECT * FROM "User";

-- Ver hotéis
SELECT * FROM "Hotel";

-- Ver quartos
SELECT * FROM "Room";

-- Ver reservas
SELECT * FROM "Reservation";

-- Atualizar user
UPDATE "User" SET "email" = 'novo@email.com' WHERE id = 1;

-- Deletar registro
DELETE FROM "Reservation" WHERE id = 1;
```

Sair:

```sql
\q
```

### Fazer Backup do Banco

```bash
pg_dump -U postgres -d flexhotel > backup.sql
```

### Restaurar Banco

```bash
psql -U postgres -d flexhotel < backup.sql
```

### Resetar Banco Completamente

Cuidado! Isso deleta todos os dados:

```bash
npm run prisma:migrate reset
```

Depois pode rodar seed novamente:

```bash
npm run seed
```

---

## Docker

### Usar Docker para desenvolvimento

Na raiz do projeto:

```bash
docker-compose up
```

Aguarde até ver:
```
flex-hotel-api | Server running on port 3000
```

### Executar comandos no container

Rodar migrations:

```bash
docker-compose exec backend npm run prisma:migrate
```

Rodar seed:

```bash
docker-compose exec backend npm run seed
```

Acessar banco:

```bash
docker-compose exec postgres psql -U postgres -d flexhotel
```

Ver logs:

```bash
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Parar tudo

```bash
docker-compose down
```

Resetar volumes (CUIDADO - deleta dados):

```bash
docker-compose down -v
```

---

## Troubleshooting

### Erro: "Cannot find module 'express'"

Solução: Não instalou dependências

```bash
cd backend
npm install
```

### Erro: "Database connection failed"

Verifique:

1. PostgreSQL está rodando?
   - Windows: Verificar Services
   - Mac: `brew services list`
   - Linux: `sudo systemctl status postgresql`

2. DATABASE_URL está correto no `.env`?

3. Banco de dados existe?
   ```bash
   psql -U postgres -l
   ```

### Erro: "Port 3000 already in use"

Outro programa usa a porta 3000.

Opção 1: Matar o processo
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

Opção 2: Usar outra porta
No arquivo `.env`:
```
PORT=3001
```

### Erro: "Token invalid" ou "Unauthorized"

Verifique:

1. Token está sendo enviado?
   ```
   Authorization: Bearer {token}
   ```

2. JWT_SECRET é o mesmo em frontend e backend?

3. Token expirou?
   - Faça login novamente

### Erro: "CORS error"

Solução: Backend não permite requisições do frontend.

No arquivo `src/app.js`, verifique se CORS está configurado:

```javascript
app.use(cors({
  origin: '*'
}));
```

### Frontend não conecta ao backend

Verifique:

1. Backend está rodando? (http://localhost:3000)
2. VITE_API_URL está correto em `.env.local`
3. Verificar console do navegador (F12 > Console)

### Migrations não funcionam

Tente:

```bash
npm run prisma:generate
npm run prisma:migrate
```

Se ainda não funcionar:

```bash
npx prisma migrate resolve --rolled-back "nome_da_migracao"
npx prisma migrate deploy
```

---

## Dicas Importantes

### 1. Sempre use `.env`

NUNCA commite arquivo `.env`. Use `.env.example` como template.

### 2. Segurança

- Mude JWT_SECRET antes de colocar em produção
- Use senhas fortes
- Não exponha DATABASE_URL

### 3. Desenvolvimento

- Use `npm run dev` para hot reload
- Abra o console do navegador (F12)
- Verifique Network tab para requisições

### 4. Produção

- Mudar NODE_ENV para "production"
- Usar HTTPS
- Configurar variáveis de ambiente no servidor
- Fazer backup do banco regularmente

### 5. Git

Adicione ao `.gitignore`:

```
.env
node_modules/
dist/
.DS_Store
```

---

## Próximos Passos

1. **Explorar o código** - Entenda a estrutura em `backend/src`
2. **Fazer mudanças** - Edite componentes em `frontend/src`
3. **Criar migrations** - Adicione campos no banco conforme necessário
4. **Deploy** - Coloque em um servidor (Vercel, Netlify, Heroku)

---

## Recursos Adicionais

- [Documentação do Prisma](https://www.prisma.io/docs/)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do React](https://react.dev/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/)

---

## Suporte

Dúvidas ou problemas?

1. Verifique a pasta `documentacao/`
2. Veja os logs: `docker-compose logs`
3. Abra uma issue no GitHub
4. Consulte a seção Troubleshooting

---

**Bom desenvolvimento! 🚀**

# FlexHotel 🏨

**Sistema completo de gerenciamento de hotel** com backend em Node.js/Express e frontend em React/Vite.

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue)](https://react.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-lightblue)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.3-black)](https://www.prisma.io/)

---

## 🎯 Visão Geral

FlexHotel é uma plataforma moderna para gerenciamento hoteleiro que permite:

- ✅ Cadastro e gerenciamento de hotéis
- ✅ Controle de quartos e disponibilidade
- ✅ Sistema de reservas completo
- ✅ Gerenciamento de hóspedes
- ✅ Controle de check-in/check-out
- ✅ Autenticação com JWT
- ✅ Controle de acesso por roles
- ✅ Dashboard responsivo
- ✅ API RESTful documentada

---

## 📋 Requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 16+ ([Download](https://nodejs.org/))
- **PostgreSQL** 12+ ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))
- **Docker** e **Docker Compose** (opcional, [Download](https://www.docker.com/products/docker-desktop))

---

## 🚀 Quick Start

### 1. Clone o repositório

```bash
git clone https://github.com/EricoBorgonove/flex-hotel.git
cd flex-hotel
```

### 2. Setup do Backend

```bash
cd backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Rodar migrações do banco
npm run prisma:migrate

# Popular banco com dados de teste
npm run seed

# Iniciar servidor
npm run dev
```

Backend estará em: `http://localhost:3000`

### 3. Setup do Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar dev server
npm run dev
```

Frontend estará em: `http://localhost:5173`

### 4. Login

Use as credenciais padrão do seed:

```
Email: admin@flexhotel.com
Senha: admin123
```

---

## 🐳 Com Docker (Recomendado)

Na raiz do projeto:

```bash
docker-compose up
```

Acesse:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Nginx**: http://localhost:80

Para parar:

```bash
docker-compose down
```

---

## 📁 Estrutura do Projeto

```
flex-hotel/
├── backend/                    # API Node.js/Express
│   ├── src/
│   │   ├── controllers/        # Controladores de requisição
│   │   ├── services/           # Lógica de negócio
│   │   ├── routes/             # Definição de rotas
│   │   ├── middlewares/        # Middlewares (auth, erro, etc)
│   │   ├── lib/                # Utilitários (JWT, hash, validators)
│   │   ├── app.js              # Configuração Express
│   │   └── server.js           # Entry point
│   ├── prisma/
│   │   ├── schema.prisma       # Modelo de dados
│   │   ├── seed.js             # Dados de teste
│   │   └── migrations/         # Histórico de migrações
│   ├── package.json
│   └── .env.example
│
├── frontend/                   # UI React/Vite
│   ├── src/
│   │   ├── components/         # Componentes reutilizáveis
│   │   ├── views/              # Páginas/telas
│   │   ├── lib/                # Helpers e utilitários
│   │   ├── assets/             # Imagens e ícones
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
│
├── docker-compose.yml          # Orquestração Docker
├── Dockerfile                  # Build combinado
├── Dockerfile.backend          # Build backend
├── Dockerfile.frontend         # Build frontend
├── nginx.conf                  # Configuração reverse proxy
├── .dockerignore
├── .gitignore
│
├── documentacao/               # Documentação técnica
├── ensino/                     # Materiais educacionais
│
├── GUIA_COMPLETO_USO.md        # Guia de uso (LEIA AQUI!)
├── DOCKER_SETUP.md             # Guia Docker
├── README.md                   # Este arquivo
└── LICENSE
```

---

## 🔧 Stack Tecnológico

### Backend
- **Node.js** + **Express.js** - Server HTTP
- **Prisma ORM** - Acesso ao banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação
- **bcryptjs** - Hash de senhas
- **Zod** - Validação de schemas
- **CORS** - Cross-origin requests

### Frontend
- **React 18** - UI library
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **React Router** - Navigation
- **Context API** - State management

### DevOps
- **Docker** - Containerização
- **Docker Compose** - Orquestração
- **Nginx** - Reverse proxy
- **PostgreSQL** - Database

---

## 📖 Documentação

### Guias Principais

| Documento | Descrição |
|-----------|-----------|
| [GUIA_COMPLETO_USO.md](./GUIA_COMPLETO_USO.md) | **👉 Comece aqui! Guia passo a passo para usar a aplicação** |
| [DOCKER_SETUP.md](./DOCKER_SETUP.md) | Guia completo para usar Docker |
| [backend/README.md](./backend/README.md) | Documentação do backend |
| [frontend/README.md](./frontend/README.md) | Documentação do frontend |
| [backend/API_ENDPOINTS.md](./backend/API_ENDPOINTS.md) | Todos os endpoints da API |
| [backend/ARCHITECTURE_OVERVIEW.md](./backend/ARCHITECTURE_OVERVIEW.md) | Arquitetura da aplicação |

### Documentação Técnica (Pasta `documentacao/`)

- `ARQUITETURA_E_EXPLICACAO_DETALHADA.md` - Explicação técnica completa
- `DOCUMENTACAO_COMPLETA.md` - Referência técnica
- `FLUXOS_HTTP_EXEMPLIFICADOS.md` - Exemplos de requisições
- `PRIMEIRO_EXECUCAO_API.md` - Como executar pela primeira vez

### Materiais de Ensino (Pasta `ensino/`)

Contém planos de aula e códigos de exemplo para fins educacionais.

---

## 🔐 Autenticação

A aplicação usa **JWT (JSON Web Tokens)** para autenticação.

### Endpoints de Autenticação

```bash
# Login
POST /api/auth/login
Content-Type: application/json

{
  "email": "usuario@email.com",
  "password": "senha123"
}

# Resposta
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "email": "usuario@email.com",
    "role": "admin"
  }
}
```

### Usando Token

Envie em todas as requisições autenticadas:

```bash
Authorization: Bearer {token}
```

### Roles Disponíveis

- **admin** - Acesso total
- **hotel_manager** - Gerencia um hotel específico
- **guest** - Usuário hóspede

---

## 📝 Variáveis de Ambiente

### Backend (.env)

```
DATABASE_URL=postgresql://postgres:senha@localhost:5432/flexhotel
JWT_SECRET=uma_senha_super_segura_com_muitos_caracteres
PORT=3000
NODE_ENV=development
```

### Frontend (.env.local)

```
VITE_API_URL=http://localhost:3000/api
```

---

## 🛠️ Scripts Disponíveis

### Backend

```bash
npm run dev              # Modo desenvolvimento com nodemon
npm start                # Modo produção
npm run prisma:generate  # Gera cliente Prisma
npm run prisma:migrate   # Executa migrações
npm run seed             # Popula banco com dados de teste
npm test                 # Executa testes (não configurado)
```

### Frontend

```bash
npm run dev              # Servidor desenvolvimento
npm run build            # Build para produção
npm run preview          # Preview do build
npm run lint             # Lint (se configurado)
```

---

## 🧪 Testando a API

### Com Postman

1. Abra Postman
2. Importe: `documentacao/tests/FlexHotel.postman_collection.json`
3. Configure a variável `base_url` como `http://localhost:3000/api`
4. Comece a testar os endpoints

### Com cURL

```bash
# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@flexhotel.com",
    "password": "admin123"
  }'

# Listar hotéis (com token)
curl http://localhost:3000/api/hotels \
  -H "Authorization: Bearer {seu_token}"
```

### Com Thunder Client (VS Code)

Arquivo de testes: `documentacao/tests/thunder-client-tests.md`

---

## 🐛 Troubleshooting

### Erro: "Cannot find module"

```bash
npm install
```

### Erro: "Database connection failed"

1. Verifique se PostgreSQL está rodando
2. Verifique DATABASE_URL no `.env`
3. Crie o banco: `createdb flexhotel`

### Erro: "Port 3000 already in use"

```bash
# Matar processo
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Ou mudar porta no .env
PORT=3001
```

### Mais problemas?

Veja [GUIA_COMPLETO_USO.md](./GUIA_COMPLETO_USO.md#troubleshooting) para mais soluções.

---

## 🚢 Deploy

### Heroku

```bash
heroku create seu-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

### Vercel (Frontend)

```bash
npm i -g vercel
vercel
```

### Railway / Render

Conecte seu repositório GitHub.

---

## 📚 Aprendendo

### Para Iniciantes

1. Leia [GUIA_COMPLETO_USO.md](./GUIA_COMPLETO_USO.md)
2. Explore a pasta `ensino/` para materiais educacionais
3. Veja os exemplos em `documentacao/`

### Para Desenvolvedor

1. Estude a arquitetura em [backend/ARCHITECTURE_OVERVIEW.md](./backend/ARCHITECTURE_OVERVIEW.md)
2. Verifique os endpoints em [backend/API_ENDPOINTS.md](./backend/API_ENDPOINTS.md)
3. Explore o código em `backend/src/` e `frontend/src/`

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

Veja [backend/CONTRIBUTING.md](./backend/CONTRIBUTING.md) para mais detalhes.

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Érico Borgonove**

- GitHub: [@EricoBorgonove](https://github.com/EricoBorgonove)
- Email: dev@flexhotel.com

---

## ⭐ Suporte

Se este projeto te ajudou, deixe uma estrela! ⭐

Para dúvidas ou sugestões:
- Abra uma [issue](https://github.com/EricoBorgonove/flex-hotel/issues)
- Envie um email
- Consulte a documentação

---

## 🗺️ Roadmap

- [x] Autenticação com JWT
- [x] CRUD de hotéis
- [x] Gerenciamento de quartos
- [x] Sistema de reservas
- [x] Controle de hóspedes
- [x] Docker support
- [ ] Integração com pagamento
- [ ] SMS/Email notifications
- [ ] API GraphQL
- [ ] App mobile
- [ ] Relatórios avançados
- [ ] Multi-idioma

---

<div align="center">

**Desenvolvido com ❤️ para hoteleiros**

[Começar Agora](./GUIA_COMPLETO_USO.md) • [Documentação](./documentacao/) • [Issues](https://github.com/EricoBorgonove/flex-hotel/issues)

</div>

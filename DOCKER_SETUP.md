# Docker Setup Guide

## Estrutura de Arquivos Docker

```
FLEX-HOTEL/
├── Dockerfile              # Build combinado (não recomendado, use separados)
├── Dockerfile.backend      # Build do backend
├── Dockerfile.frontend     # Build do frontend
├── docker-compose.yml      # Orquestração de containers
├── nginx.conf              # Configuração do reverse proxy
├── .dockerignore            # Arquivos a ignorar no build
├── backend/
│   ├── package.json
│   └── src/
└── frontend/
    ├── package.json
    └── src/
```

## Quick Start

### Pré-requisitos
- Docker
- Docker Compose

### Iniciando a aplicação

1. Clone o repositório
```bash
git clone https://github.com/EricoBorgonove/flex-hotel.git
cd flex-hotel
```

2. Configure variáveis de ambiente
```bash
# Backend
cp backend/.env.example backend/.env

# Frontend (opcional)
cp frontend/.env.example frontend/.env
```

3. Inicie os containers
```bash
docker-compose up
```

A aplicação estará disponível em:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Nginx: http://localhost:80

### Parar os containers
```bash
docker-compose down
```

## Detalhes dos Services

### PostgreSQL (postgres)
- **Container**: flex-hotel-db
- **Porta**: 5432
- **Database**: flexhotel
- **User**: postgres
- **Password**: flexhotel123
- **Volume**: postgres_data (persistente)

### Backend (backend)
- **Container**: flex-hotel-api
- **Porta**: 3000
- **Dockerfile**: Dockerfile.backend
- **Variáveis**:
  - DATABASE_URL: postgresql://postgres:flexhotel123@postgres:5432/flexhotel
  - JWT_SECRET: seu_secret_jwt_super_seguro_aqui
  - NODE_ENV: development

### Frontend (frontend)
- **Container**: flex-hotel-web
- **Porta**: 5173
- **Dockerfile**: Dockerfile.frontend
- **Variáveis**:
  - VITE_API_URL: http://localhost:3000/api

### Nginx (nginx)
- **Container**: flex-hotel-nginx
- **Porta**: 80, 443
- **Função**: Reverse proxy para frontend e API
- **Config**: nginx.conf

## Comandos Úteis

### Iniciar em background
```bash
docker-compose up -d
```

### Ver logs
```bash
docker-compose logs -f
docker-compose logs backend
docker-compose logs frontend
```

### Executar migrations
```bash
docker-compose exec backend npm run prisma:migrate
```

### Seed do banco
```bash
docker-compose exec backend npm run seed
```

### Acessar container
```bash
docker-compose exec backend sh
docker-compose exec frontend sh
docker-compose exec postgres psql -U postgres -d flexhotel
```

### Reconstruir containers
```bash
docker-compose up --build
```

### Limpar tudo
```bash
docker-compose down -v
```

## Desenvolvimento

### Hot reload
Ambos frontend e backend têm volumes mapeados para desenvolvimento em tempo real.

Edite qualquer arquivo e veja as mudanças instantaneamente.

### Acessar banco de dados

```bash
# Via psql
docker-compose exec postgres psql -U postgres -d flexhotel

# Query exemplo
SELECT * FROM "User";
```

## Produção

### Build para produção

1. Usar o arquivo `Dockerfile` combinado:
```bash
docker build -t flex-hotel:latest .
docker run -p 80:80 -p 3000:3000 flex-hotel:latest
```

2. Ou usar docker-compose com imagens otimizadas:
```bash
docker-compose -f docker-compose.prod.yml up
```

### Variáveis de ambiente para produção
```
DATABASE_URL=postgresql://user:pass@prod-db:5432/flexhotel
JWT_SECRET=uma_senha_super_segura_aqui
NODE_ENV=production
VITE_API_URL=https://api.seu-dominio.com
```

## Troubleshooting

### Erro: "Cannot connect to database"
- Verificar se PostgreSQL está rodando: `docker-compose ps`
- Verificar variável DATABASE_URL
- Aguarde container de DB inicializar: `docker-compose logs postgres`

### Erro: "Port already in use"
- Porta 3000: `lsof -i :3000` (macOS/Linux)
- Porta 5173: `lsof -i :5173`
- Porta 5432: `lsof -i :5432`
- Mudar portas em docker-compose.yml

### Frontend não conecta ao backend
- Verificar VITE_API_URL
- Verificar se backend está rodando: `docker-compose logs backend`
- Verificar CORS em backend

### Limpar cache e reconstruir
```bash
docker-compose down -v
docker system prune -a
docker-compose up --build
```

## Performance

### Otimizações recomendadas
1. Usar volumes nomeados para dados persistentes
2. Configurar resource limits em docker-compose.yml
3. Usar .dockerignore para reduzir tamanho de build
4. Multi-stage builds para otimizar imagens

### Exemplo com limits
```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

## Segurança

### Checklist
- [ ] Mudar senhas padrão em produção
- [ ] Usar secrets do Docker Swarm
- [ ] HTTPS configurado
- [ ] JWT_SECRET seguro
- [ ] Não commitar .env
- [ ] Usar variáveis de ambiente
- [ ] Logs de acesso configurados
- [ ] Backups do banco automatizados

## Próximos Passos

1. Implement CI/CD com GitHub Actions
2. Setup Kubernetes para escalabilidade
3. Configurar CDN para frontend
4. Implementar monitoring (Prometheus, Grafana)
5. Setup backups automáticos do banco

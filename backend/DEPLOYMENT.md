# Guia de Deploy para Producao

## Pre-Deploy Checklist
- [ ] DATABASE_URL configurado para banco producao
- [ ] JWT_SECRET forte e seguro
- [ ] NODE_ENV = production
- [ ] Variaveis de ambiente configuradas
- [ ] Banco de dados migrado
- [ ] Testes executados

## Deploy em Servidor Linux

1. Clone o repositorio
```bash
git clone https://github.com/EricoBorgonove/flex-hotel-backend.git
cd flex-hotel-backend
```

2. Instale dependencias
```bash
npm install --production
```

3. Gere cliente Prisma
```bash
npm run prisma:generate
```

4. Execute migracoes
```bash
npm run prisma:migrate
```

5. Inicie a aplicacao
```bash
npm start
```

## Deploy com Docker

1. Build a imagem
```bash
docker build -t flex-hotel-api .
```

2. Execute com Docker Compose
```bash
docker-compose up -d
```

## Monitoramento
- Use PM2 para gerenciar processo
- Configure logs
- Use ferramentas de monitoramento (New Relic, Datadog)

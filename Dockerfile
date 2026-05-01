# Build stage para frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Build stage para backend
FROM node:20-alpine AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Runtime stage
FROM node:20-alpine
WORKDIR /app

# Instalar nginx para servir frontend
RUN apk add --no-cache nginx

# Copiar backend
COPY --from=backend-builder /app/backend ./backend
WORKDIR /app/backend
RUN npm install --production && npm run prisma:generate

# Copiar frontend build
COPY --from=frontend-builder /app/frontend/dist /usr/share/nginx/html

# Configurar nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Voltar para raiz da app
WORKDIR /app

# Criar script para iniciar ambos
RUN echo '#!/bin/sh\n\
nginx -g "daemon off;" &\n\
cd /app/backend && npm start\n\
' > /app/start.sh && chmod +x /app/start.sh

EXPOSE 80 3000

CMD ["/app/start.sh"]

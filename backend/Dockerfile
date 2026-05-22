FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run prisma:generate
EXPOSE 3000
CMD ["sh", "-c", "npm run db:prepare && npm run start"]

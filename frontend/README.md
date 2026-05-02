# Frontend FlexHotel

Interface web para gerenciamento de hotel com React, Vite e Tailwind CSS.

## Features

- Dashboard responsivo
- Autenticação com JWT
- Gerenciamento de quartos
- Sistema de reservas
- Controle de hospedes
- Estadias de clientes
- Interface intuitiva e moderna

## Tecnologias

- **React** - UI library
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation
- **State Management** - Context API

## Instalação

### Requisitos
- Node.js 16+
- npm ou yarn

### Setup

1. Clone o repositório
```bash
git clone https://github.com/EricoBorgonove/flex-hotel.git
cd flex-hotel/frontend
```

2. Instale as dependências
```bash
npm install
```

3. Configure variáveis de ambiente
```bash
cp .env.example .env.local
```

Edite `.env.local` com a URL da API:
```
VITE_API_URL=http://localhost:3000/api
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Visualiza build de produção localmente
- `npm run lint` - Executa linter (se configurado)

## Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
├── views/              # Telas/páginas da aplicação
├── lib/                # Utilitários e helpers
├── assets/             # Imagens, ícones
├── styles.css          # Estilos globais
├── App.jsx             # Componente raiz
└── main.jsx            # Entry point
```

## Componentes Principais

### Layout
- Navbar - Navegação superior
- Sidebar - Menu lateral
- Footer - Rodapé

### Views/Pages
- Login - Autenticação
- Dashboard - Página inicial
- Hotels - Gerenciamento de hoteis
- Rooms - Gerenciamento de quartos
- Reservations - Reservas
- Guests - Hospedes
- Stays - Estadias

## Autenticação

O token JWT é armazenado no `localStorage` e enviado em todas as requisições:

```javascript
Authorization: Bearer {token}
```

O login redireciona para o dashboard se bem-sucedido.

## Integração com API

A aplicação se conecta com o backend em `http://localhost:3000/api`

Endpoints principais:
- `POST /auth/login` - Login
- `POST /auth/register` - Registro
- `GET /hotels` - Listar hoteis
- `GET /rooms` - Listar quartos
- `POST /reservations` - Criar reserva
- `GET /stays` - Listar estadias

## Build para Produção

```bash
npm run build
```

Isso cria uma pasta `dist/` pronta para deploy.

## Deploy

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Servidor Apache/Nginx
Copie o conteúdo de `dist/` para a pasta pública do servidor.

Configure rewrite para React Router:
```nginx
location / {
  try_files $uri /index.html;
}
```

## Variáveis de Ambiente

`.env.local`:
```
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=FlexHotel
```

## Troubleshooting

### Erro: API_URL não definido
- Verificar `.env.local`
- Verificar se backend está rodando
- Usar `http://localhost:3000/api`

### Erro: Token expirado
- Fazer logout e login novamente
- Verificar JWT_SECRET no backend

### CSS não carregando
- Verificar import de `styles.css`
- Verificar se Tailwind está bem configurado

## Performance

- Lazy loading de componentes
- Code splitting automático com Vite
- Otimização de imagens
- Caching de requisições

## Contribuindo

1. Criar branch para sua feature
2. Fazer commits descritivos
3. Abrir Pull Request
4. Aguardar review

## Licença

ISC

## Suporte

Para dúvidas ou issues, abra uma issue no GitHub.

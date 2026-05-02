# Guia de Contribuicao

## Como Contribuir

### 1. Fork e Clone
```bash
git clone https://github.com/seu-usuario/flex-hotel-backend.git
cd flex-hotel-backend
```

### 2. Criar Branch
```bash
git checkout -b feature/sua-feature
```

### 3. Fazer Mudancas
- Seguir estrutura existente
- Manter consistencia de codigo
- Adicionar comentarios onde necessario

### 4. Testar
```bash
npm run dev
```

### 5. Commit
```bash
git commit -m "feat: descricao da feature"
```

### 6. Push
```bash
git push origin feature/sua-feature
```

### 7. Pull Request
- Descrever mudancas
- Referenciar issues
- Pedir review

## Padrao de Codigo

### Nomeacao
- Funcoes: camelCase
- Classes: PascalCase
- Constantes: UPPER_SNAKE_CASE
- Arquivos: kebab-case.js

### Estrutura de Arquivo
```javascript
// Imports
const { PrismaClient } = require("@prisma/client");

// Constantes
const ERRO_MENSAGEM = "...";

// Funcoes
async function funcao() {
  try {
    // implementacao
  } catch (erro) {
    throw new Error(erro.message);
  }
}

// Exports
module.exports = { funcao };
```

## Pull Request Requirements
- [ ] Codigo segue padrao
- [ ] Nao ha erros de linting
- [ ] Codigo foi testado
- [ ] Commit messages sao descritivas

# Guia de Seguranca

## Praticas Obrigatorias

### 1. Variaveis de Ambiente
- NUNCA commitar arquivo .env
- JWT_SECRET deve ser forte (32+ caracteres)
- DATABASE_URL nao deve conter credenciais em repositorio

### 2. Autenticacao e Autorizacao
- Senhas sao hashadas com bcryptjs
- JWTs sao assinados com JWT_SECRET
- Roles controlam acesso aos endpoints

### 3. Validacao de Dados
- Todos os inputs sao validados com Zod
- Prevenir injection attacks
- Sanitizar dados do cliente

### 4. Headers HTTP
- CORS configurado apropriadamente
- Content-Type validado
- HTTPS requerido em producao

### 5. Rate Limiting
- Implementar em endpoints criticos
- Prevenir brute force attacks

### 6. Logs e Monitoring
- Registrar erros importantes
- Nao logar informacoes sensveis
- Monitorar falhas de autenticacao

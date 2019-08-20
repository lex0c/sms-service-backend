# SMS Service Backend

### Instalação

> É recomendado que você use o npm para instalar.

```bash
npm install
```
### Para rodar esta aplicação existem três maneiras:

- `npm start` (necessário informar o env DB_URL)
- `npm run prod` (necessário informar o env DB_URL)
- `docker-compose up` (sobe o backend com mongo)

```bash
# exemplo:
DB_URL=localhost:27017/<database> npm start
```

### Tests
```bash
# antes subir o backend com DB_URL=<mongo url para tests> npm run prod
npm test
```

### Heroku
- [https://sms-service-backend.herokuapp.com/api](https://sms-service-backend.herokuapp.com/api)

### Histórico de commits
- [https://github.com/lleocastro/sms-service](https://github.com/lleocastro/sms-service)

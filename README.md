# Web API - gestion d'utilisateurs et de produits 🚁

## Architecture de l'application 🚁

```text 
api-user-product/
├── src/
│   ├── config/
│   │   ├── database.js       # Config DB (ex: Mongoose/Sequelize)
│   │   └── env.js            # Variables d'environnement
│   │
│   ├── models/               # Schémas / entités
│   │   └── user.model.js
│   │
│   ├── services/             # Logique métier
│   │   └── user.service.js
│   │
│   ├── controllers/          # Gestion requête/réponse HTTP
│   │   └── user.controller.js
│   │
│   ├── routes/               # Définition des endpoints
│   │   ├── index.js          # Agrège toutes les routes
│   │   └── user.routes.js
│   │
│   ├── middlewares/          # Auth, validation, erreurs...
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── validate.middleware.js
│   │
│   ├── validators/           # Schémas de validation (Joi/Zod)
│   │   └── user.validator.js
│   │
│   └── app.js                # Config Express (middlewares globaux)
│
├── .env
├── .env.example
├── package.json
└── server.js                 # Point d'entrée (listen)
```
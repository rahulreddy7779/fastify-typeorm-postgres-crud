# Fastify + TypeORM + PostgreSQL CRUD API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-brightgreen)](https://www.fastify.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-ISC-yellow)](LICENSE)

A fully functional **CRUD API** built using **Fastify**, **TypeORM**, and **PostgreSQL**, with **Joi validation**, **Swagger documentation**, and **rate limiting**.  

---

## Table of Contents

- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Project Structure](#project-structure)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)  
- [Running the Project](#running-the-project)  
- [API Endpoints](#api-endpoints)  
- [Swagger Documentation](#swagger-documentation)  
- [Validation & Rate Limiting](#validation--rate-limiting)  
- [License](#license)  

---

## Features

- ✅ **CRUD operations** for `User` entity  
- ✅ **TypeScript** for type safety  
- ✅ **PostgreSQL** database with TypeORM  
- ✅ **Joi validation** for request payloads  
- ✅ **Swagger** docs at `/docs`  
- ✅ **Rate limiting** to prevent abuse  
- ✅ Environment-based configuration using `.env`  

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x recommended)  
- [npm](https://www.npmjs.com/)  
- [PostgreSQL](https://www.postgresql.org/)  
- Optional: [Postman](https://www.postman.com/) for API testing  

---

## Project Structure

```

fastify-typeorm-postgres-crud/
├─ src/
│  ├─ controllers/
│  │  └─ user.controller.ts
│  ├─ routes/
│  │  └─ user.routes.ts
│  ├─ services/
│  │  └─ user.service.ts
│  ├─ entities/
│  │  └─ User.entity.ts
│  ├─ data-source.ts
│  ├─ app.ts
│  └─ server.ts
├─ .env
├─ package.json
├─ tsconfig.json
└─ README.md

````

---

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/fastify-typeorm-postgres-crud.git
cd fastify-typeorm-postgres-crud
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=admin123
DB_NAME=express_api_db
```

> Replace the DB credentials with your PostgreSQL settings.

---

## Running the Project

### Development Mode (with auto-reload)

```bash
npm run dev
```

Server will start at: [http://localhost:3000](http://localhost:3000)

### Production Mode

```bash
npm run build
npm start
```

---

## API Endpoints

| Method | Endpoint     | Description                 |
| ------ | ------------ | --------------------------- |
| GET    | `/`          | Root route, test API status |
| POST   | `/users`     | Create a new user           |
| GET    | `/users`     | Get all users               |
| GET    | `/users/:id` | Get user by ID              |
| PUT    | `/users/:id` | Update user by ID           |
| DELETE | `/users/:id` | Delete user by ID           |

---

## Swagger Documentation

* Swagger UI is available at: [http://localhost:3000/docs](http://localhost:3000/docs)
* You can explore all endpoints, see request/response schemas, and even test them directly from the browser.

---

## Validation & Rate Limiting

### Joi Validation

* Requests are validated using **Joi**.
* Example: Invalid email or missing fields will return **400 Bad Request** with an error message.

### Rate Limiting

* Maximum **5 requests per second per IP**.
* Exceeding this limit returns **429 Too Many Requests**.

---

## Example Requests (Postman)

### Create User

```
POST /users
Body (JSON):
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 26
}
```

### Get All Users

```
GET /users
```

### Get User by ID

```
GET /users/1
```

### Update User

```
PUT /users/1
Body (JSON):
{
  "name": "Rahul Reddy",
  "email": "rahul@example.com",
  "age": 27
}
```

### Delete User

```
DELETE /users/1
```

---

## License

This project is licensed under the **ISC License**.

```

---

This **README covers everything**:  

- Badges  
- Features  
- Setup instructions  
- Environment variables  
- CRUD endpoints  
- Swagger docs  
- Validation & rate limiting  
- Example Postman requests  

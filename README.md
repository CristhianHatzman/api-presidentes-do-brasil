# 📚 API Presidents

API REST desenvolvida em **Node.js** com **Express.js**, organizada em **arquitetura MVC**, com autenticação via **JWT** e persistência de dados em **MongoDB** utilizando **Mongoose**.

---

## 🚀 Tecnologias Utilizadas
- 🟩 **Node.js + Express.js** → Criação da API REST  
- 🍃 **MongoDB + Mongoose** → Banco de dados NoSQL e modelagem de dados  
- 🔐 **JWT** → Autenticação e autorização  
- 🔄 **Nodemon** → Hot reload no ambiente de desenvolvimento  
- 📦 **ES6 Modules** → Uso de import/export  

---

## 🏗️ Arquitetura
- **Models** → Esquemas de dados (`President.js`, `User.js`)  
- **Controllers** → Lógica de negócio  
- **Services** → Operações de banco de dados  
- **Routes** → Definição dos endpoints  
- **Middleware** → Autorização (`Auth.js`), validações e tratamento de erros  

---

## ⚙️ Funcionalidades
- ✅ CRUD completo de Presidentes  
- ✅ Registro e login de Usuários  
- ✅ Middleware de autorização para proteger rotas  
- ✅ Validação de `ObjectId` do MongoDB  
- ✅ Modelagem detalhada com mandatos, conquistas, biografia, curiosidades e imagem  

---

## 📝 Boas Práticas
- 📌 Padrão **MVC** com separação clara de responsabilidades  
- 📌 Tratamento de erros com `try/catch` e códigos **HTTP adequados**  
- 📌 Endpoints **RESTful** bem definidos  
- 📌 Configuração centralizada do banco de dados (`db-connection.js`)  
- 📌 Controle de versão com **.gitignore**  

---

## 📌 Endpoints da API

### 🔑 Autenticação de Usuário
- `POST /login/register` → Registro de um novo usuário  
- `POST /login/login` → Login de usuário e geração de token JWT  

### 🗂️ Presidentes (Protegido por JWT)
- `GET /presidents/ver` → Listar todos os presidentes  
- `GET /presidents/ver/:id` → Buscar presidente por ID  
- `POST /presidents/adiciona` → Adição de presidente no sistema  
- `PUT /presidents/altera/:id` → Alterar presidente por ID  
- `DELETE /presidents/delete/:id` → Deletar presidente por ID  

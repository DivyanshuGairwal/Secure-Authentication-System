# 🔐 Secure Authentication System

A robust backend authentication system built with **Node.js, Express, MongoDB, and JWT**, designed with security best practices and real-world architecture.

---

## 🚀 Features

* 🔐 User Signup with hashed passwords (bcrypt)
* 🔑 Secure Login with JWT authentication
* 🛡️ Protected Routes using middleware
* 👤 Get Current User Profile
* 🔄 Change Password (with old password verification)
* ✅ Input Validation using express-validator
* ⚡ Rate Limiting for API protection
* 🌍 Environment-based configuration (.env)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (Atlas)
* **Authentication:** JWT (JSON Web Tokens)
* **Security:** bcryptjs, express-validator
* **Other Tools:** dotenv, express-rate-limit

---

## 📂 Project Structure

```
backend/
│── src/
│   ├── config/        # DB connection
│   ├── controllers/   # Business logic
│   ├── middleware/    # Auth & error handling
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API routes
│   ├── utils/         # Helper functions
│   ├── app.ts         # Express app setup
│   └── server.ts      # Entry point
│
├── .env               # Environment variables (ignored)
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| POST   | `/api/auth/signup`          | Register new user            |
| POST   | `/api/auth/login`           | Login & get JWT token        |
| GET    | `/api/auth/profile`         | Get user profile (protected) |
| PUT    | `/api/auth/change-password` | Change password (protected)  |

---

## 🔑 Authentication Flow

1. User logs in → receives JWT token
2. Token is sent in headers:

   ```
   Authorization: Bearer <token>
   ```
3. Middleware verifies token → grants access to protected routes

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```
git clone https://github.com/your-username/secure-auth-system.git
cd secure-auth-system/backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=7777
```

### 4. Run the server

```
npm run dev
```

---

## 🧪 Testing

Use **Postman / Thunder Client** to test endpoints.

Example:

* Login → get token
* Use token in protected routes

---

## 🔒 Security Practices

* Passwords are hashed using bcrypt
* JWT used for stateless authentication
* Sensitive data stored in `.env`
* Rate limiting applied to prevent abuse
* Input validation to avoid invalid data

---

## 🎯 Future Improvements

* Forgot Password (OTP / Email)
* Refresh Tokens
* Role-Based Access Control (RBAC)
* Frontend integration (React / React Native)

---

## 👨‍💻 Author

**Divyanshu Gairwal**

---

## ⭐ If you like this project

Give it a star ⭐ and feel free to contribute!

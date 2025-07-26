# Modern Auth System Backend

A secure and scalable backend for the modern authentication system built with Express.js, MongoDB, and JWT authentication.

## 🌟 Features

- **Authentication Endpoints**
  - User Registration (`POST /api/auth/register`)
  - User Login (`POST /api/auth/login`)
  - Password Reset (`POST /api/auth/reset-password`)

- **Security**
  - JWT token-based authentication
  - Password hashing with bcrypt
  - Input validation and sanitization
  - Rate limiting
  - CORS protection

## 🛠 Tech Stack

- Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- bcrypt for password hashing
- cors for CORS protection
- express-rate-limit
- helmet for security headers

## 🔒 API Security Features

1. **JWT Authentication**
   - Token-based authentication
   - Configurable expiration
   - Refresh token support

2. **Password Security**
   - Bcrypt hashing
   - Salt rounds configuration
   - Password strength validation

3. **Request Protection**
   - Rate limiting
   - CORS configuration
   - XSS protection
   - Security headers

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   Create a `.env` file:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   SALT_ROUNDS=10
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## 📡 API Endpoints

### Authentication

```
POST /api/auth/register
Body: {
  "email": "user@example.com",
  "password": "securePassword123",
  "name": "John Doe"
}

POST /api/auth/login
Body: {
  "email": "user@example.com",
  "password": "securePassword123"
}

POST /api/auth/reset-password
Body: {
  "email": "user@example.com"
}
```

### Protected Routes

```
GET /api/user/profile
Headers: {
  "Authorization": "Bearer <jwt_token>"
}

PUT /api/user/profile
Headers: {
  "Authorization": "Bearer <jwt_token>"
}
Body: {
  "name": "Updated Name",
  "email": "new@email.com"
}
```

## 🔐 Environment Variables

```env
PORT=3000                    # Server port
MONGODB_URI=<uri>           # MongoDB connection string
JWT_SECRET=<secret>         # JWT signing key
SALT_ROUNDS=10              # Bcrypt salt rounds
CORS_ORIGIN=*              # CORS allowed origins
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run with coverage:
```bash
npm run test:coverage
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
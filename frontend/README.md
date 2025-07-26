# Modern Authentication System

A modern authentication system built with Next.js, MongoDB, and TailwindCSS featuring a sleek UI with glassmorphism effects and animated backgrounds.

## 🌟 Features

- **User Authentication**
  - Login with email and password
  - User registration
  - Protected routes
  - JWT-based authentication
  - Secure password handling

- **Modern UI/UX**
  - Glassmorphism effects
  - Animated gradient backgrounds
  - Grid pattern overlays
  - Responsive design
  - Toast notifications
  - Loading states
  - Form validation

## 🛠 Tech Stack

### Frontend
- Next.js 15.4.4
- React 19.1.0
- TailwindCSS 4
- React Hook Form 7.61.1
- Yup for validation
- React Hot Toast
- Axios for API calls

### Backend
- MongoDB Atlas
- Mongoose ODM
- Express.js
- JWT for authentication
- bcrypt for password hashing

## 🔒 Security Features

1. **Authentication**
   - JWT token-based authentication
   - Protected API routes
   - Secure password hashing
   - Token-based session management

2. **Form Security**
   - Input validation and sanitization
   - Password strength requirements
   - Email format validation
   - Protected against SQL injection

3. **Database Security**
   - MongoDB Atlas security features
   - Encrypted connections
   - Role-based access control
   - Field-level encryption

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-kerja
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   ```env
   # Frontend .env
   NEXT_PUBLIC_API_URL=http://localhost:3000

   # Backend .env
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the development server**
   ```bash
   # Frontend
   npm run dev

   # Backend
   npm run dev
   ```

## 📱 Screenshots

![Login Page](screenshots/login.png)
- Login page with form validation and error handling

![Registration](screenshots/register.png)
- User registration with real-time validation

![Dashboard](screenshots/dashboard.png)
- Protected dashboard page

![Notifications](screenshots/notifications.png)
- Toast notifications for user feedback

## 📚 Libraries and Reasoning

1. **Next.js**
   - Server-side rendering capabilities
   - Built-in API routes
   - Optimized performance
   - Great developer experience

2. **React Hook Form**
   - Efficient form validation
   - Minimal re-renders
   - Great TypeScript support
   - Easy integration with Yup

3. **TailwindCSS**
   - Rapid UI development
   - Consistent styling
   - Great customization
   - Small bundle size

4. **MongoDB**
   - Flexible schema
   - Scalability
   - Great for rapid development
   - Rich query API

## 🔐 Environment Variables

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3000

# Backend
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/auth-system
JWT_SECRET=your_jwt_secret
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# JWT Authentication System

![JWT Auth](https://img.shields.io/badge/JWT-Authentication-green?style=for-the-badge)

Secure and efficient JWT (JSON Web Token) authentication system for modern web applications.

## 🚀 Features

- 🔐 **JWT-based authentication** for secure user sessions.
- 📌 **Role-based access control (RBAC)** for managing permissions.
- 📡 **RESTful API** designed for seamless integration.
- 🔄 **Token refresh mechanism** to keep users logged in securely.
- 🔧 **Easy configuration** with environment variables.

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/xp-Coding/JWT_Auth.git

# Navigate to the project folder
cd JWT_Auth

# Install dependencies
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
JWT_SECRET=your_secret_key
TOKEN_EXPIRY=1h
MONGO_URI=your_mongodb_uri
```

## 🚀 Usage

### Start the Server
```bash
npm start
```

### API Endpoints

| Method | Endpoint          | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/auth/register` | Register a new user       |
| POST   | `/api/auth/login`    | Authenticate a user       |
| post    | `/api/user/logout`  | Logout the user  |

## 🛠 Technologies Used

- **Node.js** - Server-side runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **jsonwebtoken** - JWT handling
- **bcryptjs** - Password hashing

## 🏆 Contributing

1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit your changes.
4. Push the branch and create a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---
💡 *Happy Coding!* 🚀

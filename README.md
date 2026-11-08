# 🛒 BazarDor – বাজার দর

### Know the Price. Compare the Market. Shop Smarter.

BazarDor is a modern online market price platform designed to help people in Bangladesh explore daily product prices, compare market rates, and stay informed about price changes.

The platform provides an easy-to-use interface where users can browse products, explore categories, view product details, and manage their personal accounts.

---

## 🌐 Project Overview

**BazarDor (বাজার দর)** aims to make market price information more accessible and convenient for everyday consumers in Bangladesh.

Users can explore different products, check their prices, discover price increases and decreases, and manage their accounts through a simple and user-friendly interface.

---

## ✨ Features

- **Product Listings:** Browse a collection of available market products.
- **Category Navigation:** Explore products based on different categories.
- **Product Details:** View detailed information about individual products.
- **Price Marquee:** Display market price updates in a scrolling section.
- **Top Risers & Fallers:** Discover products with increasing and decreasing prices.
- **Product Sorting:** Sort products using available sorting options.
- **User Authentication:** Register and sign in using email and password.
- **User Profile:** View personal account information.
- **Profile Update:** Update your account name.
- **Secure Logout:** Sign out from your account.
- **Responsive Design:** Access the platform on different screen sizes.

---

## 🛠️ Technologies Used

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI

### Authentication & Backend
- Better Auth
- MongoDB
- MongoDB Atlas

### Tools & Development
- Git
- GitHub
- Visual Studio Code
- npm

---

## 📦 Installation & Setup

Follow these steps to run BazarDor on your local machine.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd my-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory of the project.

Add your MongoDB connection string:

```env
MONGODB_URL=your_mongodb_connection_string
```

Replace the placeholder with your own MongoDB Atlas connection string.

**Important:** Never share or upload your `.env` file or database credentials to GitHub.

### 5. Run the Development Server

```bash
npm run dev
```

### 6. Open in Browser

Visit:

```text
http://localhost:3000
```

---

## 🔐 Authentication

BazarDor uses Better Auth for user authentication.

Authentication features include:

- User Registration
- Email and Password Login
- User Session Management
- Profile Information
- Profile Name Update
- Sign Out

---

## 📁 Project Structure

```text
my-app/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── profile/
│   │   ├── signIn/
│   │   ├── signUp/
│   │   ├── productDetails/
│   │   └── ...
│   │
│   ├── components/
│   └── lib/
│
├── .env
├── .gitignore
├── package.json
├── next.config.ts
└── README.md
```

---

## 🔗 API

Product and category information is fetched from the Programming Hero BazarDor API.

- Products API: https://openapi.programming-hero.com/api/bazardor/products
- Categories API: https://openapi.programming-hero.com/api/bazardor/categories

---

## 👨‍💻 Developer

**Developed by Razit Ahmed Suad**

- GitHub Profile: https://github.com/suad-npm
- Project: BazarDor

---

## 📄 License

This project was developed for educational and learning purposes.


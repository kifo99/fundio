# Fundio

Fundio is a local marketplace platform connecting local producers — food sellers, carpenters, DIY makers, and other small vendors — directly with buyers in their area. The goal is to give independent sellers an easy way to list and sell their goods online, without the overhead of large e-commerce platforms.

> ⚠️ **Work in progress** — backend is feature-complete; frontend is under active development.

## What it does

- Sellers can register, create a profile, and list products across categories (food, crafts, carpentry, DIY, and more)
- Buyers can browse the catalog, view products by category, and add items to their cart
- Secure user authentication with JWT-based login, signup, and token verification

## Current Status

| Area | Status |
|---|---|
| Authentication & JWT | ✅ Done |
| Product management API | ✅ Done |
| Cart API | ✅ Done |
| Seller/vendor endpoints | ✅ Done |
| Frontend UI | 🚧 In progress |

## Tech Stack

**Backend:** Node.js, Express, PostgreSQL

**Infrastructure:** Docker

**Frontend:** React, SCSS *(in progress)*

**Auth:** JWT (JSON Web Tokens)

## Getting Started

```bash
# Clone the repo
git clone https://github.com/kifo99/fundio.git
cd fundio

# Install server dependencies
cd server
npm install

# Add your environment variables
cp .env.example .env
# Fill in: MONGO_URI, JWT_SECRET, PORT

# Start the server
npm run dev
```

## Project Structure

```
fundio/
├── client/       # React frontend (in progress)
└── server/       # Express REST API
```

## Author

[@kifo99](https://github.com/kifo99)

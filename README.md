# SIT725 - Week Project: Express Calculator API

This project is a simple **Node.js** and **Express** web service that performs basic calculator operations — Addition, Subtraction, Multiplication, and Division — using RESTful endpoints.

It was developed as part of SIT725 coursework to demonstrate backend skills using Express, HTTP methods, and basic API testing in the browser.

---

## ✅ Features

- Built using **Node.js** and **Express.js**
- Serves static web pages from a `public` folder
- Provides RESTful endpoints to:
  - Add two numbers
  - Subtract two numbers
  - Multiply two numbers
  - Divide two numbers

---

## 🧪 API Endpoints

You can test the endpoints by running the server and accessing these URLs in your browser:

| Operation     | Endpoint Example |
|---------------|------------------|
| Addition      | `/add?num1=10&num2=5` → `{ "result": 15 }` |
| Subtraction   | `/subtract?num1=10&num2=5` → `{ "result": 5 }` |
| Multiplication| `/multiply?num1=10&num2=5` → `{ "result": 50 }` |
| Division      | `/divide?num1=10&num2=5` → `{ "result": 2 }` |

📌 Example:

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/lynn-yg/SIT725-2025.git
   cd SIT725-2025
   Install dependencies;
npm install
  Start the server;
node index.js
Open your browser and go to ; 
http://localhost:5000
Project Structure;
.
├── index.js            # Main server file
├── package.json        # Project dependencies
├── public/
│   └── index.html      # Static front-end HTML page


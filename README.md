# 🎓 School Management CRUD API (Node.js + MySQL)

A simple CRUD application built with **Node.js (Express)** and **MySQL**.  
The API manages two entities: **Students** and **Courses**.

This project demonstrates RESTful API design, database integration, and clean code organization.

---

## 📂 Project Structure

skul/
├── controllers/ # Request handlers
│ ├── studentsController.js
│ └── coursesController.js
├── models/ # Database queries
│ ├── studentModel.js
│ └── courseModel.js
├── routes/ # API routes
│ ├── students.js
│ └── courses.js
├── db.js # MySQL connection
├── server.js # Express app entry point
├── .env # Environment variables (ignored by git)
├── .gitignore
└── README.md

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/skul.git
cd skul

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root folder:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=school_DB


⚠️ Do not commit .env (already ignored in .gitignore).

4️⃣ Start Server
node server.js


Server should run at:
👉 http://localhost:5000/

🗄️ Database Setup

Run the following SQL to create tables:

CREATE DATABASE school_DB;

USE school_DB;

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT NOT NULL
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT
);

📡 API Endpoints
👨‍🎓 Students
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/students/:id	Get student by ID
POST	/api/students	Create a new student
PUT	/api/students/:id	Update student by ID
DELETE	/api/students/:id	Delete student by ID
Example Create Request (POST /api/students)
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 22
}

📘 Courses
Method	Endpoint	Description
GET	/api/courses	Get all courses
GET	/api/courses/:id	Get course by ID
POST	/api/courses	Create a new course
PUT	/api/courses/:id	Update course by ID
DELETE	/api/courses/:id	Delete course by ID
Example Create Request (POST /api/courses)
{
  "title": "Intro to Databases",
  "description": "Learn MySQL and SQL basics"
}

🧪 Testing with Postman

A Postman collection is provided in /postman/SchoolAPI.postman_collection.json.

Import it in Postman via File > Import > Upload File.

Test all endpoints (students & courses).

🛠️ Tech Stack

Backend: Node.js, Express

Database: MySQL (mysql2 driver)

Tools: Postman, dotenv, nodemon
```

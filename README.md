🖥️ IT Product Management Application

IT Product Management Application is a full-stack web application developed with Angular and Spring Boot, designed to manage IT products and categories through a RESTful architecture.
It supports dynamic filtering, inline editing, and real-time data synchronization with a MySQL database.

Developed by: Mami Ghofrane

🏗️ Architecture
product-management/
├── backend/            # Spring Boot REST API (Port 3333)
├── frontend/           # Angular Web Interface (Port 4200)
└── README.md           # Project documentation

⚙️ Prerequisites

Java 17+

Node.js 16+

XAMPP (MySQL enabled)

Maven 3.6+ (or mvnw)

🗄️ Database Configuration

The application uses MySQL via XAMPP with the following configuration:

Host: localhost

Port: 3306

Database: gestion_produits (created automatically)

Username: root

Password: (empty by default in XAMPP)

✨ Features
🔹 Backend (Spring Boot)

Complete REST API (CRUD operations)

MySQL persistence using Spring Data JPA

Auto-incremented product and category IDs

Category management

Advanced filtering and search

Promotion management

🔹 Frontend (Angular)

Responsive UI with Bootstrap

Forms without manual ID input

Real-time filters (search, category, promotion)

Inline product editing

Data validation

Success and error notifications

🛠️ Technologies Used
Component	Technologies
Backend	Spring Boot 3.1.3, Spring Data JPA, Maven
Frontend	Angular 16, TypeScript, Bootstrap 5
Database	MySQL 8+ (XAMPP)
📊 Demo Data

The application includes preloaded test data:

8 categories (Informatique, Électronique, Jouets, etc.)

17 products distributed across categories

Products marked as on promotion for filter testing

🔌 API Endpoints
Products

GET /produits — List all products

POST /produits — Add a product

PUT /produits — Update a product

DELETE /produits/delete/{id} — Delete a product

GET /produits/search?designation=name — Search products

GET /produits/categorie/{id} — Filter by category

GET /produits/promotion — Products on promotion

Categories

GET /produits/categories — List categories

POST /produits/categories — Add a category

🗂️ Project Structure
Backend
backend/
├── src/main/java/soa/
│   ├── controller/        # REST Controllers
│   ├── entities/          # JPA Entities
│   ├── metier/            # Business Logic
│   ├── repository/        # JPA Repositories
│   └── SpringJpaApplication2.java
├── src/main/resources/
│   └── application.properties
└── pom.xml

Frontend
frontend/
├── src/app/
│   ├── model/             # TypeScript Models
│   ├── services/          # HTTP Services
│   ├── produits/          # Product List Component
│   ├── ajout-produit/     # Add Product Component
│   └── accueil/           # Home Component
├── angular.json
├── package.json
└── tsconfig.json

⚠️ Troubleshooting
MySQL Connection Issues

Ensure MySQL is running in XAMPP

Open XAMPP Control Panel

Click Start on MySQL

Restart the Spring Boot application

Port Conflicts

If ports 3333 or 4200 are already in use:

Stop the conflicting application
or

Change the port in configuration files

✅ Key Features Implemented

Full CRUD operations for products and categories

Auto-incremented IDs (no manual input required)

Dynamic search by product name

Category-based filtering

Promotion filtering

Responsive Bootstrap interface

Form validation

100% dynamic data from MySQL database

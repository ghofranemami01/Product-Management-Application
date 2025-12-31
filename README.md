# 🖥️ IT Product Management Application

IT Product Management Application is a full-stack web application developed using Angular and Spring Boot.  
It allows efficient management of IT products and categories through a RESTful architecture, with real-time filtering and inline editing.

Developed by: Mami Ghofrane

---

## 🏗️ Architecture

product-management/

├── backend/            # Spring Boot REST API (Port 3333)
├── frontend/           # Angular Web Interface (Port 4200)
└── README.md           # Project documentation

---

## ⚙️ Prerequisites

- Java 17+
- Node.js 16+
- XAMPP (MySQL enabled)
- Maven 3.6+ (or mvnw)

---

## 🗄️ Database Configuration

The application uses MySQL via XAMPP with the following configuration:

- Host: localhost
- Port: 3306
- Database: gestion_produits (created automatically)
- Username: root
- Password: (empty by default in XAMPP)

---

## ✨ Features

### Backend (Spring Boot)
- Complete REST API (CRUD operations)
- MySQL persistence using Spring Data JPA
- Auto-incremented product and category IDs
- Category management
- Advanced filtering and search
- Promotion management

### Frontend (Angular)
- Responsive user interface with Bootstrap
- Forms without manual ID input
- Real-time search and filters
- Category and promotion filtering
- Inline product editing
- Form validation
- Success and error notifications

---

## 🛠️ Technologies Used

Component      | Technologies
---------------|---------------------------------------------
Backend        | Spring Boot 3.1.3, Spring Data JPA, Maven
Frontend       | Angular 16, TypeScript, Bootstrap 5
Database       | MySQL 8+ (via XAMPP)

---

## 📊 Demo Data

The application contains sample data for testing:

- 8 categories (Informatique, Électronique, Jouets, etc.)
- 17 products distributed across categories
- Products marked as "on promotion" to test filters

---

## 🔌 API Endpoints

### Products
- GET /produits                → List all products
- POST /produits               → Add a product
- PUT /produits                → Update a product
- DELETE /produits/delete/{id} → Delete a product
- GET /produits/search?designation=name → Search products
- GET /produits/categorie/{id} → Filter products by category
- GET /produits/promotion      → Products on promotion

### Categories
- GET /produits/categories     → List all categories
- POST /produits/categories    → Add a category

---

## 🗂️ Project Structure

### Backend
backend/
├── src/main/java/soa/
│   ├── controller/        # REST Controllers
│   ├── entities/          # JPA Entities
│   ├── metier/            # Business Layer
│   ├── repository/        # JPA Repositories
│   └── SpringJpaApplication2.java
├── src/main/resources/
│   └── application.properties
└── pom.xml

### Frontend
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

---

## ⚠️ Troubleshooting

### MySQL Connection Issues
- Make sure MySQL is running in XAMPP
- Open XAMPP Control Panel
- Click "Start" on MySQL
- Restart the Spring Boot backend

### Port Conflicts
If ports 3333 or 4200 are already in use:
- Stop the conflicting application
- OR change the port in configuration files

---

## ✅ Key Features Implemented

- Full CRUD operations for products and categories
- Auto-incremented IDs (no manual input required)
- Dynamic search by product name
- Category-based filtering
- Promotion filtering
- Responsive Bootstrap interface
- Form validation
- 100% dynamic data from MySQL database

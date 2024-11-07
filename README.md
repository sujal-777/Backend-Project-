**Social Media Blog App Backend REST API**

A backend REST API built with Node.js for a social media blog application, designed to handle user data and authentication while managing blog entries. This project enables users to create, read, update, and delete (CRUD) blogs and supports essential social media functionalities like user authentication and blog management.

Table of Contents
Project Overview
Features
Getting Started
API Endpoints
Dependencies
Developer

Project Overview
The Social Media Blog App backend is a REST API designed to handle the backend logic of a blog-oriented social media platform. It enables users to register, log in, and manage their personal blogs. Built using the Node.js runtime and MongoDB for data storage, this application manages user and blog data, allowing authenticated users to perform CRUD operations on their blog posts.

Features
User Authentication: Secure authentication using password hashing and session handling for secure login and registration processes.
Blog Management: Users can create, read, update, and delete their blogs, each of which is linked to the authenticated user.
Data Storage: User and blog data are stored in MongoDB collections, with relationships established using Mongoose schemas and references.
Session Transactions: Ensures that blog creation and updates are part of a session transaction for consistency.

Getting Started
Prerequisites
Ensure you have the following installed:

Node.js: v14.x or higher
MongoDB: A running instance of MongoDB (either locally or remotely)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/sujal-777/social-media-blog-app-backend.git
cd social-media-blog-app-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory of the project and add the following:

plaintext
Copy code
MONGODB_URI="your-mongodb-connection-string"
Run the application:

bash
Copy code
npm run start
The API should now be running on http://localhost:5000 (or specified port).

API Endpoints

User Routes
POST /api/users/register: Register a new user
POST /api/users/login: User login

Blog Routes
GET /api/blogs: Fetch all blogs
POST /api/blogs: Create a new blog post
PUT /api/blogs/:id: Update an existing blog post by ID
DELETE /api/blogs/:id: Delete a blog post by ID
GET /api/blogs/user/:id: Get all blogs created by a specific user

Dependencies
This project utilizes the following major dependencies:

express: Fast and minimalist web framework for Node.js.
mongoose: Elegant MongoDB object modeling for Node.js.
bcryptjs: Library for hashing passwords.
jsonwebtoken: Library for generating and verifying JSON web tokens for secure user sessions.
dotenv: Loads environment variables from a .env file.
nodemon: Development utility that restarts the server on file changes.
Refer to package.json for a full list of dependencies.

Developer
Developed by Sujal Pal.


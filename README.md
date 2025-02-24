# Assignment Mahakali Backend

This project is a Node.js backend built for managing content related to the Mahakali assignment. It provides RESTful API endpoints to manage top category images, page banners, and campaigns. The backend uses Express for routing, Sequelize as the ORM (with MySQL), and implements JWT-based authentication for admin-restricted routes. File uploads are handled via Multer and served statically from an `uploads` directory.

## Features

- **CRUD Operations**
  - **Top Category Images:** Create, retrieve, update, and delete top category images.
  - **Page Banners:** Create, retrieve, update, and delete page banners.
  - **Campaigns:** Create, retrieve, update, and delete campaigns.
- **Authentication & Authorization**
  - Admin routes are protected using JWT authentication.
- **File Uploads**
  - Supports image uploads for top category images, page banners, and campaigns using Multer.
- **Database Integration**
  - Uses Sequelize ORM with MySQL to manage persistent data.

## Technology Stack

- **Node.js & Express:** Server-side runtime and framework.
- **Sequelize:** ORM for MySQL database.
- **MySQL:** Relational database.
- **JWT:** JSON Web Tokens for authentication.
- **Multer:** Middleware for handling file uploads.
- **Cors & dotenv:** For cross-origin requests and environment variable management.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prernamadhyan16/Assignment-Mahakali-Backend-Prerna.git
   cd Assignment-Mahakali-Backend-Prerna
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the project root with the following keys (modify as needed):

   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret
   DB_HOST=localhost
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=your_database_name
   ```

4. **Database Setup:**  
   Ensure you have a MySQL database running and update the `.env` file with the correct credentials. The Sequelize instance in the project will sync the models with the database.

## Usage

1. **Start the server:**

   ```bash
   node app.js
   ```

   The server will start on the port specified in your `.env` file (default is 3000).

2. **Static Files:**  
   Uploaded images can be accessed via the `/uploads` route.

3. **Token Generation:**  
   A sample token is generated using the `token.js` file. Run it separately to get a permanent test token for admin operations:

   ```bash
   node token.js
   ```
## Author
Prerna | Frontend Developer  

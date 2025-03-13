
# Recipe Management CRUD API

## Overview

This is a **CRUD (Create, Read, Update, Delete) API** for managing recipes. The application is built using **Node.js, Express.js, and Mongoose (MongoDB)**, following the **MVC (Model-View-Controller) pattern**. API documentation is provided via **Postman**.

## Features

- Create a new recipe
- Retrieve all recipes
- Retrieve a single recipe by ID
- Update a recipe by ID
- Delete a recipe by ID

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **API Testing:** Postman
- **Deployment:** Render


## Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/Abirami935/Recipes-app.git
cd Recipes-app
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the Server

```sh
npm start or node index.js
```

## API Endpoints

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| POST   | `/api/recipes`     | Create a new recipe   |
| GET    | `/api/recipes`     | Get all recipes       |
| GET    | `/api/recipes/:id` | Get a recipe by ID    |
| PUT    | `/api/recipes/:id` | Update a recipe by ID |
| DELETE | `/api/recipes/:id` | Delete a recipe by ID |


## Deployment

- The API is deployed on **Render**.

## Contributing

Feel free to submit issues and pull requests to improve this project.

## License

This project is open-source under the **MIT License**.



# 🎬 Movie Management API

## 📌 Project Overview

This project is a Movie Management REST API developed using **Node.js, Express.js, and MongoDB** with Mongoose.

It allows users to add, view, update, and delete movie records from the MongoDB database.

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES6)

## 📂 Project Structure

```text
Movie-Management/
│
├── node_modules/
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Open Project Folder

```bash
cd Movie-Management
```

### 3. Install Dependencies

```bash
npm install
npm install express mongoose
```

### 4. Start MongoDB

Make sure MongoDB Server is running on your computer.

### 5. Run the Project

```bash
node server.js
```

Server will start at:

```text
http://localhost:3000
```

## 🗄️ Database Configuration

Database Name: `moviesDB`

MongoDB Connection:

```javascript
mongodb://127.0.0.1:27017/moviesDB
```

### Movie Schema

Each movie contains the following fields:

| Field | Data Type |
|---|---|
| title | String |
| genre | String |
| director | String |

## 🔗 API Endpoints

### 1. Home Page

- **Method:** GET
- **URL:** `/`

Returns the home page message.

### 2. Add Movie

- **Method:** POST
- **URL:** `/addmovie`
[!screenshot](assets/addmovie.png)

Request Body:

```json
{
  "title": "Jana Nayagan",
  "genre": "Action",
  "director": "H. Vinoth"
}
```

### 3. Get All Movies

- **Method:** GET
- **URL:** `/getmovies`
[!screenshot](assets/getmovie.png)

Returns all movies stored in the database.

### 4. Get Specific Movie

- **Method:** GET
- **URL:** `/getmovie`
[!screenshot](assets/getsp.png)

Returns the movie with the title `jan nayagan`.

### 5. Update Movie

- **Method:** PUT
- **URL:** `/updatemovie`
[!screenshot](assets/upadatemovie.png)

Request Body:

```json
{
  "id": "YOUR_MOVIE_ID",
  "newData": {
    "title": "Jana Nayagan",
    "genre": "Action",
    "director": "H. Vinoth"
  }
}
```

### 6. Delete Movie

- **Method:** DELETE
- **URL:** `/deletemovie`
[!screenshot](assets/deletemovie.png)

Request Body:

```json
{
  "id": "YOUR_MOVIE_ID"
}
```
###  Server Connect

[!screenshot](assets/serverconnect.png)


## Explanation Video 🎬()

## 🧪 Testing

You can test all API endpoints using:

- Postman
- Thunder Client
- MongoDB Compass

## ✨ Features

- Add new movies
- Get all movies
- Get a specific movie
- Update movie details
- Delete movies
- Store movie data in MongoDB
- REST API integration using Express.js

## 👩
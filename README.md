# Blog Website

Welcome to the Code Blog Website project! This application allows users to create, view, and delete blog posts, much like Medium. It features a simple, clean design with interactive elements and persistent storage using SQLite.

## Features

- Create new blog posts
- View a list of all blog posts
- View individual blog posts
- Delete blog posts
- Live preview of blog post content while creating a new post

## Technologies Used

- Node.js
- Express.js
- SQLite
- EJS (Embedded JavaScript templating)
- HTML/CSS/JavaScript

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/sen-Saptarshi/code-blog-website.git
   cd code-blog-website
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the server:**

   ```sh
   node server.js
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4000
   ```

## Project Structure

```
blog-website/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
├── views/
│   ├── index.ejs
│   ├── new-post.ejs
│   └── post.ejs
├── server.js
└── db.js
```

## Usage

1. **Home Page:** Lists all blog posts with a link to create a new post.
2. **New Post Page:** Form to create a new blog post with live preview.
3. **Post Page:** Displays the full content of a blog post with an option to delete it.

## Code Overview

### `server.js`

- Sets up the Express server and middleware.
- Routes for handling CRUD operations for blog posts.
- Inserts a welcome post if it doesn't already exist in the database.

### `db.js`

- Configures and initializes the SQLite database.
- Creates the `posts` table if it doesn't already exist.

### `views/`

- `index.ejs`: Displays the list of all blog posts.
- `new-post.ejs`: Form for creating a new blog post with live preview.
- `post.ejs`: Displays the full content of an individual blog post.

### `public/css/styles.css`

- Custom styles for the blog website.
- Includes hover animations and interactive elements.

### `public/js/script.js`

- JavaScript for live preview functionality on the new post page.

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

---

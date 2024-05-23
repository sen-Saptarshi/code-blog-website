const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  db.all("SELECT * FROM posts", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving posts");
    } else {
      res.render("index", { posts: rows });
    }
  });
});

app.get("/new", (req, res) => {
  res.render("new-post");
});

app.post("/new", (req, res) => {
  const { title, content } = req.body;
  const date = new Date().toISOString();
  db.run(
    "INSERT INTO posts (title, content, date) VALUES (?, ?, ?)",
    [title, content, date],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving post");
      } else {
        res.redirect("/");
      }
    }
  );
});

app.get("/post/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving post");
    } else {
      res.render("post", { post: row });
    }
  });
});

app.post("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM posts WHERE id = ?", [id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting post");
    } else {
      res.redirect("/");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

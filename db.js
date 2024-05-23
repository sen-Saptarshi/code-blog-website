const sqlite3 = require("sqlite3").verbose();
const dbPath = "./blog.db";
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT, date TEXT)"
  );
});

module.exports = db;

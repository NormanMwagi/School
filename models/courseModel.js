const db = require("../db");

const Course = {
  getAll: (callback) => {
    db.query("SELECT * FROM courses", (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM courses WHERE id = ?", [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },

  create: (data, callback) => {
    db.query("INSERT INTO courses (title, description) VALUES (?, ?)", [data.title, data.description], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },

  update: (id, data, callback) => {
    db.query("UPDATE courses SET title = ?, description = ? WHERE id = ?", [data.title, data.description, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM courses WHERE id = ?", [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },
};

module.exports = Course;

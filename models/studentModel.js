const e = require("express");
const db = require("../db");

const Student = {
  getAll: (callback) => {
    db.query("SELECT * FROM students", (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM students WHERE id = ?", [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    }); 
  },

  create: (data, callback) => {
    db.query("INSERT INTO students (name, email) VALUES (?, ?)", [data.name, data.email], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },

  update: (id, data, callback) => {
    db.query("UPDATE students SET name = ?, email = ? WHERE id = ?", [data.name, data.email, id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },

  delete: (id, callback) => {
    db.query("DELETE FROM students WHERE id = ?", [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
  },
};

module.exports = Student;

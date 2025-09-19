const Student = require("../models/studentModel");

exports.getAllStudents = (req, res) => {
  Student.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getStudentById = (req, res) => {
  Student.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Student not found" });
    res.json(result[0]);
  });
};

exports.createStudent = (req, res) => {
  Student.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.updateStudent = (req, res) => {
  Student.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student updated" });
  });
};

exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student deleted" });
  });
};

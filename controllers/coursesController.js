const Course = require('../models/courseModel');

exports.getAllCourses = (req, res) => {
    Course.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  };

exports.getCourseById = (req, res) => {
    Course.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.length === 0) return res.status(404).json({ message: 'Course not found' });
        res.json(result[0]);
    });
  };

exports.createCourse = (req, res) => {
    Course.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, ...req.body });
    });
    };

exports.updateCourse = (req, res) => {
    Course.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Course updated' });
    });
  };

exports.deleteCourse = (req, res) => {
    Course.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Course deleted' });
    });
  };
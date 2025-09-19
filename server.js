const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");
const dotenv = require("dotenv");


const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

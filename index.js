require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

/*app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);*/

app.use("/api/students", require("./routes/students"));
app.use("/api/courses", require("./routes/courses"));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

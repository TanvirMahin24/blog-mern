const express = require("express");
const connectDB = require("./config/db");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

//Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const fileTypes = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Initializing the middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ storage: storage, fileFilter: fileTypes }).single("image"));

//Static file
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//Route
app.use("/api/blog", require("./routes/blogs"));

//Connect DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

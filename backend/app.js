const express = require("express");
const axios = require("axios");

const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/turtleDB");
// course db
const Course = require("./models/course");
// multer
const path = require("path");
const multer = require("multer");
app.use("/images", express.static(path.join("backend/images")));
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, PATH);
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   });

//   let upload = multer({
//     storage: storage
//   });

//========================START=============================
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

//Mime types configuration
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
// Multer storage

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  //filename
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

// import body parser module
const bodyParser = require("body-parser");
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));
//=========================END============================

const bcrypt = require("bcrypt");
const trainer = require("./models/trainer");

// http://localhost:3000/ =====equivalente_a===> '/';

//Business Logic GET ALL Courses
// app.get('/courses',(req,res)=>{
// console.log('here into get all request');
// Course.find().then((err,docs)=>{
//     if (err) {
//         console.log('Error into DB : ',err);
//     }
// else{
//     res.status(200).json({
//         findedCourses:docs
//     });
// }
// })
// });

//Business Logic GET ALL Courses
app.get("/courses", (req, res) => {
  console.log("here inti get all courses test");
  Course.find().then((result) => {
    if (result) {
      res.status(200).json({
        foundedCourses: result,
      });
    }
  });
});
// Business Logic model
// app.get('url',(req,res)=>{
// });
// app.post('url', (req,res)=>{
// })

//Business Logic ADD Course Object
app.post("/courses", (req, res) => {
  console.log("here into add course");
  console.log("here object from FRONT END", req.body);
  const courseObject = new Course({
    name: req.body.name,
    price: req.body.price,
    trainer: req.body.trainer,
    duration: req.body.duration,
    capacity: req.body.capacity,
  });
  courseObject.save().then((result) => {
    res.status(200).json({
      message: "Course added with success",
    });
  });
});

//Business Logic GET  course by ID
app.get("/courses:id", (req, res) => {
  console.log("here into get course by ID ", req.params.id);
  Course.findOne({ _id: req.params.id }).then((result) => {
    res.status(200).json({
      findedCourseByID: result,
    });
  });
});

//Business Logic delete  course by ID
app.delete("/courses:id", (req, res) => {
  console.log("here into delete course by ID ");
});

//Business Logic edit  course by ID
app.put("/courses:id", (req, res) => {
  console.log("here into edit course by ID ");
});

//Business Logic signup
app.post("/users", (req, res) => {
  console.log("here into signup", req.body);
});

//Business Logic ADD trainer Object
app.post(
  "/trainers",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    console.log("here into add trainer");
    console.log("here object from FRONT END", req.body);
    url = req.protocol + "://" + req.get("host");
    const courseObject = new trainer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      speciality: req.body.speciality,
      experience: req.body.experience,
      img: url + "/images/" + req.file.filename,
    });
    courseObject.save().then((result) => {
      res.status(200).json({
        message: "Trainer added with success",
      });
    });
  }
);

//Business Logic GET ALL Trainers
app.get("/trainers", (req, res) => {
  console.log("here into get all trainers test");
  trainer
    .find()
    .sort({ experience: -1 })
    .then((result) => {
      if (result) {
        res.status(200).json({
          foundedTrainers: result,
        });
      }
    });
});

//Weather

app.post("/search", (req, res) => {
  const country = req.body.country;
  const apiKey = "c273859868431318911df0d99c9162e5";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    country +
    "&appid=" +
    apiKey +
    "&units=metric";
    
  axios.get(apiUrl).then((response) => {
    console.log("Here response", response);
    const weather = response.data.main;
    console.log("Here weather main", weather);
    const result = {
      temp: weather.temp,
      pressure: weather.pressure,
      humidity: weather.humidity,
    };
    res.status(200).json({
      result: result,
    });
  });
});

module.exports = app;

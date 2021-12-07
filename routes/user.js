const router = require("express").Router();

// database models
const User = require("../models/User.model");
const Goal = require("../models/Goal.model");
const Task = require("../models/Task.model");

// middleware to control access to specific routes
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

// GET /dashboard
router.get("/dashboard", isLoggedIn, (req, res, next) => {
  // call ZenQuote API

  // search for user's tasks and goals in the database

  res.render("/users/dashboard", { 
    currentUser: req.session.user,
    zenQuote: ""
  }) 

  
})

// POST /dashboard
router.post("", isLoggedIn, (req, res, next) => {

})

// GET /profile
router.get("/profile/:userId", isLoggedIn, (req, res, next) => {

})

// POST /profile
router.post("", isLoggedIn, (req, res, next) => {

})


module.exports = router;
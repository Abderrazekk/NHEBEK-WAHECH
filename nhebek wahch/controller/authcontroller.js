const User = require("../model/authmodel");

exports.getRegisterPage = (req, res) => {
  res.render("signup");
};

exports.getHomePage = (req, res) => {
  res.render("first");
};



exports.postRegister = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log("New user created:", newUser);
    res.redirect("/login");
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(400).send("Error creating user");
  }
};

exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && user.password === req.body.password) {
      res.redirect("/home"); // Redirige vers la page Home si la connexion est réussie
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).send("Server Error");
  }
};


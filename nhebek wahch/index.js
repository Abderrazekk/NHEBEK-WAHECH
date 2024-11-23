const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const authRouter = require("./router/authroute");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/nhebekwahch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", authRouter);

app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
});

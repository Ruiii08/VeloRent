require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const paymentRoute = require("./paymentRoute");
const UserModel = require("./models/User");

const app = express();
const http = require("http").Server(app);

// Middlewares
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Auth Middleware
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json("Token is missing");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.json("Error with token");
    if (decoded.role === "admin") {
      next();
    } else {
      return res.json("Not admin");
    }
  });
};

app.post("/Signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    await UserModel.create({ name, email, password: hash });
    res.json("Success");
  } catch (err) {
    res.json(err);
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.json("No record existed");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json("Incorrect password");

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("token", token);
    res.json({
      Status: "Success",
      user: { name: user.name, email: user.email }
    });
  } catch (err) {
    res.json(err);
  }
});

//user status and profiling
app.get("/getUser", async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ Status: "Error", message: "No token found" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.json({ Status: "Error", message: "Invalid token" });

    try {
      const user = await UserModel.findOne({ email: decoded.email });
      if (user) {
        res.json({
          Status: "Success",
          user: { name: user.name, email: user.email }
        });
      } else {
        res.json({ Status: "Error", message: "User not found" });
      }
    } catch (err) {
      console.log(err);
      res.json({ Status: "Error", message: "DB error" });
    }
  });
});

// Logout
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// Payment route
app.use("/", paymentRoute);

// Start server
http.listen(5000, () => {
  console.log("Server is running on port 5000");
});

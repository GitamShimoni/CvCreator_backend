const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authenticatedRoutes = require("./src/routes/Authenticated/authenticated.route");
const unauthenticatedRoutes = require("./src/routes/unauthenticated/unauthenticated.route");

// const helmet = require("helmet");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const { mongooseInit } = require("./src/DB/mongooseInit");

app.use(cors(), express.json()); // Fix here

app.use("/unauth", unauthenticatedRoutes);
app.use("/", authenticatedRoutes);
app.get('/pinging', (req, res) => {
  res.send('Live and stable');
});

mongooseInit();
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

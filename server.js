const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
//dotenv conig
dotenv.config();

//mongodb connection

//rest obejct
const app = express();

app.use(cors());
//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
//port
const port = process.env.PORT || 8080;
//listen port
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server Running in on port ${port}`);
  });
});

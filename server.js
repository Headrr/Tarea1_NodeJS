const express = require("express");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

// app middleware express
const app = express();

// db
connectDB();

// middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" })); // definición estándar y moderna
app.use(cors());

// fs - good practice
readdirSync("./routes").map((route) =>
  app.use("/api", require("./routes/" + route))
);

// port  (listener)
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
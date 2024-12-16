const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connection");
require("dotenv").config();
const productRoutes = require("./routes/productsRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const blogRoutes = require("./routes/blogRoutes");

const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/blogs", blogRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is connected to port " + port));
  } catch (error) {
    console.log(error);
  }
};

start();

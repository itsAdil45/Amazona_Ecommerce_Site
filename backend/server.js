import express from "express";
const app = express();
import data from "./Data.js";
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Second change made ");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
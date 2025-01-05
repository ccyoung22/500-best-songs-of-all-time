import express from "express";

const app = express();

const PORT = 3000;

app.get("/welcome", (req, res) => {
  res.send("Welcome to the 500 Best Songs of all time API");
});

app.listen(PORT, (req, res) => {
  console.log(`This app is listening on port ${PORT}`);
});

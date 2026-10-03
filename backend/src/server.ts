import express from "express";

const app = express();

app.get("/home", (req, res) => {
  res.status(200).json({
    suceess: true,
    message: "Welome to the Home API",
  });
});

app.listen(3000, () => {
  console.log("Port Started 1");
});

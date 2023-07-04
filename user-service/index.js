const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from User Service! ");
});

app.listen(port, () => {
  console.log(`Microservice 1 listening at http://localhost:${port}`);
});

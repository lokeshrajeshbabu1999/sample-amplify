const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Sample GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from AWS Amplify Backend!" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Amplify Node.js backend and lokehs!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
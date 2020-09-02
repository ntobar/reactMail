//Heroku Compliant

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//If there is an environment variable assigned by Heroku, or use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);

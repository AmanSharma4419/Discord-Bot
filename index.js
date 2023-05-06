const express = require("express");
require("dotenv").config();

require("./discord");

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} `);
});

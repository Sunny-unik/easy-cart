const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get("/", (_, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server live on http://localhost:${port}`));

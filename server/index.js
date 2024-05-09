const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");
require("dotenv").config();

const database = [];
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/health", (_, res) => res.send("OK"));
app.use("/product", routes);

app.listen(port, () => console.log(`Server live on http://localhost:${port}`));

exports.default = database;

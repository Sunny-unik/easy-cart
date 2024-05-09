const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");
require("dotenv").config();

const database = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    name: "Product 1",
    description: "Description of Product 1",
    price: "$10.00",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    name: "Product 2",
    description: "Description of Product 2",
    price: "$15.00",
  },
];
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/health", (_, res) => res.send("OK"));
app.use("/product", routes);

app.listen(port, () => console.log(`Server live on http://localhost:${port}`));

exports.default = database;

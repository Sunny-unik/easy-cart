const database = require("../index");

createProduct = (req, res) => {
  const { name, image, description, price } = req.body;
  database.default.push({
    id: database.default.length,
    name,
    image,
    description,
    price,
  });
  res.send({ message: "Product Added", status: "ok" });
};

listProducts = (_, res) => {
  res.send({ data: database.default, status: "ok" });
};

module.exports = { createProduct, listProducts };

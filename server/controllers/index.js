const database = require("../index");

const createProduct = (req, res) => {
  const { name, image, description, price } = req.body;
  database.default.push({
    id: database.default.length + 1,
    name,
    image,
    description,
    price,
  });
  res.send({ message: "Product Added", status: "ok" });
};

const listProducts = (_, res) => {
  res.send({ data: database.default, status: "ok" });
};

const placeOrder = (req, res) => {
  const { firstName, lastName, address } = req.body,
    errors = [];

  if (typeof firstName !== "string" || !firstName.trim())
    errors.push("First Name is required");
  if (typeof lastName !== "string" || !lastName.trim())
    errors.push("Last Name is required");
  if (typeof address !== "string" || !address.trim())
    errors.push("Address is required");

  res.send({
    errors: errors.length ? errors : undefined,
    message: errors.length
      ? "!Invalid Request"
      : "Your order placed successfully",
    status: !errors.length ? "ok" : undefined,
  });
};

module.exports = { createProduct, listProducts, placeOrder };

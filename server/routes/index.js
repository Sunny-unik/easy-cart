const express = require("express");
const validProduct = require("../validations");
const { listProducts, createProduct, placeOrder } = require("../controllers");
const router = express.Router();

router.get("/", listProducts);
router.post("/", validProduct(), createProduct);
router.post("/order", placeOrder);

module.exports = router;

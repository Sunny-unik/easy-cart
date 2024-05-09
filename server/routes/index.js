const express = require("express");
const validProduct = require("../validations");
const { listProducts, createProduct } = require("../controllers");
const router = express.Router();

router.get("/", listProducts);
router.post("/", validProduct(), createProduct);

module.exports = router;

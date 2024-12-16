const {
  addProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");
const express = require("express");
const router = express.Router();

router.route("/").post(addProducts).get(getProducts);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;

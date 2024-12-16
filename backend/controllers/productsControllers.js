const products = require("../models/productsModel");

const addProducts = async (req, res) => {
  try {
    const product = await products.create(req.body);
    console.log(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getProducts = async (req, res) => {
  try {
    const product = await products.find({});
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await products.findOne({ _id: productID });
    if (!product) {
      return res
        .status(404)
        .json({ msg: `No Data found with id: {productID}` });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await findOneAndUpdate({ _id: productID }, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ msg: `No Data found with id: {productID}` });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.id;
    const product = await products.findOneAndDelete({ _id: productID });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  addProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};

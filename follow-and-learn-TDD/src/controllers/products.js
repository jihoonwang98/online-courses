const productModel = require('../models/product');

exports.createProduct = (req, res, next) => {
    let created = productModel.create(req.body);
    res.status(201).json(created);
};
const productModel = require('../models/product');

exports.createProduct = async (req, res, next) => {
    console.log('Controller: createProduct')
    console.log('req.body: ', req.body);

    try {
        let created = await productModel.create(req.body);
        console.log('created: ', created);
        res.status(201).json(created);
    } catch (error) {
        next(error);
    }
};
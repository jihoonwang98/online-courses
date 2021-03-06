const productController = require("../../src/controllers/products");
const productModel = require("../../src/models/product");
const httpMocks = require('node-mocks-http');
const sampleProduct = require('../data/new-product.json');
const {Promise} = require("mongoose");


productModel.create = jest.fn();

let req;
let res;
let next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = jest.fn();
})

describe('Product Controller Create', () => {

    beforeEach(() => {
        req.body = sampleProduct;
    })

    it("should have a createProduct function", () => {
        expect(typeof productController.createProduct).toBe('function');
    });

    it("should call ProductModel.create", () => {
        productController.createProduct(req, res, next);
        expect(productModel.create).toBeCalledWith(sampleProduct);
    });

    it('should return 201 response code', async () => {
        await productController.createProduct(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it('should return json body in response', async () => {
        productModel.create.mockReturnValue(sampleProduct);
        await productController.createProduct(req, res, next);
        expect(res._getJSONData()).toStrictEqual(sampleProduct);
    });

    it('should handle errors when description property missing', async () => {
        const errorMessage = {
            message: "description property missing"
        };
        const rejectedPromise = Promise.reject(errorMessage);
        productModel.create.mockReturnValue(rejectedPromise);
        await productController.createProduct(req, res, next);
        expect(next).toBeCalledWith(errorMessage);
    });
});
const productController = require("../../src/controllers/products");
const productModel = require("../../src/models/product");
const httpMocks = require('node-mocks-http');
const sampleProduct = require('../data/new-product.json');


productModel.create = jest.fn();

let req;
let res;
let next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
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

    it('should return 201 response code', () => {
        productController.createProduct(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it('should return json body in response', () => {
        productModel.create.mockReturnValue(sampleProduct);
        productController.createProduct(req, res, next);
        expect(res._getJSONData()).toStrictEqual(sampleProduct);
    });

});
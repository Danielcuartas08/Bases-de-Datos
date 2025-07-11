const Product = require('../models/product');

exports.getAllProducts = (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener los productos' });
        }
        res.json(products);
    });
};

exports.getProductById = (req, res) => {
    const productId = req.params.id;
    Product.getProductById(productId, (err, product) => {
        if (err) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    });
};

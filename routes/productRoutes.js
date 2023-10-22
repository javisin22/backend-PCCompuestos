const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

router.use(express.json());

// GET requests
router.get('/products', async (req, res) => {
  res.send((await product.getAllProducts()).rows);
});

router.get('/products/:id', async (req, res) => {
  res.send(await product.getProductById(req.params.id));
});


// POST requests
router.post('/products', async (req, res) => {
  const { name, description, quantity, price } = req.body;

  // Check request parameters (AÑADIR MÁS CHECKEOS!!!)
  // if (!name || !password || !email || !address) {
  //   return res.status(400).json({ message: 'Please provide name, password, and email.' });
  // }

  res.send(await product.createProduct(name, description, quantity, price));
});


// PUT requests
router.put('/products/:id', async (req, res) => {
  const { name, description, quantity, price } = req.body;

  res.send(await product.updateProductById(req.params.id, name, description, quantity, price));
});


// DELETE requests
router.delete('/products/:id', async (req, res) => {
  res.send(await product.deleteProductById(req.params.id));
});


module.exports = router;
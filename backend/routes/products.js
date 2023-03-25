const express = require('express');
const router = express.Router();
const { productsControllers } = require('../controllers')

/**
 * GET products 
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/
 */
router.get('/', productsControllers.get_all_products);

/**
 * GET product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/:id
 */
router.get('/:id', productsControllers.get_product);

/**
 * POST product
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method POST
 * @route /products/
 */
router.post('/', function(req, res) {
  res.send('This the is the products POST endpoint');
});

/**
 * PATCH product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PATCH
 * @route /products/:id
 */
router.patch('/:id', function(req, res) {
  res.send('This the is the products PATCH endpoint');
});


/**
 * DELETE product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /products/:id
 */
router.delete('/:id', productsControllers.delete_product);

module.exports = router;

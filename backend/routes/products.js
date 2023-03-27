const express = require('express');
const router = express.Router();
const { productsControllers } = require('../controllers')

/**
 * GET products 
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products
 */
router.get('/', productsControllers.get_all_products);

/**
 * GET product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/:id
 */
router.get('/:id', productsControllers.get_product_by_id);

/**
 * GET products by scrum master
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/scrummaster/:scrum_master
 */
router.get('/scrummaster/:scrum_master', productsControllers.get_products_by_scrum_master);

/**
 * GET products by developer
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/developer/:developer
 */
router.get('/developer/:developer', productsControllers.get_products_by_developer);

/**
 * POST product
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method POST
 * @route /products
 */
router.post('/', productsControllers.post_product);

/**
 * PUT product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PUT
 * @route /products/:id
 */
router.put('/:id', productsControllers.put_product_by_id);

/**
 * DELETE product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /products/:id
 */
router.delete('/:id', productsControllers.delete_product_by_id);

module.exports = router;

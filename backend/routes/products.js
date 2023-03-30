const express = require('express');
const router = express.Router();
const { productsControllers } = require('../controllers')

/**
 *@swagger
 *components:
 *  schemas:
 *    Product:
 *      type: object
 *      required:
 *        - product_number
 *        - product_name
 *        - scrum_master
 *        - product_owner
 *        - developer_names
 *        - start_date
 *        - methodology
 *      properties:
 *        product_number:
 *          type: number
 *          description: The auto-generated id of the product
 *        product_name:
 *          type: string
 *          description: The name of your product
 *        scrum_master:
 *          type: string
 *          description: The Scrum Master for your product
 *        product_owner:
 *          type: string
 *          description: The name of the product_owner
 *        developer_names:
 *          type: array
 *          items:
 *            type: string
 *            description: The names of the developers for the product
 *        start_date:
 *          type: string
 *          format: date
 *          description: The start date of the product
 *        methodology:
 *          type: string
 *          description: The development methodology of the product
 *      example:
 *        product_number: 675
 *        product_name: Bigtax
 *        scrum_master: Fedora Watkiss
 *        product_owner: Denney Gomar
 *        developer_names: [
 *           Karlee Flude,
 *           Eda Izzatt,
 *           Kimble Hake,
 *           Cullin Biagini,
 *           Rochell Blasl
 *        ]
 *        start_date: 2022-04-06
 *        methodology: Agile
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successfully retrieved products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: No products found.
 */
/**
 * GET products 
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products
 */
router.get('/', productsControllers.get_all_products);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products/{id}:
 *   get:
 *     summary: Get product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true 
 *         description: The product id
 *     responses:
 *       200:
 *         description: Successfully retrieved product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 */
/**
 * GET product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/:id
 */
router.get('/:id', productsControllers.get_product_by_id);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products/scrummaster/{scrum_master}:
 *   get:
 *     summary: Get product by scrum_master 
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: scrum_master
 *         schema:
 *           type: string
 *         required: true 
 *         description: The product Scrum Master name
 *     responses:
 *       200:
 *         description: Successfully retrieved Scrum Master's products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Products or Scrum Master not found.
 */
/**
 * GET products by scrum master
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/scrummaster/:scrum_master
 */
router.get('/scrummaster/:scrum_master', productsControllers.get_products_by_scrum_master);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products/developer/{developer}:
 *   get:
 *     summary: Get product by developer name
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: developer
 *         schema:
 *           type: string
 *         required: true 
 *         description: The name of a developer on the product
 *     responses:
 *       200:
 *         description: Successfully retrieved developer's products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Products or developer not found.
 */
/**
 * GET products by developer
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/developer/:developer
 */
router.get('/developer/:developer', productsControllers.get_products_by_developer);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products:
 *   post:
 *     summary: Create product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Successfully created product.
 *       507:
 *         description: No data storage exists.
 */
/**
 * POST product
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method POST
 * @route /products
 */
router.post('/', productsControllers.post_product);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products/{id}:
 *   put:
 *     summary: Update product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Successfully updated product.
 *       404:
 *         description: Product not found.
 */
/**
 * PUT product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PUT
 * @route /products/:id
 */
router.put('/:id', productsControllers.put_product_by_id);

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products API
 * /api/products/{id}:
 *   delete:
 *     summary: Delete product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       204:
 *         description: No content.
 *       404:
 *         description: Product not found.
 */
/**
 * DELETE product by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /products/:id
 */
router.delete('/:id', productsControllers.delete_product_by_id);

module.exports = router;

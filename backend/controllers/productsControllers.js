const data = require('../data/products.json')

/**
 * GET products.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/
 * @param {number} id - Product Number, a unique identifier for a product.
 */
exports.get_all_products = (_, res) => {
  try {
    if (data) res.status(200).json(data); // Success, return products.
    else res.status(404).send("Products not found."); // Products not found.
  } catch (error) {
    console.error("Controller: Error in get_all_products", error);
  }
};

/**
 * GET product by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/:id
 * @param {string} id - Product Number, a unique identifier for a product.
 */
exports.get_product = (req, res) => {
  try {
    const product = data.find(product => {
      return product.product_number.toString() === req.params.id;
    });

    if (product) res.status(200).json(product); // Success, return product.
    else res.status(404).send("Product not found."); // Product not found.
  } catch (error) {
    console.error("Controller: Error in get_product", error);
  }
};

/**
 * DELETE product by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /products/:id
 * @param {string} id - Product Number, a unique identifier for a product.
 */
exports.delete_product = (req, res) => {
  try {
    const product = data.find(product => {
      return product.product_number.toString() === req.params.id;
    });

    console.log(product);
    if (product) {
      data.splice(data.indexOf(product), 1)
      res.status(204).send(`Product ${req.params.id} was successfully deleted.`); // Success, return product.
    }
    else res.status(404).send("Product not found."); // Product not found.
  } catch (error) {
    console.error("Controller: Error in get_product", error);
  }
};

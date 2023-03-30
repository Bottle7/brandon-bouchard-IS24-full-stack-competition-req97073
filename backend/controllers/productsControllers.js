/**
 * Products Controllers Module
 * 
 * Defines callbacks for associated products routes
 */

const data = require('../data/products.json')

/**
 * GET products.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products
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
exports.get_product_by_id = (req, res) => {
  const { id } = req.params;

  try {
    const product = data.find(product => {
      return product.product_number.toString() === id;
    });

    if (product) res.status(200).json(product); // Success, return product.
    else res.status(404).send("Product not found."); // Product not found.
  } catch (error) {
    console.error("Controller: Error in get_product_by_id", error);
  }
};

/**
 * GET products by scrum master.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/:scrum_master
 * @param {string} scrum_master - Scrum Master, an identifier for a subset of products.
 */
exports.get_products_by_scrum_master = (req, res) => {
  const { scrum_master } = req.params;

  try {
    const products = data.filter(product => {
      return product.scrum_master.toLowerCase() === scrum_master.toLowerCase();
    });

    if (Array.isArray(products) && products.length !== 0) res.status(200).json(products); // As long as products is an array of length greater than 0, return products.
    else res.status(404).send("Products or Scrum Master not found."); // Products not found.
  } catch (error) {
    console.error("Controller: Error in get_products_by_scrum_master", error);
  }
};

/**
 * GET product by developer.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /products/:developer
 * @param {string} developer - Developer, an identifier for a subset of products.
 */
exports.get_products_by_developer = (req, res) => {
  const { developer } = req.params;

  try {
    const products = data.filter(product => {
      return product.developer_names.find(dev => dev.toLowerCase() === developer.toLowerCase());
    });

    if (Array.isArray(products) && products.length !== 0) res.status(200).json(products); // As long as products is an array of length greater than 0, return products.
    else res.status(404).send("Products not found."); // Products not found.
  } catch (error) {
    console.error("Controller: Error in get_products_by_developer", error);
  }
};

/**
 * POST product.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method POST
 * @route /products
 */
exports.post_product = (req, res) => {
  try {
    const newProduct = req.body;

    // Generate a unique (non-crypto) id using the last six digits of the date milliseconds at time of creation for each product on POST
    const dateMillis = new Date().valueOf();
    const productNumber = Number(dateMillis.toString().slice(7));

    newProduct.product_number = productNumber;

    // Trim the date string to YYYY-MM-DD
    newProduct.start_date = newProduct.start_date.slice(0, 10)

    if (data) {
      data.push(newProduct) // Add product to list of products
    } else {
      res.status(507).send("No data array exists to store the new product.")
    }
    res.status(201).send(`Product created.`); // Success
  } catch (error) {
    console.error("Controller: Error in post_product", error);
  }
};

/**
 * PUT product by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PUT
 * @route /products/:id
 * @param {string} id - Product Number, a unique identifier for a product.
 */
exports.put_product_by_id = (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;

  try {
    const product = data.find(product => {
      return product.product_number.toString() === id;
    });

    if (product) {
      data.splice(data.indexOf(product), 1, updatedProduct)
      res.status(200).send(`Product ${product.product_number} has been successfully updated.`) // Success, return id of successfully updated product
    }
    else res.status(404).send("Product not found."); // Product not found.
  } catch (error) {
    console.error("Controller: Error in put_product_by_id", error);
  }
};

/**
 * DELETE product by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /products/:id
 * @param {string} id - Product Number, a unique identifier for a product.
 */
exports.delete_product_by_id = (req, res) => {
  const { id } = req.params;

  try {
    const product = data.find(product => {
      return product.product_number.toString() === id;
    });

    if (product) {
      data.splice(data.indexOf(product), 1)
      res.status(204).send(`Product ${req.params.id} was successfully deleted.`); // Success, return deleted product's id.
    }
    else res.status(404).send("Product not found."); // Product not found.
  } catch (error) {
    console.error("Controller: Error in delete_product_by_id", error);
  }
};

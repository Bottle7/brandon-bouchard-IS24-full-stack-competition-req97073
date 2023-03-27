const express = require('express');
const logger = require('morgan');

const { healthRouter, productsRouter, notFoundRouter } = require('./routes/index');

const app = express();

/**
 * CORS Config
 */
app.use((_, res) => {
  res.header("Access-Control-Allow-Origin", "*"); // Don't do this in prod
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allowable HTTP Methods
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Base path
 */
app.get('/', (_, res) => res.send('Server is live!'));

/**
 * Routers
 */
app.use('/health', healthRouter);
app.use('/products', productsRouter);

// 404 page for any non-matching URLs
app.use('*', notFoundRouter);

module.exports = app;

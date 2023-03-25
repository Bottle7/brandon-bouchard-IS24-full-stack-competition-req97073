const express = require('express');
const logger = require('morgan');

const { healthRouter, productsRouter, notFoundRouter } = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => res.send('Server is live!'));
app.use('/health', healthRouter);
app.use('/products', productsRouter);

// 404 page for any non-matching URLs
app.use('*', notFoundRouter);



module.exports = app;

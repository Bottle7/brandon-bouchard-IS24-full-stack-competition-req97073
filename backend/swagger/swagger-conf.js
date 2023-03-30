const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.1",
    swagger: "4.0.0",
    info: {
      title: "IMB Catalogue Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a CRUD API application made with Express for the 2023 BC Gov IS24 Full Stack developer job competition.",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerConfig = swaggerJsdoc(options)

module.exports = swaggerConfig;

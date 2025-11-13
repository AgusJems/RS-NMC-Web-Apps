import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
    openapi: '3.0.0',
    info: {
      title: 'RSNMC API',
      version: '1.0.0',
      description: 'API documentation for your Express application',
    },
    components: {},
},
    apis: [
    './server.js',
    './src/routes/news.routes.js',
  ],
};
// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
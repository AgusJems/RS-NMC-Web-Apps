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
    './src/routes/poly.routes.js',
    './src/routes/doctor.routes.js',
    './src/routes/education.routes.js',
    './src/routes/schedule.routes.js',
    './src/routes/testimonial.routes.js',
    './src/routes/patner.routes.js',
    './src/routes/inpatient.routes.js',
    './src/routes/emergency.routes.js',
    './src/routes/support.routes.js',
    './src/routes/carousel.routes.js',
  ],
};
// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
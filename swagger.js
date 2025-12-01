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
    './src/server/routes/auth.routes.js',
    './src/server/routes/news.routes.js',
    './src/server/routes/poly.routes.js',
    './src/server/routes/doctor.routes.js',
    './src/server/routes/education.routes.js',
    './src/server/routes/schedule.routes.js',
    './src/server/routes/testimonial.routes.js',
    './src/server/routes/patner.routes.js',
    './src/server/routes/inpatient.routes.js',
    './src/server/routes/emergency.routes.js',
    './src/server/routes/support.routes.js',
    './src/server/routes/carousel.routes.js',
  ],
};
// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
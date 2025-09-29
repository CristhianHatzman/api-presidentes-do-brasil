const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Presidents of Brazil",
      description: "API RESTful completa para consulta e gerenciamento de informações históricas dos presidentes da República do Brasil. Oferece endpoints para cadastro, consulta, atualização e exclusão de dados biográficos, incluindo períodos de mandato, partidos políticos, realizações governamentais e curiosidades históricas. Sistema com autenticação JWT para operações administrativas e acesso público para consultas educacionais.",
      version: "1.3.0",
      contact: {
        name: "Cristhian",
      },
      servers: [{ url: "http://localhost:3500" }],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/openapi.yaml"],
};

export default swaggerOptions;
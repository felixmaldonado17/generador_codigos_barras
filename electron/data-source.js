// data-source.js
const { DataSource } = require("typeorm");
const CodigosDeBarra = require("./entities/codigosDeBarra");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "app.db",
  synchronize: true,
  logging: false,
  entities: [CodigosDeBarra],
});

module.exports = AppDataSource;

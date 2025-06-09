const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "CodigosDeBarra",
  tableName: "codigos_de_barra",
  columns: {
    id: {
      primary: true,
      type: "integer",
      generated: true,
    },
    fecha_creacion: {
      type: "datetime",
      createDate: true,
    },
  },
});

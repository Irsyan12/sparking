import { Sequelize } from "sequelize";

const connection = new Sequelize("sparking", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
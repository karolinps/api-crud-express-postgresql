import { Sequelize } from "sequelize";

//Sustituir por sus parametros de config
const config = {
  host: "localhost",
  user: "*****",
  password: "****",
  db: "****",
};

const db = new Sequelize(config.db, config.user, config.password, {
  host: config.host,
  dialect: "postgres",
});

export default db;

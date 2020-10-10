module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "juan",
    DB: "base_master_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
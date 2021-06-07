require('dotenv').config();

const dbConfig = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  /*  ssl: { rejectUnauthorized: false },
  dialectOptions: { ssl: true }, */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

module.exports = dbConfig;

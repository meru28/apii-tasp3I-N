require('dotenv').config();

module.exports = {
  API_PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO,
};

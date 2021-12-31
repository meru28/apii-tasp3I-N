const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dashboard.bprtaspen.com', 'http://localhost:8082', 'http://localhost:8081');
  res.header('Access-Control-Allow-Headers', true);
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
}));

const {
  homeRouter,
} = require('./routers');

app.use(express.static('public'));
app.use('/home', homeRouter);

mongoose.connect(config.MONGO_URL)
// eslint-disable-next-line no-console
  .then(() => console.log('Koneksi mongodb sukses'))
  .catch((err) => console.log(`Gagal koneksi ke mongodb ${err}`));

app.listen(config.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`'API-Taspen aktif di port: ${config.API_PORT}'`);
});

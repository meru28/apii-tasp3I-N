const fs = require('fs');
const sharp = require('sharp');
const Home = require('../models/homes');
const { toArrayofObj, getImgLabel, checkImgSize } = require('../helpers/custom-helpers');

module.exports = {
  getHomes: async (req, res) => {
    await Home.find()
      .then((result) => {
        const date = new Date();
        console.log('fetch all information home at:', `${date.getDate()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        res.status(200).send({ status: 'sukses', home: result[0] });
      }).catch((err) => {
        console.log('fetch home err ::', err);
        res.status(500).send({ error: 'something failed' });
      });
  },
};

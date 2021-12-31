const router = require('express').Router();
const { homeController } = require('../controllers');

router.get('/', homeController.getHomes);

module.exports = router;

const Router = require('express').Router;
const Controllers = require('./certification.controllers');

const router = Router();

router.route('/').get(Controllers.get)
router.route('/').post(Controllers.create)

module.exports = router;
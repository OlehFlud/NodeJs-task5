const router = require('express').Router();
const {user: userMiddleware} = require('../../middleware');
const {user , pages} = require('../../controllers');

router.get('/', pages.login);

router.post('/',userMiddleware.checkUserLoginMiddleware,user.loginUser );

module.exports = router;
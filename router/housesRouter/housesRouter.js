const router = require('express').Router();

const {house: houseMiddleware,token} = require('../../middleware');

const {house , pages} = require('../../controllers');

router.post('/',token.checkAccesTokenMddleware,houseMiddleware.checkHouseValidityMiddleware,house.createHouse);

router.get('/',pages.createHouse);

router.get('/allHouses',house.findAllHouse);

router.post('/editHouse',token.checkAccesTokenMddleware,houseMiddleware.checkEditHouseValidityMiddleware,house.editHouse );

router.get('/editHouse',pages.editHouse);

router.get('/:house_id',houseMiddleware.checkIsHousePresentMiddleware,house.getHouseById);

module.exports = router;
const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res) => {
    try {
        const houseToCreate = req.body;

        const HouseModel = dataBase.getModel('House');

        await HouseModel.create(houseToCreate);

        res.render('createHouse');

    }catch (e) {
        res.status(400).json(e.message);
    }

};


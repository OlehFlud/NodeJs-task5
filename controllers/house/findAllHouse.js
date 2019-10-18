const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const HouseModel = dataBase.getModel('House');

        const findAll = await HouseModel.findAll();

        if (!findAll.length) {
            throw new Error('houses not found');
        }

        res.json(findAll);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
const dataBase = require('../../dataBase').getInstance();

module.exports = async createHouse => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.create(createHouse);
};
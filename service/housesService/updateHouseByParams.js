const dataBase = require('../../dataBase').getInstance();

module.exports = async (updateObject, house_id) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(updateObject, {
        where: {
            id: house_id
        }
    });
};
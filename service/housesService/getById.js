const dataBase = require('../../dataBase').getInstance();

module.exports = async house_id =>{

    const HouseModel = dataBase.getModel('House');

    const house = await HouseModel.findByPk(house_id);

    if (!house) {
        throw new Error('in DataBase such house is doesn’t exist');
    }

    return user ;

};

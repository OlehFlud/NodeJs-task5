const dataBase = require('../../dataBase').getInstance();

module.exports = async createUser => {
    const UserModel = dataBase.getModel('User');

    await UserModel.create(createUser);
};
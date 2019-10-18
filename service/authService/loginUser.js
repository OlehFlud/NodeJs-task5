const dataBase = require('../../dataBase').getInstance();

module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('User');

    let user = await UserModel.findOne({
        where: {
            email,
            password
        },
    });

    if (!user) {
        throw new Error('Incorrect values');
    }

    return user;
};
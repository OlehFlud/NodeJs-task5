const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const UserModel = dataBase.getModel('User');

        const findAll = await UserModel.findAll();

        if (!findAll.length) {
            throw new Error('users not found');
        }

        res.json(findAll);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
const {usersService} = require('../../service');

module.exports = async ( req, res, next) => {

    try {

        const { user_id } =req.params;

        const isUserPresent = await usersService.getById(user_id);

        if (!isUserPresent){
            throw new Error(`User with ID ${user_id} is not present`)
        }

        req.user = isUserPresent.dataValues;

        console.log(isUserPresent.dataValues);

        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};


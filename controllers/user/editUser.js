const {usersService} = require('../../service');

module.exports = async (req, res) => {
    try {

        const parameters = req.body;
        const { user_id } = req.body;
        const {id} = req.user;

        if(+user_id !== id){
            throw new Error('It is not your User')
        }


        await usersService.updateUserByParams(user_id,parameters);

        res.json('User was edited');

    } catch (e) {
        res.status(400).json(e.message);
    }
};

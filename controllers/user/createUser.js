const { usersService } = require('../../service');

module.exports = async (req,res) => {
try {
    const userToCreate = req.body;
    const { user_id } = req.body;

    await usersService.createUser(userToCreate,user_id);

    res.render('login');

}catch (e) {

  res.status(400).json(e.message);

}};



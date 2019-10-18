
const { houseValidator } = require('../../validators');

module.exports = (req, res, next) => {
    try {
        const house = req.body;

        houseValidator.editNewHouseValidator(house);

        next()

    } catch (e) {
        res.status(400).json(e.message)
    }
};
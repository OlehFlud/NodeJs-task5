const {housesService} = require('../../service');

module.exports = async (req, res) => {
    try {

        const parameters = req.body;

        const { house_id } = req.body;

        await housesService.updateHouseByParams(house_id,parameters);

        res.json('House was edited');

    } catch (e) {
        res.status(400).json(e.message);
    }
};

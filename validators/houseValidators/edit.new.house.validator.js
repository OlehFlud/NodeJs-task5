module.exports = houseObject => {
    const {city,area,price,street} = houseObject;

    if (!city || !area || !price || !street){
        throw new Error('house object is not valid')
    }

};
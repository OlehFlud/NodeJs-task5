module.exports = (sequelize, DataTypes)=>{
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
    },
    },{
        tableName: 'houses',
        timestamps: false
    });

    const User = sequelize.import('User.js');
    House.belongsTo(User, {foreignKey: 'user_id'});

    return House;
};

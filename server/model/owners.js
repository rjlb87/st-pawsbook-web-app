module.exports = (sequelize, DataTypes, Model) => {
    class Owners extends Model {}

    // READ SEQUELIZE ORM API DOCUMENTATIONS
    Owners.init(
        {
            owner_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            first_name : {
                type: DataTypes.STRING,
            },
            last_name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            phone_number: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: 'owner',
            tableName: 'owner',
        }
    )

    return Owners
}


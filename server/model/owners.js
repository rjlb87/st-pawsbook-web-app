module.exports = (sequelize, DataTypes, Model) => {
    class Owners extends Model {}

    // READ SEQUELIZE ORM API DOCUMENTATIONS
    Owners.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.STRING,
            },
            last_name: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            phone_number: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Owners',
            tableName: 'owners',
        }
    )

    return Owners
}

module.exports = (sequelize, DataTypes, Model) => {
    class DogProfiles extends Model {}

    // READ SEQUELIZE ORM API DOCUMENTATIONS
    DogProfiles.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            owner_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'owners',
                    key: 'id',
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            breed: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            date_of_birth: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            gender: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            size: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'DogProfiles',
            tableName: 'DogProdiles',
            timestamps: true,
            createdAt: 'inserted_at',
            updatedAt: 'updated_at',
        }
    )

    return Owners
}

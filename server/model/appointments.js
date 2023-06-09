module.exports = (sequelize, DataTypes, Model) => {
    class Appointments extends Model {}

    // READ SEQUELIZE ORM API DOCUMENTATIONS
    Appointments.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            booked_dog_profile_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'dog_profiles',
                    key: 'id',
                },
            },
            meet_up_dog_profile_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'dog_profiles',
                    key: 'id',
                },
            },
            meet_up_date: {
                type: 'TIMESTAMP',
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            landmark: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                type: DataTypes.ENUM('pending', 'accepted', 'declined'),
                allowNull: true,
                defaultValue: 'pending',
            },
        },
        {
            sequelize,
            modelName: 'Appointments',
            tableName: 'appointments',
            // timestamps: true,
            // createdAt: 'inserted_at',
            // updatedAt: 'updated_at',
        }
    )

    return Appointments
}

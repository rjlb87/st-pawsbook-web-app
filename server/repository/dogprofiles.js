const { connect } = require('../config/db')

class DogProfilesRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getDogProfiles() {
        try {
            const owners = this.db.dogProfiles.findAll({
                order: [['id', 'ASC']],
            })

            return owners
        } catch (error) {
            console.log('ERROR FOUND', error)
            return []
        }
    }

    // CRUD
    async createDogProfiles(profiles) {
        try {
            const details = await this.db.dogProfiles.create({
                owner_id: profiles.owner_id,
                name: profiles.name,
                breed: profiles.breed,
                color: profiles.color,
                date_of_birth: profiles.date_of_birth,
                gender: profiles.gender,
                age: profiles.age,
                size: profiles.size,
            })
            return details
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateDogProfiles(dogprofiles) {
        let data = {}

        try {
            data = await this.db.dogprofiles.update(
                { ...dogprofiles },
                {
                    where: {
                        id: dogprofiles.id,
                    },
                }
            )
            return data
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    async deleteDogProfiles(id) {
        try {
            const profiles = await this.db.dogprofiles.destroy({
                where: { id },
            })
            return profiles
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new DogProfilesRepository()

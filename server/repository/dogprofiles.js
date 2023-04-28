const { connect } = require('../config/db')

class DogProfilesRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async createDogProfiles() {
        try {
            const owners = this.db.owners.findAll({
                order: [['id', 'ASC']],
            })

            return owners
        } catch (error) {
            console.log('ERROR FOUND', error)
            return []
        }
    }

    async createDogProfiles(dogprofiles) {
        try {
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    // CRUD
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

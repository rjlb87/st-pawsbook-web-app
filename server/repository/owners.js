const { connect } = require('../config/db')

class OwnersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getOwners() {
        console.log('GETTING/FETCH/READ USERS IN THE Repository')
        try {
            const owners = this.db.owners.findAll({
                order: [['id', 'ASC']],
            })
            console.log('HEY, ano yung data na nakuha ko sa owners', owners)
            return owners
        } catch (error) {
            console.log('ERROR FOUND', error)
            return []
        }
    }

    // CRUD
    async updateOwners(owners) {
        let data = {}

        try {
            data = await this.db.owners.update(
                { ...owners },
                {
                    where: {
                        id: owners.id,
                    },
                }
            )
            return data
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    async deleteOwners(id) {
        try {
            const owner = await this.db.owners.destroy({ where: { id } })
            return owner
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}


module.exports = new OwnersRepository()

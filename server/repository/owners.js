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
    async createOwners(owners) {
        try {
            return await this.db.owners.create(owners)
        } catch (error) {
            console.log('Error', error)
        }
    }

    async updateOwners(id, updates) {
        try {
            const owner = await this.db.owners.findByPk(id)
            if (!owner) {
                console.log(`OWNER WITH ID ${id} NOT FOUND`)
                return null
            }
            const result = await owner.update(updates)
            console.log(`OWNER WITH ID ${id} UPDATED:`, result)
            return result
        } catch (error) {
            console.log('ERROR FOUND', error)
            return null
        }
    }

    async deleteOwners(id) {
        try {
            const owner = await this.db.owners.findByPk(id)
            if (!owner) {
                console.log(`OWNER WITH ID ${id} NOT FOUND`)
                return null
            }
            const result = await owner.destroy()
            console.log(`OWNER WITH ID ${id} DELETED:`, result)
            return result
        } catch (error) {
            console.log('ERROR FOUND', error)
            return null
        }
    }
}

module.exports = new OwnersRepository()

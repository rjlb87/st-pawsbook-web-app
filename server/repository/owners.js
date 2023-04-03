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
                order: [['owner_id', 'ASC']]
            })
            console.log('HEY, ano yung data na nakuha ko sa owners', owners)
            return owners
        } catch (error) {
            console.log('ERROR FOUND', error)
            return []
        }
    }

    // C-R-U-D
    // Create-(Read/Get)-Update-Delete
    
    // async createOwner() {}

    // async updateOwner() {}

    // async deleteOwner(id) {}
}

module.exports = new OwnersRepository()
const { connect } = require('../config/db')
const bcrypt = require('bcryptjs')

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

    async createOwners(owners) {
        let ownersData = {}

        try {
            const password = owners.password
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = bcrypt.hashSync(password, salt)

            ownersData = { ...owners, password: hashedPassword }
            const createdOwners = await this.db.owners.create(ownersData)
            return createdOwners
        } catch (error) {
            console.log('Error: ', error)
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

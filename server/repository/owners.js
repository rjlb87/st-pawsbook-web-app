const { connect } = require('../config/db')
const bcrypt = require('bcryptjs')
const { generateAccessToken } = require('../config/jwt')
const owners = require('../model/owners')

class OwnersRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getOwners() {
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
    ///Login
    async loginOwners(loginCredentials) {
        console.log('ERROR', loginCredentials)
        try {
            const password = loginCredentials.password

            const owners = await this.db.owners.findOne({
                where: {
                    email: loginCredentials.email,
                },
            })
            const passwordMatch = await bcrypt.compare(
                password,
                owners.password
            )

            if (passwordMatch) {
                const getBaby = generateAccessToken({
                    email: loginCredentials.email,
                })

                if (getBaby) {
                    const getBabies = [owners, { jwt: getBaby }]
                    return getBabies
                }
            }
            throw 'Invalid Credentials!'
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new OwnersRepository()

const ownersService = require('../service/owners')
const { generateAccessToken } = require('../config/jwt')

class OwnersController {
    async getOwners() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await ownersService.getOwners()
    }
    async createOwners(owners) {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await ownersService.createOwners(owners)
    }
    async updateOwners(owners) {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await ownersService.updateOwners(owners)
    }
    async deleteOwners(id) {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await ownersService.deleteOwners(id)
    }
    async loginOwners(loginCredentials) {
        return await ownersService.loginOwners(loginCredentials)
    }
}
module.exports = new OwnersController()

const ownersService = require('../service/owners')
const { generateAccessToken } = require('../config/jwt')

class OwnersController {
    async getOwners() {
        return await ownersService.getOwners()
    }
    async createOwners(owners) {
        return await ownersService.createOwners(owners)
    }
    async updateOwners(owners) {
        return await ownersService.updateOwners(owners)
    }
    async deleteOwners(id) {
        return await ownersService.deleteOwners(id)
    }
    async loginOwners(loginCredentials) {
        return await ownersService.loginOwners(loginCredentials)
    }
}
module.exports = new OwnersController()

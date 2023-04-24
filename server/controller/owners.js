const ownersService = require('../service/owners')

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
}

module.exports = new OwnersController()

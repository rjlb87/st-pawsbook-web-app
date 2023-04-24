const ownersRepository = require('../repository/owners')

class OwnersService {
    async getOwners() {
        return await ownersRepository.getOwners()
    }
    async createOwners(owners) {
        return await ownersRepository.createOwners(owners)
    }
    async updateOwners(owners) {
        return await ownersRepository.updateOwners(owners)
    }
    async deleteOwners(id) {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.deleteOwners(id)
    }
    // Login
    async loginOwners(loginCredentials) {
        return await ownersRepository.loginOwners(loginCredentials)
    }
}

module.exports = new OwnersService()

const ownersRepository = require('../repository/owners')


class OwnersService {
    async getOwners() {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.getOwners()
    }
    async createOwners(owners) {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.createOwners(owners)
    }
    async updateOwners() {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.updateOwners()
    }
    async deleteOwners() {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.deleteOwners()
    }
    
}

module.exports = new OwnersService()
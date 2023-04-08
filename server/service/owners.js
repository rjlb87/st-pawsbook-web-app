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
    async updateOwners(owners) {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.updateOwners(owners)
    }
    async deleteOwners(id) {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.deleteOwners(id)
    }
    
}

module.exports = new OwnersService()
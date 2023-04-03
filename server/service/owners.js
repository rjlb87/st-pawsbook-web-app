const ownersRepository = require('../repository/owners')


class OwnersService {
    async getOwners() {
        console.log('GETTING USERS IN THE SERVICE')
        return await ownersRepository.getOwners()
    }
}

module.exports = new OwnersService()
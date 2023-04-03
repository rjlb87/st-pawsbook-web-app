const ownersService = require('../service/owners');


class OwnersController {
    async getOwners() {
        console.log('GETTING USERS IN THE CONTROLLER')
        return await ownersService.getOwners()
    }
}

module.exports = new OwnersController()
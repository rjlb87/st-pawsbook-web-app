const dogProfilesService = require('../service/dogprofiles')
const { generateAccessToken } = require('../config/jwt')

class DogsProfilesController {
    async getDogProfiles(owners) {
        return await dogProfilesService.getDogProfiles(owners)
    }
    async createDogProfiles() {
        return await dogProfilesService.createDogProfiles()
    }
    async updateDogProfiles(owners) {
        return await dogProfilesService.updateDogProfiles(owners)
    }
    async deleteDogProfiles(id) {
        return await dogProfilesService.deleteDogProfiles(id)
    }
}
module.exports = new DogsProfilesController()

const dogProfilesService = require('../service/dogprofiles')
const { generateAccessToken } = require('../config/jwt')

class DogsProfilesController {
    async getDogProfiles() {
        return await dogProfilesService.getDogProfiles()
    }
    async getPublicDogProfiles() {
        // console.log('public aso', owner_id)
        return await dogProfilesService.getPublicDogProfiles()
    }
    async createDogProfiles(profile) {
        return await dogProfilesService.createDogProfiles(profile)
    }
    async updateDogProfiles(profile) {
        return await dogProfilesService.updateDogProfiles(profile)
    }
    async deleteDogProfiles(id) {
        return await dogProfilesService.deleteDogProfiles(id)
    }
}
module.exports = new DogsProfilesController()

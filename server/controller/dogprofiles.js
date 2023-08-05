const dogProfilesService = require('../service/dogprofiles')
const { generateAccessToken } = require('../config/jwt')

class DogsProfilesController {
    async getDogProfiles(owner_id) {
        return await dogProfilesService.getDogProfiles(owner_id) //Private dogs or account holder dogs
    }
    async getPublicDogProfiles(owner_id) {
        console.log('public aso', owner_id)
        return await dogProfilesService.getPublicDogProfiles(owner_id)
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

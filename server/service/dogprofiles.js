const dogProfilesRepository = require('../repository/dogprofiles')

class DogProfilesService {
    async getDogProfiles(owner_id) {
        return await dogProfilesRepository.getDogProfiles(owner_id)
    }
    async getPublicDogProfiles(owner_id) {
        console.log('calling service dogs', owner_id)
        return await dogProfilesRepository.getPublicDogProfiles(owner_id)
    }
    async createDogProfiles(profile) {
        return await dogProfilesRepository.createDogProfiles(profile)
    }
    async updateDogProfiles(profile) {
        return await dogProfilesRepository.updateDogProfiles(profile)
    }
    async deleteDogProfiles(id) {
        console.log('GETTING USERS IN THE SERVICE')
        return await dogProfilesRepository.deleteDogProfiles(id)
    }
}

module.exports = new DogProfilesService()

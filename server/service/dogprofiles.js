const dogProfilesRepository = require('../repository/dogprofiles')

class DogProfilesService {
    async getDogProfiles() {
        return await dogProfilesRepository.getDogProfiles()
    }
    async getPublicDogProfiles() {
        return await dogProfilesRepository.getPublicDogProfiles()
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

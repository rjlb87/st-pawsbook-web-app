const dogProfilesRepository = require('../repository/dogprofiles')

class DogProfilesService {
    async getDogProfiles() {
        return await dogProfilesRepository.getDogProfiles()
    }
    async createDogProfiles(owners) {
        return await dogProfilesRepository.createDogProfiles(owners)
    }
    async updateDogProfiles(owners) {
        return await dogProfilesRepository.updateDogProfiles(owners)
    }
    async deleteDogProfiles(id) {
        console.log('GETTING USERS IN THE SERVICE')
        return await dogProfilesRepository.deleteDogProfiles(id)
    }
}

module.exports = new DogProfilesService()

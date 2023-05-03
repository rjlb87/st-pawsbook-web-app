const appointmentsRepository = require('../repository/appointments')

class AppointmentsService {
    async getAppointments() {
        return await appointmentsRepository.getAppointments()
    }
    async createAppointments(schedule) {
        return await appointmentsRepository.createAppointments(schedule)
    }
    async updateAppointments(appointments) {
        return await appointmentsRepository.updateAppointments(appointments)
    }
    async deleteAppointments(id) {
        console.log('GETTING USERS IN THE SERVICE')
        return await appointmentsRepository.deleteAppointments(id)
    }
}

module.exports = new AppointmentsService()

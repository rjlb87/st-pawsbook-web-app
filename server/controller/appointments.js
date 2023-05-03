const appointmentsService = require('../service/appointments')

class AppointmentsController {
    async getAppointments() {
        return await appointmentsService.getAppointments()
    }
    async createAppointments(schedule) {
        return await appointmentsService.createAppointments(schedule)
    }
    async updateAppointments(appointments) {
        return await appointmentsService.updateAppointments(appointments)
    }
    async deleteAppointments(id) {
        return await appointmentsService.deleteAppointments(id)
    }
}
module.exports = new AppointmentsController()

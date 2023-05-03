const { connect } = require('../config/db')
const appointments = require('../model/appointments')

class AppointmentsRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getAppointments() {
        try {
            const bookings = this.db.appointments.findAll({
                order: [['id', 'ASC']],
            })

            return bookings
        } catch (error) {
            console.log('ERROR FOUND', error)
            return []
        }
    }

    // CRUD
    async createAppointments(schedule) {
        try {
            const details = await this.db.appointments.create({
                booked_dog_profile_id: schedule.booked_dog_profile_id,
                meet_up_dog_profile_id: schedule.meet_up_dog_profile_id,
                meet_up_date: schedule.meet_up_date,
                location: schedule.location,
                landmark: schedule.landmark,
            })
            return details
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async updateAppointments() {
        let data = {}

        try {
            data = await this.db.appointments.update(
                { ...appointments },
                {
                    where: {
                        id: appointments.id,
                    },
                }
            )
            return data
        } catch (error) {
            console.log('Error: ', error)
        }
        return data
    }

    async deleteAppointments(id) {
        try {
            const profiles = await this.db.appointments.destroy({
                where: { id },
            })
            return profiles
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new AppointmentsRepository()

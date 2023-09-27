const { connect } = require('../config/db')
const appointments = require('../model/appointments')

class AppointmentsRepository {
    db = {}

    constructor() {
        this.db = connect()
    }

    async getAppointments() {
        try {
            const bookings = this.db.Appointments.findAll({
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
            const details = await this.db.Appointments.create({
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

    async updateAppointments(appointments) {
        console.log('status:', appointments)

        let data = {}

        try {
            data = await this.db.Appointments.update(
                { ...appointments },
                {
                    where: {
                        booked_dog_profile_id:
                            appointments.booked_dog_profile_id,
                    },
                }
            )
        } catch (error) {
            console.log('Error: ', error)
        }

        return data
    }

    async deleteAppointments(id) {
        try {
            const profiles = await this.db.Appointments.destroy({
                where: { id },
            })
            return profiles
        } catch (error) {
            console.log('Error: ', error)
        }
    }
}

module.exports = new AppointmentsRepository()

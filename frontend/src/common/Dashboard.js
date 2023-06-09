import React from 'react'
import Splash from '../components/Splash'
import MakeAppointment from '../components/MakeAppointment'
import AppointmentsList from '../components/AppointmentsList'

function Dashboard() {
    return (
        <div>
            <Splash />
            <MakeAppointment />
            <AppointmentsList />
        </div>
    )
}
export default Dashboard

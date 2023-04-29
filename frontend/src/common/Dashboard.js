import React from 'react'
import Splash from '../components/Splash'
// import MoreAboutMe from '../modal/MoreAbouMe'
import DogRegistrationForm from '../components/RegisterDog'
import AppointmentForm from '../components/Appointments'

function Dashboard() {
    return (
        <div>
            <Splash />
            {/* <MoreAboutMe /> */}
            <DogRegistrationForm />
            <AppointmentForm />
        </div>
    )
}
export default Dashboard

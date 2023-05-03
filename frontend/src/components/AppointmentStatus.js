import React from 'react'
import { editAppointments } from '../services/AppointmentsService'

const AppointmentsStatus = ({ appointments }) => {
    const handleAccept = async (booked_dog_profile_id) => {
        try {
            await editAppointments(booked_dog_profile_id, 'accepted')
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleDecline = async (booked_dog_profile_id) => {
        try {
            await editAppointments(booked_dog_profile_id, 'declined')
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="flex justify-between px-4 py-2">
            <div className="flex">
                <button
                    onClick={() =>
                        handleAccept(appointments.booked_dog_profile_id)
                    }
                    className="px-3 py-1 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
                >
                    Accept
                </button>
                <button
                    onClick={() =>
                        handleDecline(appointments.booked_dog_profile_id)
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Decline
                </button>
            </div>
        </div>
    )
}

export default AppointmentsStatus

import React, { useState } from 'react'
import { createAppointments } from '../services/AppointmentsService'

const MakeAppointment = () => {
    const [appointments, setAppointments] = useState({
        booked_dog_profile_id: '',
        meet_up_dog_profile_id: '',
        meet_up_date: '',
        location: '',
        landmark: '',
    })

    const {
        booked_dog_profile_id,
        meet_up_dog_profile_id,
        meet_up_date,
        location,
        landmark,
    } = appointments

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (
            !booked_dog_profile_id ||
            !meet_up_dog_profile_id ||
            !meet_up_date ||
            !location ||
            !landmark
        ) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createAppointments(appointments)
            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="bg-gray-800 flex justify-center py-20">
            <div className="sm:w-96 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl text-gray-800 font-semibold mb-6 text-center pt-3 pb-3">
                    Make an appointment
                </h1>
                <form onSubmit={onSubmitForm}>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="mb-4 block text-xs">
                                Booked Dog Profile ID
                                <input
                                    className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 text-xs"
                                    type="text"
                                    placeholder="ID"
                                    value={booked_dog_profile_id}
                                    onChange={(e) =>
                                        setAppointments({
                                            ...appointments,
                                            booked_dog_profile_id:
                                                e.target.value,
                                        })
                                    }
                                />
                            </label>
                        </div>
                        <div className="flex-1">
                            <label className="mb-4 block text-xs">
                                Meet Up Dog Profile ID
                                <input
                                    className="border-gray-300 border text-xs rounded-md px-3 py-2 w-full mt-1"
                                    type="text"
                                    placeholder="ID"
                                    value={meet_up_dog_profile_id}
                                    onChange={(e) =>
                                        setAppointments({
                                            ...appointments,
                                            meet_up_dog_profile_id:
                                                e.target.value,
                                        })
                                    }
                                />
                            </label>
                        </div>
                    </div>
                    <label className="block mb-4 text-xs">
                        Date
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 w-full text-xs mt-1"
                            type="date"
                            placeholder="meet up date"
                            value={meet_up_date}
                            onChange={(e) =>
                                setAppointments({
                                    ...appointments,
                                    meet_up_date: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label className="mb-4 block text-xs">
                        Location
                        <div className="relative">
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 pr-10 text-sm"
                                // type={showPassword ? 'text' : 'password'}
                                type="text"
                                placeholder="Enter complete meet up location"
                                value={location}
                                onChange={(e) =>
                                    setAppointments({
                                        ...appointments,
                                        location: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </label>
                    <label className="mb-4 block text-xs">
                        <label
                            class="block text-gray-700 font-bold mb-2"
                            for="textarea"
                        >
                            Landmark
                        </label>
                        <textarea
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="textarea"
                            name="textarea"
                            rows="3"
                            placeholder="Type your message here..."
                            value={landmark}
                            onChange={(e) =>
                                setAppointments({
                                    ...appointments,
                                    landmark: e.target.value,
                                })
                            }
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="bg-gray-800 text-white hover:bg-gray-500 rounded-md px-4 py-2 mt-4 w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
export default MakeAppointment

import React, { useState, useEffect } from 'react'
import { createAppointments } from '../services/AppointmentsService'
import { getAllDogs } from '../services/DogService'

const MakeAppointment = () => {
    const userDog = localStorage.getItem('data')
    const [dogs, setDogs] = useState([])
    const [selectedDog, setSelectedDog] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setSelectedDog(value)
    }

    const [appointments, setAppointments] = useState({
        owner_id: userDog ? JSON.parse(userDog).id : '',
        booked_dog_profile_id: '',
        meet_up_dog_profile_id: userDog ? JSON.parse(userDog).name : '',
        meet_up_date: '',
        location: '',
        landmark: '',
    })

    const {
        owner_id,
        booked_dog_profile_id,
        meet_up_dog_profile_id,
        meet_up_date,
        location,
        landmark,
    } = appointments

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (
            !owner_id ||
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
    const onCancel = () => {
        window.location = '/main-page'
    }
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const response = await getAllDogs()
                const data = await response.json()
                setDogs(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchDogs()
    }, [])

    return (
        <div className=" flex justify-center py-20">
            <div className="sm:w-96 p-6 bg-gray-900 rounded-lg shadow-md">
                <h1 className="text-2xl text-white font-semibold mb-6 text-center pt-3 pb-3">
                    Book me
                </h1>
                <form onSubmit={onSubmitForm}>
                    <div className="flex gap-4 ">
                        <div className="flex-1">
                            <label className="mb-4 block text-xs text-white">
                                aso niya
                                <input
                                    className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 text-xs"
                                    type="text"
                                    placeholder="ID"
                                    value={meet_up_dog_profile_id}
                                    readOnly
                                />
                            </label>
                        </div>
                        <div className="flex-1">
                            <label className="mb-4 block text-xs text-white">
                                aso ko
                                <select
                                    className="SelectDogs rounded-md"
                                    value={selectedDog}
                                    onChange={handleChange}
                                >
                                    <option value="text-xs">Select Dog</option>
                                    {dogs.map((dog, index) => (
                                        <option key={index} value={dog.name}>
                                            {dog.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>
                    <label className="block mb-4 text-xs text-white">
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
                    <label className="mb-4 block text-xs text-white">
                        Location
                        <div className="relative">
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 pr-10 text-sm"
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
                    <label className="mb-4 block text-xs text-white">
                        <label className="block  font-bold mb-2" for="textarea">
                            Landmark/Notes
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className="bg-gray-800 text-white hover:bg-gray-400 rounded-md px-4 py-2 mt-4 w-full"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="bg-gray-800 text-white hover:bg-gray-400 rounded-md px-4 py-2 mt-4 w-full"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MakeAppointment

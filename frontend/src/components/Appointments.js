import React, { useState } from 'react'

const AppointmentForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [meetUpDate, setMeetUpDate] = useState('')
    const [dogProfileId, setDogProfileId] = useState('')
    const [dogName, setDogName] = useState('')
    const [location, setLocation] = useState('')
    const [landmarks, setLandmarks] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // send the form data to the server
    }

    return (
        <div className="bg-gray-500 h-screen pt-20">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Name:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Phone:
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Meet-up Date:
                            <input
                                type="date"
                                value={meetUpDate}
                                onChange={(e) => setMeetUpDate(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Booked Dog Profile ID:
                            <input
                                type="text"
                                value={dogProfileId}
                                onChange={(e) =>
                                    setDogProfileId(e.target.value)
                                }
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Dog Name:
                            <input
                                type="text"
                                value={dogName}
                                onChange={(e) => setDogName(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Location:
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Landmarks:
                            <input
                                type="text"
                                value={landmarks}
                                onChange={(e) => setLandmarks(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Date:
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">
                            Time:
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-200"
                >
                    Book Appointment
                </button>
            </form>
        </div>
    )
}
export default AppointmentForm

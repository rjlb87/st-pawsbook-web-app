import React, { useEffect, useState } from 'react'
import { getAllAppointments } from '../services/AppointmentsService'
// import EditDashboard from './EditDashboard'
import ReactPaginate from 'react-paginate'
import AppointmentsStatus from './AppointmentStatus'

function AppointmentsList() {
    const [appointments, setAppointments] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 5
    const pageCount = Math.ceil(appointments.length / itemsPerPage)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const startIndex = currentPage * itemsPerPage + 1
    const endIndex = startIndex + itemsPerPage

    const currentData = (appointments || []).slice(
        startIndex,
        Math.min(endIndex, appointments.length)
    )

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const owners = await getAllAppointments()
                setAppointments(owners)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchAppointments()
    }, [])

    return (
        <div className="h-screen bg-gray-200 px-4 py-10">
            <div className="flex justify-center items-center uppercase my-5 text-2xl text-gray-800">
                <h1 className="font-bold tracking-wider pb-10 pt-10">
                    Appointments List
                </h1>
            </div>
            <table className=" mx-auto border-collapse">
                <thead>
                    <tr className="bg-gray-800">
                        <th className=" px-6  text-xs font-semibold text-white">
                            #
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Booked Dog ID
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Meet Up Dog ID
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Date
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Location
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Status
                        </th>
                        <th
                            colSpan={2}
                            className="border-gray-300 px-6 py-4 text-xs font-semibold uppercase text-white"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map(
                        (appointments, index) =>
                            appointments && (
                                <tr>
                                    <td className=" border-gray-500 px-6  bg-gray-600 text-center text-white font-semibold">
                                        {startIndex + index}
                                    </td>
                                    <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                        {appointments.booked_dog_profile_id}
                                    </td>
                                    <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                        {appointments.meet_up_dog_profile_id}
                                    </td>
                                    <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                        {appointments.meet_up_date}
                                    </td>
                                    <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                        {appointments.location}
                                    </td>
                                    <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                        {appointments.status}
                                    </td>
                                    <td className="border-gray-500  bg-gray-600">
                                        <td className="flex justify-center group py-4 px-6">
                                            <button className=" bg-gray-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                                <AppointmentsStatus
                                                    key={
                                                        appointments.booked_dog_profile_id
                                                    }
                                                    appointments={appointments}
                                                />
                                            </button>
                                        </td>
                                    </td>
                                </tr>
                            )
                    )}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <nav class="bg-white rounded-lg shadow-md">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={5}
                        containerClassName={'flex'}
                        pageClassName={
                            'flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }
                        activeClassName={'text-blue-700'}
                        previousClassName={
                            'px-4 py-2 text-sm font-medium text-gray-500 bg-white border-gray-300 rounded-l-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }
                        nextClassName={
                            'px-4 py-2 text-sm font-medium text-gray-500 bg-white border-gray-300 rounded-r-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        onPageChange={handlePageClick}
                    />
                </nav>
            </div>
        </div>
    )
}

export default AppointmentsList

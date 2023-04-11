import React, { useEffect, useState } from 'react';
import { getAllOwners } from '../services/UserService';
import EditDashboard from './EditDashboard';


function UserDashboard() {
    const [owners, setOwners] = useState([])
    // const [successModal] = useState('')


    const deleteOwner= async (id) => {
        try {
            alert('Are you sure you want to delete?')
            setOwners(owners.filter((u) => u.id !== id))
        } catch (error) {
            console.error(error.message)
        }
   
    }
    useEffect(() => {
        getAllOwners().then((owners) => {
            setOwners(owners)
        })
    }, [])

    return (
        <div className="bg-white p-10 w-full">
            {/* {successModal && <div>Success Message: {successModal}</div>} */}
            <div className="text-center my-5">
                <p className="font-bold">Owners Dashboard</p>
            </div>
            <div className="flex justify-center">
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="w-[300px]">First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {owners && owners.length > 0 ? (
                            owners.map((owners) => {
                                return (
                                    <tr key={owners.id}>
                                        <td>{owners.id}</td>
                                        <td>{owners.first_name}</td>
                                        <td>{owners.last_name}</td>
                                        <td>{owners.email}</td>
                                        <td>{owners.phone_number}</td>
                                        <td>
                                        </td>
                                        <div>
                                        <td>
                                            <EditDashboard owners={owners}/>
                                            <div className="">
                                            <button
                                                className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => deleteOwner(owners.id)}
                                                >Delete</button>
                                                </div>
                                        </td>
                                        </div>
                                    </tr>
                                )
                            })
                        ) : (
                            <p className="text-center">No records found!</p>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserDashboard
import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/UserService'

function UserDashboard() {
    const [users, setUsers] = useState([])
    // const [successModal, setSuccessModal] = useState('')

    const handleEdit = (user) => {
        // Introduce UserService for Editing or Updating Record
        // editUser(user).then((user) => {
        //     setSuccessModal('User has been created!', user)
        // })
        alert('Editing Now')
    }

    const handleDelete = () => {
        alert('Delete Now')
    }

    useEffect(() => {
        getAllUsers().then((user) => {
            setUsers(user)
        })
    }, [])

    return (
        <div className="bg-green-700 p-10">
            {/* {successModal && <div>Success Message: {successModal}</div>} */}

            <div className="text-center my-5">
                <p className="font-bold">User Dashboard</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    ➕ Add User
                </button>
            </div>
            <div className="flex justify-center">
                <table className="text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="w-[300px]">Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 ? (
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                                onClick={handleEdit}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={handleDelete}
                                            >
                                                Delete
                                            </button>
                                        </td>
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
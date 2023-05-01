import { useState } from 'react'

function DogRegistrationForm() {
    const [formData, setFormData] = useState({
        name: '',
        breed: '',
        age: '',
        color: '',
        size: '',
        dob: '',
        gender: '',
        description: '',
    })
    const [alertMessage, setAlertMessage] = useState('')

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // Here you could send the form data to a server or perform any other necessary action
        setAlertMessage('Dog successfully registered!')
        setFormData({
            name: '',
            breed: '',
            age: '',
            color: '',
            size: '',
            dob: '',
            gender: '',
            description: '',
        })
    }

    return (
        <div className="h-screen bg-gray-600  flex justify-center  items-center">
            <div className="max-w-md mx-auto">
                {alertMessage && (
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                        role="alert"
                    >
                        <strong className="font-bold">{alertMessage}</strong>
                    </div>
                )}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap justify-between"
                >
                    <div className="mb-4 flex-grow w-full md:w-1/3 pr-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="name"
                        >
                            Dog Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter dog name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/3 px-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="color"
                        >
                            Color
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="color"
                            type="text"
                            placeholder="Enter dog color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/3 pl-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="size"
                        >
                            Size
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/3 pr-2">
                        <label
                            className="block text-gray-700 font-boldmb-2"
                            htmlFor="breed"
                        >
                            Breed
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="breed"
                            type="text"
                            placeholder="Enter dog breed"
                            name="breed"
                            value={formData.breed}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/3 px-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="age"
                        >
                            Age
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="age"
                            type="number"
                            placeholder="Enter dog age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/3 pl-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="dob"
                        >
                            Date of Birth
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dob"
                            type="date"
                            placeholder="Enter dog date of birth"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/2 pr-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="ownerName"
                        >
                            Gender
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="gender"
                            type="text"
                            placeholder="Enter dog gender"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 flex-grow w-full md:w-1/2 pl-2">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="dog description"
                        >
                            Description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dog description"
                            type="email"
                            placeholder="Enter dog description"
                            name="dog description"
                            value={formData.ownerEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Register Dog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DogRegistrationForm

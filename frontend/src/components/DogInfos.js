import SideBar from './SideBar'
import { useEffect, useState } from 'react'
import { getAllPublicDogProfiles } from '../services/DogService'
import { createDogs } from '../services/DogService'
import Card from './MainPage'

const Dog_info = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const itemsStorage = localStorage.getItem('data')
                const userData = JSON.parse(itemsStorage)
                console.log('hahahahh ano ka', userData.id)
                const doggo = await getAllPublicDogProfiles(userData.id)
                console.log('hahahah ano laman ni doggo', doggo)
                setDogs(doggo)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchDogs()
    }, [])
    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }
    const onSubmitForm = async (e) => {
        e.preventDefault()

        try {
            console.log('hahaha ano ang data', formData)
            await createDogs(formData)
            // window.location = '/user-dashboard'
            setFormData({
                owner_id: userData.id ? userData.id : '',
                name: '',
                breed: '',
                age: '',
                color: '',
                size: '',
                date_of_birth: '',
                gender: '',
                description: '',
            })
        } catch (error) {
            console.error(error.message)
        }
    }
    const itemsStorage = localStorage.getItem('data')
    const userData = JSON.parse(itemsStorage)
    console.log('ano ang id', userData)
    const [formData, setFormData] = useState({
        owner_id: '',
        image: 'https://images.unsplash.com/photo-1529906920574-628dc1e49f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
        name: '',
        breed: '',
        age: '',
        color: '',
        size: '',
        date_of_birth: '',
        gender: '',
        description: '',
    })
    function handleChange(event) {
        console.log('ano ka', event.target.name)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>
            <div className="flex flex-col bg-gray-800">
                <div className="flex">
                    <SideBar />
                    <div className="flex-1"></div>
                    <div className=" mt-20">
                        {/* <button
                            onClick={toggleModal}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                        ></button> */}

                        <div className="flex flex-row justify-center pl-20">
                            <input
                                className="border border-gray-400 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="bg-gray-500 hover:bg-white hover:text-gray-600 text-white ml-2 py-2 px-4 text-sm rounded-xl">
                                Search
                            </button>
                        </div>
                        <div className="flex justify-center flex-wrap sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-y-10 pt-8 gap-x-40">
                            {dogs.map((card, index) => (
                                <div
                                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:max-w-sm gap-x-6"
                                    key={index}
                                >
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="mt-40 flex items-center justify-center">
                        <div className="bg-teal-600 rounded-lg text-white">
                            <form
                                onSubmit={onSubmitForm}
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
                                        <option value="">
                                            Select dog size
                                        </option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div className="mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
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
                                        htmlFor="date_of_birth"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="date_of_birth"
                                        type="date"
                                        placeholder="Enter dog's date of birth"
                                        name="date_of_birth"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="gender"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Select dog gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-4 flex-grow w-full">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="description"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="description"
                                        placeholder="Enter dog description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-4 w-full flex justify-center">
                                    <div className="text-center">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register Dog
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Dog_info

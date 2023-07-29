import SideBar from './SideBar'
import { useEffect, useState } from 'react'
import { getAllDogs, createDogs } from '../services/DogService'
import Card from './MainPage'
import { useNavigate } from 'react-router-dom'

const Dog_info = () => {
    const [dogs, setDogs] = useState([])
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const doggo = await getAllDogs(
                    JSON.parse(localStorage.getItem('data')).id
                )
                // console.log('hahahah ano laman ni doggo', doggo)
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
            await createDogs(formData)
            // window.location = '/user-dashboard'
            setFormData({
                owner_id: '',
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
        owner_id: userData.id ? userData.id : '',
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

    function handleCancel() {
        setShowModal(false)
    }
    return (
        <>
            <div className="h-screen w-full flex flex-col bg-gray-800">
                <button
                    onClick={toggleModal}
                    className="bg-gray-500 hover:bg-white hover:text-gray-600 text-white font-semibold text-sm py-2 px-4 rounded-xl mt-10"
                >
                    Add your dogs
                </button>

                <div className="flex justify-center flex-wrap sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-y-10 pt-8 gap-x-40">
                    {dogs.map((card, index) => (
                        <div
                            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:max-w-sm"
                            key={index}
                        >
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex py-20 px-40 text-xs items-center justify-center">
                        <div className=" rounded-lg text-white w-1/2">
                            <form
                                onSubmit={onSubmitForm}
                                className="bg-white  shadow-md rounded px-8 text-xs pt-6 pb-8 mb-4 flex flex-wrap justify-between"
                            >
                                <div className="mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="block text-xs text-gray-700 font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Dog Name
                                    </label>
                                    <input
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Enter dog name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className=" mb-4 flex-grow w-full md:w-1/3 px-2 text-xs">
                                    <label
                                        className=" text-xs block text-gray-700 font-bold mb-2"
                                        htmlFor="color"
                                    >
                                        Color
                                    </label>
                                    <input
                                        className=" text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="color"
                                        type="text"
                                        placeholder="Enter dog color"
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className=" text-xs mb-4 flex-grow w-full md:w-1/3 pl-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="size"
                                    >
                                        Size
                                    </label>
                                    <select
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="size"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Size</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="text-xs block text-gray-700 font-bold mb-2"
                                        htmlFor="breed"
                                    >
                                        Breed
                                    </label>
                                    <select
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="breed"
                                        name="breed"
                                        value={formData.breed}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a breed</option>
                                        <option value="Golden Retriever">
                                            Golden Retriever
                                        </option>
                                        <option value="Labrador Retriever">
                                            Labrador Retriever
                                        </option>
                                        <option value="German Shepherd">
                                            German Shepherd
                                        </option>
                                        <option value="Poodle">Poodle</option>
                                        <option value="Bulldog">Bulldog</option>
                                        <option value="Chihuahua">
                                            Chihuahua
                                        </option>
                                        <option value="Dachshund">
                                            Dachshund
                                        </option>
                                        <option value="Boxer">Boxer</option>
                                        <option value="Siberian Husky">
                                            Siberian Husky
                                        </option>
                                        <option value="Doberman Pinscher">
                                            Doberman Pinscher
                                        </option>
                                    </select>
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 px-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="age"
                                    >
                                        Age
                                    </label>
                                    <input
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="age"
                                        type="number"
                                        placeholder="Enter dog age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 pl-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="date_of_birth"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="date_of_birth"
                                        type="date"
                                        placeholder="Enter dog's date of birth"
                                        name="date_of_birth"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="text-xs block text-gray-700 font-bold mb-2"
                                        htmlFor="gender"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                <div className="flex items-center px-2 mt-2">
                                    <input
                                        type="checkbox"
                                        id="vaccinated"
                                        name="vaccinated"
                                        value={formData.description}
                                        class="rounded-full text-primary-600 focus:ring-primary-500 border-gray-300"
                                    ></input>
                                    <label
                                        for="vaccinated"
                                        class="ml-2 text-gray-700"
                                    >
                                        Vaccinated
                                    </label>
                                </div>
                                <div class="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="pcci-registered"
                                        name="pcci-registered"
                                        value={formData.description}
                                        class="rounded-full text-primary-600 focus:ring-primary-500 border-gray-300"
                                    ></input>
                                    <label
                                        for="pcci-registered"
                                        class="ml-2 text-gray-700"
                                    >
                                        PCCI Registered
                                    </label>
                                </div>
                                <div className="text-xs mb-4 w-full flex justify-center pt-10">
                                    <div className="text-center">
                                        <button
                                            className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                        <button
                                            className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                                            type="submit"
                                            onClick={handleCancel}
                                        >
                                            Cancel
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

import { useEffect, useState } from 'react'
import { getAllPublicDogProfiles } from '../services/DogService'
import { createDogs } from '../services/DogService'
import Card from './MainPage'

const Dog_info = () => {
    const [dogs, setDogs] = useState([])

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
        owner_id: userData ? userData.id : '',
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
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const itemsStorage = localStorage.getItem('data')
                const userData = JSON.parse(itemsStorage)
                // console.log('hahahahh ano ka', userData.id)
                const doggo = await getAllPublicDogProfiles(userData.id)
                // console.log('hahahah ano laman ni doggo', doggo)
                setDogs(doggo)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchDogs()
    }, [])
    return (
        <>
            <div className="w-full bg-white pt-20">
                <div className="flex flex-wrap justify-center gap-20 pt-8 pb-10 mx-auto">
                    {dogs.map((card, index) => (
                        <div
                            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-sm"
                            key={index}
                        >
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Dog_info

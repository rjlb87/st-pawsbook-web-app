export async function getAllAppointments() {
    const response = await fetch('/api/v1/appointments')
    return await response.json()
}

export async function editAppointments(booked_dog_profile_id, status) {
    try {
        const response = await fetch('/api/v1/appointments', {
            method: 'PUT',
            body: JSON.stringify({
                appointments: {
                    booked_dog_profile_id,
                    status,
                },
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        return await response.json()
    } catch (error) {
        console.error(error.message)
    }
}

export const createAppointments = async (appointments) => {
    try {
        const response = await fetch('/api/v1/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ appointments }),
        })
        return response.json()
    } catch (error) {
        console.error(error.message)
    }
}

export async function deleteAppointments(id) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const response = await fetch(`/api/v1/owners/${id}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

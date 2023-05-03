export async function getAllAppointments() {
    const response = await fetch('/api/v1/appointments')
    return await response.json()
}

export async function editAppointments(data) {
    const response = await fetch(`/api/v1/appopintments`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owners: data }),
    })
    return await response.json()
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

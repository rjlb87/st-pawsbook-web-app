export async function getAllDogs() {
    const response = await fetch('/api/v1/dogprofiles')
    return await response.json()
}

export async function getAllPublicDogProfiles() {
    const response = await fetch('/api/v1/public-dog-profiles')
    return await response.json()
}

export async function editDogs(data) {
    const response = await fetch(`/api/v1/dogprofiles`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dogprofiles: data }),
    })
    return await response.json()
}

export const createDogs = async (dogprofiles) => {
    try {
        const response = await fetch('/api/v1/dogprofiles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dogprofiles }),
        })
        return response.json()
    } catch (error) {
        console.error(error.message)
    }
}
export async function deleteDogs(id) {
    try {
        const confirmed = window.confirm(
            'Are you sure you want to delete this user?'
        )
        if (confirmed) {
            const response = await fetch(`/api/v1/dogprofiles/${id}`, {
                method: 'DELETE',
            })
            return true
        }
    } catch (error) {
        console.error(error.message)
        throw error
    }
}

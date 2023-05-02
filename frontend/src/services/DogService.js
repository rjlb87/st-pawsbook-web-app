export async function getAllDogs(owner_id) {
    const response = await fetch(`/api/v1/dogprofiles/${owner_id}`)
    return await response.json()
}

export async function getAllPublicDogProfiles(owner_id) {
    const response = await fetch(`/api/v1/public-dog-profiles/${owner_id}`, {
        method: 'GET',
    })
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

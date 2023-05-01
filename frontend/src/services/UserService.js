export async function getAllOwners() {
    const response = await fetch('/api/v1/owners')
    return await response.json()
}

export async function editOwners(data) {
    const response = await fetch(`/api/v1/owners`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ owners: data }),
    })
    return await response.json()
}

export const createOwners = async (owners) => {
    try {
        const response = await fetch('/api/v1/owners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ owners }),
        })
        return response.json()
    } catch (error) {
        console.error(error.message)
    }
}

export async function deleteOwner(id) {
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

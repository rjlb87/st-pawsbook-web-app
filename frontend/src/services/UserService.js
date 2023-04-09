export async function getAllUsers() {
    const response = await fetch('/api/v1/users')
    return await response.json()
}

export async function editUser(data) {
    const response = await fetch(`/api/v1/users`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: data }),
    })
    return await response.json()
}

export async function deleteUser(id) {}
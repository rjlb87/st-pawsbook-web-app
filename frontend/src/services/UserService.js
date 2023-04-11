export async function getAllOwners() {
    const response = await fetch('/api/v1/owners')
    return await response.json()
}

export async function editOwners(data) {
    const response = await fetch(`/api/v1/owners`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "owners": data }),
    })
    return await response.json()
}

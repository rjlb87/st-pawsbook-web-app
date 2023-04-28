export const ownerSignin = async (owners) => {
    try {
        const response = await fetch('/api/v1/Signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(owners),
        })
        console.log('HAHAHAHHA hotdog', response)
        return await response.json()
    } catch (error) {
        console.error(error.message)
    }
}

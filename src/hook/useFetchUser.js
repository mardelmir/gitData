import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../redux/userSlice.js'

export const useFetchUser = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(url)
                if (response.status === 404) {
                    setError('Usuario no encontrado')
                    return;
                } else {
                    if (!response.ok) { throw new Error('Error al obtener datos de la API') }
                    const userData = await response.json()
                    dispatch(updateUser(userData))
                    setError(null)
                    setLoading(false)
                }
            }
            catch (error) { console.error(error) }
        }
        fetchUserData()
    }, [url])

    return { loading, error }
}
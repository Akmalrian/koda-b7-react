import { useEffect, useState } from "react"

/**
 * 
 * @param {string} url 
 */

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error("Gagal mengambil data dari server")
                }
                const result = await response.json()
                setData(result);
                setError(null);
            }
            catch (err) {
                setError(err.message)

            }
            finally {
                setLoading(false);
            }
        };
        if (url) {
            fetchData()
        }
    }, [url])
    return { data, loading, error }
}

export default useFetch
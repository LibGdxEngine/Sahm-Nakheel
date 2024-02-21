import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const defaultOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const requestOptions = { ...defaultOptions, ...options };

        // Allow headers from options to override default headers
        requestOptions.headers = {
            ...defaultOptions.headers,
            ...options.headers,
        };

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, requestOptions);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]); // Ensure effect is re-run if URL changes

    return { data, loading, error };
}

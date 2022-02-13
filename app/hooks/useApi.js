import { useState } from "react";

export default useApi = (apiCall) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            const response = await apiCall(...args);
            setError(!(response.status === 200))
            setData(response.data)
            setLoading(false)
            return response;
        } catch (error) {
            console.log(err)
            setError(error)
        }
        setLoading(false)
    };

    return { data, error, loading, request };
};

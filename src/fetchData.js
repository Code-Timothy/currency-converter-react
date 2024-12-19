export const fetchData = async (apiUrl) => {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return {
            rates: data.data,
            date: data.meta.last_updated_at,
            status: "success",
        };
    } catch {
        return {
            status: "error",
        };
    }
};
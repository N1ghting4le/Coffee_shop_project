export const useHttp = () => {
    const request = async (url) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            return await response.json();
        } catch (e) {
            throw e;
        }
    };

    return {request}
};
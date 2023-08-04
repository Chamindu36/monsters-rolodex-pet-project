
// using a generic to retrieve the data from the api service
export const getData = async <T> (url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}
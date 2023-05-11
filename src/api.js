
const API_DNS = 'https://api.storerestapi.com'

export const getData = async(path) => {
    try {
        let url = API_DNS + path
        const res = fetch(url)

        return (await res).json()
        
    } catch(err) {
        console.log('error API: ', err);
    }
}

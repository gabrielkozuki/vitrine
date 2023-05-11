import axios from 'axios'

API_DNS = 'https://fakestoreapi.com/'

export const getProducts = async(path) => {
    try {
        let url = API_DNS + path
        const res = fetch(url)

        return (await res).json()
        
    } catch(err) {
        console.log('error API: ', err);
    }
}

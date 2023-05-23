// API Doc - https://rapidapi.com/apidojo/api/unofficial-shein/

const API_DNS = 'https://api.storerestapi.com' // https://unofficial-shein.p.rapidapi.com
const LOCATION = '&language=pt&country=BR&currency=BRL'

export const getData = async(path) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5d374b6c22msh3872533098cbb45p132882jsn9f8bda8e7e07',
            'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
        }
    };

    try {
        let url = API_DNS + path
        const res = fetch(url)

        return (await res).json()
        
    } catch(err) {
        console.log('error API: ', err);
    }
}

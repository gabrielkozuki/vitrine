import axios from 'axios'

async function pegarDados(){
    const options = {
        method: 'GET',
        url: 'https://unofficial-shein.p.rapidapi.com/products/search',
        params: {
            keywords: 'Computer Bags For Women',
            language: 'en',
            country: 'US',
            currency: 'USD',
            sort: '7',
            limit: '20',
            page: '1'
        },
        headers: {
            'X-RapidAPI-Key': '5d374b6c22msh3872533098cbb45p132882jsn9f8bda8e7e07',
            'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export { pegarDados };
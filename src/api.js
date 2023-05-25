const URL = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';
const API_KEY = '5d374b6c22msh3872533098cbb45p132882jsn9f8bda8e7e07';
const API_HOST = 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com';

const getData = async (stringUrl) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    };
    
    try {
        const response = await fetch(stringUrl, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export const getCategorias = async () => {
    const stringUrl = `${URL}/categories/list?lang=en&country=us`;
    return getData(stringUrl);
}

export const listCategoria = async (categoria) => {
    const stringUrl = `${URL}/products/list?country=us&lang=en&currentpage=0&pagesize=20&categories=${categoria}`;
    return getData(stringUrl);
}

export const getProduto = async (id_produto) => {
    const stringUrl = `${URL}/products/detail?lang=en&country=us&productcode=${id_produto}`;
    return getData(stringUrl);
}
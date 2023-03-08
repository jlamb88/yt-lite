import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: 50
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,//'913df6397fmsh03cd288e42a6810p17e0eejsnef8826802277',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}
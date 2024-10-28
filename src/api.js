import axios from 'axios';

const screatKey = process.env.REACT_APP_API_ACCESS_KEY;

const instance = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: screatKey
    }
})

export default instance;
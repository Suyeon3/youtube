import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResultS: 5,
        key: 'AIzaSyAX2mAa-u5-X_ZCLyJvVERjak-WTjCgvkM'
    }
})

export default instance;
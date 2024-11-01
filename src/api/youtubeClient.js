import axios from 'axios';

const screatKey = process.env.REACT_APP_API_ACCESS_KEY;

export default class YoutubeClient {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: {
                part: 'snippet',
                maxResults: 10,
                key: screatKey
            }
        });
    }

    async search(params) {
        return this.httpClient.get('search', params);
    }

    async videos(params) {
        return this.httpClient.get('videos', params);
    }

    async select(params) {
        return this.httpClient.get('videos', params);
    }
}
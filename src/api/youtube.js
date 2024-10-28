import axios from 'axios';

const screatKey = process.env.REACT_APP_API_ACCESS_KEY;

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: {
                part: 'snippet',
                maxResults: 10,
                key: screatKey
            }
        })
    }

    async mostPopular() {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'KR'
            }
        })
        return response.data.items;
    }

    async searchByKeyword(keyword) {
        const response = await this.httpClient.get('/search', {
            params: {
                q: `${keyword}`,
            },
        });
        return response.data.items;
    }

    async select(vi) {
        const response = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: vi
            }
        });
        return response.data.items;
    }
}
import axios from 'axios';

export default class FakeYoutubeClient {
    async search() {
        return axios.get('/videos/search.json');
    }

    async videos() {
        return axios.get(`/videos/popular.json`);
    }

    async select() {
        return axios.get('/videos/selected.json');
    }
}
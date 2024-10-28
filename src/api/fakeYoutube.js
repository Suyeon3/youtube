import axios from 'axios';

export default class FakeYoutube {
    constructor() {

    }

    async mostPopular() {
        const response = await axios.get(`/videos/popular.json`);
        return response.data.items;
    }

    async searchByKeyword(keyword) {
        const response = await axios.get('/videos/search.json');
        return response.data.items;
    }

    async select(vi) {
        const response = await axios.get('/videos/selected.json');
        console.log(response.data.items);
        return response.data.items;
    }
}
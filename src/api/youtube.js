export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async mostPopular() {
        const response =
            await this.apiClient
                .videos({
                    params: {
                        part: 'snippet,contentDetails,statistics',
                        chart: 'mostPopular',
                        regionCode: 'KR'
                    }
                });
        return response.data.items;
    }

    async searchByKeyword(keyword) {
        const response =
            await this.apiClient
                .search({
                    params: {
                        q: `${keyword}`
                    },
                });
        return response.data.items;
    }

    async select(vi) {
        const response =
            await this.apiClient
                .select({
                    params: {
                        part: 'snippet,contentDetails,statistics',
                        id: vi
                    }
                });
        return response.data.items;
    }
}
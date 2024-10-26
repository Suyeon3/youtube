import { useLoaderData } from "react-router-dom";
import api from '../api';
import { useEffect, useState } from "react";

export const loader = async ({ params }) => {
    try {
        const response = await api.get('/search', {
            params: {
                q: `${params.keyword}`,
            },
        });
        return response.data.items;
    } catch (error) {
        console.log(`Error Seraching Videos: ${error}`);
        return null;
    };
}

export default function SearchResults() {
    const [videos, setVideos] = useState([]);
    const results = useLoaderData();

    useEffect(() => {
        if (results) {
            setVideos(results);
        };
    }, [results]);

    return (
        <ul>
            {videos.map((video) => (
                <li key={video.id.videoId}>
                    <img
                        src={video.snippet.thumbnails.medium.url}
                    />
                    <p>{video.snippet.title}</p>
                </li>
            ))}
        </ul>
    )
}

import { useLoaderData } from "react-router-dom";
import api from '../api';
import { useState, useEffect } from "react";

export const loader = async () => {
    try {
        const response = await api.get('/videos', {
            params: {
                part: 'snippet, contentDetails, statistics',
                chart: 'mostPopular',
                regionCode: 'US'
            },
        });
        return response.data.items;
    } catch (error) {
        console.log(`Error Listing Videos: ${error}`);
        return null;
    };
}

export default function MainList() {
    const [videos, setVideos] = useState([]);
    const results = useLoaderData();

    useEffect(() => {
        if (results) {
            console.log(results);
            setVideos(results);
        }
    }, [results]);

    return (
        <ul>
            {videos.map((video) => (
                <li key={video.id}>
                    <img 
                        src={video.snippet.thumbnails.medium.url}
                    />
                    <p>{video.snippet.title}</p>
                </li>
            ))}
        </ul>
    )
}
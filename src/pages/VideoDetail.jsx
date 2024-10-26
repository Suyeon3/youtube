import api from '../api';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ params }) => {
    try {
        const response = await api.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: params.vi
            }
        });
        console.log(params.vi);
        return response.data.items;
    } catch (error) {
        console.log(`Error Playing Video: ${error}`);
        return null;
    };
}

export default function VideoDetail() {
    const [video, setVideo] = useState([]);
    const result = useLoaderData();

    useEffect(() => {
        console.log(`result: ${result[0].id}`);
        if (result[0]) {
            console.log(`result: ${result[0].id}`);
            setVideo(result[0]);
        }
    }, [result]);

    const iframeProps = {
        id: "ytplayer",
        type: "text/html",
        width: "720",
        height: "405",
        src: `https://www.youtube.com/embed/${video.id}`,
        frameborder: "0",
        allowfullscreen: 'allowfullscreen'
    }

    return (
        
        <div>
            {video.id && (
            <iframe {...iframeProps}></iframe>
            )}
        </div>
    )
}
import { useQuery } from '@tanstack/react-query';
import FakeYoutube from '../api/fakeYoutube';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
    const { vi } = useParams();
    const { isLoading, error, data: video } = useQuery({
        queryKey: ['video'],
        queryFn: () => {
            const youtube = new FakeYoutube();
            return youtube.select(vi);
        }
    })

    const iframeProps = {
        id: "ytplayer",
        type: "text/html",
        width: "720",
        height: "405",
        src: `https://www.youtube.com/embed/${vi}`,
        frameborder: "0",
        allowfullscreen: 'allowfullscreen'
    }

    return (
        <>
            {isLoading && (<p>isLoading..</p>)}
            {error && (<p>something is wrong..</p>)}
            {video && (
                <div>
                    {video && (
                        <iframe {...iframeProps}></iframe>
                    )}
                </div>
            )}
        </>


    )
}
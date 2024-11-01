import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import FakeYoutube from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function MainList() {
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: videos } = useQuery({
        queryKey: ['videos'],
        queryFn: () => youtube.mostPopular()
    })
    const navigate = useNavigate();

    const clickVideo = (vi) => {
        navigate(`watch/${vi}`);
    }

    return (
        <>
            {isLoading && (<p>isLoading..</p>)}
            {error && (<p>something is wrong..</p>)}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <li key={video.id}>
                            <img
                                src={video.snippet.thumbnails.medium.url}
                                onClick={() => clickVideo(video.id)}
                            />
                            <p onClick={() => clickVideo(video.id)}>{video.snippet.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
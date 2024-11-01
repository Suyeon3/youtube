import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FakeYoutube from "../api/fakeYoutube";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function SearchResults() {
    const { keyword } = useParams()
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: videos } = useQuery({
        queryKey: ['videos'],
        queryFn: () => youtube.searchByKeyword(keyword)
    })

    return (
        <>
            {isLoading && (<p>isLoading..</p>)}
            {error && (<p>something is wrong..</p>)}
            {videos && (
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
            )}
        </>

    )
}

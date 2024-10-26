import { Outlet } from "react-router-dom"
import SearchHeader from "../components/SearchHeader"

export default function Home() {
    return (
        <>
            <SearchHeader />
            <div className="main">
                <Outlet />
            </div>
        </>
    )
}
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import SearchResults, { loader as searchLoader } from './pages/SearchResults';
import MainList, { loader as mainLaoder } from './pages/MainList';
import VideoDetail, { loader as videoDetailLoader } from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <MainList />,
        loader: mainLaoder
      },
      {
        path: 'results/:keyword',
        element: <SearchResults />,
        loader: searchLoader,
      },

      {
        path: 'watch/:vi',
        element: <VideoDetail />,
        loader: videoDetailLoader
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

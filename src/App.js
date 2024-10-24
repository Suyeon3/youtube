import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home';
import SearchResults, { loader as searchLoader } from './components/SearchResults';
import MainList, { loader as mainLaoder } from './components/MainList';
import VideoDetail, { loader as videoDetailLoader } from './components/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'results/:keyword',
        element: <SearchResults />,
        loader: searchLoader,
      },
      {
        path: '',
        element: <MainList />,
        loader: mainLaoder
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

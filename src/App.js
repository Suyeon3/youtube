import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home';
import SearchResults, { loader as searchLoader } from './components/SearchResults';
import MainList, { loader as mainLaoder } from './components/MainList';

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

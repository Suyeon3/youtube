import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './components/Home';
import SearchResults, { loader as searchLoader } from './components/SearchResults';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'results/:keyword',
        element: <SearchResults />,
        loader: searchLoader,
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

import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Outlet } from "react-router-dom"
import SearchHeader from "./components/SearchHeader"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <SearchHeader />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;

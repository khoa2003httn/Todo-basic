import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddItemPage from './component/Additem';
import HomePage from './component/HomePage';
import { ItemProvider } from './component/ItemContext';

function App() {
  return (
    <ItemProvider>
      <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <nav className="mb-8">
          <div className="flex justify-center space-x-8">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/add"
              className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition duration-200"
            >
              Add Item
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddItemPage />} />
        </Routes>
      </div>
    </ItemProvider>
  );
}

export default App;

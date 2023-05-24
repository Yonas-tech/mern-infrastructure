import './App.css';
import { useState } from 'react';
import NewOrderPage from './pages/NewOrder/NewOrderPage';
import AuthPage from './pages/Auth/AuthPage';
import { Routes, Route } from 'react-router-dom';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';
import NavBar from './components/NavBar';

function App() {

  const [user, setUser] = useState(null);


  return (
    <main className="App">
      {user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>

  );
}

export default App;

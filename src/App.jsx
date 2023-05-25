import './App.css';
import { useState } from 'react';
import NewOrderPage from './pages/NewOrder/NewOrderPage';
import AuthPage from './pages/Auth/AuthPage';
import { Routes, Route } from 'react-router-dom';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';

import { getUser } from './utilities/users-service';

function App() {

  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>

  );
}

export default App;

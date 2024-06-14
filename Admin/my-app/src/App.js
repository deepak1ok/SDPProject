import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './Admin/Admin';
import Users from './Admin/Users';
import NGO from './Admin/NGO';
import Donations from './Admin/Donations';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Admin />} />
          <Route path='/admin/users' exact element={<Users></Users>} />
          <Route path='/admin/ngo' exact element={<NGO></NGO>} />
          <Route path='/admin/donations' element={<Donations></Donations>} />

        </Routes>
          </BrowserRouter>

  );
}

export default App;

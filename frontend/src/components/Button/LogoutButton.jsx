import {React,useContext} from 'react'
import {useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

function LogoutButton() {

  const navigate=useNavigate();
  const{setUser}=useContext(UserContext);

    function handleLogout()
    {
        localStorage.removeItem('token');
        setUser(null);
        
        navigate('/')
    }

  return (
   
    <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <Link to="/profile">
          Profile
        </Link>
      </li>
      <li><a>Settings</a></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </div>
  )
}

export default LogoutButton

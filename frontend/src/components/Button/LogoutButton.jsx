import {React,useContext} from 'react'
import {useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';

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
   
    <button className="btn btn-outline btn-error w-48 h-12 text-xl" onClick={handleLogout} style={{height:'50px'}}>
      <i class="fa fa-angle-double-left" style={{fontSize:"24px"}}></i> Logout
    </button>
  )
}

export default LogoutButton

import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);

    navigate("/");
  }

  return (
    <div className='dropdown dropdown-end' style={{ marginLeft: "1em" }}>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost btn-circle avatar'
      >
        <div className='w-10 rounded-full'>
          <img
            alt='Tailwind CSS Navbar component'
            src='https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg'
          />
        </div>
      </div>
      <ul
        style={{ width: "18em", height: "11em", left: "-120px" }}
        tabIndex={0}
        className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
      >
        <li style={{ height: "3em" }}>
          {user.role === "donor" && (
            <Link
              style={{ height: "1.5em", fontSize: "14px", display: "flex" }}
              to='/profile'
            >
              Profile
            </Link>
          )}
          {user.role === "ngo" && (
            <Link
              style={{ height: "1.5em", fontSize: "14px", display: "flex" }}
              to='/ngoprofile'
            >
              Profile
            </Link>
          )}
        </li>
        
        <li style={{ height: "3em" }}>
          <button
            style={{ height: "1.5em", fontSize: "14px", display: "flex" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LogoutButton;

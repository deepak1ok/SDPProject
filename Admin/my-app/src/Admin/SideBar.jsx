import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import Logo from "../Images/Logo/logo.png";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id='sidebar'
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={Logo} style={{ height: "70px", width: "70px" }}></img>{" "}
          FoodShare
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
        <Link to='/'>
          <li className='sidebar-list-item'>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </li>
        </Link>
        <Link to='/admin/users'>
          <li className='sidebar-list-item'>
            <BsFillArchiveFill className='icon' /> Users
          </li>
        </Link>
        <Link to='/admin/donations'>
          <li className='sidebar-list-item'>
            <BsFillGrid3X3GapFill className='icon' /> Donations
          </li>
        </Link>
        <Link to='/admin/ngo'>
          <li className='sidebar-list-item'>
            <BsPeopleFill className='icon' /> Non Governmental Organization
          </li>
        </Link>
        {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}
      </ul>
    </aside>
  );
}

export default Sidebar;

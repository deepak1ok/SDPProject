import { useState,React } from 'react'
import './style.css'
import Header from './Header'
import Sidebar from './SideBar'
import Home from './Home'
import Users from './Users'

function Admin() {
const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (

    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    
  )
}

export default Admin

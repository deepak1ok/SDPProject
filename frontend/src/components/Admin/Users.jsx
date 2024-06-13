import React,{useState,useEffect} from 'react'
import SideBar from './SideBar'
import Header from './Header'
import axios from 'axios';

function Users() {

const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
const [users,setUsers]=useState([]);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  const allUsers=async ()=>
    {
        const res=await axios.get('http://localhost:3000/api/admin/allusers')

        setUsers(res.data.data);

    }

    const removeUser=async (e,id)=>
        {
           const res=await axios.post('http://localhost:3000/api/admin/removeuser',{id:id});

           console.log(res);
    
        }
    

    useEffect(()=>
    {
        allUsers();
    },[])

  return (
    <>
    
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div style={{width:'100%',border:'2px solid black'}}>
      <table
          style={{
            borderCollapse: "flex",
            width: "100%",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#24a19b",
                color: "white",
                fontSize: "15px",
              }}
            >
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody
            style={{
              backgroundColor: "#dbdb",
              color: "black",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            {users.map((d, i) => (
              <tr key={i}>
                <td>{d.fname}</td>
                <td>{d.lname}</td>
                <td>{d.email}</td>
                <td>
                    <button onClick={(e)=>removeUser(e,d._id)}>Remove</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
    </>
    
  )
}

export default Users

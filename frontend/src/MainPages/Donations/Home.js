import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import "../Donations/Donations.css";

function Home() {
  const [donationList, setDonationList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    const data=await axios
      .get("http://localhost:3000/api/donation/donationlist")
      .then((res) => {
        console.log(res.data);
        setDonationList(res.data.donationLists);
      })
      .catch((err) => {
        console.log(err);
      });
      

      
  };

  useEffect(() => {
    getData();
  }, []);

  // function handleDelete(id) {
  //   const confirm = window.confirm("Are you sure you want to Delete?");
  //   if (confirm) {
  //     axios
  //       .post("http://localhost:3000/api/donate/delete/" + id)
  //       .then((res) => {
  //         alert("Record Deleted Successfully!");
  //         getData();
  //       });
  //   }
  // }

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location = "/";
  // };

  const searchProperties = [
    "name",
    "organizationname",
    "address",
    "mealtype",
    "foodname",
    "pickupdate",
    "needy_people_organization.organization_name",
  ];

  // const filteredData = data.filter((item) =>
  //   searchProperties.some((prop) => {
  //     const propValue = getProperty(item, prop);
  //     if (propValue && typeof propValue === "string") {
  //       return propValue.toLowerCase().includes(searchTerm.toLowerCase());
  //     }
  //     return false;
  //   })
  // );

  // Helper function to access nested properties
  // function getProperty(obj, prop) {
  //   const propParts = prop.split(".");
  //   return propParts.reduce(
  //     (result, currentProp) => result && result[currentProp],
  //     obj
  //   );
  // }

  return (
    <div>
      <div>
     <NavBar></NavBar>
     </div>
      <div>
        <h1>Food Donations</h1>
        <br />
        <button
          style={{
            backgroundColor: "#FF9F29",
            color: "white",
            marginRight: "10px",
            width: "8%",
            height: "25px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          <Link
            to='/create-donation'
            style={{ textDecoration: "none", color: "white" }}
          >
            + Donate Food
          </Link>
          <br />
        </button>
        <br />
        <br />
        <input
          type='text'
          placeholder='Search (Name, Organization name, Adddress, Meal Type, Food, Date, Neeedy People) '
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ marginBottom: "10px", width: "28%", height: "25px" }}
        />
        <button
          type='button'
          style={{
            backgroundColor: "#24a19b",
            color: "white",
            marginLeft: "20px",
            width: "8%",
            height: "25px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Search
        </button>
        <Link to='/main'>
          <button
            type='button'
            style={{
              backgroundColor: "#24a19b",
              color: "white",
              marginLeft: "800px",
              width: "8%",
              height: "25px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Home
          </button>
        </Link>
        <br />
        <br />
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
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Meal Type</th>
              <th>Donate Request Date</th>
              <th>Donate Status</th>
              
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
            {donationList.map((d, i) => (
              <tr key={i}>
                <td>{d.firstName}</td>
                <td>{d.address}</td>
                <td>{d.phoneNumber}</td>
                <td>{d.email}</td>
                <td>{d.mealtype}</td>
                <td>{d.date}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Home;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

import "../Donations/Donations.css";

function DonationList() {
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

  console.log(donationList)

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
        <h1 style={{textAlign:'center'}}>Food Donations List</h1>
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
              <th>Donate Request Date</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
              
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
                <td>{new Date(d.date).toLocaleDateString()}</td>
                <td>{d.city}</td>
                <td>{d.state}</td>
                <td><Link to={`aboutdonation/${d._id}`}>View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DonationList;

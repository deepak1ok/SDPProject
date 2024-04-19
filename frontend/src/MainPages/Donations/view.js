import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Donations/Donations.css";

function View() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    await axios
      .get("http://localhost:3000/api/donate")
      .then((res) => {
        console.log(res.data.response);
        setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const searchProperties = [
    "name",
    "organizationname",
    "address",
    "mealtype",
    "foodname",
    "pickupdate",
    "needy_people_organization.organization_name",
  ];

  const filteredData = data.filter((item) =>
    searchProperties.some((prop) => {
      const propValue = getProperty(item, prop);
      if (propValue && typeof propValue === "string") {
        return propValue.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  // Helper function to access nested properties
  function getProperty(obj, prop) {
    const propParts = prop.split(".");
    return propParts.reduce(
      (result, currentProp) => result && result[currentProp],
      obj
    );
  }
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Welcome to Foodshare</h1>
        <Link to='/login'>
          <button className={styles.white_btn}>Sign In</button>
        </Link>
      </nav>

      <div>
        <h1>On Going Food Donations</h1>
        <br />
        <br />
        <br />
        <input
          type='text'
          placeholder='Search (Neeedy People, Name, Food, Date) '
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
              <th>Organization Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Meal Type</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Other Donations</th>
              <th>Donate Date</th>
              <th>Needy People Organization</th>
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
            {filteredData.map((d, i) => (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.organizationname}</td>
                <td>{d.address}</td>
                <td>{d.phone}</td>
                <td>{d.email}</td>
                <td>{d.mealtype}</td>
                <td>{d.foodname}</td>
                <td>{d.quantity}</td>
                <td>{d.additionaldonateitems}</td>
                <td>{d.pickupdate}</td>
                <td>{d.needy_people_organization.organization_name}</td>
                <br />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default View;

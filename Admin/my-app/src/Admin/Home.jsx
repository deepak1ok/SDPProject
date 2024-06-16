import React, { useEffect, useState } from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import axios from "axios";

function Home() {
  const [state, setState] = useState({
    countNgo: 0,
    countDonations: 0,
    countUsers: 0,
    pendingDonations: 0,
    successfullDonation: 0,
  });

  useEffect(() => {
    totalInfo();
  }, []);

  const totalInfo = async () => {
    const res = await axios.get("http://localhost:3000/api/admin/totalInfo");

    setState({
      countNgo: res.data.countNgo,
      countDonations: res.data.countDonations,
      countUsers: res.data.countUsers,
      pendingDonations: res.data.pendingDonations,
      successfullDonation: res.data.successfullDonation,
    });
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Users</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{state.countUsers}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total NGO's</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{state.countNgo}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Total Donations</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{state.countDonations}</h1>
        </div>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Pending Donations</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{state.pendingDonations}</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>Sucessfull Donations</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{state.successfullDonation}</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;

import React, { useEffect, useState } from 'react'
import Buttons from './Buttons';
import PopUpForm from './PopUpForm';
import axios from "axios";
import Navbar from './Navbar';
import BtnList from './BtnList';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isRefresh, setRefresh] = useState(false);
  const fetchNames = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:4000/api/webhook/get", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
    console.log(':::res', res);
    setData(res?.data)
  }
  const handleSubmit = () => {
    setRefresh(!isRefresh);
  }
  const handleRefresh = () => {
    console.log('handleDelete:::');
    setRefresh(!isRefresh);
  }
  //use Effect
  useEffect(() => {
    fetchNames();
  }, [isRefresh]);
  return (
    <>
      <Navbar />
      <PopUpForm onSubmit={handleSubmit} />
      {/* {data ? <Buttons data={data} onDelete={handleDelete} /> : ""} */}
      <BtnList data={data} onRefresh = {handleRefresh}/>
    </>
  )
}

export default Dashboard

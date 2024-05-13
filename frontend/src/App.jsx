import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import SummaryApi from "./api";
import Context from "./context";


function App() {
  const fetchUserDetails=async()=>{
    const dataResponse=await fetch(SummaryApi.current_user,{
      method:SummaryApi.current_user.method,
      credentials:"include"
    })
    const dataApi=await dataResponse.json()
    console.log("data-user:",dataResponse)
  }
  useEffect(()=>{

  },[])

  return (
    <>
      <Context.Provider value={{
          fetchUserDetails//user details fetch
      }}>
        <ToastContainer />
        <Header/>
        <Outlet/>
        <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;

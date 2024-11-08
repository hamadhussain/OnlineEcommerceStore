'use client'
// import Image from "next/image";
import Page from "./Client/Home/page";
// import axios from "axios";
// import Page from "./Client/Admin/page";
import { useEffect, useState } from 'react';

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/Server/ProductDetials');
  //       const data = await response.json();

  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
        
  //     } 
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <Page />
    </>
  );
}

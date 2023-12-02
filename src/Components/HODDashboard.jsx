import React, { useEffect } from "react";
import customRequest from "./customrequest";

function HODDashboard() {
  // useEffect(() => {
  //   fetchData();
  // }, []); 

  // async function fetchData() {
  //   try {
      
  //     const response = await customRequest.get("url for getting data");

  //     console.log(response.data);
  //     const data = response.data;

      
  //   } catch (error) {
  //     console.log(error);
     
  //   }
  // }

  return (
    <>
      <div
        className="grid h-screen bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        }}
      >
      <div className="h-20 bg-white opacity-40">Hello</div>
      </div>
    </>
  );
}

export default HODDashboard;

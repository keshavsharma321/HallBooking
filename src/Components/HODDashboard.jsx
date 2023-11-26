import React from "react";
import axios from "axios";

function HODDashboard(){
  axios.get("url for getting data",{
    
  })
  .then((response)=>{console.log(response.data)
  const data = response.data;
  })
  .catch((error)=>{console.log(error)})

    return(
        <>
             
        <div
        className=" grid h-screen bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        }}
      >
       
      </div>
      
      
        </>
    )
}

export default HODDashboard;
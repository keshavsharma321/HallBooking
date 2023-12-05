import React, { useEffect, useState } from "react";
import customRequest from "./customrequest";
// import { Link } from "react-router-dom";


function HodNBookings() {
  const [data , setData] = useState([])
  const [remark , setremark]=useState('')
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await customRequest.get(
        "http://10.21.85.94:8000/api/hodbookings/"
      );

      console.log(response.data);
      const data = response.data;
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  function Accept(id){
    console.log(id)
    console.log(remark)
    try {
      const response =  customRequest.put(
        "http://10.21.85.94:8000/api/hod/"+id+"/",{ hod_approval_status:1, hod_remark:remark}
      );
    } catch (error) {
      console.log(error);
    }
  };
   function Reject(id){
    console.log(id)
    console.log(remark)
    try {
      const response =  customRequest.put(
        "http://10.21.85.94:8000/api/hod/"+id+"/",{ hod_approval_status: 0 , hod_remark:remark }
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="grid h-screen bg-center text-white bg-black"
        // style={{
        //   backgroundImage:
        //     // "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        // }}
      >
       

<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Employe</th> */}
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">From Date</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">To Date</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">ParticipantCount</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Hall</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Hod Remark</th>
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Purpose</th> */}
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">HodApproval</th> */}
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">HodRemark</th> */}
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Employe Remark</th>
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">HoD Status Date</th> */}
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Submit Date</th> */}
              {/* <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Employee Details</th> */}
            </tr>
          </thead>
          <tbody>{
                    data.map((user)=>{
                        return <tr key={user.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                            {/* <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.employee}</td> */}
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.from_date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.to_date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.participants_count}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.hall}</td>
                            <td value={remark} className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-black-200" onChange={(e)=>setremark(e.target.value)} ><input></input></td>
                            {/* <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.purpose}</td> */}
                            {/* <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.hod_approval_status}</td> */}
                            {/* <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.hod_remark}</td> */}
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.employee_remark}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.hod_status_date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.submit_date}</td>
                            {/* <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.employee_details}</td> */}
                            <td className="px-6 py-4 whitespace-nowrap text-end text-xs font-medium">
                <button  type="button" className="inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={()=>Accept(user.id)}>Accept</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-xs font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={()=>Reject(user.id)}>Reject</button>
              </td>
            </tr> 
          })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default  HodNBookings;

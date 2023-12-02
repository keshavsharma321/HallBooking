import React, { useEffect, useState } from "react";
import customRequest from "./customrequest";
// import { Link } from "react-router-dom";


function AONBookings() {
  const [data , setData] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await customRequest.get(
        "http://10.21.83.191:8000/api/aobookings/"
      );

      console.log(response.data);
      const data = response.data;
      setData(response.data);
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
        <table>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Participant Count</th>
                    <th>Hall</th>
                    <th>Purpose</th>
                    <th>HoD Approval </th>
                    <th>HoD Remark</th>
                    <th>Employe Remark</th>
                    <th>HoD Status Date</th>
                    <th>Submit Date</th>
                    <th>Employee Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user,index)=>{
                        return<tr key={index}>
                            <td>{user.employee}</td>
                            <td>{user.from_date}</td>
                            <td>{user.to_date}</td>
                            <td>{user.participants_count}</td>
                            <td>{user.hall}</td>
                            <td>{user.purpose}</td>
                            <td>{user.hod_approval_status}</td>
                            <td>{user.hod_remark}</td>
                            <td>{user.employee_remark}</td>
                            <td>{user.hod_status_date}</td>
                            <td>{user.submit_date}</td>
                            <td>{user.employee_details}</td>
                            <td><button className="text-white  bg-blcack h-8 rounded-md w-16">Accept</button></td>
                            <td><button className="text-white  bg-blcack h-8 rounded-md w-16">Reject</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    </>
  );
}

export default  AONBookings;

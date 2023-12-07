import React, { useEffect, useState } from "react";
import customRequest from "./customrequest";


function Update() {
  const [data , setData] = useState([])
  // const[images , setvalues] = useState([])
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await customRequest.get(
        "/api/aohalls"
      );
      const keshav = response.data;
      console.log(keshav);
      console.log(response.data)
      console.log(keshav.length);
      setData(response.data);
    }catch (error) {
      console.log(error);
    }
  }

  function upt(id){
    console.log(id)
    try {
      const response =  customRequest.put("/api/conference-ao/",{})
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="grid h-screen bg-center text-white bg-black"
      >

       
<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
          <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Halls</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Images</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
                    data.map((user)=>{
                        return <tr key={user.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.description}</td>
                            {/* <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.images.map((value)=>{ return <div key={value.id}><image alt="new" src={value.image}/></div>})}</td> */}
                            <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-800 dark:text-gray-200">{user.images.map((value)=>{ return <div key={value.id}>{value.image}</div>})}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-xs font-medium">
                <button  type="button" className="inline-flex items-center 
                 text-xs font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={()=>upt(user.id )}>Edit</button>
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

export default  Update;

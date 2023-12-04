import React, { useState } from 'react';
import customRequest from './customrequest';

function AODashboard() {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Occupancy, setOccupancy] = useState('');
  const [DaysLimit, setDaysLimit] = useState('');

   function send() {
    console.log(Name, Description, Occupancy, DaysLimit);

    try {
     
      const response = customRequest.post('http://10.21.80.52:8000/api/add/', {
        name: Name,
        description: Description,
        eligible_occupancy: Occupancy,
        booking_days_limit: DaysLimit,
      });

      console.log(response);
      Name="";
      Description="";
      Occupancy="";
      DaysLimit="";
      
    } catch (error) {
      console.log(error);
     
    }
  }

  return (
    <>
      <div
        className="grid h-screen bg-center items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        }}
      >
        <div className='text-center text-black bg-white h-4/5 w-4/5 opacity-50 ml-32'>
          <br></br>
          <h1 className='text-3xl mt-8'>Add Conference Hall</h1>
          <br></br>
          <br></br>
          <br></br>
          <div className='flex ml-40'>
            <div>
              <label className='text-xl'>Name :</label>
              <input
                type='text'
                className='border-2 border-black rounded'
                value={Name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className='ml-32'>
              <label className='text-xl'>Description :</label>
              <input
                className='border-2 border-black rounded'
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className='flex ml-32'>
            <div>
              <label className='text-xl'> Occupancy :</label>
              <input
                type='number'
                className='border-2 border-black rounded'
                value={Occupancy}
                onChange={(e) => setOccupancy(e.target.value)}
              ></input>
            </div>
            <div className='ml-32'>
              <label className='text-xl'>Days Limit :</label>
              <input
                type='number'
                className='border-2 border-black rounded'
                value={DaysLimit}
                onChange={(e) => setDaysLimit(e.target.value)}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className='ml-32'>
           <label className='text-xl'>Add Image</label>
           <input
           className='border-2 border-black rounded' type='file'
           ></input>
          </div>
          <div>
            <button
              onClick={send}
              className='border-2 border-black rounded h-10 w-28 bg-black text-white'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AODashboard;

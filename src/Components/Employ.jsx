import React from "react";

function Employ() {
  return (
    <>
      <div
        className=" grid h-screen bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        }}
      >
       <div className=' text-center text-black bg-white h-4/5 w-4/5 opacity-50 ml-32'>
            <br></br>
            <h1 className='text-3xl'>Hall Booking Form</h1>
            <br></br><br></br>
            <div className='flex ml-40'>
                <label>From</label>
                <div><label className='text-xl'>Date :</label><input type='date' className='border-2 border-black rounded' value={FromDate} onChange ={(e)=> setFromDate(e.target.value)}></input></div>
                <div><label className='text-xl'>Time :</label><input type='time' className='border-2 border-black rounded' value={FromTime} onChange ={(e)=> setFromTime(e.target.value)}></input></div>
                <label>To</label>
                <div className='ml-28'><label className='text-xl'>Date :</label><input className='border-2 border-black rounded' value={ToDate} onChange={(e)=>setToDate(e.target.value)}></input></div>
                <div className='ml-28'><label className='text-xl'>Time :</label><input className='border-2 border-black rounded' value={ToTime} onChange={(e)=>setToTime(e.target.value)}></input></div>
            </div><br></br>
            <div className='flex ml-32'>
                <div><label className='text-xl'> Participants Count :</label><input type='number' className='border-2 border-black rounded' value={Participants} onChange={(e)=>setParticipants(e.target.value)}></input></div>
                <div className='ml-32'><label className='text-xl'>Hall Name :</label><select className='border-2 border-black rounded' value={HallName} onChange={(e)=>setHallName(e.target.value)}>
                  <option>Nehru</option>
                  <option>Shashtri</option>
                  <option>Tagore</option>
                  <option>Gandhi</option>
                  </select></div>
            </div>
            <br></br>
            <div className='flex ml-32'>
                <div><label className='text-xl'> Purpose :</label><input type='text' required className='border-2 border-black rounded' value={Purpose} onChange={(e)=>setPurpose(e.target.value)}></input></div>
                <div className='ml-32'><label className='text-xl'>Hall Name :</label><input className='border-2 border-black rounded' value={HallName} onChange={(e)=>setHallName(e.target.value)}>
                  </input></div>
            </div>
            <br></br><br></br>
            <div><button onClick={send} className='border-2 border-black rounded h-10 w-28 bg-black text-white'>Submit</button></div>

        </div>
      </div>
    </>
  );
}

export default Employ;

import React, { useState , useEffect }  from "react";
import customRequest from "./customrequest";

function Employ() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await customRequest.get(
        "http://10.21.85.94:8000/api/options/"
      );

      console.log(response.data);
      const data = response.data;
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [FromDate, setFromDate] = useState("");
  const [FromTime, setFromTime] = useState("");
  const [ToDate, setToDate] = useState("");
  const [ToTime, setToTime] = useState("");
  const [Participants, setParticipants] = useState("");
  const [HallName, setHallName] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [Remark, setRemark] = useState("");

  async function send() {
    console.log();
    try {
      const response = await customRequest.post(
        "http://10.21.85.94:8000/api/booking/",
        {
          from_date: FromDate,
          from_time: FromTime,
          to_date: ToDate,
          to_time: ToTime,
          participants_count: Participants,
          hall: HallName,
          purpose: Purpose,
          employee_remark: Remark,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className=" grid h-screen bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        }}
      >
        <div className=" text-center text-black bg-white h-4/5 w-4/5 opacity-50 ml-32 mt-16">
          <br></br>
          <br></br>
          <h1 className="text-3xl">Hall Booking Form</h1>
          <br></br>
          <br></br>
          <div className="flex ml-24">
            <div>
              <label className="text-xl">From Date :</label>
              <input
                type="date"
                className="border-2 border-black rounded"
                value={FromDate}
                onChange={(e) => setFromDate(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="text-xl">From Time :</label>
              <input
                type="time"
                className="border-2 border-black rounded"
                value={FromTime}
                onChange={(e) => setFromTime(e.target.value)}
              ></input>
            </div>

            <div>
              <label className="text-xl ml-24">To Date :</label>
              <input
                type="date"
                className="border-2 border-black rounded"
                value={ToDate}
                onChange={(e) => setToDate(e.target.value)}
              ></input>
            </div>
            <div>
              <label className="text-xl">To Time :</label>
              <input
                type="time"
                className="border-2 border-black rounded"
                value={ToTime}
                onChange={(e) => setToTime(e.target.value)}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex ml-24">
            <div>
              <label className="text-xl"> Participants Count :</label>
              <input
                type="number"
                className="border-2 border-black rounded"
                value={Participants}
                onChange={(e) => setParticipants(e.target.value)}
              ></input>
            </div>

            <div className="ml-28">
              <label className="text-xl">Hall Name :</label>
              <select value={HallName} onChange={(e) => setHallName(e.target.value)}>
                {data.map((option ) => (
                  <option  key={option.id} value={option.id} >{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex ml-24">
            <div>
              <label className="text-xl">Booking Purpose :</label>
              <input
                type="text"
                required
                className="border-2 border-black rounded"
                value={Purpose}
                onChange={(e) => setPurpose(e.target.value)}
              ></input>
            </div>
            <div className="ml-32">
              <label className="text-xl">Remarks :</label>
              <input
                className="border-2 border-black rounded w-64"
                value={Remark}
                onChange={(e) => setRemark(e.target.value)}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <button
              onClick={send}
              className="border-2 border-black rounded h-10 w-28 bg-black text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employ;

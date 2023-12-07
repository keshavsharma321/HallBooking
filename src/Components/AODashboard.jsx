import React, { useState } from "react";
import customRequest from "./customrequest";
import { Link } from "react-router-dom";

function AODashboard() {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Occupancy, setOccupancy] = useState("");
  const [DaysLimit, setDaysLimit] = useState("");
  const [Images, setImages] = useState([]);

  function send() {
    console.log(Name, Description, Occupancy, DaysLimit, Images);

    try {
      const formData = new FormData();

      formData.append("name", Name);
      formData.append("description", Description);
      formData.append("eligible_occupancy", Occupancy);
      formData.append("booking_days_limit", DaysLimit);

      for (let i = 0; i < Images.length; i++) {
        formData.append("uploaded_images", Images[i]);
      }

      const response = customRequest.post(
        "/api/add/",
        formData
      );

      console.log(response);

      setName("");
      setDescription("");
      setOccupancy("");
      setDaysLimit("");
      setImages([]);
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
        <div className="text-center text-black bg-white h-4/5 w-4/5 opacity-50 ml-32">
          <br></br>
          <h1 className="text-3xl mt-8">Add Conference Hall</h1>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex ml-40">
            <div>
              <label className="text-xl">Name :</label>
              <input
                type="text"
                className="border-2 border-black rounded"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="ml-32">
              <label className="text-xl">Description :</label>
              <input
                type="text"
                className="border-2 border-black rounded"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex ml-32">
            <div>
              <label className="text-xl"> Occupancy :</label>
              <input
                type="number"
                min={0}
                className="border-2 border-black rounded"
                value={Occupancy}
                onChange={(e) => setOccupancy(e.target.value)}
              ></input>
            </div>
            <div className="ml-32">
              <label className="text-xl">Days Limit :</label>
              <input
                type="number"
                min={0}
                className="border-2 border-black rounded"
                value={DaysLimit}
                onChange={(e) => setDaysLimit(e.target.value)}
              ></input>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="ml-30">
            <label className="text-xl">Add Images :</label>
            <input
              className="border-2 border-black rounded"
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
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
            <div className="mt-2">You want to update Hall : <Link to="/AOHupdate">Update</Link></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AODashboard;

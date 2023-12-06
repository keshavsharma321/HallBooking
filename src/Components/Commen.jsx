import React, { useEffect, useState } from "react";
import customRequest from "./customrequest";
import { Link, useNavigate } from "react-router-dom";

function Commen() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await customRequest.get("/api/home/");
      console.log(response.data);
      const data = response.data;
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    try {
      const log = await customRequest.post("/account/api/logout/");
      console.log(log.data);
      

        if (log.data.message === "Success") {
        console.log(log.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="grid h-screen bg-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566596343373-30675086c273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbGwlMjBib29raW5nfGVufDB8fDB8fHww')",
        }}
      >
        <div className="h-24 bg-white opacity-40">
          <br></br>
          {data.map((user, index) => {
            return (
              <label className="text-black ml-40 text-3xl cursor-pointer" key={index}>
                <Link to={user.route}>{user.field}</Link>
              </label>
            );
          })}
          <button className="text-white ml-36 bg-black h-8 rounded-md w-16" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Commen;

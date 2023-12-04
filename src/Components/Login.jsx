import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import customRequest from "./customrequest";

// const navigate = useNavigate();
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function send() {
    try {
      const response = await axios.post(
        "http://10.21.80.52:8000/account/api/login_token/",
        {
          username: username,
          password: password,
        }
      );
      const access = response.data.access;
      console.log(response.data.access)
      localStorage.setItem("access", access);
      const refresh = response.data.refresh;
      console.log(response.data.refresh)
      localStorage.setItem("refresh", refresh);
      navigate("/Commen");
      const keshav = await customRequest.get('http://10.21.80.52:8000/api/home/', {
      //  headers : {access}
      });

      console.log(keshav);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-blue-100">
      <div className="">
        <br></br>
        <br></br>
        <h1 className="text-4xl text-blue-500 text-center">The Organizers</h1>
        <br></br>
        <br></br>
        <div className="flex bg-white  border-4 border-blue-300 w-9/12 ml-40	rounded-lg">
          <div className="bg-white">
            <img
              className="h-96 w-96 ml-8"
              src="https://mir-s3-cdn-cf.behance.net/projects/404/fca3a7154308993.Y3JvcCwxOTk0LDE1NjAsMTcyLDA.jpg"
              alt="new"
            />
          </div>
        
      <div className="text-3xl text-blue-700  bg-white text-center ml-12 ">
        <br></br>
        Login<br></br>
        <br></br>
        Username :
        <input
          className="border-2 border-blue-300 rounded-lg w-64"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <br></br>
        Password :
        <input
          value={password}
          className="border-2 border-blue-300 rounded-lg w-64 "
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <button
          className="text-white bg-blue-600 mt-12 rounded-lg w-24 h-10 ml-2"
          onClick={send}
        >
          Login
        </button>
      </div></div>
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br>
    </div>
  );
}

export default Login;

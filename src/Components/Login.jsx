import React, { useState } from "react";

import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const customRequest = axios.create({
    baseURL: "http://10.21.80.69:8000",
    headers: { "Request-Origin": "website" },
  });

  function send() {
    console.log(username, password);
    if (username == null || password == null) {
      alert("Please enter valid details");
    } else {
      customRequest
        .post("/account/api/login_token/", {
          username: username,
          password: password,
        })
        .then((response) => {
          const access = response.data.access;
          const refresh = response.data.refresh;
          localStorage.setItem("accessToken", access);
          localStorage.setItem("refreshToken", refresh);
        });
    }
  }

  customRequest.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { response, config } = error;
      if (response.status === 401) {
        let refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          try {
            const data = await customRequest.post("/token/refresh/", {
              refresh: refreshToken,
            });
            let accessToken = data.data.accessToken;
            if (accessToken) {
              localStorage.setItem("token", accessToken);
              config.headers["Authorization"] = accessToken;
              return customRequest(config);
            }
          } catch (e) {
            console.log(e);
          }
        }
      }

      return error;
    }
  );

  //   axios.post('http://10.21.80.69:8000/account/api/login_token/', {
  //     username: username ,
  //     password: password
  //   })
  //   .then((response) => {
  //     console.log(response);
  //     console.log(response.data);
  //     console.log(response.data.accessToken);
  //     localStorage.setItem('Access Token' , response.data)
  //     if( response.data === 'AO'
  //     ){ <Redirect to="/AODashboard"/> }else if(response.data==='HOD')
  //     { <Redirect to="/HODDashboard"/> }else{<Redirect to="/Employ"/>}

  //     var Token = localStorage.getItem('Access Token');
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }}
  return (
    <div className="">
      <br></br>
      <br></br>
      <h1 className="text-4xl text-blue-500 text-center">The Organizers</h1>
      <br></br>
      <br></br>
      <div className="flex  border-2 border-blue-300 w-9/12 ml-40	rounded-lg">
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
          Username :{" "}
          <input
            className="border-2 border-blue-300 rounded-lg w-64"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <br></br>
          Password :{" "}
          <input
            value={password}
            className="border-2 border-blue-300 rounded-lg w-64 "
            onChange={(e) => setPassword(e.target.value)}
          ></input><br>
          </br>
          <button
            className="text-white bg-blue-600 mt-12 rounded-lg w-24 h-10 ml-2"
            onClick={send}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

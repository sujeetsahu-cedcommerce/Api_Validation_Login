import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    let url = new URL("https://fbapi.sellernext.com/user/login");
    let item = { username: "admin", password: "password123" };
    for (let i in item) {
      url.searchParams.append(i, item[i]);
    }

    let result = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA",
      },
      body: JSON.stringify(item),
    })
      .then((result) => result.json())
      // .then((item) => localStorage.setItem("myData", item.data.token))
      .then((item) => item)
      .then((item) => {
        localStorage.setItem("myData", item.data.token);
        sessionStorage.setItem("myData", item.data.token);
        console.log(sessionStorage.getItem("myData"));
      });
    console.log(item);
    console.log();
  };
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="container">
          <label>User ID:</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="container">
          <label>Password:</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export default App;

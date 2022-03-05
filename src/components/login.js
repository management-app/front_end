import React, { useState } from "react";
import GoogleButton from "./googlebutton";

const Login = () => {
  const [state, setState] = useState({
      email: "",
      password: ""
  })

  const handleChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  return (
    <>
      <div className="top"><h2>Log In</h2></div>
      <div className="login_container">
          <form className="login_form" onSubmit={handleSubmit}>
              <input type="text" name="email" onChange={handleChange} value={state.email || ""} placeholder="Email"></input>
              <input type="text" name="password" onChange={handleChange} value={state.password || ""} placeholder="Password"></input>
            <button>Login</button>
          </form>
        <GoogleButton />
      </div>
    </>
  );
};

export default Login;
